// invertir(array)
// Crear una función invertir que tome como argumento un array array y que devuelva un array 
// con los mismos valores pero en orden invertido.
// invertir([1, 2, 3]) // [3, 2, 1]
// invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]

const invertir = (array) =>{
    const arrayInvertido = array.reverse()
    return arrayInvertido
}

console.log(invertir([1, 2, 3]));
console.log(invertir([5, 7, 99, 34, 54, 2, 12]));
console.log(invertir(["Maximo", "Gangue", "Puchal"]))