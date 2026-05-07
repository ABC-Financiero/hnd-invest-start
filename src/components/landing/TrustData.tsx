import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// S&P 500 approximate year-end index level (1995–2024)
const data = [
  { year: 1995, value: 615 },
  { year: 1996, value: 740 },
  { year: 1997, value: 970 },
  { year: 1998, value: 1229 },
  { year: 1999, value: 1469 },
  { year: 2000, value: 1320 },
  { year: 2001, value: 1148 },
  { year: 2002, value: 879 },
  { year: 2003, value: 1111 },
  { year: 2004, value: 1211 },
  { year: 2005, value: 1248 },
  { year: 2006, value: 1418 },
  { year: 2007, value: 1468 },
  { year: 2008, value: 903 },
  { year: 2009, value: 1115 },
  { year: 2010, value: 1257 },
  { year: 2011, value: 1257 },
  { year: 2012, value: 1426 },
  { year: 2013, value: 1848 },
  { year: 2014, value: 2058 },
  { year: 2015, value: 2043 },
  { year: 2016, value: 2238 },
  { year: 2017, value: 2673 },
  { year: 2018, value: 2506 },
  { year: 2019, value: 3230 },
  { year: 2020, value: 3756 },
  { year: 2021, value: 4766 },
  { year: 2022, value: 3839 },
  { year: 2023, value: 4769 },
  { year: 2024, value: 5881 },
];

const stats = [
  { value: "+10%", label: "rendimiento anual promedio" },
  { value: "15 min", label: "abrir cuenta de broker" },
  { value: "+23,000", label: "hondureños en comunidad" },
  { value: "USD $50", label: "mínimo para empezar" },
];

export function TrustData() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="mx-auto max-w-[720px] text-center text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] md:text-[48px]">
          ¿Qué rendimiento puedes obtener en la bolsa de valores?
        </h2>

        <div className="mt-12 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div className="h-[280px] w-full sm:h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="sp500" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.78 0.18 152)"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.78 0.18 152)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="year"
                  stroke="oklch(0.5 0 0)"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  interval={4}
                />
                <YAxis
                  stroke="oklch(0.5 0 0)"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  width={40}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.04 0 0)",
                    border: "1px solid oklch(0.22 0 0)",
                    borderRadius: 12,
                    fontSize: 12,
                    color: "#fff",
                  }}
                  labelStyle={{ color: "oklch(0.7 0 0)" }}
                  formatter={(v: number) => [v.toLocaleString(), "S&P 500"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="oklch(0.78 0.18 152)"
                  strokeWidth={2}
                  fill="url(#sp500)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            S&P 500 1995–2024. Drawdown −38% en 2008. Rentabilidad pasada, no
            garantía futura.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl font-black tracking-[-0.02em] text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
