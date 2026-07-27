import { useTranslation } from "react-i18next";
import { ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  const { t } = useTranslation();
  return (
    <div className="border-b border-white/10 bg-[oklch(0.12_0.03_260)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-[11px] sm:text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-primary-glow" />
        <span className="tracking-wide uppercase">{t("announcement")}</span>
      </div>
    </div>
  );
}
