/*fuera del bloque puedo acceder a la 
declaracion var, con const y let 
accedo dentro del bloque*/

const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana'; //let ó const , no puedo acceder al bloque
        const fruits3 = 'kiwi';
        
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
   
}
fruits();

/*la declaracion let no reasigna el valor 
de la variable*/

let num = 1;
{
    let num = 2;
    console.log(num);
}
console.log(num);
/*la declaracion var reasigna el valor 
de la variable
el valor de x en el bloque se 
transmitio a la varible global*/
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

/*
loop observar asignacion q da con una declaracion
var y con let
con var toma el ultimo valor y hace el loop

*/
const loop = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        },1000)
        //console.log(i);
    }
   
};
loop();

