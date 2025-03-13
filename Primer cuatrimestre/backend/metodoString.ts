import * as rs from 'readline-sync';

const paragraph: string =
  "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

let palabraRepetida = rs.question("Ingrese la palabra repetida a buscar: ")
palabraRepetida = palabraRepetida.toLowerCase()
//Convierto la palabra del usuario a minusculas

let howManyTextInPara=(fullText: string, searchTerm: string):void =>  {
  let paragraphMinus:string = paragraph.toLowerCase()
  //Convierto el parrafo en minusculas para que coincida con la palabra del usuario
  let paragraphSplit = paragraphMinus.split(searchTerm).length - 1
  //Separo el parrafo segun las veces que encuentre la palabra del usuario: split(searchTerm)


  if (paragraphSplit > 1) {
    console.log(`La palabra "${palabraRepetida}" esta un total de ${paragraphSplit} veces`)
  }
  else if (paragraphSplit == 1) {
    console.log(`La palabra "${palabraRepetida}" esta un total de ${paragraphSplit} vez`)
  }
  else {
    console.log(`La palabra ${palabraRepetida} no esta en el texto`)
  }
//Valido segun la cantidad de veces que aparezca la palabra para que diga "veces","vez","no está"
}
howManyTextInPara(paragraph,palabraRepetida)

/*NOTAS:

-Pase tanto el texto como lo que ingresa el usuario a minusculas para que coincida (use toLowerCase)
-Use Split para que me los separe segun la palabra que quiera encontrar y le reste 1 ya que sino siempre va a quedar 1 de mas y no coincide.
-Use if para validar que, segun las veces que se repita la palabra, aparezca un texto. 
si hay mas de 1 va a decir "veces"
si hay solamente 1 va a decir "vez"
si no esta la palabra va a decir que no esta
*/
