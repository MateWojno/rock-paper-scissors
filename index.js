var playerScore = 0;
var compScore = 0;

const resultDiv = document.querySelector('.result');
resultDiv.textContent = "Player :...  Computer :...";

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function resetResult() {
    if(playerScore === 5) {
        playerScore = 0;
        compScore = 0;
        return alert("You won!");
    } else if (compScore === 5) {
        playerScore = 0;
        compScore = 0;
        return alert("You lose!");
    }
}

rockBtn.addEventListener('click', () => {
    let resultStr = playRound('rock', getComputerChoice());
    resetResult();
    if (resultStr.includes("Player won!")) {
        playerScore++;
        return resultDiv.textContent 
                = `Player : ${playerScore}  Computer: ${compScore} `; 
         
    } else if (resultStr.includes("Computer won!")) {
        compScore++;
        return resultDiv.textContent 
                = `Player : ${playerScore}  Computer: ${compScore}`;  
        
    }
    
});

paperBtn.addEventListener('click', () => {
    let resultStr = playRound('paper', getComputerChoice());
    resetResult();
    if (resultStr.includes("Player won!")) {
        playerScore++;
        return resultDiv.textContent 
                = `Player : ${playerScore}  Computer: ${compScore} `; 
         
    } else if (resultStr.includes("Computer won!")) {
        compScore++;
        return resultDiv.textContent 
                = `Player : ${playerScore}  Computer: ${compScore}`;  
        
    }
});

scissorsBtn.addEventListener('click', () => {
    let resultStr = playRound('scissors', getComputerChoice());
    resetResult();
    if (resultStr.includes("Player won!")) {
        playerScore++;
        return resultDiv.textContent 
                = `Player : ${playerScore}  Computer: ${compScore} `; 
         
    } else if (resultStr.includes("Computer won!")) {
        compScore++;
        return resultDiv.textContent 
                = `Player : ${playerScore}  Computer: ${compScore}`;  
        
    }
});


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
    
function getPlayerChoice(selection){
    return selection;
} // returns player choice

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


