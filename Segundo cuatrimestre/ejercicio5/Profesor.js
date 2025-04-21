"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const Persona_1 = require("./Persona");
class Profesor extends Persona_1.Persona {
    constructor(pNombre, pApellido, pEdad, pEspecialidad) {
        super(pNombre, pApellido, pEdad);
        this.especialidad = pEspecialidad;
    }
    getEspecialidad() {
        return this.especialidad;
    }
    setEspecialidad(pEspecialidad) {
        this.especialidad = pEspecialidad;
    }
    presentarse() {
        return (`${super.presentarse()}. Soy Profesor de ${this.especialidad}.`);
    }
}
exports.Profesor = Profesor;
