const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}

helloWorld();
console.log(hello);

/*el ambito lexico es donde la
funcion va a trabajar.
*/
var scope = "I am global";

const functionScope = () => {
    var scope = "I am just a local";

    const func = () => {
        return scope
    }

    console.log(func())
}

functionScope();
console.log(scope);