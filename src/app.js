import express from "express";
import morgan from "morgan";

import db from "./db";

import EmployeeRoutes from "./routes/employees.routes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/employees/", EmployeeRoutes);

export default app;
