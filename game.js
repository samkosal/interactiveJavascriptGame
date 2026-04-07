score = 0;
pointsPerClick = 1;

function updateDisplay() {
    document.getElementById("score-display").textContent =`Score: ${score}`;
    document.getElementById("rate-display") `Points per click: ${pointsPerClick}`;
    document.getElementById('click-btn').addEventListener(onclick, addToScore());

    function addToScore() {
        score += pointsPerClick;
        updateDisplay();
    }
}

