export interface InstallMethod {
  id: 'repo' | 'voz' | 'servicio';
  label: string;
  title: string;
  desc: string;
  code: string;
}

export const installMethods: InstallMethod[] = [
  {
    id: 'repo',
    label: 'Desde el repositorio',
    title: 'Desde el repositorio',
    desc: 'La instalación básica: notas, archivos, búsqueda, memoria y, con una clave de Gemini, la IA.',
    code: 'git clone https://github.com/GonzaBena/epsilon-agent.git\ncd epsilon-agent\nuv sync',
  },
  {
    id: 'voz',
    label: 'Con voz',
    title: 'Con voz',
    desc: 'Suma Whisper para transcribir notas de voz en tu equipo. Es el mismo repositorio, con un extra.',
    code: 'git clone https://github.com/GonzaBena/epsilon-agent.git\ncd epsilon-agent\nuv sync --extra voz',
  },
  {
    id: 'servicio',
    label: 'Como servicio',
    title: 'Como servicio de usuario',
    desc: 'Para que arranque solo y quede en segundo plano. Primero instalá con cualquiera de los métodos anteriores, después editá las rutas de deploy/epsilon.service.',
    code: 'systemctl --user enable --now /ruta/a/deploy/epsilon.service\nsystemctl --user status epsilon',
  },
];

export const maintenanceRows = [
  { label: 'Ver el estado del servicio', cmd: 'systemctl --user status epsilon' },
  { label: 'Seguir los registros', cmd: 'journalctl --user -u epsilon -f' },
  { label: 'Reiniciar el servicio', cmd: 'systemctl --user restart epsilon' },
  { label: 'Usar otro archivo de configuración', cmd: 'EPSILON_ENV_FILE=/ruta/otro.env uv run epsilon' },
  { label: 'Correr los tests', cmd: 'uv run pytest' },
];
