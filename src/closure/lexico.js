
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
/*
Cada vez que se ejecuta una funcion en javascript,
se crea un nuevo contexto de ejecucion.
con un nuevo entorno lexico
*/
const myOhterCount = buildCount(15);
myOhterCount();
myOhterCount();
myOhterCount();