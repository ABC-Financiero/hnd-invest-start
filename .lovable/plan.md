## Landing Page — Guía de Inversión Honduras

Single-page mobile-first, premium sobrio, fondo negro con acento verde. Captura de email vía Loops + venta de curso $27.

### Estructura de archivos

- `src/routes/index.tsx` — reemplaza el placeholder, compone todas las secciones
- `src/styles.css` — añadir tokens del design system (negro, verde acento, card, stroke)
- `src/components/landing/Hero.tsx`
- `src/components/landing/Features.tsx`
- `src/components/landing/TrustData.tsx` (gráfico S&P 500 + stats)
- `src/components/landing/Testimonials.tsx`
- `src/components/landing/FAQ.tsx` (usa `components/ui/accordion`)
- `src/components/landing/Pricing.tsx` (card invertida blanca)
- `src/components/landing/Footer.tsx`
- `src/components/landing/EmailCaptureForm.tsx` (POST a Loops, reusable, validación zod)

### Design system (src/styles.css)

Sobrescribir tokens en `:root` para forzar tema oscuro de la landing (la página completa usa modo dark fijo, no toggle):

- `--background: oklch(0 0 0)` (#000)
- `--foreground: oklch(1 0 0)` (#FFF)
- `--muted-foreground: oklch(0.7 0 0)` (#A0A0A0)
- `--card: oklch(0.04 0 0)` (#0A0A0A)
- `--border: oklch(0.18 0 0)` (#1F1F1F)
- `--primary: oklch(0.78 0.18 152)` (≈ #00D26A verde acento)
- Radius card 24px, pricing 32px, button pill (rounded-full)

Tipografía Inter / Inter Display vía Google Fonts en `__root.tsx` head links. Tracking -0.02em en titulares.

### Secciones (resumen)

1. **Hero**: pill, H1 800/56-36px, sub gris, form email inline (input + botón "Acceder a la guía"), microcopy. Sin imagen.
2. **Features**: grid 3-col desktop / stack mobile. Iconos lucide-react finos (line, no fill).
3. **Trust/Data**: gráfico de línea con `recharts` (ya en deps si no, agregar) — datos S&P 500 anuales 1995-2025 hardcoded. 4 stats abajo.
4. **Testimoniales**: 3 cards verticales, comilla verde pequeña.
5. **FAQ**: shadcn Accordion, 8 items, separador inferior.
6. **Pricing**: card blanca invertida centrada, max-w 480px, CTA negro pill.
7. **Footer**: H 48px, CTA outline, nav, redes, disclaimer, copyright.

Container global `max-w-[720px] mx-auto px-6` para todas las secciones excepto donde indique grid más ancho. Padding vertical sección: `py-20 md:py-[120px]`.

### Captura de email (Loops)

`EmailCaptureForm.tsx`:
- Validación zod (email válido, max 255).
- POST `application/x-www-form-urlencoded` a `https://app.loops.so/api/newsletter-form/cmoug9pxo00600ixg71nnoyx7` con campo `email`.
- Estados: idle, loading, success (mostrar "¡Listo, revisa tu correo!"), error (toast).
- Sin logging del email a consola.

### Pricing CTA

Botón "Acceso al sistema" — placeholder `href="#"` por ahora (no se especificó procesador de pago). Lo dejo anclado al form de email o como `<a>` inerte; confirmar en una pregunta abajo si es necesario.

### SEO (head en index.tsx)

- title: "Guía de inversión desde Honduras — Bolsa de valores con Hapi"
- description: ~155 chars sobre invertir en S&P 500 desde Honduras, sin experiencia, desde $10
- og:title, og:description, twitter:card

### Técnico

- Mobile-first desde 380px, breakpoints sm/md/lg de Tailwind.
- Focus states visibles (`focus-visible:ring-2 ring-primary ring-offset-2 ring-offset-background`).
- Contraste verificado: blanco/negro 21:1, gris #A0A0A0/negro ≈ 9:1, verde/negro ≈ 7:1.
- Sin nav fija, sin animaciones decorativas, sin gradientes.
- Recharts: si no está instalado, `bun add recharts` antes de escribir el import.

### Fuera de scope (a confirmar después si aplica)

- Procesador de pago real para el botón de pricing ($27).
- Handles reales de TikTok/Instagram, nombres de testimonios.
