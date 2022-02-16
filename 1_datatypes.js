console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var contenido="contenido";
var contenido2="contenido";

if(contenido==contenido2){
    console.log("Son iguales");
}
//crear dos variables con el distinto contenido y comparar si ambas son iguales
var contenido3="Hola";
var contenido4="holaaa";

if(contenido3!=contenido4){
    console.log("Son diferentes");
}
//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var string = "6";
var int = 6;

if(string==int){
    console.log("Son iguales")
}else{
    console.log("Son diferentes")
}

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
console.log(string===int);
//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
var Numeros=[1,2,3,4,5];
var Numeros1=[1,2,3,4,5];

console.log("arrays: " + Numeros==Numeros1);

for (let i = 0; i < Numeros.length; i++) {
    for (let j = 0; j < Numeros1.length; j++) {
        if(Numeros[i]==Numeros1[j]){
            console.log("Iguales")
        }
    }
}
//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales

// crear un objeto "usuario", con tres propiedades
var coche = new Object();
coche.marca = 'Ford';
coche.modelo = 'Mustang';
coche.año = 1969;

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
var GRAVEDAD=9.80665;
console.log(Math.round(GRAVEDAD));
//incrementar una variable con otra variable con el operador  =+
var incremetar=10;
incremetar+=10;
console.log(incremetar);
//eleva un número a otro utilizando **
var h2;
h2=2**4;
console.log(h2);
//eleva un número a otro utilizando un bucle
var h3=2;
var aux=h3;
for (let i = 0; i<3; i++) {
    h3=h3*aux;
}
console.log(h3);
// generar un número aleatorio del 0 al 100
var aleatorio=Math.random()*10
console.log(aleatorio);
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"

//crear una variable con frase/cadena de caracteres y comprobar la longitud

//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
