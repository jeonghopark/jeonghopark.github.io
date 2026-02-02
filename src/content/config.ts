import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        img: z.string().optional(), // Mapping legacy 'img' to this
        tags: z.array(z.string()).optional(),
        categories: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
