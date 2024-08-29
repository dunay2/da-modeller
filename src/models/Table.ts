// src/models/Table.ts
import { SQLObject } from './SQLObject';

export class Table extends SQLObject {
    constructor(name: string, schema: string, database: string) {
        super(name, schema, database);
    }

    // Este método es genérico y puede ser sobrescrito por implementaciones específicas
    getBasicCreateSQL(): string {
        let sql = `CREATE TABLE IF NOT EXISTS ${this.database}.${this.schema}.${this.name} (\n`;

        sql += this.columns.map(column => {
            let columnSQL = `${column.name} ${column.type}`;
            if (!column.nullable) {
                columnSQL += ' NOT NULL';
            }
            if (column.primaryKey) {
                columnSQL += ' PRIMARY KEY';
            }
            if (column.comment) {
                columnSQL += ` COMMENT '${column.comment}'`;
            }
            return columnSQL;
        }).join(',\n');

        sql += `\n);`;

        return sql;
    }
}
