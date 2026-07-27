import { useTranslation } from "react-i18next";
import { CheckCircle2, Building2, FileBadge, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function TrustBar() {
  const { t } = useTranslation();
  const items = [
    {
      icon: <span className="relative flex h-2.5 w-2.5"><span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-success" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" /></span>,
      label: t("trust.status"),
      value: "Active · 100%",
      IconWrap: CheckCircle2,
    },
    { icon: null, IconWrap: FileBadge, label: t("trust.kbo"), value: COMPANY.btw },
    { icon: null, IconWrap: Building2, label: t("trust.form"), value: t("trust.formValue") },
    { icon: null, IconWrap: MapPin, label: t("trust.location"), value: t("trust.locationValue") },
  ];
  return (
    <div className="mx-auto -mt-10 max-w-6xl px-4 sm:px-6 relative z-10">
      <div className="glass-strong rounded-3xl p-2 shadow-[var(--shadow-elegant)]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="p-4 sm:p-5 flex items-start gap-3 border-white/5 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15">
                {it.icon ?? <it.IconWrap className="h-5 w-5 text-primary-glow" />}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{it.label}</div>
                <div className="mt-0.5 text-sm font-semibold truncate">{it.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
