// src/services/SQLService.ts

import { SQLObject } from '../models/SQLObject';
import { Table } from '../models/Table';
import { QuerySQL } from '../models/QuerySQL';

export class SQLService {
    static generateSQL(sqlObject: SQLObject): string {
        if (sqlObject instanceof Table) {
            return (sqlObject as Table).getBasicCreateSQL();
        } else if (sqlObject instanceof QuerySQL) {
            return (sqlObject as QuerySQL).getSelectSQL();
        }
        throw new Error('Unsupported SQLObject type');
    }
}
