import { z } from "zod";
import {
  CategoryCreateSchema,
  CategoryReadSchema,
} from "../schema/category.schema";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type CreateCategory = z.infer<typeof CategoryCreateSchema>;
export type ReadAllCategory = z.infer<typeof CategoryReadSchema>;
export type CategoryRepo = Repository<Category>;
