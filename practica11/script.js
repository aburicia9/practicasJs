
const nombre1 = prompt("Introduce tu nombre")
const edad1 = prompt("Introduce el primer dato de edad")
const nombre2 = prompt("Introduce tu nombre")
const edad2 = prompt("Introduce el segundo dato de edad")
const nombre3 = prompt("Introduce tu nombre")
const edad3 = prompt("Introduce el tercer dato de edad")

const mayor = Math.max(edad1,edad2,edad3)
// console.log("El mayor es "+mayor)

if( mayor === edad1){
    document.write(`El mayor es ${nombre1}`)

}else if( mayor === edad2){
    document.write(`El mayor es ${nombre2}`)

}else{
    document.write(`El mayor es ${nombre3}`)

}