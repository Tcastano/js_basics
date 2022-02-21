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

//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales
var Numeros=[1,2,3,4,5];
var Numeros1=[1,2,3,4,5];


console.log("arrays: " + Numeros==Numeros1);
//ahora comparar el contenido de dichos arrays utilizando un bucle

console.log("ARRAYS BUCLE")

var aux=true;
for (let i = 0; i < Numeros.length; i++) {
        if(Numeros[i]!=Numeros1[i]){
            aux=false
        }
}
 console.log(aux)
// crear un objeto "usuario", con tres propiedades

var persona = new Object();
persona.nombre = 'pepe';
persona.apellido = 'Perez';
persona.email = 'example@gmail.com';

console.log(persona);

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
    
    const GRAVEDAD =9.81;
    console.log(Math.round(GRAVEDAD));
//incrementar una variable con otra variable o número con el operador  +=, mostrar por pantalla la primera variable (la incrementada)
    var numero=0;
    var numero1=2;

    numero+=numero1;
    console.log(numero)
//eleva un número a otro utilizando **
var h2;
h2=2**4;
console.log(h2);
//eleva un número a otro utilizando un bucle
console.log("BUCLE")
var base=2;
var exponente=3;
var resultado=1;

for (let i = 0; i<exponente; i++) {
    resultado*=base;
}
console.log(resultado);
// generar un número aleatorio del 0 al 100
var aleatorio=Math.random()*100;
console.log(aleatorio);
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
 var cadena ="TiZZiano";
var cadenamayuscula=cadena.toUpperCase();
console.log(cadenamayuscula);

var cadenaminusculas =cadena.toLowerCase();
console.log(cadenaminusculas);

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
    var frase=("Pascal es un lenguaje de programación moderno")
    console.log(frase.replace('Pascal','Javascript'));
//crear una variable con frase/cadena de caracteres y comprobar la longitud
 console.log(frase.length);
//eliminar "script" de la palabra Javascript con el método substr
    var palabra="Javascript";
    console.log(palabra.substr(-10,4));
//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
var frase1="Espero que esto me sirva para algo";
console.log(frase1.includes('algo'));