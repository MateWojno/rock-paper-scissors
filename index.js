function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3) + 1; 

    if (choiceNum == 1) {
        return "rock";
    } else if (choiceNum == 2) {
        return "paper";
    } else {
        return "scissors";
    }
} // returns randomly "rock, paper, scissors";
    
function getPlayerChoice(){
    let selection = prompt("Pick Rock, Paper or Scissors");
    let playerSelection = selection.toLowerCase();
    
    return playerSelection;
} // returns player prompt in lowerCase

function playRound(playerChoice, computerChoice) {
    if (computerChoice == playerChoice) {
        return "Draw!"                                                  // case 1
    } else if  (playerChoice == "rock" && computerChoice == "scissors"){
        return "Player won! Rock beats Scissors!";       // case 2
    } else if  (playerChoice == "rock" && computerChoice == "paper") {
        return  "Computer won! Paper beats Rock!";      // case 3
    } else if  (playerChoice == "scissors" && computerChoice == "rock") {
        return  "Computer won! Rock beats Scissors!";    // case 4
    } else if  (playerChoice == "scissors" && computerChoice == "paper") {
        return "Player won! Scissors beats paper!";       // case 5
    } else if  (playerChoice == "paper" && computerChoice == "rock") {
        return "Player won! Paper beats rock!";          // case 6
    } else if  (playerChoice == "paper" && computerChoice == "scissors") {
        return "Computer won! Scissors beats Paper!";   // case 7
    } else {
        return "Something went wrong!";                 // wrong input case 8
    }
} // business game logic, using if statements 

function game() {
    var compScore  = 0;
    var playerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();        
        let playerChoice = getPlayerChoice();
        alert(playRound(playerChoice, computerChoice));
        console.log(playRound(playerChoice, computerChoice));
        
        // Scoring system
        let alertString = playRound(playerChoice, computerChoice);
        if (alertString.includes("Player won!")) {
            playerScore++;
        } else if (alertString.includes("Computer won!")) {
            compScore++;
        }
    } alert(`Player: ${playerScore}  Computer: ${compScore}`);
} // 5 rounds of Rock Paper Scissors

game();