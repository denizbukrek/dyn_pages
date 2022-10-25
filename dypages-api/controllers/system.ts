import { NextFunction, Response, Request } from 'express';
import { ApiUrlRequest } from '../models/servicerequests';
import send from '../helpers/express-send';
import { ApiUrlResponse } from '../models/serviceresponses';
import { System, Users } from '../models';
import { Authorization } from '../middlewares/authorization';
import { Table } from '../models/table';

export class SystemController {

    public static GetPages(req: Request, res: Response, next: NextFunction) {
        var name: string = req.params.name;
        System.getPages(name, (err, data) => {
            if (err) {
                return next(err);
            } else {
                if (data[0].json.includes('User_Table')) {
                    Table.getTable((err, data) => {
                        if (err) {
                            return next(err);
                        } else {
                        }
                        let response: any = {
                            page: JSON.parse(data[0].json)
                        }
                        return send(res, next, null, response)
                    });
                }
                else {
                    let response: any = {
                        page: JSON.parse(data[0].json)
                    }
                    return send(res, next, null, response)
                }
            }
        });
    }
}