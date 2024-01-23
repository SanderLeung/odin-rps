const choices = ["ROCK", "PAPER", "SCISSORS"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let getComputerChoice = () => {
    let choice = getRandomInt(3);
    return choices[choice];
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toUpperCase();
    if (!(choices.includes(playerSelection))) return "Invalid selection";
    if (playerSelection === computerSelection) return "Tie game";
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"
        || playerSelection === "SCISSORS" && computerSelection === "PAPER"
        || playerSelection === "PAPER" && computerSelection === "ROCK") {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

let score = 0;

const buttons = document.querySelectorAll('button');
const resultDisplay = document.querySelector('.results');
const scoreDisplay = document.querySelector('.score');

scoreDisplay.textContent = `Score: ${score}`;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.textContent, getComputerChoice());
        resultDisplay.textContent = result;
        if (result.includes("Win")) score += 1;
        else if (result.includes("Lose")) score -= 1;
        scoreDisplay.textContent = `Score: ${score}`;
        if (score >= 5) {
            alert("YOU WIN! Play again?");
            score = 0;
            scoreDisplay.textContent = `Score: ${score}`;
        }
        else if (score <= -5) {
            alert("YOU LOSE! Play again?");
            score = 0;
            scoreDisplay.textContent = `Score: ${score}`;
        }
    });
});