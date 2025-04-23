"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarjetDeCredito = void 0;
class TarjetDeCredito {
    constructor(pNumeroDeTarjeta) {
        this.cuotas = 12;
        this.entidad = "Visa";
        this.numeroDeTarjeta = pNumeroDeTarjeta;
    }
    procesarPago() {
        console.log(`La tarjeta numero : ${this.numeroDeTarjeta} pertenece a la entidad: ${this.entidad} y se puede pagar hasta ${this.cuotas} cuotas  `);
    }
    cancelarPago() {
        console.log("El pago ha sido cancelado");
    }
    generarRecibo() {
        console.log(`El pago de la tarjeta numero : ${this.numeroDeTarjeta} ha sido exitoso`);
    }
}
exports.TarjetDeCredito = TarjetDeCredito;
