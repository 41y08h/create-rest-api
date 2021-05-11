import { Request, Response, NextFunction } from "express";

export default function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.user) return next();
  res.status(401).json({ message: "Unauthenticated" });
}
