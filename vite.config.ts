import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/suji_production_ui",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
