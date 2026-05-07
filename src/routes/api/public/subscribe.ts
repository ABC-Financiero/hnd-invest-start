import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/brevo";

const bodySchema = z.object({
  email: z.string().trim().email().max(255),
});

// TODO: ajustá estos valores con tu cuenta Brevo
const SENDER_EMAIL = "marketing@abcfinanciero.com";
const SENDER_NAME = "ABC Financiero";
const LIST_IDS: number[] = [12];
const GUIDE_URL = "https://drive.google.com/uc?export=download&id=1ZyzC09gZyrz2kdw9FU-E8b5AlFNJwCyp";

// rate limit simple en memoria (best effort)
const hits = new Map<string, number[]>();
function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(key, arr);
  return arr.length <= limit;
}

async function brevo(path: string, body: unknown) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");
  if (!BREVO_API_KEY) throw new Error("BREVO_API_KEY missing");
  const res = await fetch(`${GATEWAY_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": BREVO_API_KEY,
    },
    body: JSON.stringify(body),
  });
  return res;
}

function emailHtml() {
  return `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;background:#f6f6f6;margin:0;padding:24px;color:#0a0a0a;">
  <table role="presentation" style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;">
    <tr><td>
      <h1 style="font-size:22px;margin:0 0 16px;">Tu guía de inversión</h1>
      <p style="font-size:15px;line-height:1.6;margin:0 0 20px;color:#333;">
        Gracias por sumarte. Acá tenés la guía para abrir tu cuenta de inversión vía Hapi desde Honduras.
      </p>
      <p style="margin:24px 0;">
        <a href="${GUIDE_URL}" style="display:inline-block;background:#00D26A;color:#000;font-weight:700;padding:14px 22px;border-radius:999px;text-decoration:none;">Descargar la guía</a>
      </p>
      <p style="font-size:13px;color:#666;line-height:1.6;margin:24px 0 0;">
        Si el botón no funciona, copiá este enlace: <br/>
        <span style="word-break:break-all;">${GUIDE_URL}</span>
      </p>
      <hr style="border:none;border-top:1px solid #eee;margin:28px 0;" />
      <p style="font-size:12px;color:#999;margin:0;">Contenido educativo, no asesoría financiera. Toda inversión conlleva riesgo.</p>
    </td></tr>
  </table>
</body></html>`;
}

export const Route = createFileRoute("/api/public/subscribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }
        const parsed = bodySchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ error: "Correo no válido" }, { status: 400 });
        }
        const { email } = parsed.data;

        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for") ??
          "unknown";
        if (!rateLimit(`ip:${ip}`) || !rateLimit(`em:${email}`)) {
          return Response.json({ error: "Demasiadas solicitudes" }, { status: 429 });
        }

        try {
          // 1) Crear/actualizar contacto
          const contactRes = await brevo("/contacts", {
            email,
            updateEnabled: true,
            listIds: LIST_IDS.length > 0 ? LIST_IDS : undefined,
          });
          if (!contactRes.ok && contactRes.status !== 204) {
            const txt = await contactRes.text();
            // 400 con "Contact already exist" no debería ocurrir con updateEnabled, pero ignoramos similares
            if (contactRes.status >= 500) {
              console.error("Brevo contacts error", contactRes.status, txt);
              return Response.json({ error: "Error registrando contacto" }, { status: 502 });
            }
          }

          // 2) Enviar correo transaccional con la guía
          const emailRes = await brevo("/smtp/email", {
            sender: { name: SENDER_NAME, email: SENDER_EMAIL },
            to: [{ email }],
            subject: "Tu guía de inversión desde Honduras",
            htmlContent: emailHtml(),
          });
          if (!emailRes.ok) {
            const txt = await emailRes.text();
            console.error("Brevo email error", emailRes.status, txt);
            return Response.json({ error: "No se pudo enviar el correo" }, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("subscribe error", err);
          return Response.json({ error: "Error interno" }, { status: 500 });
        }
      },
    },
  },
});
