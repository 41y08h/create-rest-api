import jwt from "jsonwebtoken";
import User from "../../models/User";

export default async function deserializeUser(token: string) {
  const userId = jwt.verify(token, process.env.JWT_SECRET as string);
  if (typeof userId === "string") return await User.findById(userId);
}
