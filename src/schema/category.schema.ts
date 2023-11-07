import { z } from 'zod';

export const categorySchema = z.object({
	id: z.number().positive(),
	name: z.string().max(45).nonempty(),
});

export const categoryCreateSchema = categorySchema.omit({ id: true });