import { Property } from "@prisma/client";

interface ListPropertiesService {
    execute(): Promise<Property[]>;
}

export { ListPropertiesService };
