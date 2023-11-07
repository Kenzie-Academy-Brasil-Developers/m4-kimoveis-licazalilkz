import { z } from "zod";
import { createUserSchema, userReturnSchema } from "../schema/user.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type CreateUsers = z.infer<typeof createUserSchema>;
export type UserBodyUpdate = Omit<CreateUsers, "admin">;
export type UserUpdate = DeepPartial<User>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserReadReturn = UserReturn[];

export type UserRepo = Repository<User>;
