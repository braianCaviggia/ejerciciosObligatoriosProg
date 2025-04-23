"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transferencia = void 0;
class Transferencia {
    constructor(pDestinatario, pImporte, pMotivo) {
        this.destinatario = pDestinatario;
        this.importe = pImporte;
        this.motivo = pMotivo;
        this.banco = "Banco Provincia";
    }
    procesarPago() {
        console.log(`Ingrese el nombre del destinatario, importe total a pagar y el motivo.`);
    }
    cancelarPago() {
        console.log(`Transferencia rechazada. Asegurate de ingresar los datos correctamente`);
    }
    generarRecibo() {
        console.log(`Total: $${this.importe}`);
        console.log(`Motivo: ${this.motivo}`);
        console.log(`Transferido a: ${this.destinatario}`);
        console.log(`Banco: ${this.banco}`);
    }
}
exports.Transferencia = Transferencia;
