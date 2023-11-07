import { Request, Response } from "express";
import {
  createSchedulesService,
  readScheduleRealEstateService,
} from "../services/schedule.service";

export const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decoded;
  await createSchedulesService(req.body, sub);

  return res.status(201).json({ message: "Schedule created" });
};

export const readAllSchedulesRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const realEstates = await readScheduleRealEstateService(Number(id));

  return res.status(200).json(realEstates);
};
