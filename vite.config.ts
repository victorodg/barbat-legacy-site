import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// Na Vercel, o Nitro detecta o ambiente sozinho e gera a saída no formato dela
// (.vercel/output). Fora dela, gera um servidor Node comum em .output/.
export default defineConfig({
  server: { port: 5173 },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // A página é gerada como HTML estático no build: carrega rápido e o Google lê tudo.
      prerender: { enabled: true, crawlLinks: true },
    }),
    nitro(),
    viteReact(),
  ],
});
