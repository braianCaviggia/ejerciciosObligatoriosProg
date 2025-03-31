import { Alumno } from "./Alumno";
import { Docente } from "./Docente";

export class Colegio {

    private docentes: Docente[] = [];
    private alumno: Alumno[] = [];
    private nombreColegio: string;

    constructor (pNombre:string) {
        this.nombreColegio = pNombre
    }


    public setContratar(docente : Docente) {
        this.docentes.push(docente)
        console.log("Docente contratado")
        console.log("Lista Actual : -------------->");
        console.log(this.docentes)
    }

    public SetMatricular(alumno: Alumno) {
        this.alumno.push(alumno);
        console.log("Alumno Registrado");
        console.log("Lista Actual : -------------->");
        console.log(this.alumno)
    }

    public SetDespedir(docente: Docente) {
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

        public SetExpulsarAlumno(alumno: Alumno) {
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

    public getContratar(): Docente[] {
        return this.docentes;
    }

    public getDespedir(): Docente[] {
        return this.docentes;
    }

    public getMatricular(): Alumno[] {
        return this.alumno;
    }

    public getExpulsar(): Alumno[] {
        return this.alumno
    }

    public GetListaAlumnos(): Alumno[] {
        return this.alumno;
    }

}