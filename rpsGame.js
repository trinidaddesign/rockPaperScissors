let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * arr.length);
    const answer = arr[randomIndex];
    return answer;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie game";
    }else if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            computerScore++
            return `You lost! ${computerSelection} beat ${playerSelection}. Score: human ${playerScore} Robot ${computerScore}`;
        } else {
            playerScore++
            return `You won! ${playerSelection} beat ${computerSelection}. Score: human ${playerScore} Robot ${computerScore}`;
        }
    }else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerScore++
            return `You lost! ${computerSelection} beat ${playerSelection}. Score: human ${playerScore} Robot ${computerScore}`;
        }else {
            playerScore++
            return `You won! ${playerSelection} beat ${computerSelection}. Score: human ${playerScore} Robot ${computerScore}`;
        }
    }else if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            computerScore++
            return `You lost! ${computerSelection} beat ${playerSelection}. Score: human ${playerScore} Robot ${computerScore}`;
        }else {
            playerScore++
            return `You won! ${playerSelection} beat ${computerSelection}. Score: human ${playerScore} Robot ${computerScore}`;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock paper or scissors").toLowerCase();
        console.log(playRound( playerSelection, getComputerChoice()));
    }
    console.log(`Final score: Human:${playerScore} Robot:${computerScore}`);
    
    if(playerScore === computerScore) {
        return "Tie game...Fist Fight!";
        }if (playerScore > computerScore) {
            console.log("You have beaten the robots!");
        }else {
            console.log("All hail our robot overlords");
        }
}

game()





