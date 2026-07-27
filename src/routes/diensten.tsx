import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Truck, PackageCheck, Warehouse, ShoppingBasket,
  ShieldCheck, Route as RouteIcon, Thermometer, Clock,
  ArrowRight, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/company";

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
    { key: "freight", Icon: Truck },
    { key: "lastmile", Icon: PackageCheck },
    { key: "sorting", Icon: Warehouse },
    { key: "retail", Icon: ShoppingBasket },
  ] as const;

  const features = [
    { key: "sla", Icon: ShieldCheck },
    { key: "route", Icon: RouteIcon },
    { key: "temp", Icon: Thermometer },
    { key: "ops", Icon: Clock },
  ] as const;

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">{t("services.eyebrow")}</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">{t("services.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("services.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ key, Icon }) => {
            const points = t(`services.points.${key}`, { returnObjects: true }) as string[];
            return (
              <div key={key} className="glass glow-hover rounded-3xl p-8">
                <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t(`services.${key}.title`)}</h3>
                <p className="mt-2 text-muted-foreground">{t(`services.${key}.desc`)}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {Array.isArray(points) && points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[oklch(0.13_0.03_260)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{t("diensten.featuresTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("diensten.featuresSubtitle")}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ key, Icon }) => (
              <div key={key} className="glass rounded-2xl p-6">
                <Icon className="h-6 w-6 text-primary-glow" />
                <div className="mt-3 font-bold">{t(`diensten.features.${key}.t`)}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t(`diensten.features.${key}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-black">{t("diensten.ctaTitle")}</h2>
          <p className="mt-3 text-muted-foreground">{t("diensten.ctaSubtitle")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${COMPANY.phoneRaw}`}>
              <Button className="h-12 rounded-full px-8 gap-2 shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
                <Phone className="h-4 w-4" /> {t("nav.callNow")}
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="h-12 rounded-full px-8 glass border-white/15">
                {t("hero.ctaPrimary")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
