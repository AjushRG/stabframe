import Stab from "../models/stab.model.js";
import logger from "../utils/logger.js";

export const createStab = async (stab) => {
  const { name, description, image } = stab;

  try {
    if (!name) {
      throw new Error("Name is required");
    }

    if (!image) {
      throw new Error("Image is required");
    }

    const newStab = new Stab({
      name,
      description,
      image,
    });

    const savedStab = await newStab.save();
    return savedStab;
  } catch (error) {
    // Handle the error here
    logger.error(error);
    throw error; // rethrow the error so it can be handled by the calling function
  }
};

export const getStabs = async () => {
  try {
    const stabs = await Stab.find();
    return stabs;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export const getStabById = async (id) => {
  try {
    const stab = await Stab.findById(id);
    return stab;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
