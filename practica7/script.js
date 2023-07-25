// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

function dados(dado1, dado2){

    
}


let intentos= 0
let apariciones = 0


do{
    
    const dado1 = Math.random()*6
const redondeado = Math.round(dado1)
console.log("Este es el resultado del dado uno:"+redondeado)

const dado2 = Math.random()*6
const redondeado1 = Math.round(dado2)
console.log("Este es el resultado del dado dos: "+redondeado1)

const total = redondeado+redondeado1
console.log(total)

    let totalVeces = []

    if(redondeado + redondeado1 === 7){
    apariciones += 1

    }

    intentos++


}while(intentos <=36000)

console.log("La suma ha aparecido "+apariciones+" veces")

