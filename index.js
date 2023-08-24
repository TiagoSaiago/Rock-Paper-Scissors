console.log("Hi");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function checkWinner(playerSelection, computerSelection) {
    const result = playRound(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie";
    } else if (result == "Player") {
        return `You Win! Good Job! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    console.log("Welcome!");
    let playerWins = 0;
    let computerWins = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        
        console.log(`Round ${i + 1}: ${result}`);
        
        if (result === "Player") {
            playerWins++;
        } else if (result === "Computer") {
            computerWins++;
        }
    }
    
    if (playerWins > computerWins) {
        console.log("You win the game!");
    } else if (playerWins < computerWins) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Call the game function to start the game
game();