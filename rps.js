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

let game = (rounds = 5) => {
    let score = 0
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Select ROCK, PAPER, or SCISSORS: ");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) score += 1;
        else if (result.includes("Win")) score -= 1;
    }
    if (score === 0) console.log("TIE");
    else if (score > 0) console.log("YOU WIN!");
    else console.log("YOU LOSE!");
}

game();