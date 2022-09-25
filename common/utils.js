// game over
function showAlert(message) {
    const gameArea = document.querySelector('.game-area');

    const alertMessage = `
    <div class="game-alert">
        <div class="game-alert-message">${message}</div>
    </div>
    `;

    gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

// back button
const backButton = document.getElementById('back');
backButton.addEventListener('click', function() {
    window.location.href = '../index.html'
});

// restart button
const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', function() {
    window.location.reload();
});