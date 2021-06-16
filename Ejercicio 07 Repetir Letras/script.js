// repetirLetras(palabra, cantidad)
// Crear una función repetirLetras que tome como argumento un string palabra y un número 
// entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

// repetirLetras('hola', 2) // 'hhoollaa'
// repetirLetras('ada', 3) // 'aaadddaaa'
// repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
// repetirLetras('basta', 1) // 'basta'

const repetirLetras = (palabra,cantidad) => {
    let letras = ('');
    for (let i=0 ; i<=palabra.length ; i++) {
        for (let j=0 ; j<cantidad ; j++)
            letras = letras + palabra.charAt(i);
    }
    return letras 
}

console.log(repetirLetras('hola', 3));
console.log(repetirLetras('ada', 3));
console.log(repetirLetras('ah!', 5));
console.log(repetirLetras('basta', 1));