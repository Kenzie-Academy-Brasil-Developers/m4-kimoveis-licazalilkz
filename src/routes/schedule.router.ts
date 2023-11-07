import { Router } from "express";
import {
  createSchedulesController,
  readAllSchedulesRealEstateController,
} from "../controllers/schedule.controller";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { ScheduleCreateSchema } from "../schema/schedule.schema";
import {
  verifyRealEstateExists,
  verifyRealEstateSchedulesExists,
  verifyUserSchedulesExists,
} from "../middlewares/schedule.middleware";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "/",
  verifyToken,
  validateBody(ScheduleCreateSchema),
  verifyRealEstateExists,
  verifyRealEstateSchedulesExists,
  verifyUserSchedulesExists,
  createSchedulesController
);
schedulesRoutes.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  readAllSchedulesRealEstateController
);
