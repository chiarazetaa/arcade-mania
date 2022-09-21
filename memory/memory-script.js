const grid = document.querySelector('#grid');
const cards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];

// merge the array to another identical array, in order to have the pairs
const deck = [...cards, ...cards];

for (let i = 0; i < deck.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    grid.appendChild(card);
}