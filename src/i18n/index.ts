import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nl from "./locales/nl.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import ar from "./locales/ar.json";

const STORAGE_KEY = "ramo_lang";

function initialLng() {
  if (typeof window === "undefined") return "nl";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && ["nl", "en", "fr", "de", "ar"].includes(saved)) return saved;
  return "nl";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      nl: { translation: nl },
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      ar: { translation: ar },
    },
    lng: initialLng(),
    fallbackLng: "nl",
    supportedLngs: ["nl", "en", "fr", "de", "ar"],
    interpolation: { escapeValue: false },
  });
}

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try { window.localStorage.setItem(STORAGE_KEY, lng); } catch {}
  });
}

export const LANGUAGES = [
  { code: "nl", label: "Nederlands", flag: "🇧🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
] as const;

export default i18n;
