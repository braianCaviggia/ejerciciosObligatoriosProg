"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heladera = void 0;
const Electrodomestico_1 = require("./Electrodomestico");
class Heladera extends Electrodomestico_1.Electodomestico {
    constructor(pMarca, pModelo, pEncendido, pTemperatura) {
        super(pMarca, pModelo, pEncendido);
        this.temperatura = pTemperatura;
    }
    cambiarTemperatura(nuevaTemp) {
        return this.temperatura = nuevaTemp;
    }
}
exports.Heladera = Heladera;
