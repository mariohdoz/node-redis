if (process.env.NODE_ENV !== "production") {
  const dotenv: any = require("dotenv");
  dotenv.config();
}

const PORT:number = parseInt(`${process.env.PORT}`, 10) || 3000;
const REDIS_PORT: number = parseInt(`${process.env.REDIS_PORT}`, 10) || 6379;
const REDIS_HOST: string = process.env.REDIS_HOST || "localhost";
const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD || "localhost";

export default {
  PORT,
  REDIS_PORT,
  REDIS_HOST,
  REDIS_PASSWORD
}