import { Router } from "express";
import passport from "passport";

const auth = Router();

auth.get(
  ["/google", "/google/callback"],
  passport.authenticate("google", {
    session: false,
  }),
  (req, res) => {
    res.status(200).send("OK");
  }
);

export default auth;
