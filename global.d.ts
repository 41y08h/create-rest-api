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
