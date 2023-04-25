import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import morgan from "morgan";

// import utils
import { connectDB } from "./src/utils/connect.js";
import logger from "./src/utils/logger.js";

// import routes
import healthCheck from "./src/routes/index.js";
import stabRoutes from "./src/routes/stab.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api", healthCheck);
app.use("/api", stabRoutes);

app.listen(PORT, HOST, async () => {
  logger.info(chalk.yellow.bold(`Server running on http://${HOST}:${PORT}`));
  await connectDB();
});
