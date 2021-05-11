import asyncHandler from "express-async-handler";

export default function withAsyncHandler(controller: object) {
  const keys = Object.keys(controller);
  return keys.map((key) => asyncHandler(controller[key]));
}
