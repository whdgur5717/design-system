import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishedAt: z.string(),
      updatedAt: z.string(),
      tags: z.array(z.string()),
      thumbnail: image().nullable(),
      sourceUrl: z.url(),
      velogId: z.string(),
      order: z.number().int().min(1).max(5),
    }),
})

export const collections = { posts }
