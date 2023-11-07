import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

export const CategoryCreateSchema = categorySchema.omit({ id: true });
export const CategoryReadSchema = categorySchema.array();
