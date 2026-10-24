import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    group: z.enum(['Empezar', 'Configurar', 'Usar', 'Operar', 'Proyecto']),
    order: z.number().int(),
    /** Título corto para el menú, la miga y los enlaces Anterior/Siguiente. */
    nav: z.string().optional(),
  }),
});

export const collections = { docs };
