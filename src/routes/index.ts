import { Router } from "express";
import { usersRoutes } from "./user.router";
import { categoryRoutes } from "./category.router";
import { realEstateRoutes } from "./realEstate.router";
import { schedulesRoutes } from "./schedule.router";
import { loginRoutes } from "./login.router";

export const routes: Router = Router();
routes.use("/users", usersRoutes);
routes.use("/login", loginRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/realEstate", realEstateRoutes);
routes.use("/schedules", schedulesRoutes);
