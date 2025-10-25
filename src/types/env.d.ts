declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: string;
    PORT?: string;
    MONGO_URI?: string;
    JWT_SECRET?: string;
    JWT_EXPIRES_IN?: string;
    REFRESH_TOKEN_SECRET?: string;
    REFRESH_TOKEN_EXPIRES_IN?: string;
  }
}
