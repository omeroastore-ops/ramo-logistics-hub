import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function QuoteWidget() {
  const { t } = useTranslation();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("500");
  const [cargo, setCargo] = useState("pallets");
  const [service, setService] = useState("standard");
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const w = Math.max(50, Math.min(24000, Number(weight) || 500));
    const cargoMul = { pallets: 1, parcel: 0.9, food: 1.15, bulk: 1.05 }[cargo] ?? 1;
    const serviceMul = { standard: 1, express: 1.4, sameday: 1.9 }[service] ?? 1;
    const base = 85 + w * 0.22;
    const low = Math.round(base * cargoMul * serviceMul * 0.9);
    const high = Math.round(base * cargoMul * serviceMul * 1.25);
    setEstimate({ low, high });
    toast.success(t("quote.success"));
  };

  return (
    <div className="glass-strong rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-elegant)]">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
          <Calculator className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{t("quote.title")}</h3>
          <p className="text-xs text-muted-foreground">{t("quote.subtitle")}</p>
        </div>
      </div>

      <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>{t("quote.origin")}</Label>
          <Input required value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Brussel" className="bg-white/5 border-white/10" />
        </div>
        <div className="space-y-1.5">
          <Label>{t("quote.destination")}</Label>
          <Input required value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Antwerpen" className="bg-white/5 border-white/10" />
        </div>
        <div className="space-y-1.5">
          <Label>{t("quote.weight")}</Label>
          <Input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} className="bg-white/5 border-white/10" />
        </div>
        <div className="space-y-1.5">
          <Label>{t("quote.cargo")}</Label>
          <Select value={cargo} onValueChange={setCargo}>
            <SelectTrigger className="bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
            <SelectContent>
              {(["pallets", "parcel", "food", "bulk"] as const).map((k) => (
                <SelectItem key={k} value={k}>{t(`quote.cargoOptions.${k}`)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label>{t("quote.service")}</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="bg-white/5 border-white/10"><SelectValue /></SelectTrigger>
            <SelectContent>
              {(["standard", "express", "sameday"] as const).map((k) => (
                <SelectItem key={k} value={k}>{t(`quote.serviceOptions.${k}`)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <Button type="submit" className="rounded-full h-11 px-6 sm:flex-1" style={{ background: "var(--gradient-primary)" }}>
            {t("quote.submit")} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          {estimate && (
            <div className="glass rounded-2xl px-4 py-2.5 text-sm">
              <span className="text-muted-foreground">{t("quote.estimate")}: </span>
              <span className="font-bold text-primary-glow">€ {estimate.low} – € {estimate.high}</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
