import { Schema, model } from "mongoose";

const tripSchema = new Schema(
  {
    startAddress: { type: String, required: true },
    startLatitude: { type: Number },
    startLongitude: { type: Number },
    endAddress: { type: String, required: true },
    endLongitude: { type: Number },
    endLongitude: { type: Number },
    totalKm: { type: Number, required: true },
    employees: [{ type: Schema.Types.ObjectId, ref: "employee" }],
    oneWay: { type: Boolean, required: true },
    carbonFootPrintEmission: { type: Number, required: true },
    carbonFootPrintPerEmployee: { type: Number, required: true },
    usedTransport: { type: Schema.Types.ObjectId, ref: "typeTransport" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

tripSchema.statics.calculateCarbonFootPrint = (
  typeTransport,
  employees,
  totalKm,
  oneWay
) => {
  const oneWayFactor = oneWay ? 1 : 2;
  console.log(oneWay, typeTransport.factorCarbonFootPrint, employees.length);
  return (
    typeTransport.factorCarbonFootPrint *
    employees.length *
    totalKm *
    oneWayFactor
  );
};

export default model("trip", tripSchema);
