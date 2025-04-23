import { Transferencia } from "./Transferencia";
import { MercadoPago } from "./MercadoPago";
import { TarjetDeCredito } from "./TarjetaDeCredito";

let tarjeta1 = new TarjetDeCredito (12345678900)

tarjeta1.procesarPago()
tarjeta1.cancelarPago()
tarjeta1.procesarPago()
tarjeta1.generarRecibo()

console.log("----------------------------------------------------")

let mercadopago = new MercadoPago (true,"Compra en supermercado", 6000)

mercadopago.procesarPago()
mercadopago.cancelarPago()
mercadopago.procesarPago()
mercadopago.generarRecibo()

console.log("----------------------------------------------------")

let transferencia = new Transferencia ("Juan Perez", 20000, "Regalo de cumpleaños" )

transferencia.procesarPago()
transferencia.cancelarPago()
transferencia.procesarPago()
transferencia.generarRecibo()