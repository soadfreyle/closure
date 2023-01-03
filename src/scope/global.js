/*
el scope es el alcance de la variable
en el codigo ó a que bloques de codigo 
va acceder una variable.

*/
var hello = 'Hello'; //es global porque no esta en un bloque
let world = 'Hello World';
const helloWorld = 'Hello World';
//con esta funcion accedo a las variables globales
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();
/*si volvemos a llamar la variable var 
podemos sobreescribir el valor de la variable

si llamamos otra vez las variables let y const 
no sobreescribe el valor de la variable.
*/

//--Errores comunes--------
//asignar una variable sin las palabras reservadas

const fruta = () => {
    globalVar = 'I am global'
}
 fruta();
 console.log(globalVar);

 //doble asignacion de variable

 const another = () => {
    var localVar = globalvar = ' I am global';
 }

 another();
 console.log(globalvar);