import { Router } from "express";

import { CreatePropertyValidator } from "../validators/CreatePropertyValidator";
import { PropertiesRoutes } from "./properties.routes";

const routes = Router();

routes.use(
    "/properties",
    new CreatePropertyValidator().validate(),
    PropertiesRoutes
);

export { routes };
