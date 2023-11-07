import { userSchema } from "./user.schema";

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});
