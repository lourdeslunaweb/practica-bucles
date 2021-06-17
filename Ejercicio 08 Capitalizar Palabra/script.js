// capitalizarPalabras(string)
// Crear una función capitalizarPalabras tome como argumento un string string 
// y devuelva un string donde cada palabra está capitalizada (con la primera letra mayúscula)
// Dejar las demás letras como están.

// capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
// capitalizarPalabras('había una vez') // 'Había Una Vez'
// capitalizarPalabras('OMG') // 'OMG'

const capitalizarPalabras = (string) => {
    const arr = string.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const fraseFinal = arr.join(" ");
    return fraseFinal
}

console.log(capitalizarPalabras('esto es un título'));
console.log(capitalizarPalabras('había una vez'));
console.log(capitalizarPalabras('OMG'));