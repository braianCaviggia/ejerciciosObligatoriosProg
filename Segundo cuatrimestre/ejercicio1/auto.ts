export class Auto {

    marca: string;
    modelo: string;
    anio: number;

    constructor(pMarca:string, pModelo:string, pAño:number, pColor:string,pPrecio:number) {

        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAño;
    }

    acelerar():void {
        console.log(`El auto marca ${this.marca} esta acelerando`)
    }

    frenar():void {
        console.log(`El auto marca ${this.marca} esta frenando`)
    }    
} 