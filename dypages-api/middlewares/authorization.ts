import { NextFunction, Response, Request } from 'express';
import passport, { AuthenticateOptions } from 'passport';
import BearerStrategy from 'passport-http-bearer';
import jwt from 'jwt-simple';
import Route from 'route-parser';
import send from '../helpers/express-send';
import translate from '../utils/translate';
import { errorCode } from '../helpers/enums';
import { BasicStrategy } from 'passport-http';

export class Authorization {
    private static _authenticateOptions: AuthenticateOptions = {
        session: false
    }
    private static _facebookAuthenticateOptions: AuthenticateOptions = {
        session: false,
        scope: ['email']
    }

    static initialize(): any {
        passport.use(
            new BasicStrategy(function (username, password, done) {
                return done(null, true)
            })
        );
    }

    static middleware(req: Request, res: Response, next: NextFunction): void {
        let regStr = new RegExp("('(''|[^'])*')|(;)|(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b)");
        if (!req.body.data && regStr.test(JSON.stringify(req.body))) {
            return send(res, next, {
                code: errorCode.reqInvalid,
                message: translate.__('ReqInvalid'),
                statuscode: 500
            });
        }

      
        if (getPages.match(req.path) && req.method == "GET") 
        {
            next();
        } 
    }

    static generateToken(userid: number): string {
        var payload: PayLoad = {
            id: userid,
            timestamp: Date.now(),
            endtime: Date.now() + (48 * 60 * 60 * 1000)
        }
        var token = jwt.encode(payload, process.env.JWT_SECRET);
        return token;
    }

    public static sendBearerTokenHeader(userid: number, res: any) {
        var token: string = Authorization.generateToken(userid);
        Authorization.sendAuthorization("Bearer " + token, res);
    }

    private static sendAuthorization(value: string, res: any) {
        res.header("Authorization", value);
    }
}

interface PayLoad {
    id: number,
    timestamp: number,
    endtime: number
}
class BearerHeaderError {
    realm: string;
    error: string;
    error_description: string;
}

enum App {
    Client = 0,
    ClientMobileApi = 2,
}

export enum Prefix {
    getPages = "/dypages/:name"
}

const getPages = new Route(Prefix.getPages);
Authorization.initialize();