import { fabricaAnimales } from "./fabricaAnimales";
import { IAnimal } from "./IAnimal";
import { Gato } from "./Gato";
import { Perro } from "./Perro";
import { Pajaro } from "./Pajaro";

let animal = new fabricaAnimales()

let perro = animal.crearAnimal("perro", {color:"Negro", raza: "Caniche"})
let gato = animal.crearAnimal("gato", {color:"Blanco", raza: "Siames"})
let pajaro = animal.crearAnimal("pajaro", {color:"Amarillo", especie: "Canario"})

console.log(perro)
console.log(gato)
console.log(pajaro)

perro.hacerSonido()
perro.mover()

gato.hacerSonido()
gato.mover()

pajaro.hacerSonido()
pajaro.mover()