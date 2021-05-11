import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";

export default function withAsyncHandler(controller: object) {
  const keys = Object.keys(controller);

  const strongController: { [key: string]: RequestHandler } = {};

  keys.forEach(
    (key) => (strongController[key] = asyncHandler(controller[key]))
  );
  return strongController;
}
