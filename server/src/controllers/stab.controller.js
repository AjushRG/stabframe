import { getStabs, getStabById, createStab } from "../services/stab.service.js";
import logger from "../utils/logger.js";

export const createStabHandler = async (req, res) => {
  const stab = req.body;
  try {
    const createdStab = await createStab(stab);
    res.status(201).json({
      message: "Stab created successfully",
      data: createdStab,
    });
  } catch (error) {
    logger.error(error);
    res.status(409).json({ message: error.message });
  }
};

export const getStabsHandler = async (req, res) => {
  try {
    const stabs = await getStabs();
    res.status(200).json({
      message: "Stabs retrieved successfully",
      data: stabs,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getStabByIdHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const stab = await getStabById(id);
    res.status(200).json({
      message: "Stab retrieved successfully",
      data: stab,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: error.message });
  }
};
