import { Router } from "express";
import {
  createRealEstateController,
  readAllRealEstateController,
} from "../controllers/realEstate.controller";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { RealEstateCreateSchema } from "../schema/realEstate.schema";
import { verifyAddressExists } from "../middlewares/realEstate.middleware";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "/",
  verifyToken,
  verifyAdmin,
  validateBody(RealEstateCreateSchema),
  verifyAddressExists,
  createRealEstateController
);
realEstateRoutes.get("/", readAllRealEstateController);
