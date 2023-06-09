import dotenv from "dotenv";
dotenv.config();

const development = {
  name: "development",
  port: process.env.PORT,
  db_url: process.env.MONGO_DEV_URL,
};

const production = {
  name: "production",
  port: process.env.PORT,
  db_url: process.env.MONGO_PROD_URL,
};

const local = {
  name: "local",
  port: 3001,
  db_url: "mongodb://localhost:27017/live-score-local",
};

export default eval(process.env.NODE_ENV) == undefined
  ? development
  : eval(process.env.NODE_ENV) == "LOCAL"
  ? local
  : eval(process.env.NODE_ENV);
