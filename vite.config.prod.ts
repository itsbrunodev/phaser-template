import react from "@vitejs/plugin-react-swc";

import path from "path";
import { AliasOptions, defineConfig } from "vite";

const root = path.resolve(__dirname);

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
  plugins: [react()],
  // logLevel: "warning",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
});
