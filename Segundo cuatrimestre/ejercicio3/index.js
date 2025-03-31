"use strict";
// Ejercicio 1
// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
//  Los profesores deben tener un listado de sus alumnos.
// Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
// La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
Object.defineProperty(exports, "__esModule", { value: true });
const Colegio_1 = require("./Colegio");
const Alumno_1 = require("./Alumno");
const Docente_1 = require("./Docente");
let alumno1 = new Alumno_1.Alumno("Felipe", "Rojas", 8);
let alumno2 = new Alumno_1.Alumno("Simon", "Lopez", 7);
let alumno3 = new Alumno_1.Alumno("Jose", "Gonzalez", 8);
let alumno4 = new Alumno_1.Alumno("Pepe", "Gimenez", 4);
let alumno5 = new Alumno_1.Alumno("Santiago", "Blanco", 8);
let docente1 = new Docente_1.Docente("Jose", "Perez", "Ingles", []);
let docente2 = new Docente_1.Docente("Hernan", "Gonzalez", "Literatura", []);
let colegio = new Colegio_1.Colegio("Cresta");
//matriculo alumnos llamando funcion clase colegio
colegio.SetMatricular(alumno1);
colegio.SetMatricular(alumno2);
colegio.SetMatricular(alumno3);
colegio.SetMatricular(alumno4);
colegio.SetMatricular(alumno5);
//matriculo docente llamando funcion clase colegio
colegio.setContratar(docente1);
colegio.setContratar(docente2);
//le asigno alumnos a cada docente
docente1.agregarAlumno(alumno1);
docente1.agregarAlumno(alumno2);
docente1.agregarAlumno(alumno3);
docente2.agregarAlumno(alumno4);
docente2.agregarAlumno(alumno5);
console.log("\nAlumnos del docente 1:");
docente1.getAlumno().forEach(alumno => { console.log(`-${alumno.getApellido()}, ${alumno.getNombre()}`); });
console.log("\nAlumnos del docente 2:");
docente2.getAlumno().forEach(alumno => { console.log(`-${alumno.getApellido()}, ${alumno.getNombre()}`); });
console.log("ESTAS SON LAS NOTAS OBTENIDAS POR LOS ALUMNOS:");
colegio.GetListaAlumnos().forEach(alumno => {
    console.log(`Alumno: ${alumno.getNombre()} ${alumno.getApellido()}`);
    alumno.getNota();
});
colegio.SetExpulsarAlumno(alumno4);
colegio.SetDespedir(docente1);
console.log("ESTAS SON LAS NOTAS OBTENIDAS POR LOS ALUMNOS RESTANTES:");
colegio.GetListaAlumnos().forEach(alumno => {
    console.log(`Alumno: ${alumno.getNombre()} ${alumno.getApellido()}`);
    alumno.getNota();
});
