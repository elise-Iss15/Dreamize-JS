const skillForm = document.getElementById("skill-form");
const skillsList = document.getElementById("skill-form");

// skillsList.textContent = "list of skills added";

// console.log(skillsList.innerHTML);

skillForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  const skillValue = document.getElementById("skill").value;

  const newCard = document.createElement("div");
  newCard.className =
    "card bg-zinc-900 border border-gray-800 p-6 rounded-xl w-64 shadow-lg cursor-pointer transition-all hover:border-[#d4af37]";

  newCard.setAttribute("data-name", nameValue);

  newCard.innerHTML = `
    <h3 class="text-[#d4af37] font-bold text-xl mb-1">${nameValue}</h3>
    <p class="text-gray-400 mb-4">${skillValue}</p>
    <button class="remove-btn text-xs text-red-500 hover:text-red-300  font-bold">
      Remove
    </button>
  `;

  skillsList.appendChild(newCard);
  skillForm.reset();
});

skillsList.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (!card) return;

  if (e.target.classList.contains("remove-btn")) {
    card.remove();
    console.log("Card removed from skill directory.");
    return;
  }

  card.classList.toggle("bg-[#d4af37]");
  card.classList.toggle("text-black");

  const name = card.getAttribute("data-name");
  console.log(`Selected: ${name}`);
});
