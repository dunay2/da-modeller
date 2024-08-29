// src/models/QuerySQL.ts

import { SQLObject } from './SQLObject';

export class QuerySQL extends SQLObject {
    constructor(name: string, schema: string, database: string) {
        super(name, schema, database);
    }

    // This method can be customized as needed for QuerySQL-specific logic
    getSelectSQL(): string {
        let sql = `SELECT ${this.columns.map(col => col.name).join(', ')}\nFROM ${this.database}.${this.schema}.${this.name}\n`;

        if (this.groupBy.length > 0) {
            sql += `GROUP BY ${this.groupBy.join(', ')}\n`;
        }

        if (this.having) {
            sql += `HAVING ${this.having}\n`;
        }

        if (this.qualify) {
            sql += `QUALIFY ${this.qualify}\n`;
        }

        if (this.limit !== null) {
            sql += `LIMIT ${this.limit};\n`;
        }

        return sql;
    }
}
