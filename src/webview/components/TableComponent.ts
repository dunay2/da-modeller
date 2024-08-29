// src/components/TableComponent.ts

import { Component } from './Component';
import { Table } from '../../models/Table';
import { SQLService } from '../../services/SQLService';

export class TableComponent extends Component {
    private table: Table;

    constructor(id: number, tableName: string, schema: string, database: string) {
        super(id, 'Table');
        this.table = new Table(tableName, schema, database);  // Instancia de Table hereda de SQLObject
    }

    render(): void {
        console.log(`Rendering TableComponent with ID: ${this.id} and Table: ${this.table.name}`);
        // Lógica para renderizar el componente en la UI
    }

    generateSQL(): string {
        // Delegar la generación de SQL al SQLService usando la instancia de Table
        return SQLService.generateSQL(this.table);
    }

    // Métodos que interactúan directamente con la instancia de Table (heredado de SQLObject)
    addAttribute(name: string, type: string, nullable: boolean, primaryKey: boolean, comment?: string) {
        this.table.addColumn(name, type, nullable, primaryKey, comment);
    }

    setGroupBy(columns: string[]) {
        this.table.setGroupBy(columns);
    }

    setHaving(condition: string) {
        this.table.setHaving(condition);
    }

    setQualify(condition: string) {
        this.table.setQualify(condition);
    }

    setLimit(limit: number) {
        this.table.setLimit(limit);
    }
}
