// sumarSeccion(array, comienzo, cantidad)
// Crear una función sumarSeccion que tome como argumento un array de números enteros array, 
// un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad 
// de números de array empezando a contar desde el ítem con índice comienzo.

// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 3 + 10 + 20 = 37)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 10

const sumarSeccion = (array, comienzo, cantidad) => {
    const nuevoArray = array.splice(comienzo, cantidad)
    let suma = 0
    for (numero of nuevoArray) {
        suma += numero
    }
    return suma
}

console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3));
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4));
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1));

