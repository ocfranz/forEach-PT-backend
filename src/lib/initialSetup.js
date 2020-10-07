import TypeTransport from "../models/TypeTransport";
import Employee from "../models/Employee";
import { getTypeOfTransport } from "../utils/getTypeOfTransport";
import { getExampleEmployees } from "../utils/getExampleEmployees";

export const createTypeTransports = async () => {
  try {
    const dataSeed = getTypeOfTransport();
    const count = await TypeTransport.estimatedDocumentCount();
    if (count > 0) return;
    await Promise.all(
      dataSeed.map((type) => {
        new TypeTransport(type).save();
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const createUsers = async () => {
  try {
    const exampleUsers = getExampleEmployees();
    const count = await Employee.estimatedDocumentCount();
    if (count > 0) return;
    await Promise.all(
      exampleUsers.map((type) => {
        new Employee(type).save();
      })
    );
  } catch (error) {
    console.log(error);
  }
};
