import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Curso {
    private profesor:Profesor 
    private alumnos:Alumno[] = []
    private nombrecurso:string

    constructor(pNombreCurso:string, pProfesor:Profesor) {
        this.nombrecurso = pNombreCurso
        this.profesor = pProfesor
    }

    public agregarAlumno(alumno:Alumno) {
        this.alumnos.push(alumno)
    }

    mostrarAlumnos(): void {
        this.alumnos.forEach(e => {
          console.log(e.getNombre());  //recorro de estudiantes el nombre
        });
      }

      mostrarCurso() {
        console.log(`Este curso es sobre ${this.nombrecurso}`)
        console.log(`Esta dictado por el profesor ${this.profesor.getNombre()}`)
        console.log("Los alumnos que realizan este curso son:")
        this.mostrarAlumnos()
      }

}