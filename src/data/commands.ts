export interface Command {
  name: string;
  desc: string;
  ai?: boolean;
}

export interface CommandGroup {
  title: string;
  intro: string;
  items: Command[];
}

export const commandGroups: CommandGroup[] = [
  {
    title: 'Notas',
    intro: 'Guardá, mirá, buscá y corregí tus notas.',
    items: [
      { name: '+ texto', desc: 'Guarda una nota nueva.' },
      { name: '/ver nota', desc: 'Muestra una nota.' },
      { name: '/buscar palabra', desc: 'Busca en tus notas.' },
      { name: '/editar', desc: 'Edita una nota.' },
    ],
  },
  {
    title: 'Archivos',
    intro: 'Los archivos viven en una carpeta tuya, limitada a DATA_DIR.',
    items: [{ name: '/archivos', desc: 'Lista los archivos guardados.' }],
  },
  {
    title: 'IA',
    intro: 'Necesitan una GEMINI_API_KEY. Sin ella, el resto sigue funcionando.',
    items: [
      { name: '/ia pregunta', desc: 'Hace una pregunta, con acceso opcional a tus notas y a la memoria.', ai: true },
      { name: '/resumir', desc: 'Resume notas, PDFs e imágenes.', ai: true },
      { name: '/ticket', desc: 'Pasa una imagen a CSV y pide confirmación antes de guardar.', ai: true },
    ],
  },
  {
    title: 'Memoria',
    intro: 'Lo que le pedís que recuerde queda disponible para las respuestas con IA.',
    items: [
      { name: '/recordar', desc: 'Guarda algo en la memoria.' },
      { name: '/memoria', desc: 'Muestra lo que recuerda.' },
      { name: '/olvidar', desc: 'Borra algo de la memoria.' },
    ],
  },
  {
    title: 'Sesión',
    intro: 'Controlá la conversación y el gasto.',
    items: [
      { name: '/nuevo', desc: 'Empieza una conversación nueva.' },
      { name: '/uso', desc: 'Muestra el gasto de IA. Cada chat tiene un límite de costo.' },
      { name: '/menu', desc: 'Abre el menú.' },
      { name: '/ayuda', desc: 'Muestra la ayuda.' },
    ],
  },
];
