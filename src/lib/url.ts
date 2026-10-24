/** Arma una ruta interna respetando `base` (GitHub Pages sirve el sitio bajo /epsilon-agent/). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

export const GITHUB = 'https://github.com/GonzaBena/epsilon-agent';
export const GITHUB_ISSUES = `${GITHUB}/issues`;
