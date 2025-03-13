import * as rs from 'readline-sync';

// // 1) Crear un arreglo de letras e imprimirlo

// let letras : string [] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// console.log(letras);


// 2) Dado un array con nombres de tamaño 5, pedir
// al usuario que ingrese un nombre y verificar si está
// en el arreglo. Imprimir el arreglo y si está o no en
// él.


// let nombres : string [] = ["Juan","Pepe","Thiago","Lionel","Emiliano"];
// let pedirNombre:string = rs.question("Ingresa el nombre a verificar: ");
// let resultado : string = "El nombre que ingresaste no esta en el arreglo." 

// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i] === pedirNombre ) {
//         resultado = "El nombre que ingresaste esta en el arreglo."
//     }
// } 

// console.log(resultado)

// 3) Encontrar el elemento más grande del arreglo

// Dado el siguiente arreglo
// [4,7,9,3,1,45,67,23,29,78,11,16]
// - Crear un programa que encuentre cuál es el número
// más grande del arreglo e imprimirlo por consola
// - Almacenar el número más grande en una variable
// global y pasarlo a una función para determinar si el
// número es par o impar

// let numeros : number [] = [4,7,9,3,1,45,67,23,29,78,11,16];
// let i = 0

// while (i < numeros[9]) {
//     i++
// }
// console.log(i)

// let determinarPar = () : void => {
//     if (i % 2 == 0) {
//         console.log(`El numero ${i}, el cual es el mas grande del arreglo es par`)
//     }  else {
//         console.log(`El numero ${i}, el cual es el mas grande del arreglo es impar`)
//     }
// }

// determinarPar()

// 4 ) Sumar Dos Arreglos

// • Sumar los elementos de cada una de las posiciones
// de dos arreglos y guardar el resultado en otro arreglo
// • El arreglo tiene dimensión 6 y los números de los dos
// vectores los carga el usuario

// let array1: number [] = new Array(6)
// let array2: number [] = new Array(6)
// let sumaArray: number [] = new Array(6)

// for (let i = 0; i < array1.length; i++) {
//     array1[i] = rs.questionInt("Ingrese un numero para el arreglo N°1: ")
// } 

// for (let i = 0; i < array2.length; i++) {
//     array2[i] = rs.questionInt("Ingrese un numero para el arreglo N°2: ")
// } 

// for (let i = 0; i < sumaArray.length; i++) {
//     sumaArray[i] = array1[i] + array2[i]
// } 

// console.log(sumaArray)

// 5) Invertir Arreglo

// • Almacene en un arreglo de tamaño N los números ingresados
// por el usuario
// • La dimensión N también es ingresada por el usuario
// • Muestre los números del arreglo pero del último al primero

// let dimension : number = rs.questionInt("Ingrese la dimension del arreglo: ")
// let array : number [] = new Array(dimension)

// for (let i = 0; i < dimension; i++) {
//     array[i] = rs.questionInt("Ingrese numero para el array: ")
// } 

// for (let i = dimension - 1; i>=0;i--) {
//     console.log(array[i])
// }

// 6) Tipos de Números en Arreglo

// • Almacene en un arreglo de dimensión N números (la
// cantidad es ingresada por el usuario)
// • Muestre cuántos números son positivos, cuántos son
// negativos y cuántos ceros hay

// let dimension : number = rs.questionInt("Ingrese la dimension: ")
// let negativos : number = 0
// let positivos : number = 0
// let ceros : number = 0
// let numerosArray : number [] = new Array(dimension)

// for (let i = 0; i < dimension; i++) {
//     numerosArray[i] = rs.questionInt("Ingrese numeros para el array: ")
// if (numerosArray[i] > 0) {
//     positivos++
// } else if (numerosArray[i] < 0) {
//     negativos++
// } else {
//     ceros++
// }
// }

// console.log(`Hay ${positivos} positivos, ${negativos} negativos y ${ceros} ceros`)
