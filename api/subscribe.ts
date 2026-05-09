// Vercel Serverless Function (Node runtime).
// POST /api/subscribe { email } -> registers contact in Brevo and sends transactional email.
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/brevo";
const SENDER_EMAIL = "marketing@abcfinanciero.com";
const SENDER_NAME = "ABC Financiero";
const LIST_IDS: number[] = [12];
const GUIDE_URL =
  "https://drive.google.com/uc?export=download&id=1ZyzC09gZyrz2kdw9FU-E8b5AlFNJwCyp";

const bodySchema = z.object({
  email: z.string().trim().email().max(255),
});

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
  return fetch(`${GATEWAY_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": BREVO_API_KEY,
    },
    body: JSON.stringify(body),
  });
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

type VercelReq = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};
type VercelRes = {
  status: (code: number) => VercelRes;
  json: (data: unknown) => void;
  setHeader: (k: string, v: string) => void;
  end: (body?: string) => void;
};

export default async function handler(req: VercelReq, res: VercelRes) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let payload: unknown = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      return res.status(400).json({ error: "Invalid JSON" });
    }
  }

  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return res.status(400).json({ error: "Correo no válido" });
  }
  const { email } = parsed.data;

  const fwd = req.headers["x-forwarded-for"];
  const ip = (Array.isArray(fwd) ? fwd[0] : fwd)?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(`ip:${ip}`) || !rateLimit(`em:${email}`)) {
    return res.status(429).json({ error: "Demasiadas solicitudes" });
  }

  try {
    const contactRes = await brevo("/contacts", {
      email,
      updateEnabled: true,
      listIds: LIST_IDS.length > 0 ? LIST_IDS : undefined,
    });
    if (!contactRes.ok && contactRes.status >= 500) {
      const txt = await contactRes.text();
      console.error("Brevo contacts error", contactRes.status, txt);
      return res.status(502).json({ error: "Error registrando contacto" });
    }

    const emailRes = await brevo("/smtp/email", {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email }],
      subject: "Tu guía de inversión desde Honduras",
      htmlContent: emailHtml(),
    });
    if (!emailRes.ok) {
      const txt = await emailRes.text();
      console.error("Brevo email error", emailRes.status, txt);
      return res.status(502).json({ error: "No se pudo enviar el correo" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("subscribe error", err);
    return res.status(500).json({ error: "Error interno" });
  }
}
