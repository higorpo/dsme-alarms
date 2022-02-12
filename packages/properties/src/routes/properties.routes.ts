import { Router } from "express";

import { PropertiesController } from "../controllers/PropertiesController";
import { CreatePropertyServiceImpl } from "../services/CreatePropertyServiceImpl";
import { ListPropertiesServiceImpl } from "../services/ListPropertiesServiceImpl";

const PropertiesRoutes = Router();

const createPropertyService = new CreatePropertyServiceImpl();
const listPropertiesService = new ListPropertiesServiceImpl();
const controller = new PropertiesController(
    createPropertyService,
    listPropertiesService
);

PropertiesRoutes.get("/", (req, res) => controller.list(req, res));
PropertiesRoutes.post("/", (req, res) => controller.create(req, res));

export { PropertiesRoutes };
