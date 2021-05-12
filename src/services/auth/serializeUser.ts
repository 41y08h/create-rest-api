import IUser from "../../interfaces/User";
import jwt from "jsonwebtoken";

export default function serializeUser(user: IUser | undefined) {
  if (!user) return null;
  const token = jwt.sign(process.env.JWT_SECRET as string, user.id);
  return token;
}
