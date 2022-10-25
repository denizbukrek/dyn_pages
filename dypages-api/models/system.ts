
import db from '../db';

export class System {
    
    public static getPages(name: string, callback: (error: any, data?:any) => void) {        
        db.system.getPages(name)
            .then(function (data: any) {
                callback(null, data);
            })
            .catch(function (err) {
                callback(err);
            });
    }
    
}