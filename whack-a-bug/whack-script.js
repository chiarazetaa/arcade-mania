// initialize the score
const scoreDisplay = document.querySelector('#score-display');
let score = 0;
scoreDisplay.innerText = score;

// initialize the timer
const timerDisplay = document.querySelector('#timer-display');
let timeLeft = 30;
timerDisplay.innerText = timeLeft;

const cells = document.querySelectorAll('.cell');

// initial speed
let bugSpeed = 800;

function randomBug() {
    // clean all the cells from the class bug
    removeBug();

    // increase the difficulty if the score is > 20
    if (score === 20) {
        bugSpeed = bugSpeed / 2;
    }

    // create a random number from 0 to 8
    const randomNumber = Math.floor(Math.random() * cells.length);

    // add the class bug to a random cell
    const cell = cells[randomNumber];
    cell.classList.add('bug');
}

const bugMovement = setInterval(randomBug, bugSpeed);

function removeBug() {
    for (let i = 0; i < cells.length; i++) {
        const cellToClean = cells[i];
        cellToClean.classList.remove('bug');
    }
}

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function() {
        // check if the cell has a bug
        if (cell.classList.contains('bug')) {
            score++;
            scoreDisplay.innerText = score;

            // show the splat
            cell.classList.remove('bug');
            cell.classList.add('splat');

            // clean the cell from splat
            setTimeout(function() {
                cell.classList.remove('splat');
            }, 200);
        }
    });
}

// set a countdown
const timer = setInterval(countDown, 1000);
function countDown() {
    timeLeft--;
    timerDisplay.innerText = timeLeft;

    // when the countDown arrives to zero, stop the timer and the bug movement
    if (timeLeft === 0) {
        clearInterval(timer);
        clearInterval(bugMovement);
        removeBug();

        // the game is over, show the score
        showAlert(`GAME OVER! Score: ${score}`);
    }
}
