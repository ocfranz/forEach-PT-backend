import { Router } from "express";

import * as employeeController from "../controllers/employee.controller";
import { checkUsernameExists } from "../middlewares/verifyUsername";

const router = Router();

router.get("/", employeeController.getAllEmployees);

router.get("/:id", employeeController.getEmployeeById);

router.post("/", [checkUsernameExists], employeeController.createEmployee);

router.put("/:id", employeeController.updateEmployee);

router.delete("/:id", employeeController.deleteEmployee);

router.get("/username/:username", employeeController.getOnlyUsername);

export default router;
