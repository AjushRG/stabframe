import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env.development" });

export default {
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || "localhost",
  MONGODB_URI: process.env.MONGODB_URI || "",
  SALT_ROUDNS: process.env.SALT_ROUDNS || 10,
};
