import { Schema, model } from "mongoose";

const typeTransportSchema = new Schema(
  {
    name: { type: String, required: true },
    typeId: { type: String, required: true },
    factorCarbonFootPrint: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("typeTransport", typeTransportSchema);
