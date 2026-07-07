// Lightweight client-side click tracking.
// - Pushes events to window.dataLayer (compatible con GA4 / GTM si se conecta luego).
// - Guarda contadores acumulados en localStorage para inspección rápida.
// Uso: <button onClick={() => track("cta_click", { id: "hero_primary" })}>
type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __abcClicks?: Record<string, number>;
  }
}

export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload, ts: Date.now() });

    const key = "abc_click_counts";
    const raw = window.localStorage.getItem(key);
    const counts: Record<string, number> = raw ? JSON.parse(raw) : {};
    const id = String(payload.id ?? event);
    counts[id] = (counts[id] ?? 0) + 1;
    window.localStorage.setItem(key, JSON.stringify(counts));
    window.__abcClicks = counts;

    // También lo mostramos en consola para depuración rápida.
    // eslint-disable-next-line no-console
    console.debug("[track]", event, payload);
  } catch {
    /* no-op */
  }
}

// Helper para usar en <a onClick={trackClick("id")}>
export const trackClick = (id: string, extra: TrackPayload = {}) => () =>
  track("cta_click", { id, ...extra });
