import { IAnimal } from "./IAnimal";

export class Gato implements IAnimal {
    private color: string
    private raza : string

     constructor(pColor:string, pRaza: string) {
        this.color = pColor
        this.raza = pRaza
    }

    hacerSonido() {
        console.log("Miau miau")
    }

    mover() {
        console.log("El gato se está moviendo")
    }
}