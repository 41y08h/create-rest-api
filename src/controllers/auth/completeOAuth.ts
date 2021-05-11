import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import IUser from "../../interfaces/IUser";
import AuthService from "../../services/auth";

export default expressAsyncHandler((req: Request, res: Response) => {
  const token = AuthService.serializeUser(req.user as IUser);
  res.redirect(`${process.env.AUTH_REDIRECT_URL as string}?token=${token}`);
});
