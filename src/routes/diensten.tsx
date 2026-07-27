import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Truck, PackageCheck, Warehouse, ShoppingBasket, ShieldCheck, Route as RouteIcon, Thermometer, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — RAMO TRANSPORT BV | Nationaal & Europees Freight" },
      { name: "description", content: "Onze diensten: nationaal & internationaal goederentransport, last-mile logistiek, sorteerprocessen, distributie en retail/food transport." },
      { property: "og:title", content: "Diensten — RAMO TRANSPORT BV" },
      { property: "og:description", content: "Volledige freight, last-mile en distributie oplossingen." },
      { property: "og:url", content: "/diensten" },
    ],
    links: [{ rel: "canonical", href: "/diensten" }],
  }),
  component: Services,
});

function Services() {
  const { t } = useTranslation();
  const services = [
    { key: "freight", Icon: Truck, points: ["EU-brede routes", "Full & partial loads", "24/7 tracking"] },
    { key: "lastmile", Icon: PackageCheck, points: ["Same-day opties", "Real-time updates", "B2B & B2C"] },
    { key: "sorting", Icon: Warehouse, points: ["Cross-docking", "Automatische sortering", "Voorraad KPI's"] },
    { key: "retail", Icon: ShoppingBasket, points: ["Droog & gekoeld", "HACCP conform", "Retail-planning"] },
  ] as const;

  const features = [
    { Icon: ShieldCheck, t: "SLA & Verzekering", d: "CMR-conform, volledig verzekerd tot volle waarde." },
    { Icon: RouteIcon, t: "Route-optimalisatie", d: "AI-ondersteunde planning met live verkeersdata." },
    { Icon: Thermometer, t: "Temperatuurgeleide vracht", d: "Gecertificeerde koelketen voor levensmiddelen." },
    { Icon: Clock, t: "24/7 operations", d: "Toegewijd dispatch team dag en nacht bereikbaar." },
  ];

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">Services</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">{t("services.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("services.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ key, Icon, points }) => (
            <div key={key} className="glass glow-hover rounded-3xl p-8">
              <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{t(`services.${key}.title`)}</h3>
              <p className="mt-2 text-muted-foreground">{t(`services.${key}.desc`)}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[oklch(0.13_0.03_260)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Vloot, technologie & SLA</h2>
            <p className="mt-3 text-muted-foreground">Bewezen operationele standaarden volgens Belgische en Europese transportregelgeving.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, t: ft, d }) => (
              <div key={ft} className="glass rounded-2xl p-6">
                <Icon className="h-6 w-6 text-primary-glow" />
                <div className="mt-3 font-bold">{ft}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-black">Klaar om samen te werken?</h2>
          <p className="mt-3 text-muted-foreground">Ontvang een tarief op maat binnen 24 uur.</p>
          <Link to="/contact" className="inline-block mt-6">
            <Button className="h-12 rounded-full px-8" style={{ background: "var(--gradient-primary)" }}>
              {t("nav.quote")} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
