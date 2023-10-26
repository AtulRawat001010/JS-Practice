// 1. deposit money.
// 2. get number of line to bet on.
// 3. collect bet amount.
// 4.spin the slot money.
// 5.check if the user won.
// 6. give user winning.
// 7. play again.

const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 6,
    "B": 9,
    "C": 12,
    "D": 9
};


const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};


const deposit = () =>
{
    while (true) {
        const enterDepositAmount = prompt("Enter deposit: ");
        const numberDepositAmount = parseFloat(enterDepositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount!");
        }
        else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const enterNumberOfLines = prompt("Enter Number Of Lines To Bet On(1-3): ");
        const numberOfLines = parseInt(enterNumberOfLines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid Number of Lines!");
        }
        else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines)=> {
    while (true) {
        const enterBet = prompt("Enter The Bet Amount For Every Line: ");
        const numberBet = parseInt(enterBet);

        if ((isNaN(numberBet)) || (numberBet <= 0) || (numberBet > balance/lines)) {
            console.log("Invalid Balance!");
        }
        else {
            return numberBet;
        }
    }
};

const spin = ()=> {
    const symbols = [];

    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        // console.log(symbol, count);

        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        };
    }

    const reels = [];

    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {

            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];

            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const transpose = (reels)=> {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
           rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

const printRows = (rows)=> {
    for (const row of rows) {
        let rowString = "";
        for(const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1){
                rowString += " | ";
            }
        }

        console.log(rowString);
    }
}

const getWinnigs = (rows, bet, lines)=> {
    let winning = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if(allSame){
            winning = winning + bet * 3 + SYMBOL_VALUES[symbols[0]];

            console.log(`you Won $${winning}`);
        }
    }

    return winning;
}




const game = ()=> {

    let balance = deposit();
    
    while (true) {

        console.log(`You have $${balance} in total balance.`);

        const lines = getNumberOfLines();
        const bet = getBet(balance, lines);

        balance -= bet * lines;
        
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        let winnigs = getWinnigs(rows, bet, lines);

        balance += winnigs;

        console.log(`You Won $${winnigs}.`);

        console.log(`You have $${winnigs}. remaining`);


        if (balance <= 0) {
            console.log("You are Broke!");

            game();
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n): ");

        if(playAgain != "y") break;
    }
};

game();