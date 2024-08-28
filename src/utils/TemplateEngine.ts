import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

export class TemplateEngine {
    /**
     * Renders a template with the given context data.
     * @param templatePath - Path to the Handlebars template file.
     * @param context - The data to inject into the template.
     * @returns The rendered string with all placeholders replaced by the context data.
     */
    static render(templatePath: string, context: object): string {
        try {
            // Read the template file content
            const templateContent = fs.readFileSync(templatePath, 'utf-8');

            // Compile the template using Handlebars
            const template = Handlebars.compile(templateContent);

            // Render the template with the provided context
            return template(context);
        } catch (error) {
            const err = error as Error; // Type assertion
            console.error(`Error rendering template: ${err.message}`);
            throw err;
        }
        
    }
}
