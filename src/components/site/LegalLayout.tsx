import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export function LegalLayout({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-glow">{t("legal.eyebrow")}</div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">{title}</h1>
          {updated && <p className="mt-3 text-sm text-muted-foreground">{t("legal.updated")}: {updated}</p>}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
        <article className="glass-strong rounded-3xl p-6 sm:p-10 prose prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-8 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary-glow">
          {children}
        </article>
      </section>
    </>
  );
}
