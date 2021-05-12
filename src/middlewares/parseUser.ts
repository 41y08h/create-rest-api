import { NextFunction, Request, Response } from "express";
import AuthService from "@/services/auth";

export default async function parseUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await AuthService.deserializeUser(req.cookies.token);
    if (user) req.user = user;
  } catch {
    req.user = undefined;
  }
  next();
}
