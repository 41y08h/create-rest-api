import Joi, { required } from "joi";

const ProcessEnv = Joi.object({
  PORT: required(),
  NODE_ENV: required(),
  AUTH_REDIRECT_URL: required(),
  JWT_SECRET: required(),
  GOOGLE_CLIENT_ID: required(),
  GOOGLE_CLIENT_SECRET: required(),
  MONGO_URI: required(),
  CLIENT_URL: required(),
});

export default ProcessEnv;
