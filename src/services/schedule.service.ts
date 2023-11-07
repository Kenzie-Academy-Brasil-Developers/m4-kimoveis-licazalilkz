import { RealEstate, User } from "../entities";
import { AppError } from "../errors";
import { CreateSchedule } from "../interfaces/schedule.interface";
import { repoRealEstate, repoSchedule, repoUsers } from "../repositories";

export const createSchedulesService = async (
  data: CreateSchedule,
  userId: number
): Promise<void> => {
  const newDate = new Date(data.date).getDay();
  if (newDate === 0 || newDate === 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);
  const time = Number(data.hour.split(":")[0]);
  if (time < 8 || time > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  const realEstate: RealEstate | null = await repoRealEstate.findOneBy({
    id: data.realEstateId,
  });
  const user: User | null = await repoUsers.findOneBy({ id: userId });

  await repoSchedule.save({ ...data, realEstate: realEstate!, user: user! });
};

export const readScheduleRealEstateService = async (
  id: number
): Promise<any> => {
  const realEstate: RealEstate | null = await repoRealEstate.findOne({
    where: {
      id,
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  return realEstate;
};
