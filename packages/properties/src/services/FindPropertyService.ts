import { Property } from "@prisma/client";

interface FindPropertyService {
    execute(propertyId: string): Promise<Property>;
}

export { FindPropertyService };
