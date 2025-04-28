import { Animal } from "./Animal";

export class Perro extends Animal {
    emitirSonido(): void {
        console.log("¡Guau!")
    }

    tipoDeDieta(): void {
        console.log(`El tipo de dieta del ${this.getNombre()} tiene que ser: altas en proteínas de origen animal, carbohidratos, grasas saludables, vitaminas y minerales.`)
    }
}