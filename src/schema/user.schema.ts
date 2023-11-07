import { z } from 'zod';

export const userSchema = z.object({
	id: z.number().positive(),
	name: z.string().max(45).nonempty(),
	email: z.string().email().max(45),
	password: z.string().max(120).nonempty(),
	admin: z.boolean().default(() => false),
	createdAt: z.string().or(z.date()),
	updatedAt: z.string().or(z.date()),
	deletedAt: z.string().or(z.date()).nullable(),
});

export const userCreateSchema = userSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
});
export const userUpdateSchema = userCreateSchema.omit({ admin: true }).partial();
export const userReadSchema = userSchema.omit({ password: true });
export const userListSchema = userReadSchema.array();
export const userLoginSchema = userSchema.pick({ email: true, password: true });