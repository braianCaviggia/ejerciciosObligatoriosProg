"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(pNombre, pApellido, pEdad) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(pNombre) {
        this.nombre = pNombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(pApellido) {
        this.apellido = pApellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(pEdad) {
        this.edad = pEdad;
    }
    presentarse() {
        return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }
}
exports.Persona = Persona;
