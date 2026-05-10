import { TrendingUp, Coins, LineChart, BarChart3, Eye, Target } from "lucide-react";

const notifications = [
  { icon: Coins, title: "Dividendo recibido", side: "left", top: "12%" },
  { icon: TrendingUp, title: "Aporte mensual registrado", side: "right", top: "22%" },
  { icon: LineChart, title: "Portafolio actualizado", side: "left", top: "62%" },
  { icon: BarChart3, title: "ETF comprado", side: "right", top: "70%" },
  { icon: Eye, title: "Acción agregada a seguimiento", side: "left", top: "88%" },
  { icon: Target, title: "Plan de inversión creado", side: "right", top: "92%" },
];

export function FloatingNotifications() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {notifications.map(({ icon: Icon, title, side, top }, i) => (
        <div
          key={title}
          className="absolute animate-fade-in"
          style={{
            top,
            [side]: "4%",
            animationDelay: `${i * 350}ms`,
            animationDuration: "900ms",
            animationFillMode: "both",
          } as React.CSSProperties}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap text-xs font-medium text-foreground">
              {title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
