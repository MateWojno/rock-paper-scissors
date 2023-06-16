# Rock, paper scissors

## main functions:
1/ getComputerChoice	[getter]
2/ getPlayerChoice	    [getter]
3/ playRound		    [comparison]
4/ game			        [main_loop]	


ad. 1/ done

ad. 2/

#   ad. 3/ 	compare playerChoice to computerChoice;
	
##   [switch] 
    cases: 
	1 - pC "playerChoice" - rock;
	2 - pC - scissors;
    3 - pC - paper

    1 - cC "computerChoice" - rock;
    2 - cC - scissors;
    3 - cC - paper;

    3x3 choices
    
###  cases:
    1 pc - 1 cC - return "Draw!"
    1 pc - 2 cC - return "Player won! Rock beats scissors!"
    1 pc - 3 cC - return "Computer won! Paper beats rock!"

    2 pc - 1 cC - return "Computer won! Rock beats scissors!"
    2 pc - 2 cC - return "Draw!"
    2 pc - 3 cC - return "Player won! Scissors beats paper!"

    3 pC - 1 cC - return "Player won! Paper beats rock!"
    3 pC - 2 cC - return "Computer won! Scissors beats paper!"
    3 pC - 3 cC - return "Draw"

Total : 7 cases, because draw is repeated 3 times
To compare choices must be the same case, 
so first make them lower case;



#   ad. 4/ 	for loop - 5 times playRound();
	each time return score;
	display console.log();

