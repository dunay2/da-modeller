/*
# [PUBLIC] [{{database}}] {{schema}}.{{tableName}}
## Descripcion: {{tableComment}}
## Notas: 
*/

CREATE TABLE IF NOT EXISTS {{database}}.{{schema}}.{{tableName}} (
    {{#each columns}}
    {{name}} {{type}} {{#unless nullable}}NOT{{/unless}} NULL{{#if primaryKey}} PRIMARY KEY{{/if}}{{#if comment}} COMMENT '{{comment}}'{{/if}}{{#if @last}}{{else}},{{/if}}
    {{/each}}
)
COMMENT = '{{tableComment}}';
