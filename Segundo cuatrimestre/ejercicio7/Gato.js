"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    emitirSonido() {
        console.log("¡Miau!");
    }
    tipoDeDieta() {
        console.log(`El tipo de dieta del ${this.getNombre()} tiene que ser: ricas en proteínas, moderadas en grasas y bajas en carbohidratos.`);
    }
}
exports.Gato = Gato;
