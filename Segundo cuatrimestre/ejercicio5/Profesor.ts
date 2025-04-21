import { Persona } from "./Persona";

export class Profesor extends Persona {
    private especialidad:string

    constructor(pNombre:string, pApellido:string, pEdad:number, pEspecialidad:string) {
        super(pNombre, pApellido, pEdad)
        this.especialidad = pEspecialidad
    }

    public getEspecialidad() {
        return this.especialidad
    }

    public setEspecialidad(pEspecialidad:string) {
        this.especialidad = pEspecialidad
    }

    presentarse(): string { 
        return (`${super.presentarse()}. Soy Profesor de ${this.especialidad}.`)
    }

}