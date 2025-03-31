"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
class Docente {
    constructor(pNombre, pApellido, pMateria, pAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.alumnos = [];
    }
    agregarAlumno(nuevoAlumno) {
        this.alumnos.push(nuevoAlumno);
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getMateria() {
        return this.materia;
    }
    getAlumno() {
        return this.alumnos;
    }
    setApellido(pApellido) {
        this.apellido = pApellido;
    }
    setNombre(pNombre) {
        this.nombre = pNombre;
    }
    setMateria(pMateria) {
        this.materia = pMateria;
    }
    setAlumnos(Alumnos) {
        this.alumnos = Alumnos;
    }
}
exports.Docente = Docente;
