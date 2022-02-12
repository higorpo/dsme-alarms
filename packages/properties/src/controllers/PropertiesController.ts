import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { AlreadyExistsException } from "../exceptions/AlreadyExistsException";
import { CreatePropertyService } from "../services/CreatePropertyService";

class PropertiesController {
    constructor(private createPropertyService: CreatePropertyService) {
        //
    }

    async create(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { address, ownerName, ownerPhone } = req.body;

        try {
            const property = await this.createPropertyService.execute({
                address,
                ownerName,
                ownerPhone,
            });

            return res.status(201).json(property).send();
        } catch (err) {
            if (err instanceof AlreadyExistsException) {
                return res.status(400).send({ error: err.message });
            }
            return res.status(500).send({ error: "Unexpected error" });
        }
    }
}

export { PropertiesController };
