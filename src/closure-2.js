function padre() {
    let numero = 5;
    function hijo() {
        numero = numero + 1;
        console.log(`MoneyHijo: $${numero}`);
        return numero;
    }
    return hijo;
}
let closure = padre();
closure();
closure();
closure();
















