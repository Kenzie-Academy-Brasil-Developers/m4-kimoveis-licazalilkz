import { User } from "../entities";
import {
  CreateUsers,
  UserReadReturn,
  UserReturn,
  UserUpdate,
} from "../interfaces/users.interface";
import { repoUsers } from "../repositories";
import { userReturnListSchema, userReturnSchema } from "../schema/user.schema";

export const createUserService = async (
  data: CreateUsers
): Promise<UserReturn> => {
  const newUser: User = repoUsers.create(data);
  await repoUsers.save(newUser);
  return userReturnSchema.parse(newUser);
};

export const readUserService = async (): Promise<UserReadReturn> => {
  const user: User[] = await repoUsers.find();

  return userReturnListSchema.parse(user);
};

export const updateUserService = async (
  data: UserUpdate,
  user: User
): Promise<UserReturn> => {
  const userUpdate: User = repoUsers.create({ ...user, ...data });

  await repoUsers.save(userUpdate);

  return userReturnSchema.parse(userUpdate);
};

export const deleteUserService = async (user: User): Promise<void> => {
  await repoUsers.softRemove(user);
};