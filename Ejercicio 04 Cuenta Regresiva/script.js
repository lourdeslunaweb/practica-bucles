// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero 
// numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y 
// los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

const crearCuentaRegresiva = (numeroInicial) =>{
    let array = []
    for (let i = numeroInicial; i >= 0; i--){
        array.push(i)
    }
    return array
}

console.log(crearCuentaRegresiva(3));
console.log(crearCuentaRegresiva(5));