import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const KEY = "ramo_cookie_consent";

export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (v: "all" | "essential") => {
    localStorage.setItem(KEY, v);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md">
      <div className="glass-strong rounded-2xl p-5 shadow-[var(--shadow-elegant)] border border-white/15">
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20">
            <Cookie className="h-5 w-5 text-primary-glow" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold">{t("cookies.title")}</div>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("cookies.body")}{" "}
              <Link to="/cookiebeleid" className="underline hover:text-foreground">{t("legal.cookies")}</Link>
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            onClick={() => decide("all")}
          >
            {t("cookies.accept")}
          </Button>
          <Button size="sm" variant="outline" className="rounded-full glass border-white/15" onClick={() => decide("essential")}>
            {t("cookies.reject")}
          </Button>
          <Link to="/cookiebeleid" className="ml-auto self-center text-xs text-muted-foreground hover:text-foreground">
            {t("cookies.settings")}
          </Link>
        </div>
      </div>
    </div>
  );
}
