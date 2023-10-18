"use strict";

const player = prompt("Rock, Paper or Scissors").toLocaleLowerCase();

//function for computer choice
function getComputerChoice() {
  let choice = Math.random() * 3;
  if (choice <= 1) {
    return "rock";
  } else if (choice <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
const computerChoice = getComputerChoice();

//function for game round
function playRound(playerSelection, computerSelection) {
  // console.log(playerSelection, computerSelection);
  if (playerSelection == "rock" && computerSelection == "rock") {
    return `Draw, Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return `You lose! Paper beats rock. Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You win! Rock breaks scissors. Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You win! Paper beats rock. Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return `Draw, Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return `You lose! Scissors cuts paper. Rock breaks scissors. Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return `You lose! Rock breaks scissors. Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You win! Scissors cuts paper. Player ${playerSelection} and Computer ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return `Draw, Rock breaks scissors. Player ${playerSelection} and Computer ${computerSelection}`;
  }
}
const round = playRound(player, computerChoice);
console.log(round);
