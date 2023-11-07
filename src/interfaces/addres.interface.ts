import { z } from "zod";
import { addressCreateSchema } from "../schema";

export type AddressCreate = z.infer<typeof addressCreateSchema>;
