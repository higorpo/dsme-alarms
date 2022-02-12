import { Router } from "express";

import { PropertiesController } from "../controllers/PropertiesController";
import { CreatePropertyServiceImpl } from "../services/CreatePropertyServiceImpl";
import { FindPropertyServiceImpl } from "../services/FindPropertyServiceImpl";
import { ListPropertiesServiceImpl } from "../services/ListPropertiesServiceImpl";

const PropertiesRoutes = Router();

const createPropertyService = new CreatePropertyServiceImpl();
const listPropertiesService = new ListPropertiesServiceImpl();
const findPropertyService = new FindPropertyServiceImpl();
const controller = new PropertiesController(
    createPropertyService,
    listPropertiesService,
    findPropertyService
);

PropertiesRoutes.get("/", (req, res) => controller.list(req, res));
PropertiesRoutes.get("/:id", (req, res) => controller.find(req, res));
PropertiesRoutes.post("/", (req, res) => controller.create(req, res));

export { PropertiesRoutes };
