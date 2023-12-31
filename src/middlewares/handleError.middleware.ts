import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { z } from "zod";

export function handleError(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
): Response {
  if (error instanceof AppError) {
    return response.status(error.status).json({ message: error.message });
  }

  if (error instanceof z.ZodError) {
    return response.status(400).json({ message: error.flatten().fieldErrors });
  }

  console.error(error);
  return response.status(500).json({ error: "Internal server error" });
}
