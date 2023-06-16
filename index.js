function getComputerChoice() {
    // randomly returns "Rock" "Paper" or "Scissors";
    let choiceNum = Math.floor(Math.random() * 3) + 1; 

    if (choiceNum == 1) {
        return "rock";
    } else if (choiceNum == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}
    
function getPlayerChoice(){
    let selection = prompt("Pick Rock, Paper or Scissors");
    let playerSelection = selection.toLowerCase();
    
    return playerSelection;
    // it should be case-insensitive, 
    // you can input RoCk for example 
}


getPlayerChoice();
const playerChoice = getPlayerChoice();
console.log(playerChoice);


// TEST ONLY - setter
getComputerChoice();
const computerChoice = getComputerChoice();
console.log(computerChoice);
// ==================
 


function playRound(playerChoice, computerChoice) {
    if (computerChoice == playerChoice) {
        return "Draw!";
    } else {
        return "TODO";
    }
    
    // TODO
    // switch (playerChoice === getComputerChoice) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    }// return a string that declares the winner like:
    // "You lose! Paper beats Rock"
}

const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

