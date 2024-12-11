import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": `${__dirname}/src/components`,
      // Ajoutez d'autres alias si besoin
    },
  },
});
