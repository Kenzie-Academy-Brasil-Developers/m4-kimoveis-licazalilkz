import { NextFunction, Request, Response } from "express";
import { repoAddress } from "../repositories";
import { Address } from "../entities";
import { AppError } from "../errors";

export const verifyAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;
  const addressExists: Address | null = await repoAddress.findOne({
    where: {
      street: address.street,
      city: address.city,
      number: address.number,
      state: address.state,
      zipCode: address.zipCode,
    },
  });
  if (addressExists) throw new AppError("Address already exists", 409);

  return next();
};
