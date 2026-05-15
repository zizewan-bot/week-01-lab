// --- Counter ---
let count = 0;
const display = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", () => {
  count += 1;
  display.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count -= 1;
  display.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});

// --- To-Do List ---
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const newItem = document.createElement("li");
  newItem.textContent = text;
  list.appendChild(newItem);
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
