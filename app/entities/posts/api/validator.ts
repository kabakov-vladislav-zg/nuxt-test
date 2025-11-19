import * as z from "zod"; 

export const PostSchema = z.object({ 
  id: z.string(),
  createdAt: z.string(),
  title: z.string(),
  preview: z.string(),
  image: z.string(),
  description: z.string(),
});

export type Post = z.infer<typeof PostSchema>;
