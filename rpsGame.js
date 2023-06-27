
function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * arr.length);
    const answer = arr[randomIndex];
    return answer;
}
console.log(getComputerChoice());


const playerSelection = prompt("rock paper or scissors");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie game";
    }else if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            return "you lost";
        } else {
            return "you win";
        }
    }else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "you lost";
        }else {
            return "you win";
        }
    }else if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            return "you lost";
        }else {
            return "you win";
        }
    }
}


console.log(playRound( playerSelection, getComputerChoice()));