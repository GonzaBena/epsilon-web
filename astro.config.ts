import { defineConfig } from 'astro/config';

// Publicado en GitHub Pages: https://gonzabena.github.io/epsilon-web/
// SITE y BASE se pueden pisar (por ejemplo, con un dominio propio SITE=https://epsilon.ejemplo.com BASE=/).
export default defineConfig({
  site: process.env.SITE ?? 'https://gonzabena.github.io',
  base: process.env.BASE ?? '/epsilon-web',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Los bloques de código siguen el diseño (monocromo), sin colores de resaltado.
  markdown: { syntaxHighlight: false },
});
