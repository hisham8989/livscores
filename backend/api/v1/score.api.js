import express from "express";
import { createScore, getScores } from "../../controllers/scoreController.js";
const router = express.Router();

router.get("/scores", getScores);

router.post("/scores/create", createScore);

export default router;
