import { IAnimal } from "./IAnimal";

export class Pajaro implements IAnimal {
    private color: string
    private especie : string

     constructor(pColor:string, pEspecie: string) {
        this.color = pColor
        this.especie = pEspecie
    }

    hacerSonido() {
        console.log("Pio pio")
    }

    mover() {
        console.log("El pajaro está volando")
    }
}