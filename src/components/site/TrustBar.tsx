import { useTranslation } from "react-i18next";
import { CheckCircle2, Building2, FileBadge, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function TrustBar() {
  const { t } = useTranslation();
  const items: Array<{ isStatus?: boolean; IconWrap: typeof CheckCircle2; label: string; value: string }> = [
    { isStatus: true, IconWrap: CheckCircle2, label: t("trust.status"), value: t("trust.statusValue") },
    { IconWrap: FileBadge, label: t("trust.kbo"), value: COMPANY.btw },
    { IconWrap: Building2, label: t("trust.form"), value: t("trust.formValue") },
    { IconWrap: MapPin, label: t("trust.location"), value: t("trust.locationValue") },
  ];

  return (
    <div className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6 relative z-10">
      <div className="glass-strong rounded-3xl p-3 sm:p-2 shadow-[var(--shadow-elegant)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-0">
          {items.map((it, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 flex items-start gap-3 rounded-2xl sm:rounded-none border-white/5 sm:[&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r min-w-0"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15">
                {it.isStatus ? (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-success" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                ) : (
                  <it.IconWrap className="h-5 w-5 text-primary-glow" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {it.label}
                </div>
                <div className="mt-0.5 text-xs sm:text-sm font-semibold break-words leading-snug">
                  {it.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
