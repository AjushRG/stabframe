import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

import logger from "./logger.js";

dotenv.config({ path: new URL("../../../.env", import.meta.url) });

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(MONGO_URI);
    logger.info(chalk.cyan.bold(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    logger.error(chalk.red.italic(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
