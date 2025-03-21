// Se debe crear una clase Celular que represente un teléfono móvil.
// Requisitos:
// Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
// Constructor con parámetros opcionales y obligatorios:
// Obligatorios: Marca, modelo y sistema operativo.
// Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
// Métodos adicionales:
// encenderApagar(): Cambia el estado de encendido/apagado del celular.
// mostrarInfo(): Retorna una cadena con los datos del celular.

export class Celular {

   private marca: string;
   private modelo: number;
   private so: string;
   private ram:string;
   private almacenamiento:string;
   private encendido:boolean;

    constructor(pMarca:string, pModelo:number, pSo:string, pRam?:string, pAlmacenamiento?:string, pEncendido?:boolean) {

        this.marca = pMarca;
        this.modelo = pModelo;
        this.so = pSo;
        this.ram = pRam ?? "4GB"
        this.almacenamiento = pAlmacenamiento ?? "64GB"
        this.encendido = pEncendido ?? false
    }

    public getMarca():string {
        return this.marca
    }

    public getModelo():number {
        return this.modelo
    }

    public getSo():string {
        return this.so
    }

    public getRam():string {
        return this.ram
    }

    public getAlmacenamiento():string {
        return this.almacenamiento
    }

    public getEncendido():boolean {
        return this.encendido
    }

    encenderApagar():void {
        if (this.encendido == false) {
            console.log("Este dispositivo se encuentra encendido")
        } else {
            console.log("Este dispostivo se encuentra apagado")
        }
    }

    mostrarInfo():void {
        console.log(`Este es un celular marca ${this.marca} modelo ${this.modelo} el cual tiene un sistema operativo ${this.so} y este modelo tiene ${this.ram} y ${this.almacenamiento}`)
    }    
} 

