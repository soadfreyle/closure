/*ambito lexico es las funciones
que se ejecutan utilizando, la cadena
del alcanze que estaba vijente en su momento
tenemos el valor del contador dentro
de la funcion interna por que ese es el alcance 
que tenemos
cada vez que se ejecute la funcion recuerda
el dato anterior 
*/

const buildCount = (i) => {
    let accumulator = i;

    const count = () => {
        console.log(accumulator++);
    }
    return count;
}
const myCount = buildCount(1);
myCount();
myCount();
myCount();
//tenemos otro closure en un nuevo ambito
const myOhterCount = buildCount(15);
myOhterCount();
myOhterCount();
myOhterCount();