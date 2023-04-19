import express from "express";
import config from "config";

import connectDB from "./utils/connect-db";
import log from "./utils/logger";
import routes from "./routes";

const app = express();

const PORT = config.get("PORT") as number;
const HOST = config.get("HOST") as string;

app.listen(PORT, HOST, async () => {
  log.info(`Server started on http://${HOST}:${PORT}`);
  await connectDB();
  routes(app);
});
