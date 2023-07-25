// Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1

// 22

// 333

// 4444

// 55555

// 666666

// …….

function imprimirPiramide(numFilas) {
    for (let i = 1; i <= numFilas; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
        fila += i;
        }
        console.log(fila);
    }
}

const numFilas = 30;
imprimirPiramide(numFilas);