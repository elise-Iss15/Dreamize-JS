const form = document.querySelector("#goal-form");
const input = document.querySelector("#goal-input");
const goalList = document.querySelector("#goal-list");
const goalCounter = document.querySelector("#progress-counter");
const priorityInput = document.querySelector("#priority");
const dateInput = document.querySelector("#date");
const toggleBtn = document.querySelector("#theme-toggle");
const filterBtns = document.querySelectorAll(".filter-btn");

let goals = JSON.parse(localStorage.getItem("goals")) || [];
let currentFilter = "all";

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light";
}

renderAll();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const priority = priorityInput.value;
  const date = dateInput.value;
  const goal = { id: Date.now(), text, done: false, priority, date };
  goals.push(goal);
  saveToLocalStorage();
  renderAll();
  input.value = "";
  input.focus();
});

function saveToLocalStorage() {
  localStorage.setItem("goals", JSON.stringify(goals));
}

function renderItem(goal) {
  const li = document.createElement("li");
  li.dataset.id = goal.id;
  li.className = `goal-item ${goal.done ? "done" : ""}`;
  li.innerHTML = `
    <span class="goal-text">${goal.text}</span>
    <span class="priority-badge ${goal.priority}">${goal.priority}</span>
    <span class="goal-date">${goal.date}</span>
    <button class="complete-btn">${goal.done ? "Undo" : "✓"}</button>
    <button class="delete-btn">✕</button>
  `;
  goalList.appendChild(li);
}

goalList.addEventListener("click", (e) => {
  const id = Number(e.target.closest("li")?.dataset.id);
  if (!id) return;
  if (e.target.matches(".complete-btn")) {
    goals = goals.map((goal) =>
      goal.id === id ? { ...goal, done: !goal.done } : goal,
    );
    saveToLocalStorage();
    renderAll();
  }
  if (e.target.matches(".delete-btn")) {
    goals = goals.filter((goal) => goal.id !== id);
    saveToLocalStorage();
    renderAll();
  }
});

function updateCounter() {
  const done = goals.filter((g) => g.done).length;
  goalCounter.textContent = `${done} of ${goals.length} goal${goals.length !== 1 ? "s" : ""} completed`;
}

function renderAll() {
  goalList.textContent = "";
  getFilteredGoals().forEach(renderItem);
  updateCounter();
}

function getFilteredGoals() {
  if (currentFilter === "active") return goals.filter((g) => !g.done);
  if (currentFilter === "completed") return goals.filter((g) => g.done);
  return goals;
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark Mode";
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderAll();
  });
});
