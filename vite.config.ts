import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "vue-bundle.js",
        name: "VueNavApp",
        dir: "build",
      },
    },
    outDir: "build",
  },
});
