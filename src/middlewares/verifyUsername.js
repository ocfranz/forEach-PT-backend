import Employee from "../models/Employee";

export const checkUsernameExists = async (req, res, next) => {
  try {
    const { username } = req.body;
    const employeeFound = await Employee.findOne({ username: username });
    if (employeeFound)
      return res.status(400).json({ message: "Username already taken" });
    next();
  } catch (error) {}
};
