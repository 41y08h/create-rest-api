import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";

export const devMiddlewares = [morgan("dev")];
const middlewares = [helmet(), cookieParser(), passport.initialize()];

export default middlewares;
