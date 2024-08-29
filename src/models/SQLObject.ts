// src/models/SQLObject.ts
import { ISSQLObject } from '../interfaces/ISSQLObject';

export class SQLObject implements ISSQLObject {
    public name: string;
    public schema: string;
    public database: string;
    public columns: Array<{
        name: string,
        type: string,
        nullable: boolean,
        primaryKey: boolean,
        comment?: string
    }> = [];
    public groupBy: string[] = [];
    public having: string | null = null;
    public qualify: string | null = null;
    public limit: number | null = null;

    constructor(name: string, schema: string, database: string) {
        this.name = name;
        this.schema = schema;
        this.database = database;
    }

    addColumn(name: string, type: string, nullable: boolean, primaryKey: boolean, comment?: string): void {
        this.columns.push({ name, type, nullable, primaryKey, comment });
    }

    setGroupBy(columns: string[]): void {
        this.groupBy = columns;
    }

    setHaving(condition: string): void {
        this.having = condition;
    }

    setQualify(condition: string): void {
        this.qualify = condition;
    }

    setLimit(limit: number): void {
        this.limit = limit;
    }

    // El método generateSQL no está implementado aquí porque SQLObject es una clase base
    // que debe ser extendida por implementaciones específicas que generarán el SQL según el tipo de base de datos.
    generateSQL(): string {
        throw new Error("Method 'generateSQL()' must be implemented.");
    }
}
