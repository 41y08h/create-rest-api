import IUser from "interfaces/User";
import mongoose, { Model } from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  picture: { type: String, required: true },
  provider: { name: String, accountId: String },
});

const User: Document<IUser> = mongoose.model("User", schema);

export default User;
