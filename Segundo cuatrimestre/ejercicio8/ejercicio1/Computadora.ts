import { ComputadoraBuilder } from "./ComputadoraBuilder"

export class Computadora {
     procesador? : string
     ram? : number
     almacenamiento? : string
     tarjetaGrafica? : string
     sistemaOperativo? : string
     
     mostrar():void {
        console.log(`La PC tiene un procesador ${this.procesador}, cuenta con ${this.ram}GB de ram y ${this.almacenamiento} de almacenamiento interno. Tiene una tarjeta grafica ${this.tarjetaGrafica} y cuenta con el sistema operativo ${this.sistemaOperativo}`)
     }
} 

