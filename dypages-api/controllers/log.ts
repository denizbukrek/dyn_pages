import { NextFunction, Response, Request } from 'express';
import { PushLogRequest } from '../models/servicerequests';
import { Log as LogModel } from '../models';
import send from '../helpers/express-send';
import { PushLogResponse } from '../models/serviceresponses';
import moment, { Moment } from "moment";

export class LogController {
    public static PushLog(req: Request, res: Response, next: NextFunction) {
        let logList = req.body as PushLogRequest;

        LogModel.PushLogs(logList.userId, logList.logs, (err, data: any) => {
            let response: PushLogResponse = {
                succeed: false
            };
            if (err) {
                return send(res, next, null, response);
            }
            response.succeed  = true;
            let lastLog = moment(data);
            response.lastLogTime  = lastLog.unix();
            return send(res, next, null, response);
        })
    }
}