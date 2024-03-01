import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title required"],
  },
  content: {
    type: String,
    required: [true, "content required"],
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task = mongoose.models.task || mongoose.model("task", TaskSchema);
