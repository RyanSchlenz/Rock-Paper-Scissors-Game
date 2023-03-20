"use strict";

// player and computer choices
const elPlayerChoice = document.querySelector(".choice-player");
const elComputerChoice = document.querySelector(".choice-computer");

// Scores
const currentScore = document.querySelector(".score");
const elPlayerScore = document.getElementById("score--0");
const elComputerScore = document.getElementById("score--1");

// Buttons
const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissors = document.querySelector(".btn--scissors");
const btnNew = document.querySelector(".btn--new");
const btn = document.querySelector(".btn");

let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// get computer choice function
function getComputerChoice() {
  const computerOptions = ["Rock!", "Paper!", "Scissors!"];
  const randomChoice = Math.floor(Math.random() * 3);
  return computerOptions[randomChoice];
}

// check scores
const checkScores = function () {
  elPlayerScore.textContent = playerScore;
  elComputerScore.textContent = computerScore;
};

// reset function
const reset = function () {
  elPlayerChoice.textContent = "❓";
  elComputerChoice.textContent = "❓";
  computerChoice = getComputerChoice();
  document.querySelector(".player").classList.remove("winner");
  btnRock.style.display = "block";
  btnPaper.style.display = "block";
  btnScissors.style.display = "block";

  document.querySelector(".computer").classList.remove("winner");

  // enable buttons to work again
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
  // remove btn background color
  btn.style.backgroundColor = " rgba(255, 255, 255, 0.6)";
  playerScore = 0;
  computerScore = 0;
  checkScores();
};
//check if player has won
const checkWinner = function check() {
  if (document.querySelector(".player").classList.contains("winner")) {
    // disable buttons
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    // hide button
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissors.style.display = "none";

    alert("You won the game!");
    // update player score and check if game has ended
    playerScore++;
    checkScores();
    // change background of winner
    document.querySelector(".player").classList.add("winner");
  } else if (document.querySelector(".computer").classList.contains("winner")) {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    // hide button
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissors.style.display = "none";
    // update computer score and check if the game has ended
    computerScore++;
    checkScores();
    alert("You lost the game!");
  } else if (computerChoice === playerChoice) {
    elPlayerChoice.textContent = playerChoice;
    elComputerChoice.textContent = computerChoice;
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btn.style.backgroundColor = "gray";
    alert("Tie!");
    // hide button
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissors.style.display = "none";
  }
};

// click event listener for rock button
btnRock.addEventListener("click", function () {
  playerChoice = "Rock!";
  computerChoice = getComputerChoice();
  let playerScore = 0;
  let computerScore = 0;

  if (computerChoice === "Rock!" && playerChoice == "Rock!") {
    elPlayerChoice.textContent = "Rock!";
    elComputerChoice.textContent = computerChoice;
    document.querySelector(".btn--rock").classList.add("winner");
    document.querySelector(".btn--rock").classList.add("winner");
  } else if (computerChoice === "Paper!" && playerChoice == "Rock!") {
    elPlayerChoice.textContent = "Rock!";

    elComputerChoice.textContent = computerChoice;
    document.querySelector(".computer").classList.add("winner");
    document.querySelector(".btn--rock").classList.add("winner");
  } else if (computerChoice === "Scissors!" && playerChoice == "Rock!") {
    elPlayerChoice.textContent = "Rock!";
    elComputerChoice.textContent = computerChoice;
    document.querySelector(".player").classList.add("winner");
    document.querySelector(".btn--rock").classList.add("btn--rock");
  }
  checkWinner();
});

// click event listener for Paper button
btnPaper.addEventListener("click", function () {
  playerChoice = "Paper!";
  computerChoice = getComputerChoice();

  if (computerChoice === "Paper!" && playerChoice == "Paper!") {
    elPlayerChoice.textContent = "Paper!";
    elComputerChoice.textContent = computerChoice;
  } else if (computerChoice === "Scissors!" && playerChoice == "Paper!") {
    elPlayerChoice.textContent = "Paper!";
    elComputerChoice.textContent = computerChoice;
    document.querySelector(".computer").classList.add("winner");
  } else if (computerChoice === "Rock!" && playerChoice == "Paper!") {
    elPlayerChoice.textContent = "Paper!";
    elComputerChoice.textContent = computerChoice;
    document.querySelector(".player").classList.add("winner");
  }
  checkWinner();
});

// click event listener for scissors button
btnScissors.addEventListener("click", function () {
  playerChoice = "Scissors!";
  computerChoice = getComputerChoice();

  if (computerChoice === "Scissors!" && playerChoice == "Scissors!") {
    elPlayerChoice.textContent = "Scissors!";
    elComputerChoice.textContent = computerChoice;
  } else if (computerChoice === "Rock!" && playerChoice == "Scissors!") {
    elPlayerChoice.textContent = "Scissors!";
    elComputerChoice.textContent = computerChoice;
    document.querySelector(".computer").classList.add("winner");
  } else if (computerChoice === "Paper!" && playerChoice == "Scissors!") {
    elPlayerChoice.textContent = "Scissors!";
    elComputerChoice.textContent = computerChoice;
    document.querySelector(".player").classList.add("winner");
  }
  checkWinner();
});

// click event listener for new game button
btnNew.addEventListener("click", function () {
  reset();
});
