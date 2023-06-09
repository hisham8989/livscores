import express from "express";
import scoreApi from "./score.api.js";
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "v1 api",
  });
});

// Scores

router.use("/", scoreApi);

export default router;
