// tieneBloque(array)
// Crear una función tieneBloque que tome como argumento un array array y devuelva true si dicho array tiene 
// un bloque de 3 o más ítems consecutivos idénticos, o false si no tiene.

// tieneBloque([1, 2, 3]) // false
// tieneBloque([1, 1, 1, 2, 3]) // true
// tieneBloque([1, 2, 3, 3, 3]) // true
// tieneBloque([1, 2, 3, 3, 3, 8]) // true
// tieneBloque([1, 2, 2, 3, 3, 4]) // false

const tieneBloque = (array) => {
    for(let i = 0; i < array.length; i++){
        if (array[i] === array[i+1]){
            if (array[i] === array[i+2]){
                return true
            } else {
                return false
            }
        } 
    }  
    return false
}

console.log(tieneBloque([1, 2, 3]));
console.log(tieneBloque([1, 1, 1, 2, 3]));
console.log(tieneBloque([1, 2, 3, 3, 3]));
console.log(tieneBloque([1, 2, 3, 3, 3, 8]));
console.log(tieneBloque([1, 2, 2, 3, 3, 4]));