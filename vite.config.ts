import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// One alias per src folder: `@lib/cn` → src/lib/cn. Keep in sync with tsconfig.app.json `paths`.
const aliasDirs = [
  "components",
  "data",
  "features",
  "hooks",
  "lib",
  "styles",
  "typings",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: Object.fromEntries(
      aliasDirs.map((dir) => [
        `@${dir}`,
        fileURLToPath(new URL(`./src/${dir}`, import.meta.url)),
      ]),
    ),
  },
});
