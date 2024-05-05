import z from "zod";

export const CreatePost = z.object({
  title: z.string().min(4, "Title must be between 4 to 100 characters").max(100),
  body: z.string().min(10, "Body must be between 10 to 1000 characters").max(1000),
  userId: z.string().min(8, "User ID is invalid"),
});

export type Post = z.infer<typeof CreatePost>;