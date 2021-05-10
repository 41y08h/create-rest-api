import passport from "passport";
import google from "./google";
import User from "../../models/User"
import { Document, ObjectId } from "mongoose";
import IUser from "interfaces/User";

  

passport.serializeUser(user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async(id: string, done) {
    done(err, await User.findById(id);
}

export default function configure() {
  passport.use(google);
}
