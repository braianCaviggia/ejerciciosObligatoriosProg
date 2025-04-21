import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
import { Persona } from "./Persona";
import { Profesor } from "./Profesor";

let profe1 = new Profesor ("Juan","Perez",45,"Pintura")

let alumno1 = new Alumno ("Cristian","Gonzalez",19,2)
let alumno2 = new Alumno ("Ezequel","Gomez",20,2)
let alumno3 = new Alumno ("Gonzalo","Lopez",19,2)

let curso1 = new Curso ("Dibujo", profe1)

curso1.agregarAlumno(alumno1) //agrego alumnos
curso1.agregarAlumno(alumno2)
curso1.agregarAlumno(alumno3)

curso1.mostrarCurso() //muestro el curso

console.log(profe1.presentarse()) //Presento al profesor

console.log(alumno1.presentarse()) //Presento al alumno


