"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    constructor(pNombre, pApellido, pNota) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nota = pNota;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getNota() {
        let nuevaNota = this.nota;
        if (nuevaNota >= 7 && nuevaNota <= 10) {
            this.nota = nuevaNota;
            console.log(`aprobaste con ${nuevaNota} puntos, felicidades`);
        }
        else if (nuevaNota >= 0 && nuevaNota <= 7) {
            console.log(`desaprobaste con una nota de ${nuevaNota}`);
        }
        else if (nuevaNota < 0 && nuevaNota > 10) {
            console.log(`Nota no Valida`);
        }
    }
    setNombre(pNombre) {
        this.nombre = pNombre;
    }
    setApellido(pApellido) {
        this.apellido = pApellido;
    }
    setNota(nuevaNota) {
        this.nota = nuevaNota;
    }
}
exports.Alumno = Alumno;
