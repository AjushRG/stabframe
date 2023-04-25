import Stab from "../models/stab.model.js"; // Importing the Stab model
import logger from "../utils/logger.js"; // Importing the logger utility
import { uploadMedia } from "../middlewares/cloudinary.js"; // Importing the uploadMedia middleware

// Handler function for creating a new stab
export const createStab = async (stab) => {
  const { name, description, stabNote, goLink, media } = stab; // Destructuring the stab object to get the required properties

  try {
    if (!name) {
      throw new Error(`Name is required`); // Checking if name property is provided, if not, throwing an error
    }

    if (!media) {
      throw new Error(`Media is required`); // Checking if media property is provided, if not, throwing an error
    }

    const resMedia = uploadMedia(media, name); // Uploading the media file using the uploadMedia middleware

    const newStab = new Stab({
      // Creating a new Stab object with the provided properties
      name,
      description,
      stabNote,
      goLink,
      media: (await resMedia).url, // Setting the media property to the uploaded media file URL
    });

    const savedStab = await newStab.save(); // Saving the new Stab object to the database
    return savedStab; // Returning the saved Stab object
  } catch (error) {
    // Handle the error here
    logger.error(error); // Logging the error using the logger utility
    throw error; // Rethrowing the error so it can be handled by the calling function
  }
};

// Handler function for getting all stabs
export const getStabs = async () => {
  try {
    const stabs = await Stab.find(); // Finding all stabs in the database using the Stab model
    return stabs; // Returning the found stabs
  } catch (error) {
    logger.error(error); // Logging the error using the logger utility
    throw error; // Rethrowing the error so it can be handled by the calling function
  }
};

// Handler function for getting a stab by ID
export const getStabById = async (id) => {
  try {
    const stab = await Stab.findById(id); // Finding a stab by ID in the database using the Stab model
    return stab; // Returning the found stab
  } catch (error) {
    logger.error(error); // Logging the error using the logger utility
    throw error; // Rethrowing the error so it can be handled by the calling function
  }
};

// Handler function for updating a stab
export const updateStab = async (id, stab) => {
  try {
    const updatedStab = await Stab.findByIdAndUpdate(id, stab, {
      new: true,
    }); // Finding a stab by ID and updating it with the provided stab object, and returning the updated stab object with {new: true} option

    return updatedStab; // Returning the updated stab object
  } catch (error) {
    logger.error(error); // Logging the error using the logger utility
    throw error; // Rethrowing the error so it can be handled by the calling function
  }
};

// Handler function for deleting a stab
export const deleteStab = async (id) => {
  try {
    const deletedStab = await Stab.findByIdAndDelete(id); // Finding a stab by ID and deleting it from the database using the Stab model
    return deletedStab; // Returning the deleted stab
  } catch (error) {
    // Handle the error here
    logger.error(error); // Logging the error using the logger utility
    throw error; // Rethrowing the error so it can be handled by the calling function
  }
};
