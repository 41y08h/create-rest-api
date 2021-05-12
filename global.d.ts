import ProcessEnv from "schemas/ProcessEnv";

const { errors } = ProcessEnv.validate(process.env);
if (errors) throw new Error(errors);

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: "development" | "production";
      AUTH_REDIRECT_URL: string;
      JWT_SECRET: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      MONGO_URI: string;
      CLIENT_URL: string;
    }
  }
}

export {};
