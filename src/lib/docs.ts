import { getCollection, type CollectionEntry } from 'astro:content';

export type DocEntry = CollectionEntry<'docs'>;

export const GROUPS = ['Empezar', 'Configurar', 'Usar', 'Operar', 'Proyecto'] as const;

export function navTitle(doc: DocEntry): string {
  return doc.data.nav ?? doc.data.title;
}

/** Todas las páginas de docs, ordenadas como aparecen en el menú. */
export async function getDocs(): Promise<DocEntry[]> {
  const docs = await getCollection('docs');
  return docs.sort((a, b) => a.data.order - b.data.order);
}
