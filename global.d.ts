if (!process.env.PORT) throw new Error("Missing PORT");
if (!process.env.NODE_ENV) throw new Error("Missing NODE_ENV");
if (!process.env.AUTH_REDIRECT_URL)
  throw new Error("Missing AUTH_REDIRECT_URL");
if (!process.env.JWT_SECRET) throw new Error("Missing JWT_SECRET");
if (!process.env.GOOGLE_CLIENT_ID) throw new Error("Missing GOOGLE_CLIENT_ID");
if (!process.env.GOOGLE_CLIENT_SECRET)
  throw new Error("Missing GOOGLE_CLIENT_SECRET");
if (!process.env.MONGO_URI) throw new Error("Missing MONGO_URI");
if (!process.env.CLIENT_URL) throw new Error("Missing CLIENT_URL");

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
