import "reflect-metadata";
import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use("/", routes);

app.use(middlewares.handleError);

export default app;
