
let score = 0;
let pointsPerClick = 1;

const upgrades = [
    {id: 1, name: "sam", cost: 10, bonus: 10},
    {id: 2, name: "konrad", cost: 30, bonus: 50},
    {id: 3, name: "jonus", cost: 1, bonus: 2}
]

function updateDisplay() {
    document.getElementById("score-display").textContent = 'Score: ' + score;
    document.getElementById("rate-display").textContent =  'Points per click: ' + pointsPerClick;
}

document.getElementById('click-btn').addEventListener('click', addToScore);

function addToScore() {
    score += pointsPerClick;
    updateDisplay();
    renderUpgrades();
}

function renderUpgrades() {
    const container = document.getElementById('upgrades');
    container.innerHTML = "";
    
    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        const div = document.createElement('div');
        div.innerHTML = `
        <strong>${upgrade.name}</strong>
        Cost: ${upgrade.cost} | +${upgrade.bonus} per click
        <button onclick="buyUpgrade(${upgrade.id})" ${score < upgrade.cost ? 'disabled' : ''}>Buy</button>
`;
    container.appendChild(div);
    }
}

function buyUpgrade(id) {
    const upgrade = upgrades.find(el => el.id === id);
    if (upgrade && score >= upgrade.cost) {
        score -= upgrade.cost;
        pointsPerClick += upgrade.bonus;
        updateDisplay();
        renderUpgrades();
    }
}

renderUpgrades();

