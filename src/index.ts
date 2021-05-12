import "dotenv/config";
import express from "express";
import createDebug from "debug";
import middlewares, { devMiddlewares } from "./middlewares";
import AuthService from "./services/auth";
import DatabaseService from "./services/database";
import router from "./routes";

const app = express();
const debug = createDebug("app");

AuthService.configure();
DatabaseService.connect();

app.use(router);
app.use(...middlewares);

const isDevEnv = process.env.NODE_ENV === "development";
if (isDevEnv) app.use(...devMiddlewares);

app.listen(process.env.PORT, () => {
  debug(`⚡ Started on port ${process.env.PORT}`);
});
