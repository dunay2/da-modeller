    import { TemplateEngine } from '../utils/TemplateEngine';
    import * as path from 'path';

    interface Column {
        name: string;
        type: string;
        nullable: boolean;
        primaryKey: boolean;
        comment?: string;
    }

    export class Table {
        author: string;
        date: string;
        database: string;
        schema: string;
        tableName: string;
        tableComment: string;
        columns: Column[];

        /**
         * Constructor for the Table class.
         * @param author - The author of the SQL statement.
         * @param database - The name of the database.
         * @param schema - The schema in which the table resides.
         * @param tableName - The name of the table to be created.
         * @param tableComment - A comment describing the table.
         * @param columns - An array of column definitions for the table.
         */
        constructor(
            author: string,
            database: string,
            schema: string,
            tableName: string,
            tableComment: string,
            columns: Column[]
        ) {
            this.author = author;
            this.date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
            this.database = database;
            this.schema = schema;
            this.tableName = tableName;
            this.tableComment = tableComment;
            this.columns = columns;
        }

        /**
         * Generates the SQL string for creating the table using a template.
         * @returns The rendered SQL string.
         */
        generateSQL(): string {
            const templatePath = path.join(__dirname, '..', 'templates', 'createTableTemplate.sql');
            const context = {
                author: this.author,
                date: this.date,
                database: this.database,
                schema: this.schema,
                tableName: this.tableName,
                tableComment: this.tableComment,
                columns: this.columns
            };
            return TemplateEngine.render(templatePath, context);
        }

        /**
         * Logs the generated SQL to the console. 
         * Typically, you would execute this SQL on the database.
         */
        create(): void {
            const sql = this.generateSQL();
            console.log(`Generating SQL to create table:\n${sql}`);
            // Here you would add logic to execute the SQL in Snowflake
        }

        // Other methods can be added here as needed
    }
