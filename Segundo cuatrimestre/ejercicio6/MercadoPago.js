"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPago = void 0;
class MercadoPago {
    constructor(pCodigoQr, pReferenciaDePago, pMonto) {
        this.appBancaria = "Mercado pago";
        this.referenciaDePago = pReferenciaDePago;
        this.monto = pMonto;
        this.codigoQr = pCodigoQr;
    }
    procesarPago() {
        if (this.codigoQr == true) {
            console.log("Escaneaste el codigo QR correctamente.");
        }
        else {
            console.log("No escaneaste el codigo QR correctamente.");
        }
    }
    cancelarPago() {
        console.log(`La aplicacion de ${this.appBancaria} no pudo procesar correctamente tu pago.`);
    }
    generarRecibo() {
        console.log(`Motivo de compra: ${this.referenciaDePago} `);
        console.log(`Monto total a pagar: $${this.monto}`);
    }
}
exports.MercadoPago = MercadoPago;
