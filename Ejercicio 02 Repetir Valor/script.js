// repetir(valor, cantidad)
//     Crear una función repetir que tome como argumento un valor valor y un número
//     entero cantidad, y devuelva una array con valor repetido cantidad de veces.
//     repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
//     repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
//     repetir('html', 0) // []

const repetir = (valor, cantidad) =>{

    let repeticiones = []

    for (let i=0; i < cantidad; i++){
        repeticiones.push(valor)
    }

    return repeticiones

}


console.log(repetir('lovelace', 3));
console.log(repetir('a', 5));
console.log(repetir('html', 0));
