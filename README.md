# epsilon-web

Sitio público de [Epsilon](https://github.com/GonzaBena/epsilon-agent): landing, guía de instalación y documentación. Astro + TypeScript, con pnpm.

Es independiente de la web local del agente (la que corre en `127.0.0.1:8765`).

## Desarrollo

```
pnpm install
pnpm dev        # http://localhost:4321/epsilon-web/
pnpm check      # tipos
pnpm build      # genera dist/
```

- Las páginas de documentación son Markdown en `src/content/docs/` (el frontmatter define grupo y orden del menú).
- Los comandos salen de `src/data/commands.ts`; los métodos de instalación, de `src/data/install.ts`.
- Los colores y medidas están en `src/styles/tokens.css`.

## Publicación

Cada push a `main` despliega en GitHub Pages (`.github/workflows/deploy.yml`): <https://gonzabena.github.io/epsilon-web/>.

Con un dominio propio: `SITE=https://dominio.ejemplo BASE=/ pnpm build`.
