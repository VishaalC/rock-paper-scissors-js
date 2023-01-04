// Returns random computer choice
function getComputerChoice() {
    let choiceArr = ["Rock", "Paper", "Scissors"];
    let choice =  choiceArr[Math.floor(Math.random() * choiceArr.length)];
    
    return (choice);
}

// Returns result of each round
function playRound (playerSelection, computerSelection) {
    pSelect = playerSelection.toLowerCase();
    cSelect = computerSelection.toLowerCase();

    console.log(pSelect);
    console.log(cSelect);

    if (pSelect == cSelect) {
        return ("It's a Tie!")
    }

    else if (pSelect == "rock") 
    {
        if (cSelect == "paper") 
        {
            return ("You Lose! Paper beats Rock");
        }

        else if (cSelect == "scissors") 
        {
            return ("You Win! Rock beats Scissors");
        }
    }

    else if (pSelect == "scissors")
    {
        if (cSelect == "rock")
        {
            return ("You Lose! Rock Beats Scissors");
        }

        else if (cSelect == "paper")
        {
            return("You Win! Scissors Beats Rock");
        }
    }

    else if (pSelect == "paper")
    {
        if (cSelect == "rock")
        {
            return ("You Win! Paper Beats Rock");
        }

        else if (cSelect == "scissors")
        {
            return ("You Lose! Scissors Beats Rock");
        }
    }

}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// Actual game function
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: ");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

// function call
game();