import { z } from 'zod';
import { scheduleCreateSchema, scheduleCreateWithUserIdSchema } from '../schema';

export type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
export type ScheduleCreateWithUserId = z.infer<typeof scheduleCreateWithUserIdSchema>;