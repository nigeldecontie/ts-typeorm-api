declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      POSTGRES_PORT: number;
      POSTGRES_HOST: string;
      TZ: string;
      PGTZ: string;
      ADMINER_DESIGN: string;
      ADMINER_DEFAULT_DB_DRIVER: string;
    }
  }
}

export {}
