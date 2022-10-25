import { IDatabase, IMain, ColumnSet } from 'pg-promise';

/*
This repository mixes hard-coded and dynamic SQL, primarily to show a diverse example of using both.
*/

export class SystemRepository {
    
    constructor(db: any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
        // set-up all ColumnSet objects, if needed:
    }
    
    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db: IDatabase<any>;
    
    private pgp: IMain;

    public getPages(name:string) {
        return this.db.manyOrNone('select json from pages where name=${name}',{name});
    }
    

      

}
