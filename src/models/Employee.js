import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: { type: String },
    username: { type: String, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("employee", employeeSchema);
