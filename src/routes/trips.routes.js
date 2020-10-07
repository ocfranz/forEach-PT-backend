import { Router } from "express";

import * as tripController from "../controllers/trip.controller";

const router = Router();

router.get("/", tripController.getAllTrips);

router.get("/:id", tripController.getTripById);

router.post("/", tripController.createNewTrip);

export default router;
