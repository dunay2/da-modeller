// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TableComponent } from './webview/components/TableComponent'; 

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mydemo" is now active!');


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposableHelloWorld  = vscode.commands.registerCommand('mydemo.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from mydemo!');
	});


    // Register the command for creating a table in Snowflake
    const disposableCreateTable = vscode.commands.registerCommand('mydemo.createTable', () => {
        // Define the columns for the table
        const columns = [
            { name: 'id', type: 'INT', nullable: false, primaryKey: true, comment: 'Primary key' },
            { name: 'name', type: 'VARCHAR', nullable: false, primaryKey: false, comment: 'User name' },
            { name: 'email', type: 'VARCHAR', nullable: false, primaryKey: false, comment: 'User email' },
            { name: 'created_at', type: 'TIMESTAMP', nullable: false, primaryKey: false, comment: 'Creation timestamp' }
        ];
        const tableComponent = new TableComponent(1, 'Users', 'public', 'MyDatabase');

        // Agregar las columnas usando métodos de TableComponent
        columns.forEach(column => tableComponent.addAttribute(column.name, column.type, column.nullable, column.primaryKey, column.comment));
        
        // Generar y mostrar el SQL usando el componente
        const sql = tableComponent.generateSQL(); 
        vscode.window.showInformationMessage('Generated SQL:\n' + sql);
    });

	context.subscriptions.push(disposableHelloWorld );
    context.subscriptions.push(disposableCreateTable );
}

export function deactivate() {}
