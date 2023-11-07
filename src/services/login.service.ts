import "dotenv/config";
import { sign } from "jsonwebtoken";
import { ReturnLogin, UserLogin } from "../interfaces/login.interface";
import { repoUsers } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities";
import { compare } from "bcryptjs";

export const loginService = async (data: UserLogin): Promise<ReturnLogin> => {
  const { email } = data;
  const user: User | null = await repoUsers.findOneBy({ email });

  if (!user) throw new AppError("Invalid credentials", 401);

  const comparePass = await compare(data.password, user.password);

  if (!comparePass) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { email: user.email, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};
