"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const Persona_1 = require("./Persona");
class Alumno extends Persona_1.Persona {
    constructor(pNombre, pApellido, pEdad, pAñoCursada) {
        super(pNombre, pApellido, pEdad);
        this.añoCursada = pAñoCursada;
    }
    getAñoCursada() {
        return this.añoCursada;
    }
    setAñoCursada(pAñoCursada) {
        this.añoCursada = pAñoCursada;
    }
    presentarse() {
        return (`${super.presentarse()}. Soy alumno y estoy en el ${this.añoCursada}° año de cursada.`);
    }
}
exports.Alumno = Alumno;
