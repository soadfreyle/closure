//no esta guardando los valores 
const moneyBoy = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox : ${saveCoins}`);
}

moneyBoy(5);
moneyBoy(10);

//closure
const MoneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
};

let myMoneyBox = MoneyBox();
myMoneyBox(23);
myMoneyBox(8);
myMoneyBox(2);