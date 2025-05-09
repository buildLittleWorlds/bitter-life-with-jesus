import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(["academic", "creative"]),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};