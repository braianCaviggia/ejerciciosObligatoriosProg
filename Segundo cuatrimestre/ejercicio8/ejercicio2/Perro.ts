import { IAnimal } from "./IAnimal";

export class Perro implements IAnimal {
    private color: string
    private raza : string
 
    constructor(pColor:string, pRaza: string) {
        this.color = pColor
        this.raza = pRaza
    }
       
    hacerSonido() {
        console.log("Guau guau")
    }

    mover() {
        console.log("El perro se está moviendo")
    }
}