import { z } from "zod";
import { Category } from "../entities";
import { categoryCreateSchema } from "../schema";

export type CategoryCreate = z.infer<typeof categoryCreateSchema>;
export type CategoryList = Array<Category>;
