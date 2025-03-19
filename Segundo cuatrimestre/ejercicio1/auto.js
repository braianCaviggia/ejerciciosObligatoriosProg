"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pAño, pColor, pPrecio) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAño;
    }
    Auto.prototype.acelerar = function () {
        console.log("El auto marca ".concat(this.marca, " esta acelerando"));
    };
    Auto.prototype.frenar = function () {
        console.log("El auto marca ".concat(this.marca, " esta frenando"));
    };
    return Auto;
}());
exports.Auto = Auto;
