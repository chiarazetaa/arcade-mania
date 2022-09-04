const cells = document.querySelectorAll('.cell');
const cellSigns = [];
let turn = 0;

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];

    cell.addEventListener('click', function() {
        
        // check if this cell has already been clicked
        if (cellSigns[i]) {
            // already clicked: don't proceed
            console.log('This cell has already been clicked.');
            return;
        }

        // each click is a new turn
        turn++;

        // if the turn is odd write X, else write O
        let sign;
        if (turn % 2 === 0) {
            sign = 'O';
        } else {
            sign = 'X';
        }

        // write the correct sign inside the cell clicked
        cell.innerText = sign;

        // store every sign for every cell's index
        cellSigns[i] = sign;
        console.table(cellSigns);

        // check if someone has won
        let hasWon = checkVictory();
        if (hasWon) {
            showAlert(sign + ' has won!');
        } 
        // nobody has won and it's the last turn: tie
        else if (turn === 9) {
            showAlert('Tie.');
        }
    });
}

function checkVictory() {
    const winningCombinations = [
        // horizontal
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // vertical
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // diagonal
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];

        // numbers of the combination
        const a = combination[0]; 
        const b = combination[1];
        const c = combination[2];

        // check if signs's indexes are a winning combination
        if (cellSigns[a] && cellSigns[a] === cellSigns[b] && cellSigns[b] === cellSigns[c]) {
            console.log('Winning combination: ' + a + ' ' + b + ' ' + c);
            return true;
        }
    }

    // nobody has won
    return false;
}
