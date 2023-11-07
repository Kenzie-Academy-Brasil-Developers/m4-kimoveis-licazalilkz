import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { CreateRealEstate } from "../interfaces/realEstate.interface";
import { repoAddress, repoCategory, repoRealEstate } from "../repositories";

export const createRealEstateService = async (
  data: CreateRealEstate
): Promise<RealEstate> => {
  const category: Category | null = await repoCategory.findOneBy({
    id: data.categoryId,
  });

  if (!category) throw new AppError("Category not found", 404);

  const address: Address = await repoAddress.save(data.address);
  const realEstate: RealEstate = await repoRealEstate.save({
    ...data,
    address,
    category: category!,
  });

  return realEstate;
};

export const readRealEstatesService = async (): Promise<RealEstate[]> => {
  return await repoRealEstate.find({
    relations: {
      address: true,
    },
  });
};
