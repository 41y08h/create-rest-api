import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import IUser from "interfaces/User";
import AuthService from "services/auth";

export default expressAsyncHandler((req: Request, res: Response) => {
  const token = AuthService.serializeUser(req.user as IUser);
  res.redirect(`${process.env.AUTH_REDIRECT_URL}?token=${token}`);
});
