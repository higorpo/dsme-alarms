import { body } from "express-validator";

class CreatePropertyValidator {
    validate() {
        return [body("address").isString()];
    }
}

export { CreatePropertyValidator };
