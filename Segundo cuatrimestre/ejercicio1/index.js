"use strict";
/*
Crear una clase Auto con atributos (marca, modelo, anio).
Agregar métodos (constructor(), acelerar(), frenar()).
Instanciar objetos y probar métodos
*/
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var auto1 = new auto_1.Auto("Toyota", "Corolla", 2018, "Negro", 20000000);
var auto2 = new auto_1.Auto("Peugeot", "Allure", 2008, "Blanco", 12000000);
var auto3 = new auto_1.Auto("Renault", "Duster", 2018, "Gris", 25000000);
console.log(auto1);
console.log("----------------------------------------------------");
console.log(auto2);
console.log("----------------------------------------------------");
console.log(auto3);
console.log("____________________________________________________");
auto1.acelerar();
console.log("----------------------------------------------------");
auto2.frenar();
console.log("----------------------------------------------------");
auto3.acelerar();
