import Employee from "../models/Employee";

export const getAllEmployees = async (req, res, next) => {
  try {
    const items = await Employee.find();
    res.json(items);
  } catch (error) {}
};

export const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeFound = Employee.findOne({ _id: id });
    if (employeeFound) res.status(400).json({ message: "Employee not found" });
    res.status(200).json(employeeFound);
  } catch (error) {}
};

export const createEmployee = async (req, res, next) => {
  try {
    const { name, username } = req.body;
    const newEmployee = new Employee({ name, username });
    const savedCollection = await newEmployee.save();
    return res.status(200).json(savedCollection);
  } catch (error) {}
};

export const updateEmployee = async (req, res, next) => {};

export const deleteEmployee = async (req, res, next) => {};
