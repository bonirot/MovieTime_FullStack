import dotenv from "dotenv";

type TConfig = {
  [key: string]: EnviromentConfig;
};

type EnviromentConfig = {
  app: AppConfig;
  db: DBConfig;
  cloudinary: CloudynaryConfig;
};

type AppConfig = {
  PORT: string | number;
};

type DBConfig = {
  URI: string;
};

type CloudynaryConfig = {
  CLOUDINARY_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_SECRET: string;
};

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    db: {
      URI: process.env.MONGODB_URI || "mongodb://localhost:27017/moviehubdb/",
    },
    cloudinary: {
      CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || "error",
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "error",
      CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET || "error",
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 8081,
    },
    db: {
      URI: process.env.MONGODB_URI || "mongodb://localhost:27017/moviehubdb/",
    },
    cloudinary: {
      CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || "error",
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "error",
      CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET || "error",
    },
  },
};

export default CONFIG[ENV];
