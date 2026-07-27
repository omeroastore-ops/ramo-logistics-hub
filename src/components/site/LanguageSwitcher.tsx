import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Globe } from "lucide-react";
import { LANGUAGES } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  useEffect(() => {
    const lng = i18n.resolvedLanguage ?? "nl";
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  }, [i18n.resolvedLanguage]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="glass glow-hover inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground/90 hover:text-foreground">
        <Globe className="h-4 w-4 text-primary-glow" />
        <span className="hidden sm:inline">{current.flag} {current.code.toUpperCase()}</span>
        <span className="sm:hidden">{current.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-strong border-white/10 min-w-[180px]">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className="cursor-pointer gap-2"
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
            <span className="ml-auto text-xs text-muted-foreground">{l.code.toUpperCase()}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
