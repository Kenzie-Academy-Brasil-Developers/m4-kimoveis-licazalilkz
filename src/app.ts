import "reflect-metadata";
import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";

const app = express();
app.use(express.json());

app.use(middlewares.handleError);

export default app;
