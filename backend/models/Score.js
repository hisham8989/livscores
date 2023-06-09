import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    batting: {
      type: String,
      required: true,
    },
    bowling: {
      type: String,
      required: true,
    },
    runs: {
      type: String,
      required: true,
    },
    oversLeft: {
      type: String,
      required: true,
    },
    wicketsLeft: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", scoreSchema);

export default Score;
