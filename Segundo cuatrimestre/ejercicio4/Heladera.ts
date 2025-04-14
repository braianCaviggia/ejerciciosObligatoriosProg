import { Electodomestico } from "./Electrodomestico";


export class Heladera extends Electodomestico {
    private temperatura:number 

    constructor(pMarca:string, pModelo:string, pEncendido:boolean,pTemperatura:number) {
        super(pMarca, pModelo, pEncendido)
        this.temperatura = pTemperatura
    }

    cambiarTemperatura(nuevaTemp: number) {
        return this.temperatura = nuevaTemp
    }

}