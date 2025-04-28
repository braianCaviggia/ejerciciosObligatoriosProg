"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
const Animal_1 = require("./Animal");
class Perro extends Animal_1.Animal {
    emitirSonido() {
        console.log("¡Guau!");
    }
    tipoDeDieta() {
        console.log(`El tipo de dieta del ${this.getNombre()} tiene que ser: proteínas de origen animal, carbohidratos, grasas saludables, vitaminas y minerales.`);
    }
}
exports.Perro = Perro;
