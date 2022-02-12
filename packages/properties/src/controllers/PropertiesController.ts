import { Request, Response } from "express";
import { validationResult } from "express-validator";

class PropertiesController {
    create(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        return res.send("Hello World Properties!");
    }
}

export { PropertiesController };
