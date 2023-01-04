/*
AMBITO LEXICO
la accesibilidad de las variables 
esta determinada por la posicion de las misma
dentro de los ambitos anidados


*/
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}
myFunction();