import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal {
    private nombreAnimal : string

    constructor(pNombreAnimal:string) {
        this.nombreAnimal = pNombreAnimal
        
    }
    moverse():void {
        console.log(`${this.nombreAnimal} se mueve...`)
    }

    abstract emitirSonido(): void 

    abstract tipoDeDieta():void 


    public setNombre(pNombreAnimal:string) {
        this.nombreAnimal = pNombreAnimal
    } 

    public getNombre():string {
        return this.nombreAnimal

    }


}