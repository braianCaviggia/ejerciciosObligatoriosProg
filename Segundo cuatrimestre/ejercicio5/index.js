"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alumno_1 = require("./Alumno");
const Curso_1 = require("./Curso");
const Profesor_1 = require("./Profesor");
let profe1 = new Profesor_1.Profesor("Juan", "Perez", 45, "Pintura");
let alumno1 = new Alumno_1.Alumno("Cristian", "Gonzalez", 19, 2);
let alumno2 = new Alumno_1.Alumno("Ezequel", "Gomez", 20, 2);
let alumno3 = new Alumno_1.Alumno("Gonzalo", "Lopez", 19, 2);
let curso1 = new Curso_1.Curso("Dibujo", profe1);
curso1.agregarAlumno(alumno1); //agrego alumnos
curso1.agregarAlumno(alumno2);
curso1.agregarAlumno(alumno3);
curso1.mostrarCurso(); //muestro el curso
console.log(profe1.presentarse()); //Presento al profesor
console.log(alumno1.presentarse()); //Presento al alumno
