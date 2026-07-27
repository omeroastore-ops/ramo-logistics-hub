import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Truck, PackageCheck, Warehouse, ShoppingBasket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/site/TrustBar";
import { QuoteWidget } from "@/components/site/QuoteWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAMO TRANSPORT BV — Belgische Freight & Last-Mile Logistiek" },
      { name: "description", content: "Nationaal en internationaal goederentransport, last-mile bezorging en distributie vanuit Sint-Pieters-Leeuw. Vraag vandaag uw offerte aan." },
      { property: "og:title", content: "RAMO TRANSPORT BV — Belgische Freight & Last-Mile Logistiek" },
      { property: "og:description", content: "Nationaal en internationaal goederentransport, last-mile bezorging en distributie." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation();
  const pillars = ["01", "02", "03", "04"] as const;
  const services = [
    { key: "freight", Icon: Truck },
    { key: "lastmile", Icon: PackageCheck },
    { key: "sorting", Icon: Warehouse },
    { key: "retail", Icon: ShoppingBasket },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="animate-ambient absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(closest-side, oklch(0.65 0.17 240 / 0.35), transparent)" }} />
          <div className="animate-ambient absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(closest-side, oklch(0.78 0.14 230 / 0.28), transparent)", animationDelay: "-6s" }} />
        </div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rg" x1="0" x2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="animate-route" d="M -50 480 C 200 380, 380 500, 600 380 S 1050 260, 1250 320" stroke="url(#rg)" strokeWidth="1.5" fill="none" />
          <path className="animate-route" d="M -50 200 C 250 260, 500 140, 720 220 S 1050 340, 1250 260" stroke="url(#rg)" strokeWidth="1" fill="none" style={{ animationDuration: "45s" }} />
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-32 sm:pt-24 sm:pb-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
                {t("hero.eyebrow")}
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                {t("hero.title").split(" ").slice(0, -3).join(" ")}{" "}
                <span className="text-gradient">{t("hero.title").split(" ").slice(-3).join(" ")}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
                {t("hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button className="h-12 rounded-full px-6 shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
                    {t("hero.ctaPrimary")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/diensten">
                  <Button variant="outline" className="h-12 rounded-full px-6 glass border-white/15">
                    {t("hero.ctaSecondary")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:pl-8">
              <QuoteWidget />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">Pillars</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">{t("pillars.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("pillars.subtitle")}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((k) => (
            <div key={k} className="glass glow-hover rounded-3xl p-6">
              <div className="text-4xl font-black text-gradient">{k}</div>
              <div className="mt-4 font-bold">{t(`pillars.${k}.title`)}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t(`pillars.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-[oklch(0.13_0.03_260)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">Services</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">{t("services.title")}</h2>
              <p className="mt-3 text-muted-foreground">{t("services.subtitle")}</p>
            </div>
            <Link to="/diensten" className="text-sm text-primary-glow hover:underline">
              {t("services.learnMore")} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map(({ key, Icon }) => (
              <div key={key} className="glass glow-hover rounded-3xl p-6 sm:p-8 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-lg">{t(`services.${key}.title`)}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t(`services.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-14 text-center shadow-[var(--shadow-elegant)]" style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 260 / 0.7), oklch(0.22 0.05 250 / 0.7))" }}>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{t("hero.ctaPrimary")}</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t("contact.subtitle")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button className="h-12 rounded-full px-8 shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
                {t("nav.quote")} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
