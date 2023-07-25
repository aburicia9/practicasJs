// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

function encontrarA(frase){
    let contador = 0
    
    for(let i = 0; i<frase.length;i++){
        let caracter = frase[i]

        caracter = caracter.toLowerCase()

        if (caracter.includes("a")){
            contador++
        }
    }
    return contador
}

const frase = prompt("Introduce una frase")
const contar = encontrarA(frase)

console.log(`La letra "A" aparece ${contar} veces`)
document.write(`La letra "A" aparece ${contar} veces <br> <br>`)
document.write(frase)

// Escribe un programa que pida una frase y escriba las vocales que aparecen

function encontrarVocales(flarga){
    let contador = 0
    for (let i = 0; i<flarga.length;i++){
        let caracter = flarga[i]

        caracter = caracter.toLowerCase()

        if(caracter.includes("a")|| caracter.includes("e") || caracter.includes("i")|| caracter.includes("o") ||caracter.includes("u")){
            contador++
        }
    }

    return(contador)
}

const fraseL = prompt("Introduce una frase para contar vocales")
const contada = encontrarVocales(fraseL)
console.log("Aparecen "+contada+" vocales")