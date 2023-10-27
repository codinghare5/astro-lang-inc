import { z, defineCollection } from "astro:content";

const postSchema = z.object({
    title: z.string().max(100, 'The title length must be less than or equal to 100 chars'),
    description: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    authorImage: z.string().optional(),
    authorTwitter: z.string(),
    date: z.string(),
    image: z.string().optional(),
    category: z.string(),
    style: z.enum(['conversational', 'academic', 'anecdote', 'teenager']),
    lang: z.string(),
})

const blogCollection = defineCollection({
    type: 'content',
    schema: postSchema
})

const blogPosts = defineCollection({
    schema: postSchema
})

const blogEnAcademicCollection = defineCollection({
    path: '/blog/en/academic/*.md',
    schema: postSchema
})

const frBlogAcademic = defineCollection({
    path: '/blog/fr/academic/*.md',
    schema: postSchema
})

export const collections = {
    'blog/en/academic': blogEnAcademicCollection,
    'frblog-academic': frBlogAcademic,
    'blog': blogCollection
}
