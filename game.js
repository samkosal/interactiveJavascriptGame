<<<<<<< HEAD
    let score = 0;
    let pointsPerClick = 1;

function updateDisplay() {

    document.getElementById("score-display").textContent = 'Score: ' + score;
    document.getElementById("rate-display").textContent = 'Points per click:' + pointsPerClick;
=======

let score = 0;
let pointsPerClick = 1;

function updateDisplay() {
    document.getElementById("score-display").textContent = 'Score: ' + score;
    document.getElementById("rate-display").textContent =  'Points per click: ' + pointsPerClick;
}

document.getElementById('click-btn').addEventListener('click', addToScore);

function addToScore() {
    score += pointsPerClick;
    updateDisplay();
>>>>>>> fcf463819693d893023b87a8eadd662be7196f99
}

document.getElementById('click-btn').addEventListener('click', addToScore);

function addToScore() {
    score += pointsPerClick;
    updateDisplay();
}