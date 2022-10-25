import { IDatabase, IMain, ColumnSet } from 'pg-promise';
import { IResult } from 'pg-promise/typescript/pg-subset';
import sqlProvider = require('../sql');
import { Log } from '../../models';

const sql = sqlProvider.users;

/*
 This repository mixes hard-coded and dynamic SQL, primarily to show a diverse example of using both.
 */

export class LogRepository {

    constructor(db: any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }

    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db: IDatabase<any>;

    private pgp: IMain;


    insertLogs(userId: number, logs: Log[]) {
        return this.db.tx((t) => {
            const insertQuery = logs.map(log => {
                return t.none(`INSERT INTO logs 
                                (user_id, log_time, chanel, payload) 
                            VALUES
                                (${userId},'${log.log_time}', '${log.chanel}', '${log.payload}');`,
                    { userId, log });
            });
            const checkQuery = t.one(`SELECT MAX(log_time) FROM logs WHERE user_id = ${userId}`, userId);

            insertQuery.push(checkQuery);
            return t.batch(insertQuery);
        })
    }


}