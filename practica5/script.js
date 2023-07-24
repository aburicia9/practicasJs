// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function comparar(cadena){
    if ( cadena === cadena.toUpperCase() ){
        return "Esta toda en mayusculas"
    }

    else if (cadena === cadena.toLowerCase()){
        return "Esta toda en minusculas"
    }

    else{
        return "Esta mezclada"
    }

}
const texto = "Esto es asi"
casa = comparar(texto)

console.log(casa)

