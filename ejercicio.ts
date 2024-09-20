import * as rs from 'readline-sync';

let calcularPuntajes = (sabor:number,presentacion:number,dificultad:number):number => {
    return sabor+presentacion+dificultad
}

let determinarGanador = ():void => {
    let cantidadConcursantes : number = rs.questionInt("Ingresa la cantidad de concursantes: ");
    let puntajeMasAlto:number = 0
    let empate = false

    for (let i = 1; i<=cantidadConcursantes;i++) {
        let sabor:number = rs.questionInt(`Ingresa la puntuacion del sabor del concursante ${i} del 1 al 5: `);
        let presentacion:number = rs.questionInt(`Ingresa la puntuacion de la presentacion del concursante ${i} del 1 al 5: `);
        let dificultad:number = rs.questionInt(`Ingresa la puntuacion de la dificultad del concursante ${i} del 1 al 5: `);

        let puntaje = calcularPuntajes(sabor,presentacion,dificultad);
        console.log(`El puntaje del concursante ${i} es de ${puntaje}`) 

        if (puntaje > puntajeMasAlto) {
            puntajeMasAlto = puntaje
        } else if (puntaje == puntajeMasAlto) {
            empate = true
        }
} 

        if (empate) {
            console.log("Hay empate")
        } else (
            console.log(`El ganador obtuvo un total de ${puntajeMasAlto}`)
)
} 
determinarGanador()