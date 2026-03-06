import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    order: z.number().default(1),
    active: z.boolean().default(true),
  }),
});

const reviewsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    customerName: z.string(),
    reviewText: z.string(),
    rating: z.enum(['1', '2', '3', '4', '5']),
    order: z.number().default(1),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  products: productsCollection,
  reviews: reviewsCollection,
};
