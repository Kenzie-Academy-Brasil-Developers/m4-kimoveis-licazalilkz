import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { UserRepo } from "./interfaces/users.interface";
import { CategoryRepo } from "./interfaces/category.interface";
import { ScheduleRepo } from "./interfaces/schedule.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";

export const repoUsers: UserRepo = AppDataSource.getRepository(User);

export const repoCategory: CategoryRepo = AppDataSource.getRepository(Category);

export const repoSchedule: ScheduleRepo = AppDataSource.getRepository(Schedule);

export const repoRealEstate: RealEstateRepo =
  AppDataSource.getRepository(RealEstate);

export const repoAddress: AddressRepo = AppDataSource.getRepository(Address);
