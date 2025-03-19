/*
Crear una clase Auto con atributos (marca, modelo, anio).
Agregar métodos (constructor(), acelerar(), frenar()).
Instanciar objetos y probar métodos
*/

import { Auto } from "./auto";

let auto1 = new Auto ("Toyota", "Corolla", 2018, "Negro", 20000000);
let auto2 = new Auto ("Peugeot", "Allure", 2008, "Blanco", 12000000);
let auto3 = new Auto ("Renault", "Duster", 2018, "Gris", 25000000);



console.log(auto1,)
console.log("----------------------------------------------------")
console.log(auto2)
console.log("----------------------------------------------------")
console.log(auto3)
console.log("____________________________________________________")
auto1.acelerar()
console.log("----------------------------------------------------")
auto2.frenar()
console.log("----------------------------------------------------")
auto3.acelerar()