import { Request, Response, NextFunction } from "express";
import createDebug from "debug";

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const debug = createDebug("app: error");
  // Override false 200 codes
  if (res.statusCode === 200) res.status(500);

  const code = res.statusCode || 500;

  const envNotProduction = process.env.NODE_ENV !== "production";
  const isClientError = code > 399 && code < 500;

  if (code === 500) debug(err.message);

  res.status(code).json({
    code,
    message: err.message,
    stack: envNotProduction
      ? isClientError
        ? undefined
        : err.stack
      : undefined,
  });
}
