import db from '../db';

export class Log {
  
    id: number;
    user_id: number;
    log_time: Date;
    chanel: string;
    payload: string;

    static PushLogs(userId: number, logs: Log[], callback: (error: any, data?: any) => void) {
        db.log.insertLogs(userId, logs).
            then(function (data: any) {
                callback(null,data[data.length -1].max);
            })
            .catch(function (err) {
                if (err)
                    console.error(err);
                callback(err);
            });
    }
}