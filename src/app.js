import express from "express";
import morgan from "morgan";

import db from "./db";

import EmployeeRoutes from "./routes/employees.routes";
import TripRoutes from "./routes/trips.routes";

import { createTypeTransports, createUsers } from "./lib/initialSetup";

const app = express();

createTypeTransports();
createUsers();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/employees", EmployeeRoutes);
app.use("/api/v1/trip", TripRoutes);

export default app;
