import { z } from "zod";
import { RealEstate } from "../entities";
import { realEstateCreateSchema, realEstateCompleteSchema } from "../schema";

export type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
export type RealEstateCompleteSchema = z.infer<typeof realEstateCompleteSchema>;
export type RealEstateList = Array<RealEstate>;
