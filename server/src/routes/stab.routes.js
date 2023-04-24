import express from "express";

import {
  createStabHandler,
  getStabsHandler,
  getStabByIdHandler,
} from "../controllers/stab.controller.js";

const router = express.Router();

router.post("/stabs", createStabHandler);
router.get("/stabs", getStabsHandler);
router.get("/stabs/:id", getStabByIdHandler);

export default router;
