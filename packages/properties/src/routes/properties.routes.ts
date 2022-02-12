import { Router } from "express";

import { PropertiesController } from "../controllers/PropertiesController";

const PropertiesRoutes = Router();

const controller = new PropertiesController();

PropertiesRoutes.post("/", controller.create);

export { PropertiesRoutes };
