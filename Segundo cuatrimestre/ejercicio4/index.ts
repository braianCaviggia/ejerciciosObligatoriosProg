import { ModuloWifi } from "./ModuloWifi";
import { SmartHeladera } from "./SmartHeladera";

let moduloWifi1 = new ModuloWifi (50, 3) 
let moduloWifi2 = new ModuloWifi (100, 5)
let heladera1 = new SmartHeladera ("Drean", "ASD", true, 2, moduloWifi1)
let heladera2 = new SmartHeladera ("Samsung","VBWW", false,0, moduloWifi2)

heladera1.encender()
heladera1.cambiarTemperatura(2)
heladera1.conexionInternet()
heladera1.mostrarInfo()
console.log("_____________________________________________________")


heladera2.encender()
heladera2.cambiarTemperatura(2)
heladera2.conexionInternet()
heladera2.mostrarInfo()


