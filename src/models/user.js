import mongoose, { Schema } from "mongoose";

// 1. design schmea
// 2. model creation

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "email required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  about: String,
  profileURL: String,
});

export const User = mongoose.models.user || mongoose.model("user", UserSchema);
