import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: {}, // تم تعديلها لتكون Object بدلاً من boolean
    server: { entry: "server" },
  },
  vite: {
    base: "/ramo-logistics-hub/",
  },
});