import { Animal } from "./Animal";

export class Gato extends Animal {
        emitirSonido(): void {
            console.log("¡Miau!")
        }
    
        tipoDeDieta(): void {
            console.log(`El tipo de dieta del ${this.getNombre()} tiene que ser: ricas en proteínas, moderadas en grasas y bajas en carbohidratos.`)
        }
    }