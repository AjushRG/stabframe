// Import the express module
import express from "express";

// Import the controller functions for handling Stab routes
import {
  createStabHandler,
  getStabsHandler,
  getStabByIdHandler,
  updateStabHandler,
  deleteStabHandler,
} from "../controllers/stab.controller.js";

// Create an express router instance
const router = express.Router();

// Define the Stab routes
router.post("/stabs", createStabHandler);
router.get("/stabs", getStabsHandler);
router.get("/stabs/:id", getStabByIdHandler);
router.put("/stabs/:id", updateStabHandler);
router.delete("/stabs/:id", deleteStabHandler);

// Export the router as the default module export
export default router;
