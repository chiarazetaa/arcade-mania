const grid = document.querySelector('#grid');

const size = 15;
const rxc = size * size; // row x column
const cells = [];

let score = 0;
let scoreElement = document.getElementById('score');
scoreElement.innerText = score;

// create cells into the grid
for (let i = 0; i < rxc; i++) {
    const cell = document.createElement('div');
    
    // store all cells into array
    cells.push(cell);
    grid.appendChild(cell);
}

/** ALIENS */

// group of aliens
const aliens = [ 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39 
];
const aliensKilled = [];
const speed = 400;

function drawAliens() {
    for (let i = 0; i < aliens.length; i++) {
        // check the alien is not not already dead
        if (!aliensKilled.includes(i)) {
            // assign a cell for every alien of the group
            // example: alien x stay on cell y
            cells[aliens[i]].classList.add('alien');
        }
    }
}

function removeAliens() {
    for (let i = 0; i < aliens.length; i++) {
        // remove the alien from his cell
        cells[aliens[i]].classList.remove('alien');
    }
}

// aliens movement
let step = 1; // steps that aliens must do
let direction = 'forward'; 

function moveAliens() {
    // check if left edges are multiples of 15
    // the first alien who touches the left edge is the first of the group
    const leftEdge = aliens[0] % size === 0; // true/false

    // check if right edges divided by 15 give remainder 14
    // the first alien who touches the right edge is the last of the group 
    const rightEdge = aliens[aliens.length - 1] % size === size - 1; // true/false

    // remove aliens from the previous cells
    removeAliens();

    // if aliens are moving forward and they reach the right edge
    if (direction === 'forward' && rightEdge) {
        for (let i = 0; i < aliens.length; i++) {
            // go down one line
            aliens[i] = aliens[i] + size + 1; 
            // reverse the direction
            step = -1;
            direction = 'backward';
        }
    }

    // if aliens are moving backward and they reach the left edge
    if (direction === 'backward' && leftEdge) {
        for (let i = 0; i < aliens.length; i++) {
            // go down one line
            aliens[i] = aliens[i] + size - 1;
            // reverse the direction
            step = 1;
            direction = 'forward';
        }
    }

    // increment the cell's index for every alien
    for (let i = 0; i < aliens.length; i++) {
        aliens[i] = aliens[i] + step;
    }

    // check if aliens reached the spaceship
    checkForAliensWin();

    // add aliens to the new cells
    drawAliens();
}

drawAliens();

let alienMoveInterval = setInterval(moveAliens, speed);

/** SPACESHIP */

let spaceshipIdx = 217;
cells[spaceshipIdx].classList.add('spaceship');

document.addEventListener('keydown', moveSpaceship);

function moveSpaceship(event) {
    const leftEdge = spaceshipIdx % size === 0;
    const rightEdge = spaceshipIdx % size === size - 1;

    // remove the spaceship from the div
    cells[spaceshipIdx].classList.remove('spaceship');

    // pressing left and spaceship is not on the left edge
    if (event.code === 'ArrowLeft' && !leftEdge) {
        // decrement spaceship index
        spaceshipIdx--;
    } 
    // pressing right and spaceship is not on the right edge
    else if (event.code === 'ArrowRight' && !rightEdge) {
        // increment spaceship index
        spaceshipIdx++;
    }

    // add the spaceship to the new div
    cells[spaceshipIdx].classList.add('spaceship');

}

/** SHOOT */
document.addEventListener('keydown', shoot);

function shoot (event) {
    // shoot only if the pressed key is space
    if (event.code !== 'Space') {
        return;
    }

    // the laser starts on the same cell as the spaceship
    let laserIdx = spaceshipIdx;

    function moveLaser() {
        // remove the laser
        cells[laserIdx].classList.remove('laser');
        // change the laser index to make it go up
        laserIdx = laserIdx - size;

        // if the laser reach 0 stop it
        if (laserIdx < 0) {
            clearInterval(laserInterval);
            return;
        }

        // check for shoot: laser is on an alien
        if (cells[laserIdx].classList.contains('alien')) {
            clearInterval(laserInterval);
            // remove the alien and the laser from that cell
            cells[laserIdx].classList.remove('alien', 'laser');
            // add the boom and remove it after some moments
            cells[laserIdx].classList.add('boom');
            setTimeout(function() {
                cells[laserIdx].classList.remove('boom');
            }, 200);

            // store killed aliens
            const killed = aliens.indexOf(laserIdx);
            aliensKilled.push(killed);

            score++;
            scoreElement.innerText = score;

            // check if all aliens have been killed
            checkForHumanWin();

            return;
        }
        

        // add the laser
        cells[laserIdx].classList.add('laser');
    }

    let laserInterval = setInterval(moveLaser, 200);
}

function checkForHumanWin() {
    // all the aliens have been killed
    if (aliensKilled.length === aliens.length) {
        clearInterval(alienMoveInterval);
        showAlert('HUMANS WIN');
    }
}

function checkForAliensWin() {
    for (let i = 0; i < aliens.length; i++) {
        // alien is alive and he reached the spaceship
        if (
            !aliensKilled.includes(aliens[i]) &&
            aliens[i] >= spaceshipIdx
        ) {
            clearInterval(alienMoveInterval);
            showAlert('ALIENS WIN');
        }
    }
}