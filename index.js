// function getComputerChoice() {
//     // randomly returns "Rock" "Paper" or "Scissors";
//     let choiceNum = Math.floor(Math.random() * 3) + 1; 

//     if (choiceNum == 1) {
//         return "Rock";
//     } else if (choiceNum == 2) {
//         return "Paper"
//     } else {
//         return "Scissors"
//     }
// }
    
function getPlayerChoice(){
    let selection = prompt("Pick Rock, Paper or Scissors");
    // if(selection != null) 
    // {selection = selection.toLowerCase;}

    // if (selection !== "rock" || 
    //     selection !== "paper"|| 
    //     selection !==  "scissors") {
    //         console.log("Idiot");
    //         return "Error";
    //     }
    return selection;
    // it should be case-insensitive, 
    // you can input RoCk for example 
 
}
getPlayerChoice();
const playerSelection = getPlayerChoice();
console.log(playerSelection);


// // TEST ONLY - setter
// getComputerChoice();
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// // ==================
 


// function playRound(playerSelection, computerSelection) {
//     // return a string that declares the winner like:
//     // "You lose! Paper beats Rock"
// }

// const playerSelection = "rock";
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerSelection, computerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

