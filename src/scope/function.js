//scope local dentro de una funcion

/*como asignar variable en la funciones*/

const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}
fruits();

/*las variables declaradas con 
let y const no se puede reasignar 
en el ambito  en que se encuentra*/

const another = () => {
    var x = 1;
    var y = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}
another();