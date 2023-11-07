import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45).min(2),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const createUserSchema = userSchema.pick({
  name: true,
  email: true,
  password: true,
  admin: true,
});
export const userAdmin = createUserSchema.omit({ admin: true });
export const updateUserSchema = userAdmin.partial();
export const userReturnSchema = userSchema.omit({ password: true });
export const userReturnListSchema = userReturnSchema.array();
export const userReadSchema = userReturnSchema.array();
