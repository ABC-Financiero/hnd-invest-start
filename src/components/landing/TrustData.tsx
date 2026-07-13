import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// S&P 500 approximate year-end index level (1995–2026)
const data = [
  { year: 1995, value: 615.93 },
  { year: 1996, value: 740.74 },
  { year: 1997, value: 970.43 },
  { year: 1998, value: 1229.23 },
  { year: 1999, value: 1469.25 },
  { year: 2000, value: 1320.28 },
  { year: 2001, value: 1148.08 },
  { year: 2002, value: 879.82 },
  { year: 2003, value: 1111.92 },
  { year: 2004, value: 1211.92 },
  { year: 2005, value: 1248.29 },
  { year: 2006, value: 1418.3 },
  { year: 2007, value: 1468.36 },
  { year: 2008, value: 903.25 },
  { year: 2009, value: 1115.1 },
  { year: 2010, value: 1257.64 },
  { year: 2011, value: 1257.6 },
  { year: 2012, value: 1426.19 },
  { year: 2013, value: 1848.36 },
  { year: 2014, value: 2058.9 },
  { year: 2015, value: 2043.94 },
  { year: 2016, value: 2238.83 },
  { year: 2017, value: 2673.61 },
  { year: 2018, value: 2506.85 },
  { year: 2019, value: 3230.78 },
  { year: 2020, value: 3756.07 },
  { year: 2021, value: 4766.18 },
  { year: 2022, value: 3839.5 },
  { year: 2023, value: 4769.83 },
  { year: 2024, value: 5881.63 },
  { year: 2025, value: 6420.5 },
  { year: 2026, value: 6890.25 },
];

const currency = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const stats = [
  { value: "+10%", label: "rendimiento anual promedio" },
  { value: "8x", label: "más patrimonio a 20 años vs. ahorro tradicional" },
  { value: "+1,000", label: "hondureños aprendiendo" },
  { value: "$10", label: "mínimo para empezar" },
];

export function TrustData() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="mx-auto max-w-[720px] text-center text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[40px]">
          ¿Qué rendimiento puedes obtener en la bolsa de valores?
        </h2>

        <div className="mt-10 rounded-3xl border border-border bg-card p-5 sm:p-7">
          <div className="h-[260px] w-full sm:h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="sp500" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.16 152)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="oklch(0.78 0.16 152)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="year"
                  stroke="oklch(0.6 0 0)"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  interval={4}
                />
                <YAxis
                  stroke="oklch(0.6 0 0)"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  width={60}
                  tickFormatter={(v: number) =>
                    `$${v.toLocaleString("en-US")}`
                  }
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.22 0 0)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                    fontSize: 12,
                    color: "#fff",
                  }}
                  labelStyle={{ color: "oklch(0.7 0 0)" }}
                  formatter={(v: number) => [currency(v), "S&P 500"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="oklch(0.78 0.16 152)"
                  strokeWidth={2}
                  fill="url(#sp500)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            S&P 500 1995–2026 · Drawdown −38% en 2008. Rentabilidad pasada, no garantía futura.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-2xl font-black tracking-[-0.02em] text-primary sm:text-3xl">
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
