import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "open" },
  createdAt: { type: Date, default: Date.now }
});

export const Bug = mongoose.model("Bug", bugSchema);
