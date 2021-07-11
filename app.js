const choices = ["rock", "paper", "scissors"];
const scoreEl = document.querySelector(".score > span");
const buttons = document.querySelectorAll(".circle");
const items = document.querySelector(".items");
const selection = document.querySelector(".selection");
const playAgain = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const win = document.getElementById("win");

let score = 0;
let userChoice;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.classList[0];

    checkWinner();
  });
});

playAgain.addEventListener("click", () => {
  items.style.display = "grid";
  selection.style.display = "none";
});

const pickRandomChoice = () => {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const updateScore = (value) => {
  score += value;
  scoreEl.innerText = score;
};

const checkWinner = () => {
  const computerChoice = pickRandomChoice();

  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    win.innerText = " DRAW";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1);
    win.innerText = " WIN";
  } else {
    win.innerText = " LOST";
  }

  items.style.display = "none";
  selection.style.display = "grid";
};

const updateSelection = (selectionEl, choice) => {
  selectionEl.classList.remove("rock", "paper", "scissors");

  const img = selectionEl.querySelector("img");

  selectionEl.classList.add(`${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
};
