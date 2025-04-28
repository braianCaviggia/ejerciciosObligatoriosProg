import { Perro } from "./Perro";
import { Gato } from "./Gato";

let perro = new Perro ("Perro")
let gato = new Gato("Gato")

perro.emitirSonido()
perro.moverse()
perro.tipoDeDieta()

console.log("-----------------------------------")

gato.emitirSonido()
gato.moverse()
gato.tipoDeDieta()