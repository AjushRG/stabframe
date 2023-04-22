import UserModel, { IUser, IUserInput } from "../models/user.model";
import mongoose from "mongoose";
import { CreateUserInput } from "../schemas/user.schema";
import { Omit, omit } from "lodash";

export const createUser = async (input: IUserInput) => {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password") as Omit<IUser, "password">;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUsers = async () => {
  try {
    const user = (await UserModel.find()) as IUser[];
    if (!user) {
      throw new Error("User not found");
    }

    return user.map((user) => omit(user.toJSON(), "password")) as Omit<
      IUser,
      "password"
    >[];
  } catch (error: any) {
    throw new Error(error);
  }
};
