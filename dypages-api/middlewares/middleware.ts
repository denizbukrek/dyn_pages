import { NextFunction, Response, Request } from 'express';
import translate from '../utils/translate';
import { ApiResponse } from '../models';
import { errorCode } from '../helpers/enums';
function middleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    if (req.xhr) {
        return res.status(500).send(<ApiResponse>{ error: { message:  translate.__('ClientError'), code: errorCode.clientError } });
    } else {
        return res.status(500).json(<ApiResponse>{ error: { message: translate.__('Error'), code: errorCode.error } });
    }
}
export = middleware;