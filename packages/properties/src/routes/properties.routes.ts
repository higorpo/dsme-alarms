import { Router } from "express";

import { PropertiesController } from "../controllers/PropertiesController";
import { CreatePropertyServiceImpl } from "../services/CreatePropertyServiceImpl";

const PropertiesRoutes = Router();

const createPropertyService = new CreatePropertyServiceImpl();
const controller = new PropertiesController(createPropertyService);

PropertiesRoutes.post("/", (req, res) => controller.create(req, res));

export { PropertiesRoutes };
