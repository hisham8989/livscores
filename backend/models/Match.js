import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    matchFormat: {
      type: String,
      required: true,
    },
    innings: {
      type: String,
      required: true,
    },
    teams: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length === 2; // Teams array should have exactly 2 elements
        },
        message: "The teams array must contain 2 elements",
      },
    },
    score: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Score",
    },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model("Match", matchSchema);

export default Match;
