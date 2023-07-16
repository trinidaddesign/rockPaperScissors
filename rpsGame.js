const weapons = document.querySelectorAll('#weapons');
const scores = document.getElementById('#scores');

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const winner = compareSelection(playerSelection, computerSelection);
    

    console.log(playerSelection, computerSelection, winner, playerScore, computerScore);
}

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * arr.length);
    const answer = arr[randomIndex];
    return answer;
}

function compareSelection(player, computer) {
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
    }
}

function updateScore() {
    const playerScoreP = document.getElementById('playerScore');
    const computerScoreP = document.getElementById('computerScore');
    const finalMessageP = document.getElementById('finalMessage');
    const resultP = document.getElementById('results')
    const totalScore = playerScore + computerScore;

    playerScoreP.textContent = `Player Score: ${playerScore}`;
    computerScoreP.textContent = `Computer Score: ${computerScore}`;
    if (totalScore == 5) {
            if (playerScore >= 3) {
            resultP.textContent = `Final Score -- Human: ${playerScore} Robot: ${computerScore}`
            finalMessageP.textContent = 'Congratulations soldier! you beat the robots';
            }else {
                resultP.textContent = `Final Score -- Robot: ${computerScore} Human: ${playerScore}`
                finalMessageP.textContent = 'all hail our robot overlords!';
            }
        }
};



weapons.forEach(weapon => weapon.addEventListener('click', (e) => {
    playRound(e);
    updateScore();
}))




