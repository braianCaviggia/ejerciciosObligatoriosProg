import { IPago } from "./Ipago";

export class MercadoPago implements IPago {
    private codigoQr : boolean
    private referenciaDePago: string
    private appBancaria : string
    private monto : number

    constructor(pCodigoQr:boolean, pReferenciaDePago:string,pMonto:number) {
        this.appBancaria = "Mercado pago"
        this.referenciaDePago = pReferenciaDePago
        this.monto = pMonto
        this.codigoQr = pCodigoQr
    }

    procesarPago(): void {
        if (this.codigoQr == true) {
            console.log("Escaneaste el codigo QR correctamente.")
        } else {
            console.log("No escaneaste el codigo QR correctamente.")
        }
    }

    cancelarPago(): void {
        console.log(`La aplicacion de ${this.appBancaria} no pudo procesar correctamente tu pago.`)
    }

    generarRecibo(): void {
        console.log(`Motivo de compra: ${this.referenciaDePago} `)
        console.log(`Monto total a pagar: $${this.monto}`)
    }
  }