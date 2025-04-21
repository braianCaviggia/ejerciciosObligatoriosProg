"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(pNombreCurso, pProfesor) {
        this.alumnos = [];
        this.nombrecurso = pNombreCurso;
        this.profesor = pProfesor;
    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    mostrarAlumnos() {
        this.alumnos.forEach(e => {
            console.log(e.getNombre()); //recorro de estudiantes el nombre
        });
    }
    mostrarCurso() {
        console.log(`Este curso es sobre ${this.nombrecurso}`);
        console.log(`Esta dictado por el profesor ${this.profesor.getNombre()}`);
        console.log("Los alumnos que realizan este curso son:");
        this.mostrarAlumnos();
    }
}
exports.Curso = Curso;
