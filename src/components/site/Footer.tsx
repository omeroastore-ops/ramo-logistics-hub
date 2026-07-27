import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Truck, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-[oklch(0.11_0.03_260)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-base font-black">{COMPANY.legalName}</div>
                <div className="text-[10px] font-semibold text-primary-glow tracking-widest">
                  {COMPANY.form.toUpperCase()}
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <div className="glass rounded-2xl p-4 text-xs text-muted-foreground space-y-1">
              <div><span className="text-foreground/80 font-semibold">{t("footer.kboLabel")}:</span> {COMPANY.kbo}</div>
              <div><span className="text-foreground/80 font-semibold">{t("footer.vatLabel")}:</span> {COMPANY.btw}</div>
              <div>{t("footer.jurisdiction")}</div>
            </div>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold hover:text-primary-glow"
            >
              <Phone className="h-4 w-4 text-primary-glow" /> {t("nav.callNow")} — {COMPANY.phone}
            </a>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow mb-3">
              {t("footer.contactCol")}
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-foreground">{COMPANY.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground break-all">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                <span>{COMPANY.address.street}<br />{COMPANY.address.postal} {COMPANY.address.city}<br />{COMPANY.address.country}</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary-glow mb-3">
              {t("footer.legal")}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacybeleid" className="hover:text-foreground">{t("legal.privacy")}</Link></li>
              <li><Link to="/algemene-voorwaarden" className="hover:text-foreground">{t("legal.terms")}</Link></li>
              <li><Link to="/cookiebeleid" className="hover:text-foreground">{t("legal.cookies")}</Link></li>
              <li><Link to="/juridische-vermeldingen" className="hover:text-foreground">{t("legal.notice")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <div>© {year} {COMPANY.legalName}. {t("footer.rights")}</div>
          <div>{t("footer.directorLabel")}: {COMPANY.director}</div>
        </div>
      </div>
    </footer>
  );
}
