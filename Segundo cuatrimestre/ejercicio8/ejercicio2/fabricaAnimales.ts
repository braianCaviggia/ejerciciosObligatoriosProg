import { Pajaro } from "./Pajaro";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { IAnimal } from "./IAnimal";


export class fabricaAnimales {
    crearAnimal (animal : string, atributos: any) : IAnimal {
        if (animal === "perro") {
            return new Perro (atributos.color, atributos.raza)
        } else if (animal === "gato") {
            return new Gato (atributos.color, atributos.raza)
        } else if (animal === "pajaro") {
            return new Pajaro (atributos.color, atributos.especie)
        } else {
        throw new Error (`El animal ${animal} no se puede crear.`)
        }
    }
    
}