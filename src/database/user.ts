import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  name: String,
  role: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
