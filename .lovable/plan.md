## Diagnóstico

El correo no llega desde la web pública porque la versión **publicada** del sitio aún tiene el formulario viejo que envía a Loops (`app.loops.so/api/newsletter-form/cmoug9pxo...`). El log de red lo confirma: tu envío fue a Loops, no a Brevo. En el código actual del proyecto ya no queda ninguna referencia a Loops — el form llama correctamente a `/api/public/subscribe` (Brevo) y ese endpoint responde `{"ok":true}` cuando se prueba directamente.

**Causa**: falta **republicar** el proyecto para que el sitio público use el código nuevo (Brevo + página `/gracias`).

## Plan

### 1. Republicar el sitio
Acción del usuario, no requiere código. Después de publicar:
- el form enviará a `/api/public/subscribe`
- Brevo creará/actualizará el contacto en la lista `12`
- Brevo enviará el correo desde `marketing@abcfinanciero.com` con el link de descarga del PDF
- el navegador irá a `/gracias`

### 2. Gradiente "fluyendo" en grises metálicos alrededor del input

Editar `src/components/landing/EmailCaptureForm.tsx`:

- Reemplazar el borde gradiente estático actual por un **gradiente cónico animado** en grises metálicos que rota lentamente alrededor del input (efecto "flowing border").
- Paleta gris metal: `oklch(0.35 0 0)`, `oklch(0.65 0 0)`, `oklch(0.85 0 0)`, `oklch(0.45 0 0)` — pasando por gris oscuro → plata → gris claro → gris oscuro, con repetición continua.
- Implementación: pseudo-elemento `::before` con `background: conic-gradient(...)` y animación CSS `@keyframes spin` (rotación 360° en ~6s, lineal e infinita). El input queda encima con su fondo oscuro `oklch(0.08 0 0)`.
- En `:focus-within` la animación acelera ligeramente y el glow exterior pasa de verde a un halo gris claro sutil (`oklch(0.7 0 0 / 0.15)`).
- Definir el `@keyframes` y la utility class en `src/styles.css` (no inline, para que la animación sea reutilizable y respete `prefers-reduced-motion` con `animation: none`).

### 3. Verificación post-publicación

Una vez republicado, probar con tu email desde la web pública y confirmar:
- redirección a `/gracias`
- recepción del correo de Brevo
- link de descarga del PDF abre directo

## Archivos afectados

- `src/components/landing/EmailCaptureForm.tsx` — usar el wrapper con gradiente cónico animado
- `src/styles.css` — añadir `@keyframes flowing-border-spin` y clase utilitaria, con soporte `prefers-reduced-motion`

## Fuera de alcance

- Cambios en el endpoint de Brevo (ya funciona, verificado).
- Cambios en la página `/gracias` (ya creada).
