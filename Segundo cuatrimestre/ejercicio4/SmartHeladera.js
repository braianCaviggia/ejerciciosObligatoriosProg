"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHeladera = void 0;
const Heladera_1 = require("./Heladera");
class SmartHeladera extends Heladera_1.Heladera {
    constructor(pMarca, pModelo, pEncendido, pTemperatura, pModuloWifi) {
        super(pMarca, pModelo, pEncendido, pTemperatura);
        this.moduloWifi = pModuloWifi;
    }
    conexionInternet() {
        console.log("Estas conectado a internet");
    }
    mostrarVelocidadInet() {
        console.log(`La velocidad de internet actual es de ${this.moduloWifi.getVelocidad}`);
    }
}
exports.SmartHeladera = SmartHeladera;
