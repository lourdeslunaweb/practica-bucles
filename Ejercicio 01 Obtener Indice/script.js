// obtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor 
// cualquiera valor y un array cualquiera array y devuelva el índice 
// del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
// obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1

const obtenerIndice = (valor, array) =>{

let indice = array.indexOf(valor)

return indice

}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]));
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]));