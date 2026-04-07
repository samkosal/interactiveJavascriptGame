let score = 0;
let pointsPerClick = 1;

const upgrades = [
    {id: 1, name: "sam", cost: 10, bonus: 10},
    {id: 2, name: "konrad", cost: 30, bonus: 50},
    {id: 3, name: "jonus", cost: 1, bonus: 2}
]

function updateDisplay() {

    document.getElementById("score-display").textContent = 'Score: ' + score;
    document.getElementById("rate-display").textContent = 'Points per click:' + pointsPerClick;
}

document.getElementById('click-btn').addEventListener('click', addToScore);

function addToScore() {
    score += pointsPerClick;
    updateDisplay();
}