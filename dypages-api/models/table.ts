import md5 from 'md5';
import db from '../db';
import { plainToClass } from 'class-transformer';

export class Table {
    
    public static getTable( callback: (error: any, data?:any) => void) {        
        db.table.getTables()
            .then(function (data: any) {
                callback(null, data);
            })
            .catch(function (err) {
                callback(err);
            });
    }
    
}