import express from "express";

import {
  createStabHandler,
  getStabsHandler,
  getStabByIdHandler,
  updateStabHandler,
  deleteStabHandler,
} from "../controllers/stab.controller.js";

const router = express.Router();

router.post("/stabs", createStabHandler);
router.get("/stabs", getStabsHandler);
router.get("/stabs/:id", getStabByIdHandler);
router.put("/stabs/:id", updateStabHandler);
router.delete("/stabs/:id", deleteStabHandler);

export default router;
