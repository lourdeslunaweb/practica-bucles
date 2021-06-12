// sumarImparesHasta(numero)
//     Crear una función sumarImparesHasta que tome como argumento un número numero 
//     y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero 
//     inclusive.

//     sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
//     sumarImparesHasta(13) // 49
//     sumarImparesHasta(47) // 576

const sumarImparesHasta = (numero) => {
    let suma = 0
    for (let i = 0; i <= numero; i++) {
        if (i%2 != 0) {
            suma += i
        }
    }
    return suma
}

console.log(sumarImparesHasta(5));
console.log(sumarImparesHasta(13));
console.log(sumarImparesHasta(47));