import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
    includeSource: ["src/**/*.{js,ts, vue}"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
