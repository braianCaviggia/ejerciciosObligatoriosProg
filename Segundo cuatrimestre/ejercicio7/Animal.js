"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(pNombreAnimal) {
        this.nombreAnimal = pNombreAnimal;
    }
    moverse() {
        console.log(`${this.nombreAnimal} se mueve...`);
    }
    setNombre(pNombreAnimal) {
        this.nombreAnimal = pNombreAnimal;
    }
    getNombre() {
        return this.nombreAnimal;
    }
}
exports.Animal = Animal;
