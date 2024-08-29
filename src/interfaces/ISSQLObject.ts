// src/interfaces/ISSQLObject.ts

export interface ISSQLObject {
    name: string;
    schema: string;
    database: string;
    columns: Array<{
        name: string,
        type: string,
        nullable: boolean,
        primaryKey: boolean,
        comment?: string
    }>;

    addColumn(name: string, type: string, nullable: boolean, primaryKey: boolean, comment?: string): void;
    setGroupBy(columns: string[]): void;
    setHaving(condition: string): void;
    setQualify(condition: string): void;
    setLimit(limit: number): void;
    generateSQL(): string;
}
