import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().nonempty(),
  hour: z.string().nonempty(),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

export const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});
export const scheduleCreateWithUserIdSchema = scheduleSchema.omit({ id: true });
