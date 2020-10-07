import Employee from "../models/Employee";

export const getAllEmployees = async (req, res, next) => {
  try {
    const items = await Employee.find();
    return res.json(items);
  } catch (error) {}
};

export const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeFound = Employee.findOne({ _id: id });
    if (!employeeFound) return res.status(400).json({ message: "Employee not found" });
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

export const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const options = req.body;
    Employee.findOneAndUpdate({ _id: id }, options, (err) => {
      if (!err) {
        res.status(200).json({ message: "Employee updated successfully" });
      } else {
        res.status(500).json({ message: "Error" });
      }
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productFound = await Employee.findOne({ _id: id });
    if (!productFound)
      return res.status(400).json({ message: "Product not found" });
    await Product.deleteOne({ _id: id }, (err) => {
      if (!err) {
        res.status(200).json({ message: "Employee deleted successfully" });
      } else {
        res.status(500).json({ message: "Error" });
      }
    });
  } catch (error) {
    next(error);
  }
};
