import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Menu, Phone, Truck, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/company";

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/diensten", label: t("nav.services") },
    { to: "/over-ons", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
            <Truck className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-sm font-black tracking-tight truncate">RAMO TRANSPORT</div>
            <div className="text-[10px] font-semibold text-primary-glow tracking-widest">BV · BELGIUM</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a href={`tel:${COMPANY.phoneRaw}`} className="hidden sm:inline-flex">
            <Button className="rounded-full shadow-[var(--shadow-glow)] gap-2" style={{ background: "var(--gradient-primary)" }}>
              <Phone className="h-4 w-4" />
              {t("nav.callNow")}
            </Button>
          </a>
          <button
            className="lg:hidden glass rounded-full p-2"
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={`tel:${COMPANY.phoneRaw}`} onClick={() => setOpen(false)}>
                <Button className="w-full rounded-full gap-2" style={{ background: "var(--gradient-primary)" }}>
                  <Phone className="h-4 w-4" /> {t("nav.callNow")}
                </Button>
              </a>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full rounded-full glass border-white/15">
                  {t("nav.contact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
