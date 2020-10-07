import { Router } from "express";

import * as typesController from "../controllers/typeTransport.controller";

const router = Router();

router.get("/", typesController.getAllTypes);

export default router;
