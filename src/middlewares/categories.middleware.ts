import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { AppError } from "../errors";
import { repoCategory } from "../repositories";

export const verifyUniqueCategorieName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;
  const category: Category | null = await repoCategory.findOneBy({ name });
  if (category) throw new AppError("Category already exists", 409);
  return next();
};

export const verifyCategorieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const category: Category | null = await repoCategory.findOneBy({
    id: Number(id),
  });

  if (!category) throw new AppError("Category not found", 404);

  return next();
};
