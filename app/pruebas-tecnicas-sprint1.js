/*
Ejercicio 1

Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
*/

// const array = ["ab", "abb", "abbabbabbaa"];
// const newArray = array.map((elemento) => {
//   //se recorre el array con el metodo map y se le da como argumento el nombre de 'elemento'.
//   return elemento.replace(/(.)\1+/g, "$1"); // en cada interaccion del .map() compara con el metodo replace() donde se le dice que recorra todo el elemento y lo compare con la exprecion regular y recorta las letras que se repiten.
// });

// newArray.sort((a, b) => b.localeCompare(a));

// console.log(newArray);

//----------------------------------

/**
 * Ejercicio 5
 *
 * Crea una función que dado: const input3 = [1, 5, 2, 9, 3];
 * devuelva la suma de los números más grandes en el arreglo.
 *
 * Salida esperada
 * const output3 = 14;
 */

// const input3 = [1, 5, 2, 9, 3];

// input3.sort((a, b) => b - a); // ordena el array de forma consecutiv y decreciente con el metodo sort ingresando los argumentos (a, b) => b - a
// const resultado = input3[0] + input3[1]; // suma los dos primeros numeros del array (los mas grandes)
// console.log(resultado); // retorna el resultado de dicha suma

//----------------------------------
