import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import errorHandler from "./errorHandler";
import parseUser from "./parseUser";

export const devMiddlewares = [morgan("dev")];
const middlewares = [
  helmet(),
  cookieParser(),
  passport.initialize(),
  parseUser,
  errorHandler,
];

export default middlewares;
