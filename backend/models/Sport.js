import mongoose from "mongoose";

const sportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Sport = mongoose.model("Sport", sportSchema);

export default Sport;
