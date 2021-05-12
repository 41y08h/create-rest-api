import { Router } from "express";
import passport from "passport";
import AuthController from "@/controllers/auth";

const auth = Router();

auth.get(
  ["@/.*/.*"],
  passport.authenticate("google", {
    session: false,
  }),
  AuthController.completeOAuth
);

export default auth;
