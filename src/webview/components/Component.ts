// src/components/Component.ts

export abstract class Component {
    public id: number;
    public type: string;

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }

    abstract render(): void;  // Método abstracto para ser implementado por las subclases

}
