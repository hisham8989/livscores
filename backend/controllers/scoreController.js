import ScoreManager from "../mananger/scoreManager.js";

export const getScores = async (req, res) => {
  const scoreManager = new ScoreManager();
  try {
    const response = await scoreManager.fetchScores();
    return res.status(200).json({
      success: true,
      message: "scores",
      data: response,
    });
  } catch (err) {
    return res.status(400).json({
      success: failed,
      message: "scores",
      error: err,
    });
  }
};

export const createScore = async (req, res) => {
  const data = {
    body: req.body,
  };

  const scoreManager = new ScoreManager(data);
  try {
    const response = await scoreManager.createScore();
    return res.status(201).json({
      success: true,
      message: "score created",
      data: response,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "failed to create scores",
      error: err,
    });
  }
};
