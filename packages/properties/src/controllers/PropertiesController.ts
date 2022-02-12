import { Request, Response } from "express";

class PropertiesController {
    create(req: Request, res: Response) {
        res.send("Hello World Properties!");
    }
}

export { PropertiesController };
