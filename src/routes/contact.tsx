import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RAMO TRANSPORT BV | Sint-Pieters-Leeuw" },
      { name: "description", content: "Contacteer RAMO TRANSPORT BV: +32 465 39 57 77, muhanadyounes@hotmail.com, Bergensesteenweg 423/13, 1600 Sint-Pieters-Leeuw." },
      { property: "og:title", content: "Contact — RAMO TRANSPORT BV" },
      { property: "og:description", content: "Neem contact op voor algemene vragen en operationele ondersteuning." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation();

  const cards = [
    { Icon: Phone, label: t("contact.phone"), value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
    { Icon: Mail, label: t("contact.email"), value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { Icon: MapPin, label: t("contact.address"), value: `${COMPANY.address.street}, ${COMPANY.address.postal} ${COMPANY.address.city}` },
    { Icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  const bbox = `${COMPANY.geo.lng - 0.02},${COMPANY.geo.lat - 0.01},${COMPANY.geo.lng + 0.02},${COMPANY.geo.lat + 0.01}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${COMPANY.geo.lat},${COMPANY.geo.lng}`;

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">{t("contact.eyebrow")}</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">{t("contact.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("contact.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${COMPANY.phoneRaw}`}>
                <Button className="h-12 rounded-full px-6 gap-2 shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
                  <Phone className="h-4 w-4" /> {t("nav.callNow")}
                </Button>
              </a>
              <a href={`mailto:${COMPANY.email}`}>
                <Button variant="outline" className="h-12 rounded-full px-6 glass border-white/15 gap-2">
                  <Mail className="h-4 w-4" /> {t("contact.emailUs")} <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, label, value, href }) => {
            const Comp: any = href ? "a" : "div";
            return (
              <Comp key={label} href={href} className="glass glow-hover rounded-2xl p-5 block">
                <Icon className="h-5 w-5 text-primary-glow" />
                <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="mt-1 text-sm font-semibold break-words">{value}</div>
              </Comp>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-10 shadow-[var(--shadow-elegant)]">
            <h2 className="text-2xl font-black tracking-tight">{t("contact.inquiriesTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("contact.inquiriesBody")}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0 text-primary-glow" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t("contact.phone")}</div>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold hover:text-primary-glow">{COMPANY.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-primary-glow" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t("contact.email")}</div>
                  <a href={`mailto:${COMPANY.email}`} className="font-semibold hover:text-primary-glow break-all">{COMPANY.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 shrink-0 text-primary-glow" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t("contact.hours")}</div>
                  <div className="font-semibold">{t("contact.hoursValue")}</div>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${COMPANY.phoneRaw}`}>
                <Button className="h-11 rounded-full px-5 gap-2" style={{ background: "var(--gradient-primary)" }}>
                  <Phone className="h-4 w-4" /> {t("nav.callNow")}
                </Button>
              </a>
              <Link to="/diensten">
                <Button variant="outline" className="h-11 rounded-full px-5 glass border-white/15">
                  {t("hero.ctaSecondary")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 glass rounded-3xl overflow-hidden min-h-[380px] flex flex-col">
            <iframe
              title="Sint-Pieters-Leeuw"
              src={mapSrc}
              className="flex-1 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 text-xs text-muted-foreground border-t border-white/10">
              {COMPANY.address.street}, {COMPANY.address.postal} {COMPANY.address.city}, {COMPANY.address.country}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
