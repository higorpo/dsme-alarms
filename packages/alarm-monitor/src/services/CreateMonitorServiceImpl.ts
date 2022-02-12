import axios from "axios";

import { Monitor } from "../../generated/client";
import { prisma } from "../config/prisma";
import { NotFound } from "../exceptions/NotFound";
import { CreateMonitorService } from "./CreateMonitorService";
import { NotifyService } from "./NotifyService";

class CreateMonitorServiceImpl implements CreateMonitorService {
    constructor(private notifyService: NotifyService) {
        //
    }

    async execute(alarmId: string): Promise<Monitor> {
        try {
            await axios.get(`${process.env.HOST}/alarms/${alarmId}`);
        } catch (err) {
            throw new NotFound("Alarm not found");
        }

        const monitor = prisma.monitor.create({
            data: {
                alarmId,
            },
        });

        await this.notifyService.execute(alarmId);

        return monitor;
    }
}

export { CreateMonitorServiceImpl };
