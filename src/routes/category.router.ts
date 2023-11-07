import { Router } from "express";
import { CategoryCreateSchema } from "../schema/category.schema";
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import {
  verifyCategorieExists,
  verifyUniqueCategorieName,
} from "../middlewares/categories.middleware";
import {
  createCategoryController,
  readCategoryController,
  readRealEstateByCategoryController,
} from "../controllers/category.controller";

export const categoryRoutes: Router = Router();

categoryRoutes.post(
  "/",
  validateBody(CategoryCreateSchema),
  verifyToken,
  verifyUniqueCategorieName,
  verifyAdmin,
  createCategoryController
);
categoryRoutes.get("/", readCategoryController);
categoryRoutes.get(
  "/:id/realEstate",
  verifyCategorieExists,
  readRealEstateByCategoryController
);
