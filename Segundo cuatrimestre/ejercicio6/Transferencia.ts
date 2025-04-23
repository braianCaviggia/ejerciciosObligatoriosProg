import { IPago } from "./Ipago";

export class Transferencia implements IPago {
    private destinatario: string
    private importe : number
    private motivo : string
    private banco : string

    constructor(pDestinatario:string,pImporte:number,pMotivo:string) {
        this.destinatario = pDestinatario
        this.importe = pImporte
        this.motivo = pMotivo
        this.banco = "Banco Provincia"
    }

    procesarPago(): void {
        console.log(`Ingrese el nombre del destinatario, importe total a pagar y el motivo.`)
    }

    cancelarPago(): void {
        console.log(`Transferencia rechazada. Asegurate de ingresar los datos correctamente`)
    }

    generarRecibo(): void {
        console.log(`Total: $${this.importe}`)
        console.log(`Motivo: ${this.motivo}`)
        console.log(`Transferido a: ${this.destinatario}`)
        console.log(`Banco: ${this.banco}`)
    }
  }
  