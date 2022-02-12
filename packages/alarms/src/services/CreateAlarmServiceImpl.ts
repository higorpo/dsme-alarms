import { Alarm } from "../../generated/client";
import { prisma } from "../config/prisma";
import { AlreadyExistsException } from "../exceptions/AlreadyExistsException";
import {
    CreateAlarmService,
    CreateAlarmServiceDTO,
} from "./CreateAlarmService";

class CreateAlarmServiceImpl implements CreateAlarmService {
    async execute({
        propertyId,
        isActivated,
    }: CreateAlarmServiceDTO): Promise<Alarm> {
        const alarmCount = await prisma.alarm.count({
            where: {
                propertyId,
            },
        });

        if (alarmCount > 0) {
            throw new AlreadyExistsException("Alarm already exists");
        }

        const alarm = prisma.alarm.create({
            data: {
                isActivated,
                propertyId,
            },
        });

        return alarm;
    }
}

export { CreateAlarmServiceImpl };
