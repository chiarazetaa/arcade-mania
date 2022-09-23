const grid = document.querySelector('#grid');
const cards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];
const errorCounter = document.querySelector('#error');

// merge the array to another identical array, in order to have the pairs
const deck = [...cards, ...cards];

let pick = [];
let errors = 0;

// randomly generates a positive or negative value to sort the array randomly
deck.sort(function() {
    return 0.5 - Math.random();
});

for (let i = 0; i < deck.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    // save the card's key in the data attribute
    const cardName = deck[i];
    card.setAttribute('data-name', cardName);

    // flip the card if it is clicked
    card.addEventListener('click', flipCard);

    grid.appendChild(card);   
}

errorCounter.innerText = errors;

function flipCard(event) {
    // the attribute 'target' within the click event contains a lot of information
    const card = event.target;

    // check if the card has already been flipped
    if (card.classList.contains('flipped')) {
        return;
    }

    // add classes to the card:
    // - the data attribute, to change the card image from back to a symbol (alien, bug, etc.)
    // - the class 'flipped', to annotate that the card has already been flipped
    card.classList.add(card.getAttribute('data-name'), 'flipped');

    pick.push(card);

    if (pick.length === 2) {
        // check for match
        checkForMatch();
    }
}

function checkForMatch() {
    // check the match through the data attribute
    const card1 = pick[0];
    const card2 = pick[1];
    const card1Name = card1.getAttribute('data-name');
    const card2Name = card2.getAttribute('data-name');

    if (card1Name === card2Name) {
        // check if all the cards have been flipped
        checkForWin();
    } else {
        // set a timeout of one second
        setTimeout(function() {
            // remove classes (data attribute and flipped) to flip back the card 
            card1.classList.remove(card1Name, 'flipped');
            card2.classList.remove(card2Name, 'flipped');
            errors++;
            errorCounter.innerText = errors;
        }, 1000);
    }

    // empty the pick for the next turn
    pick = [];
}

function checkForWin() {
    const flippedCard = document.querySelectorAll('.flipped');
    // all the cards have been flipped
    if (flippedCard.length === deck.length) {
        showAlert('You win!');
    }
}