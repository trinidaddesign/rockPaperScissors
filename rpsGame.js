const weapons = document.querySelectorAll('#weapons');
const scores = document.getElementById('#scores');

let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

function playRound(e) {
    
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    const winner = compareSelection(playerSelection, computerSelection);
    gameEnd();

    console.log(playerSelection, computerSelection, winner, playerScore, computerScore);
}

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * arr.length);
    const answer = arr[randomIndex];
    return answer;
}

function compareSelection(player, computer) {
    const resultsP = document.getElementById('#results');
    const finalMessageP = document.getElementById('#finalMessage');

    if (player === computer) {
        return "tie game";
    }else if (computer === "rock") {
        if (player === "scissors") {
            computerScore++
            return 'Computer';
        } else {
            playerScore++
            return 'Player';
        }
    }else if (computer === "paper") {
        if (player === "rock") {
            computerScore++
            return 'Computer';
        }else {
            playerScore++
            return 'Player';
        }
    }else if (computer === "scissors") {
        if (player === "paper") {
            computerScore++
            return 'Computer';
        }else {
            playerScore++
            return 'Player';
        }
    } if (i === 5) {
            resultsP.textContent = `And the final score is: Humans: ${playerScore} Robots: ${computerScore}`;
        };
        if (playerScore >= 3) {
            finalMessageP.textContent = 'Congratulations soldier! You defeated the robots!';
        }else if (playerScore === computerScore) {
            finalMessageP.textContent = 'Tie game...FIST FIGHT!'
        }else {
            finalMessageP.textContent = 'All hail the robot overlords';
        }
}

function updateScore() {
    const playerScoreP = document.getElementById('playerScore');
    const computerScoreP = document.getElementById('computerScore');

    playerScoreP.textContent = `Player Score: ${playerScore}`;
    computerScoreP.textContent = `Computer Score: ${computerScore}`;
};

function gameEnd(x){
    const resultsP = document.getElementById('#results');
    const finalMessageP = document.getElementById('#finalMessage');
    for (let i = x; i > 5; i++) {
        if (i === 5) {
            resultsP.textContent = `And the final score is: Humans: ${playerScore} Robots: ${computerScore}`;
        };
        if (playerScore >= 3) {
            finalMessageP.textContent = 'Congratulations soldier! You defeated the robots!';
        }else if (playerScore === computerScore) {
            finalMessageP.textContent = 'Tie game...FIST FIGHT!'
        }else {
            finalMessageP.textContent = 'All hail the robot overlords';
        }
    }
};

weapons.forEach(weapon => weapon.addEventListener('click', (e) => {
    gameEnd(playRound(e));
    updateScore();
}))




