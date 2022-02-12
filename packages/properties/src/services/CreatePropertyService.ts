import { Property } from "@prisma/client";

interface CreatePropertyServiceDTO {
    address: string;
    ownerName: string;
    ownerPhone: string;
}

interface CreatePropertyService {
    execute(data: CreatePropertyServiceDTO): Promise<Property>;
}

export { CreatePropertyService, CreatePropertyServiceDTO };
