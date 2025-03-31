import { Alumno } from "./Alumno";

export class Docente {
    private nombre: string;
    private apellido: string;
    private materia:string;
    private alumnos: Alumno[]
    

    constructor (pNombre:string, pApellido:string, pMateria:string, pAlumnos:Alumno[]) {
        this.nombre = pNombre
        this.apellido = pApellido
        this.materia = pMateria
        this.alumnos = [] 
     }

     public agregarAlumno(nuevoAlumno: Alumno) {
        this.alumnos.push(nuevoAlumno);
    }   

     public getNombre():string {
        return this.nombre
     }
  
     public getApellido():string {
        return this.apellido
     }

     public getMateria():string {
        return this.materia
     }

     public getAlumno(): Alumno[] {
        return this.alumnos;
    }

     public setApellido(pApellido: string) {
        this.apellido = pApellido;
     }

     public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }

    public setMateria(pMateria: string){
        this.materia = pMateria
    }

    public setAlumnos(Alumnos: Alumno[]) {
        this.alumnos = Alumnos;
    }
}


