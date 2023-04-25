import {
  getStabs,
  getStabById,
  createStab,
  updateStab,
  deleteStab,
} from "../services/stab.service.js";
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
    if (!stab) throw new Error(`Stab with id ${id} not found`);
    res.status(200).json({
      message: `Stab with id ${id} retrieved successfully`,
      data: stab,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: error.message });
  }
};

export const updateStabHandler = async (req, res) => {
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
