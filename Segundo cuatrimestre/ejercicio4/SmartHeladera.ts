import { Heladera } from "./Heladera";
import { ModuloWifi } from "./ModuloWifi";

export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi

    constructor(pMarca:string, pModelo:string, pEncendido:boolean,pTemperatura:number ,pModuloWifi:ModuloWifi) {
        super(pMarca, pModelo, pEncendido,pTemperatura)
        this.moduloWifi = pModuloWifi
    }

    public conexionInternet():void {
        console.log("Estas conectado a internet")
    }

    public mostrarVelocidadInet():void {
       console.log(`La velocidad de internet actual es de ${this.moduloWifi.getVelocidad}`)
    }


}