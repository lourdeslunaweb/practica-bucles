// removerDuplicados(array)
// Crear una función removerDuplicados que tome como argumento un array array y que 
// devuelva un array con los mismos valores de array pero sin valores duplicados.

// removerDuplicados([1, 1, 1]) // [1]
// removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
// removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

// const removerDuplicados = (array) =>{

//     const arrayNuevo = [...new Set(array)]

//     return arrayNuevo

// }

// ****************************************
// ******* Resolución de Adrián ***********
// ****************************************

const removerDuplicados = (array) => {
	const arrayAux = [];
	for (data of array) {
		if (!arrayAux.includes(data)) {
			arrayAux.push(data);
		}
	}
	return arrayAux;
};

console.log(removerDuplicados([1, 1, 1]));
console.log(removerDuplicados([1, 1, 2, 2, 3, 3]));
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23]));