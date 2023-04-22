// import node_modules
import express from "express";
import config from "config";
import cors from "cors";
import morgan from "morgan";

// import local modules
import connectDB from "./utils/connect-db";
import log from "./utils/logger";
import routes from "./routes";

// init express app
const app = express();

// get config
const PORT = config.get("PORT") as number;
const HOST = config.get("HOST") as string;

// use middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// start server
app.listen(PORT, HOST, async () => {
  log.info(`Server started on http://${HOST}:${PORT}`);
  await connectDB();
  routes(app);
});
