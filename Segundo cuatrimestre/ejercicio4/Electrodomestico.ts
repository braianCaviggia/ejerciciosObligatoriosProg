export class Electodomestico {
   private marca: string
   private modelo: string
   private estaEncendido: boolean

   constructor(pMarca:string, pModelo:string, pEncendido:boolean) {
    this.marca= pMarca;
    this.modelo = pModelo;
    this.estaEncendido = pEncendido;
   }

   public getMarca():string {
    return this.marca
   }

   public setMarca(pMarca:string) {
    this.marca = pMarca
   }

   public getModelo():string {
    return this.modelo
   }

   public setModelo(pModelo:string) {
    this.modelo = pModelo
   }

   public getEstaEncendido():boolean {
    return this.estaEncendido
   }

   public setEstaEncendido(pEncendido:boolean) {
    this.estaEncendido = pEncendido
   }

   encender():void {
    if (this.estaEncendido == true) {
        console.log("Se encuentra encendida")
    } else {
        console.log("Se está encendiendo")
    }
   }

   apagar():void {
    if (this.estaEncendido == true) {
        console.log("Se va a apagar")
    } else {
        console.log("Se encuentra apagada")
    }
   }

   mostrarInfo():void {
    console.log(`El electrodomestico es modelo ${this.modelo} de la marca ${this.marca}.`)
   }

}