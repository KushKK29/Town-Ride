import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Set the development server port
  },
  build: {
    outDir: "dist", // Optional: Specify the output directory
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Set up path aliases for cleaner imports
    },
  },
  base: "/", // Ensure this is '/' for proper routing in production
});
