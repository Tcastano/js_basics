console.log("2.functions: 👋 Bienvenidos, en este fichero se harán ejercicios sobre las funciones en JS");

//Función saludar1, que muestre "Hola, " y un nombre
function saludar(){
    console.log("hola tizziano");
}
saludar();
//Función saludar2 que devuelva "Hola, " y un nombre
function saludar1() {
    var nombre="tizziano"
    return alert("Hola "+ nombre)
}

saludar1();
//Función saludar3 igual que la anterior, pero que, en caso de no recibir nombre, devolver "Hola, anónimo"
function saludar3(){
    var nombre =prompt("introducir nombre");
    if (nombre==""||nombre==null) {
      nombre="anonimo"
    }
    return alert("hola "+nombre);

}

saludar3();
//Escribir la función saludar2 con la sintaxis de las funciones flecha
saludar4 = (nombre="tizziano")=>"hola "+nombre

console.log(saludar4);
//Función que reciba un array y lo devuelva en orden inverso
function arrayinverso(){
    var arrayinverso=[0,1,2,3,4,5,6,7,8,9];
    arrayinverso.reverse();
    return console.log(JSON.stringify(arrayinverso));
}

arrayinverso();
//Función que cifre un mensaje utilizando el cifrado César con el algoritmo ROT13
function str_rot13(){
    let mensaje="clave a descifrar"
    return mensaje.replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13));
    });
}
console.log(str_rot13());
//Función que reciba dos números y los mezcle. Ej. mezclar (12,34) => //devuelve 1324
var n1="2222"
var n2="1111"
var n3=""
for (let i = 0; i < n1.length; i++) {
    n3+=n1.charAt(i)+n2.charAt(i);  
}
console.log(n3);