import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".vue", ".ts"], // 确保.vue在前,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
