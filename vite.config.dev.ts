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
});
