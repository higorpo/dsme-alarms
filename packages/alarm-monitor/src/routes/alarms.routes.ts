import { Router, Request, Response } from "express";

import { MonitorController } from "../controllers/MonitorController";
import { CreateMonitorServiceImpl } from "../services/CreateMonitorServiceImpl";
import { CreateMonitorValidator } from "../validators/CreateMonitorValidator";

const AlarmsRoutes = Router();

const createMonitorService = new CreateMonitorServiceImpl();
const controller = new MonitorController(createMonitorService);

AlarmsRoutes.post(
    "/",
    new CreateMonitorValidator().validate(),
    (req: Request, res: Response) => controller.create(req, res)
);

export { AlarmsRoutes };
