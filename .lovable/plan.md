## Plan

### 1. Input de email más notable (Hero + Footer)

`src/components/landing/EmailCaptureForm.tsx`:
- Envolver el `<input>` en un wrapper con borde gradiente sutil (verde acento → border) usando un pseudo-elemento o `padding: 1px` + `background: linear-gradient(...)`.
- Subir contraste del input: fondo `#0F0F0F` (más visible sobre `#000`) en lugar de `var(--card)`. Borde interior `#262626`. En `:focus-within`, el gradiente se intensifica (verde más saturado) y aparece un glow exterior `box-shadow: 0 0 0 4px rgba(0,210,106,0.12)`.
- Placeholder un poco más claro para legibilidad.
- Mantener layout actual (input + botón pill al lado en sm+, apilados en mobile).

Tokens nuevos en `src/styles.css` si hace falta: `--input-surface`, `--gradient-input`.

### 2. Integración Brevo (reemplaza Loops)

Lovable tiene conector oficial de Brevo (gateway). Flujo:

1. Conectar Brevo vía `standard_connectors--connect` (el usuario elige cuenta y autoriza). Esto inyecta `BREVO_API_KEY` y `LOVABLE_API_KEY` como env vars del runtime servidor.
2. Crear server route público `src/routes/api/public/subscribe.ts` (TanStack Start, POST):
   - Valida `email` con zod.
   - Rate limit básico in-memory (defensivo).
   - Llama al gateway Brevo:
     - `POST https://connector-gateway.lovable.dev/brevo/contacts` para crear/actualizar contacto (con `listIds` configurable y `updateEnabled: true`).
     - `POST https://connector-gateway.lovable.dev/brevo/smtp/email` para enviar el correo con la guía (asunto + HTML con botón/enlace de descarga, o el contenido de la guía embebido). Sender: dominio que el usuario verifique en Brevo (placeholder en código + comentario claro).
   - Devuelve `{ ok: true }` o error con status apropiado.
3. `EmailCaptureForm.tsx`: cambiar `fetch` para hacer `POST /api/public/subscribe` con JSON `{ email }`. En éxito, redirigir con `useNavigate()` a `/gracias`.

**Decisiones que requieren input del usuario** (preguntaré antes de implementar):
- ID(s) de lista en Brevo donde guardar el contacto (o crear uno nuevo).
- Email remitente verificado en Brevo (`from`) y nombre del remitente.
- Contenido del correo: ¿enlace de descarga (PDF en URL pública) o HTML con la guía? Si es PDF, necesito la URL.

### 3. Página de gracias

Nueva ruta `src/routes/gracias.tsx`:
- Mismo tema oscuro/tipografía/container que la landing.
- Contenido sobrio: ✓ verde, H1 "Listo, revisá tu correo", párrafo "Te enviamos la guía a tu correo. Si no la ves en unos minutos, revisá la carpeta de spam.", botón secundario "Volver al inicio" → `/`.
- SEO: `noindex` (no queremos que esta página rankee), title "Gracias — ABC Financiero".

### Archivos afectados

- `src/components/landing/EmailCaptureForm.tsx` — nuevo estilo input + redirect a /gracias + nuevo endpoint.
- `src/styles.css` — tokens del input si aplica.
- `src/routes/api/public/subscribe.ts` — nuevo, server route Brevo.
- `src/routes/gracias.tsx` — nueva página.

### Fuera de alcance
- Diseño/maquetación del PDF de la guía.
- Verificación del dominio remitente en Brevo (lo hace el usuario en su cuenta Brevo).

---

Antes de implementar necesito confirmar 3 datos (lista Brevo, remitente verificado, contenido del correo). Te los pregunto en cuanto apruebes este plan.