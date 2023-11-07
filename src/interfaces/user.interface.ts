import { z } from "zod";
import { userCreateSchema, userLoginSchema, userReadSchema } from "../schema";
import { DeepPartial } from "typeorm";

export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserRead = z.infer<typeof userReadSchema>;
export type UserUpdate = DeepPartial<UserCreate>;
export type UserList = Array<UserRead>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type LoginReturn = {
  token: string;
};
