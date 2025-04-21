import { Persona } from "./Persona";

export class Alumno extends Persona {
    private añoCursada:number

    constructor(pNombre:string, pApellido:string, pEdad:number, pAñoCursada:number) {
        super(pNombre, pApellido, pEdad)
        this.añoCursada = pAñoCursada
    }

    public getAñoCursada():number {
        return this.añoCursada
    }

    public setAñoCursada(pAñoCursada:number) { 
        this.añoCursada = pAñoCursada

    }

    presentarse(): string { 
        return (`${super.presentarse()}. Soy alumno y estoy en el ${this.añoCursada}° año de cursada.`)
    }

    

}