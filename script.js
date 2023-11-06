// script.js

let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const roundResult = document.getElementById('roundResult');

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', function () {
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        displayResult(result, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function displayResult(result, playerChoice, computerChoice) {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundResult.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}
