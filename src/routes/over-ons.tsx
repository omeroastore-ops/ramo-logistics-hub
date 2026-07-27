import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Target, Eye, Leaf, Handshake, ShieldCheck, Clock } from "lucide-react";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Ons — RAMO TRANSPORT BV | Zaakvoerder Muhanad Younes" },
      { name: "description", content: "Ontdek RAMO TRANSPORT BV: Belgische logistiek onder leiding van zaakvoerder Muhanad Younes, met focus op betrouwbaarheid, duurzaamheid en compliance." },
      { property: "og:title", content: "Over Ons — RAMO TRANSPORT BV" },
      { property: "og:description", content: "Belgische logistiek met focus op betrouwbaarheid en compliance." },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: About,
});

function About() {
  const { t } = useTranslation();
  const values = [
    { key: "reliability", Icon: ShieldCheck },
    { key: "compliance", Icon: Handshake },
    { key: "sustainability", Icon: Leaf },
    { key: "partnership", Icon: Clock },
  ] as const;
  const stats = [
    { k: "years", v: "10+" },
    { k: "routes", v: "120+" },
    { k: "delivery", v: "99.2%" },
    { k: "support", v: "24/7" },
  ] as const;

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">About</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">{t("about.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("about.lead")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <Target className="h-7 w-7 text-primary-glow" />
            <h2 className="mt-4 text-2xl font-bold">{t("about.missionTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("about.mission")}</p>
          </div>
          <div className="glass rounded-3xl p-8">
            <Eye className="h-7 w-7 text-primary-glow" />
            <h2 className="mt-4 text-2xl font-bold">{t("about.visionTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("about.vision")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[oklch(0.13_0.03_260)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-black">{t("about.valuesTitle")}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, Icon }) => (
              <div key={key} className="glass glow-hover rounded-2xl p-6">
                <Icon className="h-6 w-6 text-primary-glow" />
                <div className="mt-3 font-bold">{t(`about.values.${key}.t`)}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t(`about.values.${key}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="glass-strong rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-gradient">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{t(`about.stats.${s.k}`)}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-strong rounded-3xl p-8 sm:p-12">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">Leadership</div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black">Zaakvoerder — {COMPANY.director}</h3>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Onder leiding van {COMPANY.director} combineert {COMPANY.legalName} operationele discipline met een sterk engagement voor Belgische regelgeving, veiligheid en duurzaamheid. Elk transport wordt uitgevoerd volgens de hoogste standaarden van professionaliteit en transparantie.
          </p>
        </div>
      </section>
    </>
  );
}
