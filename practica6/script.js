// Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function palindromo(cadena){
    const  nuevaCadena = cadena.split("").reverse().join("")
    if(cadena === nuevaCadena){
        return "Es palindromo"
    }else{
        return "No es palindromo"
    }
}


const comprobar = palindromo("ca lu ul ac")
console.log(comprobar)
