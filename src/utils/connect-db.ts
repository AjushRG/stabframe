import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.get("MONGODB_URI") as string);
    log.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err: any) {
    log.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
