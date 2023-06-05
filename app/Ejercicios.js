// Escribir un programa que muestre un prompt donde el usuario ingresa un número,
// luego muestra otro prompt pidiendo otro número, finalmente el programa muestra
// una alerta con el resultado de la suma

// function suma() {
//   let num1 = parseInt(prompt("Ingrese el primer numero a sumar"));
//   let num2 = parseInt(prompt("Ingrese el segundo numero a sumar"));

//   let resul = num1 + num2;
//   alert(resul);
// }
// suma();

// -------------------------------------------------------------------------------

// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius
// y el programa muestre en una alerta la temperatura en Fahrenheit

// function temFahrenheit() {
//   let cel = parseInt(prompt("Ingrese la temperatura en celcius"));

//   const fahrenheit = (cel * 9) / 5 + 32;
//   alert(fahrenheit);
// }
// temFahrenheit();

// -------------------------------------------------------------------------------

// Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo:
// 5 / 10 igual 0.5

// function pedirNum() {
//   let num = parseInt(prompt("Ingrese el numero para dividirlo entre 10"));
//   const resul = num / 10;
//   alert(resul);
// }
// pedirNum();

// -------------------------------------------------------------------------------

// Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

// const a = [1, 2, 3];

// for (let i = 0; i < a.length; i++) {
//   console.log(typeof a[i]);
// }

// -------------------------------------------------------------------------------

// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en una alerta.

// function numPar() {
//   const num = parseInt(prompt("Ingrese un numero para ver si es par"));

//   if (num % 2 === 0) {
//     alert("El numero es par");
//   } else {
//     alert("El numero no es inpar");
//   }
// }
// numPar();

// -------------------------------------------------------------------------------

// Crear un programa que determine si un número introducido en un Prompt es
// divisible por 5 o no, mostrar el resultado con console.log

// function entreCinco() {
//   const num = parseInt(
//     prompt("Ingrese un numero para ver si es divisible entre cinco")
//   );

//   if (num % 5 === 0) {
//     alert("El numero es divisible entre cinco");
//   } else {
//     alert("El numero no es divisible entre cinco");
//   }
// }
// entreCinco();

// -------------------------------------------------------------------------------

// Crear un programa que determine si un número introducido en un popup es divisible
// por 11 y 5 o no, mostrar el resultado con console.log

// function entreCincoYOnce() {
//   const num = parseInt(
//     prompt("Ingrese un numero para ver si es divisible entre cinco y once")
//   );

//   if (num % 5 === 0 && num % 11 === 0) {
//     console.log("El numero es divisible entre cinco y once");
//   } else {
//     console.log("El numero no es divisible entre cinco y once");
//   }
// }
// entreCincoYOnce();

// -------------------------------------------------------------------------------

// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre
// en un alerta el número mayor.

// function elMayorDeDos() {
//   const num1 = parseInt(prompt("Ingrese el primer numero"));
//   const num2 = parseInt(prompt("Ingrese el segundo numero"));

//   if (num1 > num2) {
//     alert(num1);
//   } else {
//     alert(num2);
//   }
// }
// elMayorDeDos();

// -------------------------------------------------------------------------------

// Crear un programa que le pida al usuario primero un números al usuario a través de
// un prompt y luego un segundo número para luego mostrar en un alerta el número
// mayor, esta vez realizar el ejercicio ocupando un if ternario.

// function elMayorDeDosTernario() {
//   const num1 = parseInt(prompt("Ingrese el primer numero"));
//   const num2 = parseInt(prompt("Ingrese el segundo numero"));

//   num1 > num2 ? alert(num1) : alert(num2);
// }
// elMayorDeDosTernario();

// -------------------------------------------------------------------------------

// Crear un programa que determine si un string introducido por un usuario empieza
// con un número o con una letra

// const intro = prompt("Ingresar información");

// const firstChar = intro.charAt(0);

// if (/[A-Za-z]/.test(firstChar)) {
//   alert("Empieza con una letra");
// } else if (/[0-9]/.test(firstChar)) {
//   alert("Empieza con un número");
// } else {
//   alert("El primer carácter no es una letra ni un número");
// }

// -------------------------------------------------------------------------------

// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y
// se determine si el triángulo es válido o no.

// const ang1 = parseInt(prompt("Introduzca el primer angulo"));
// const ang2 = parseInt(prompt("Introduzca el segundo angulo"));
// const ang3 = parseInt(prompt("Introduzca el tercer angulo"));

// if (ang1 + ang2 + ang3 === 180) {
//   alert("Es triangulo");
// } else {
//   alert("No es triangulo");
// }

// -------------------------------------------------------------------------------

// Determinar si una palabra empieza con mayúscula o no.

// function mayus(palabra) {
//   var expReg = /^[A-Z]/;
//   expReg.test(palabra);
// }

// console.log(mayus("hola"));

// -------------------------------------------------------------------------------

// Determinar si un año dado es bisiesto

// let anio = parseInt(prompt("Ingrese un año"));

// if (anio === 365) {
//   console.log("Es un año comun");
// } else {
//   if (anio < 365) {
//     console.log("Es menos de un año");
//   } else {
//     if (anio > 366) {
//       console.log("Es mas de un año");
//     } else if (anio === 366) {
//       console.log("Es un año bisiesto");
//     }
//   }
// }

// -------------------------------------------------------------------------------

// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre
// 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un
// popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de
// conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario
// mostrará un mensaje de "No corresponde"

// const num = Math.round(Math.random());
// console.log(num);
