import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/diensten", prerender: { enabled: true } },
      { path: "/over-ons", prerender: { enabled: true } },
      { path: "/contact", prerender: { enabled: true } },
      { path: "/algemene-voorwaarden", prerender: { enabled: true } },
      { path: "/cookiebeleid", prerender: { enabled: true } },
      { path: "/juridische-vermeldingen", prerender: { enabled: true } },
      { path: "/privacybeleid", prerender: { enabled: true } },
    ],
  },
  vite: {
    base: "/ramo-logistics-hub/",
  },
});
