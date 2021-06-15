// esSubconjunto(subconjunto, conjunto)
// Crear una función esSubconjunto que tome como argumento dos arrays, 
// subconjunto y conjunto, y devuelva true si subconjunto es realmente 
// subconjunto de conjunto, es decir, si todos los valores de subconjunto 
// están en conjunto.

// esSubconjunto([1], [1, 2, 3]) // true
// esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
// esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
// esSubconjunto([1, 2, 3], [1, 2]) // false
// esSubconjunto([1], [2, 3, 4]) // false 

const esSubconjunto = (subconjunto, conjunto) =>{
    const subconjuntoString = subconjunto.toString()
    const conjuntoString = conjunto.toString()

    return conjuntoString.includes(subconjuntoString)
}

console.log(esSubconjunto([1], [0, 1, 2, 3]));
console.log(esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]));
console.log(esSubconjunto([1, 2, 3], [1, 2]));
console.log(esSubconjunto([1], [2, 3, 4]));