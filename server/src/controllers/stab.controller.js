// Import required modules
import {
  getStabs,
  getStabById,
  createStab,
  updateStab,
  deleteStab,
} from "../services/stab.service.js";
import logger from "../utils/logger.js";
import { uploadMedia } from "../middlewares/cloudinary.js";

// Define a handler for creating a stab
export const createStabHandler = async (req, res) => {
  const stab = req.body;

  try {
    // Call the createStab function from the stab.service.js module
    const createdStab = await createStab(stab);
    // Send a response with a 201 status code and the created stab data
    res.status(201).json({
      message: "Stab created successfully",
      data: createdStab,
    });
  } catch (error) {
    // Log the error and send a response with a 409 status code and the error message
    logger.error(error);
    res.status(409).json({ message: error.message });
  }
};

// Define a handler for retrieving all stabs
export const getStabsHandler = async (req, res) => {
  try {
    // Call the getStabs function from the stab.service.js module
    const stabs = await getStabs();
    // If no stabs are found, throw an error
    if (!stabs) throw new Error("No stabs found");
    // Send a response with a 200 status code and the retrieved stabs data
    res.status(200).json({
      message: "Stabs retrieved successfully",
      data: stabs,
    });
  } catch (error) {
    // Log the error and send a response with a 404 status code and the error message
    logger.error(error);
    res.status(404).json({
      message: error.message,
    });
  }
};

// Define a handler for retrieving a single stab by ID
export const getStabByIdHandler = async (req, res) => {
  const id = req.params.id;
  try {
    // Call the getStabById function from the stab.service.js module with the provided ID
    const stab = await getStabById(id);
    // If no stab is found with the provided ID, throw an error
    if (!stab) throw new Error(`Stab with id ${id} not found`);
    // Send a response with a 200 status code and the retrieved stab data
    res.status(200).json({
      message: `Stab with id ${id} retrieved successfully`,
      data: stab,
    });
  } catch (error) {
    // Log the error and send a response with a 404 status code and the error message
    logger.error(error);
    res.status(404).json({ message: error.message });
  }
};

// Define a handler for updating a stab by ID
export const updateStabHandler = async (req, res) => {
  // Get the ID from the request parameters
  const id = req.params.id;
  const stab = req.body;
  try {
    const updatedStab = await updateStab(id, stab);
    if (!updatedStab) throw new Error(`Stab with id ${id} not found`);
    res.status(200).json({
      message: `Stab with id ${id} updated successfully`,
      data: updatedStab,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteStabHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedStab = await deleteStab(id);
    if (!deletedStab) throw new Error(`Stab with id ${id} not found`);
    res.status(200).json({
      message: `Stab with id ${id} deleted successfully`,
      data: deletedStab,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: error.message });
  }
};
