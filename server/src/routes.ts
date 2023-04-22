import { ResolveOptions } from "dns";
import { Express, Request, Response } from "express";

import {
  createUserHandler,
  getUserHandler,
} from "./controllers/user.controller";
import validate from "./middlewares/validateResource";
import { createUserSchema } from "./schemas/user.schema";
import { ZodObject } from "zod";

const routes = (app: Express) => {
  // check if the server is running
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({ message: "Welcome to the API" });
  });

  // user routes
  app.post("/api/users", validate(createUserSchema), createUserHandler);
  app.get("/api/users", getUserHandler);
};

export default routes;
