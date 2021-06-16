// capitalizarPalabras(string)
// Crear una función capitalizarPalabras tome como argumento un string string 
// y devuelva un string donde cada palabra está capitalizada (con la primera letra mayúscula)
// Dejar las demás letras como están.

// capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
// capitalizarPalabras('había una vez') // 'Había Una Vez'
// capitalizarPalabras('OMG') // 'OMG'

const capitalizarPalabras = (string) => {

    return string[0].toUpperCase() + string.slice(1)


}

console.log(capitalizarPalabras('Esto es un título'));
console.log(capitalizarPalabras('había una vez'));
console.log(capitalizarPalabras('OMG'));