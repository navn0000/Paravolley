const cardArea = document.getElementById("cardArea");

// Random numbers
let numbers = [5,6,7,8,9,10,11,12];

// Unique card titles
const titles = [
  "STRIKE",
  "POWER",
  "SPEED",
  "SKILL",
  "FOCUS",
  "FIRE",
  "WIN",
  "GLORY"
];


// Sample image (replace with your own)
const imageUrl = "./images/logo.png";

for (let i = 0; i < 8; i++) {
  const col = document.createElement("div");
col.className = "col-4 d-flex justify-content-center";

  const container = document.createElement("div");
  container.className = "card-container mt-4";

  const card = document.createElement("div");
  card.className = "flip-card";

  /* FRONT */
  const front = document.createElement("div");
  front.className = "front";

 front.innerHTML = `
  <div class="card inner-card text-center">
    <div class="card-body card-top">
      <h6 class="card-title">${titles[i]}</h6>
    </div>

    <img src="${imageUrl}" class="card-img-top" alt="Card Image">

    <div class="card-body card-bottom">
      <p class="mb-0 fw-semibold clickto">Click to Turn</p>
    </div>
  </div>
`;


  /* BACK */
  const back = document.createElement("div");
  back.className = "back";

  back.innerHTML = `
    <div class="card inner-card d-flex align-items-center justify-content-center">
      <h1 class="fw-bold"></h1>
    </div>
  `;

  card.append(front, back);
  container.appendChild(card);
  col.appendChild(container);
  cardArea.appendChild(col);

  container.addEventListener("click", () => {
    if (numbers.length === 0 || card.classList.contains("flipped")) return;

    const index = Math.floor(Math.random() * numbers.length);
    const value = numbers[index];
    numbers.splice(index, 1);

    back.querySelector("h1").innerText = value;
    card.classList.add("flipped");

    setTimeout(() => container.classList.add("fade-out"), 1200);
    setTimeout(() => col.remove(), 2000);
  });
}
