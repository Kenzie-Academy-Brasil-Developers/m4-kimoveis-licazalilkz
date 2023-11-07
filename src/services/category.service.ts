import { Category } from "../entities";
import { AppError } from "../errors";
import {
  CreateCategory,
  ReadAllCategory,
} from "../interfaces/category.interface";
import { repoCategory } from "../repositories";

export const createCategoryService = async (
  data: CreateCategory
): Promise<Category> => {
  return await repoCategory.save(data);
};

export const readCategoryService = async (): Promise<ReadAllCategory> => {
  return await repoCategory.find();
};

export const readRealEstatesByCategoryService = async (
  id: number
): Promise<Category> => {
  const category: Category | null = await repoCategory.findOne({
    where: {
      id,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!category) throw new AppError("Category not found", 404);

  return category;
};
