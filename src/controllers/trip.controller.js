import Trip from "../models/Trip";
import Employee from "../models/Employee";
import TypeTransport from "../models/TypeTransport";

export const getAllTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    next(error);
  }
};
export const getTripById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tripFound = Trip.findOne({ _id: id });
    if (tripFound) res.status(400).json({ message: "Trip not found" });
    res.status(200).json(tripFound);
  } catch (error) {
    next(error);
  }
};

export const createNewTrip = async (req, res, next) => {
  try {
    const {
      startAddress,
      endAddress,
      totalKm,
      employees,
      oneWay,
      usedTransportTypeId,
    } = req.body;

    console.log(usedTransportTypeId);

    const employeesId = await Promise.all(
      employees.map(async (employee) => {
        const e = await Employee.findOne({ username: employee });
        return e._id;
      })
    );

    const usedTransport = await TypeTransport.findOne({
      typeId: usedTransportTypeId,
    });

    const carbonFootPrint = Trip.calculateCarbonFootPrint(
      usedTransport,
      employeesId,
      totalKm,
      oneWay
    );

    const newTrip = new Trip({
      startAddress,
      endAddress,
      totalKm,
      oneWay,
      usedTransport: usedTransport._id,
      usedTransportName: usedTransportTypeId.name,
      carbonFootPrintEmission: carbonFootPrint,
      carbonFootPrintPerEmployee: carbonFootPrint / employeesId.length,
      employees: employeesId,
    });
    const saved = await newTrip.save();
    return res.json(saved);
  } catch (error) {
    next(error);
  }
};
