import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export function ContactForm() {
  const { t } = useTranslation();
  const [gdpr, setGdpr] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdpr) { toast.error(t("contact.errorGdpr")); return; }
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? "Invalid form"); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success(t("contact.successToast"));
    (e.currentTarget as HTMLFormElement).reset();
    setGdpr(false);
  };

  return (
    <form onSubmit={submit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4 shadow-[var(--shadow-elegant)]">
      <h3 className="text-lg font-bold">{t("contact.formTitle")}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">{t("contact.name")}</Label>
          <Input id="name" name="name" required className="bg-white/5 border-white/10" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">{t("contact.company")}</Label>
          <Input id="company" name="company" className="bg-white/5 border-white/10" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input id="email" name="email" type="email" required className="bg-white/5 border-white/10" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">{t("contact.phone")}</Label>
          <Input id="phone" name="phone" type="tel" className="bg-white/5 border-white/10" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">{t("contact.message")}</Label>
        <Textarea id="message" name="message" rows={5} required className="bg-white/5 border-white/10" />
      </div>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <Checkbox checked={gdpr} onCheckedChange={(v) => setGdpr(Boolean(v))} className="mt-0.5" />
        <span>{t("contact.gdpr")}</span>
      </label>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto rounded-full h-11 px-6" style={{ background: "var(--gradient-primary)" }}>
        <Send className="mr-2 h-4 w-4" />
        {t("contact.send")}
      </Button>
    </form>
  );
}
