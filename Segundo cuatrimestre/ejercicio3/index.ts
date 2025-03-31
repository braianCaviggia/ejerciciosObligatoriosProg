//TRABAJO REALIZADO CON BRUNO ARENZANA Y BRAIAN CAVIGGIA

import { Colegio } from "./Colegio";
import { Alumno } from "./Alumno";
import { Docente } from "./Docente";

let alumno1 = new Alumno ("Felipe", "Rojas",8 );
let alumno2 = new Alumno ("Simon", "Lopez",7 );
let alumno3 = new Alumno ("Jose", "Gonzalez",8 );
let alumno4 = new Alumno ("Pepe", "Gimenez",4 );
let alumno5 = new Alumno ("Santiago", "Blanco",8 );


let docente1 = new Docente ("Jose", "Perez", "Ingles", []);
let docente2 = new Docente ("Hernan", "Gonzalez", "Literatura", []);

let colegio = new Colegio ("Cresta");


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
docente1.getAlumno().forEach(alumno => {console.log(`-${alumno.getApellido()}, ${alumno.getNombre()}`);});

console.log("\nAlumnos del docente 2:");
docente2.getAlumno().forEach(alumno => {console.log(`-${alumno.getApellido()}, ${alumno.getNombre()}`);});

console.log("ESTAS SON LAS NOTAS OBTENIDAS POR LOS ALUMNOS:");
colegio.GetListaAlumnos().forEach(alumno => {
    console.log(`Alumno: ${alumno.getNombre()} ${alumno.getApellido()}`);
    alumno.getNota();
});

colegio.SetExpulsarAlumno(alumno4)
colegio.SetDespedir(docente1)

console.log("ESTAS SON LAS NOTAS OBTENIDAS POR LOS ALUMNOS RESTANTES:");
colegio.GetListaAlumnos().forEach(alumno => {
    console.log(`Alumno: ${alumno.getNombre()} ${alumno.getApellido()}`);
    alumno.getNota();
});

