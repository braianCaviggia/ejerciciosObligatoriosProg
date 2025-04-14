"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electodomestico = void 0;
class Electodomestico {
    constructor(pMarca, pModelo, pEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEncendido;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(pMarca) {
        this.marca = pMarca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(pModelo) {
        this.modelo = pModelo;
    }
    getEstaEncendido() {
        return this.estaEncendido;
    }
    setEstaEncendido(pEncendido) {
        this.estaEncendido = pEncendido;
    }
    encender() {
        if (this.estaEncendido == true) {
            console.log("Se encuentra encendida");
        }
        else {
            console.log("Se está encendiendo");
        }
    }
    apagar() {
        if (this.estaEncendido == true) {
            console.log("Se va a apagar");
        }
        else {
            console.log("Se encuentra apagada");
        }
    }
    mostrarInfo() {
        console.log(`El electrodomestico es modelo ${this.modelo} de la marca ${this.marca}.`);
    }
}
exports.Electodomestico = Electodomestico;
