import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().int().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().positive().int(),
});

export const ScheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});
