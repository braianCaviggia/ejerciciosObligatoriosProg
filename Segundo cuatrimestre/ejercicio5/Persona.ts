export class Persona {

    private nombre:string;
    private apellido:string;
    private edad:number;

    constructor(pNombre:string, pApellido:string, pEdad:number) {
        this.nombre = pNombre
        this.apellido = pApellido
        this.edad = pEdad
    }

    public getNombre():string {
        return this.nombre
    }

    public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }

    public getApellido():string {
        return this.apellido
    }

    public setApellido(pApellido: string) {
        this.apellido = pApellido;
    }

    public getEdad():number {
        return this.edad
    }

    public setEdad(pEdad: number) {
        this.edad = pEdad;
    }

    presentarse():string {
        return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    }


}