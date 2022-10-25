import { NextFunction, Response, Request } from 'express';
import send from '../helpers/express-send';
import { Table } from '../models/table';

export class TableController {

    public static getList(req: Request, res: Response, next: NextFunction) {
        Table.getTable((err, data) => {
            if (err) {
                return next(err);
            } else {
                let response: any = {
                    list: data
                }
                return send(res, next, null, response)
            }
        });
    }

    
}