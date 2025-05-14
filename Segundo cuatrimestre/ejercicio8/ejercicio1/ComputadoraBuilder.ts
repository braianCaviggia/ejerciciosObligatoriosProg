import { Computadora } from "./Computadora"

export class ComputadoraBuilder {
    private computadora:Computadora //creo atributo computadora del tipo Computadora(contiene ram,procesador,etc)

    constructor() {
        this.computadora = new Computadora() //con this.computadora estoy creando dentro del builder una nueva computadora vacia
    }

    agregarProcesador(procesador:string) : ComputadoraBuilder {  //devuelvo ComputadoraBuilder para retornar this y concatenar
        this.computadora.procesador = procesador //accedo al atributo procesador y recibe el valor del parametro
        return this //a medida que completo cada atributo, se va completando los atributos y puedo concatenar
    }

    agregarRam(ram:number):ComputadoraBuilder {
        this.computadora.ram = ram
        return this
    }

    agregarAlmacenamiento(almacenamiento:string):ComputadoraBuilder {
        this.computadora.almacenamiento = almacenamiento
        return this
    }


    agregarTarjetaGrafica(tarjetaGrafica:string):ComputadoraBuilder {
        this.computadora.tarjetaGrafica = tarjetaGrafica
        return this
    }


    agregarSistemaOperativo(sistemaOperativo:string):ComputadoraBuilder {
        this.computadora.sistemaOperativo = sistemaOperativo
        return this
    }

    armarPc() : Computadora {
        return this.computadora //Me permite acceder a todos los valores de la computadora para usar la funcion mostrar
    }

    
}