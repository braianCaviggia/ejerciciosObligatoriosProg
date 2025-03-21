"use strict";
// Se debe crear una clase Celular que represente un teléfono móvil.
// Requisitos:
// Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
// Constructor con parámetros opcionales y obligatorios:
// Obligatorios: Marca, modelo y sistema operativo.
// Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
// Métodos adicionales:
// encenderApagar(): Cambia el estado de encendido/apagado del celular.
// mostrarInfo(): Retorna una cadena con los datos del celular.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
class Celular {
    constructor(pMarca, pModelo, pSo, pRam, pAlmacenamiento, pEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.so = pSo;
        this.ram = pRam !== null && pRam !== void 0 ? pRam : "4GB";
        this.almacenamiento = pAlmacenamiento !== null && pAlmacenamiento !== void 0 ? pAlmacenamiento : "64GB";
        this.encendido = pEncendido !== null && pEncendido !== void 0 ? pEncendido : false;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getSo() {
        return this.so;
    }
    getRam() {
        return this.ram;
    }
    getAlmacenamiento() {
        return this.almacenamiento;
    }
    getEncendido() {
        return this.encendido;
    }
    encenderApagar() {
        if (this.encendido == true) {
            console.log(`Bienvenido a ${this.marca}`);
        }
        else {
            console.log("El celular se encuentra apagado");
        }
    }
    mostrarInfo() {
        console.log(`Este es un celular marca ${this.marca} modelo ${this.modelo} el cual tiene un sistema operativo ${this.so} y este modelo tiene ${this.ram} y ${this.almacenamiento}`);
    }
}
exports.Celular = Celular;
