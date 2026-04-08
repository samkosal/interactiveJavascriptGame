
let score = 0;
let pointsPerClick = 1;
let clickCount = 0;
let orcaIndex = 0;

const upgrades = [
    {id: 1, name: "sam", cost: 10, bonus: 10},
    {id: 2, name: "konrad", cost: 30, bonus: 50},
    {id: 3, name: "jonus", cost: 1, bonus: 2}
]

const orcas = [
  {
    id: 1,
    name: "Southern Resident Orca",
    region: "Pacific Northwest (USA/Canada)",
    ecotype: "Resident",
    diet: "Fish (primarily salmon)"
  },
  {
    id: 2,
    name: "Northern Resident Orca",
    region: "British Columbia, Canada",
    ecotype: "Resident",
    diet: "Fish"
  },
  {
    id: 3,
    name: "Transient Orca (Bigg's Orca)",
    region: "North Pacific Ocean",
    ecotype: "Transient",
    diet: "Marine mammals"
  },
  {
    id: 4,
    name: "Offshore Orca",
    region: "Outer coasts of North America",
    ecotype: "Offshore",
    diet: "Fish (including sharks)"
  },
  {
    id: 5,
    name: "Antarctic Type A Orca",
    region: "Antarctic waters",
    ecotype: "Type A",
    diet: "Minke whales"
  },
  {
    id: 6,
    name: "Antarctic Type B Orca",
    region: "Antarctic pack ice",
    ecotype: "Type B",
    diet: "Seals"
  },
  {
    id: 7,
    name: "Antarctic Type C Orca",
    region: "Eastern Antarctic waters",
    ecotype: "Type C",
    diet: "Fish"
  },
  {
    id: 8,
    name: "Antarctic Type D Orca",
    region: "Subantarctic waters",
    ecotype: "Type D",
    diet: "Unknown (likely fish)"
  }
];

function updateDisplay() {
    document.getElementById("score-display").textContent = 'Score: ' + score;
    document.getElementById("rate-display").textContent =  'Points per click: ' + pointsPerClick;
}

document.getElementById('click-btn').addEventListener('click', addToScore);

function addToScore() {
    score += pointsPerClick;
    clickCount++;
    updateDisplay();
    renderUpgrades();
    displayOrcaFacts();
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


function displayOrcaFacts() {
    if (clickCount % 10 === 0 && clickCount >= 10) {
        const container = document.getElementById('orca-facts');
        container.innerHTML = "";
        for (let i = 0; i <= orcaIndex && i < orcas.length; i++) {
            const orca = orcas[i];
            const div = document.createElement('div');
            div.innerHTML = `
                <strong>${orca.name}</strong><br>
                Region: ${orca.region} | Ecotype: ${orca.ecotype} | Diet: ${orca.diet}
            `;
            container.appendChild(div);
        }
        if (orcaIndex < orcas.length - 1) {
            orcaIndex++;
        }
    }
}

renderUpgrades();

