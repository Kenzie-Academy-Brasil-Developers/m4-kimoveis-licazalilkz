import { z } from "zod";
import { userLoginSchema } from "../schema/login.schema";

export type UserLogin = z.infer<typeof userLoginSchema>;
export type ReturnLogin = { token: string };
