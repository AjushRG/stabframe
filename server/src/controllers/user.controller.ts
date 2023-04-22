import { Request, Response } from "express";
import log from "../utils/logger";
import { omit } from "lodash";
import { CreateUserInput, createUserSchema } from "../schemas/user.schema";
import { createUser, getUsers } from "../services/user.service";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.status(200).json({ message: "User created", data: user });
  } catch (error: any) {
    log.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await getUsers();
    return res.status(200).json({ message: "User created", data: user });
  } catch (error: any) {
    log.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
