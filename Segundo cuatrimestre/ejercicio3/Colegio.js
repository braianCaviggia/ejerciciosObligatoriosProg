"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colegio = void 0;
class Colegio {
    constructor(pNombre) {
        this.docentes = [];
        this.alumno = [];
        this.nombreColegio = pNombre;
    }
    setContratar(docente) {
        this.docentes.push(docente);
        console.log("Docente contratado");
        console.log("Lista Actual : -------------->");
        console.log(this.docentes);
    }
    SetMatricular(alumno) {
        this.alumno.push(alumno);
        console.log("Alumno Registrado");
        console.log("Lista Actual : -------------->");
        console.log(this.alumno);
    }
    SetDespedir(docente) {
        for (let i = 0; i < this.docentes.length; i++) {
            const d = this.docentes[i];
            if (d.getNombre() === docente.getNombre() && d.getApellido() === docente.getApellido()) {
                console.log(`Docente ${d.getNombre()} ${d.getApellido()} despedido.`);
                this.docentes.splice(i, 1);
                return;
            }
        }
        console.log("Docente no encontrado.");
    }
    SetExpulsarAlumno(alumno) {
        for (let i = 0; i < this.alumno.length; i++) {
            const a = this.alumno[i];
            if (a.getNombre() === alumno.getNombre() && a.getApellido() === alumno.getApellido()) {
                console.log(`Alumno ${a.getNombre()} ${a.getApellido()} expulsado.`);
                this.alumno.splice(i, 1);
                return;
            }
        }
        console.log("Alumno no encontrado.");
    }
    getContratar() {
        return this.docentes;
    }
    getDespedir() {
        return this.docentes;
    }
    getMatricular() {
        return this.alumno;
    }
    getExpulsar() {
        return this.alumno;
    }
    GetListaAlumnos() {
        return this.alumno;
    }
}
exports.Colegio = Colegio;
