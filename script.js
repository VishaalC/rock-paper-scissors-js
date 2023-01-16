let rock = document.querySelector(".user-button.rock");
let paper = document.querySelector(".user-button.paper");
console.log(paper);
let scissors = document.querySelector('.user-button.scissors');
console.log(scissors);
let computerScore = 0;
let userScore = 0;
let rounds = 0;

function getComputerChoice() {
    let choiceArr = ["Rock", "Paper", "Scissors"];
    let choice =  choiceArr[Math.floor(Math.random() * choiceArr.length)];
    
    return (choice);
}

// Returns result of each round
function playRound (playerSelection, computerSelection) {
    pSelect = playerSelection.toLowerCase();
    cSelect = computerSelection.toLowerCase();

    if (pSelect == cSelect) {
        return ("It's a Tie!")
    }

    else if (pSelect == "rock") 
    {
        if (cSelect == "paper") 
        {
            computerScore++;
            return ("You Lose! Paper beats Rock");
        }

        else if (cSelect == "scissors") 
        {
            userScore++;
            return ("You Win! Rock beats Scissors");
        }
    }

    else if (pSelect == "scissors")
    {
        if (cSelect == "rock")
        {
            computerScore++;
            return ("You Lose! Rock Beats Scissors");
        }

        else if (cSelect == "paper")
        {
            userScore++;
            return("You Win! Scissors Beats Rock");
        }
    }

    else if (pSelect == "paper")
    {
        if (cSelect == "rock")
        {
            userScore++;
            return ("You Win! Paper Beats Rock");
        }

        else if (cSelect == "scissors")
        {
            computerScore++;
            return ("You Lose! Scissors Beats Rock");
        }
    }
}

rock.addEventListener('click', function(e) {
    let playerChoice = 'rock';
    let ComputerChoice = getComputerChoice();
    let result = playRound(playerChoice, ComputerChoice);
    document.getElementById('comp-choice').textContent = ComputerChoice;
    document.getElementById('user-choice').textContent = playerChoice;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = computerScore;
    if (userScore === 5){
        alert("You Win!");
        location.reload();
    }
    else if (computerScore === 5) {
        alert("You Lose!");
        location.reload();
    }
})
paper.addEventListener('click', function(e) {
    let playerChoice = 'paper';
    let ComputerChoice = getComputerChoice();
    let result = playRound(playerChoice, ComputerChoice);
    document.getElementById('comp-choice').textContent = ComputerChoice;
    document.getElementById('user-choice').textContent = playerChoice;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = computerScore;
    if (userScore === 5){
        alert("You Win!");
        location.reload();
    }
    else if (computerScore === 5) {
        alert("You Lose!");
        location.reload();
    }

})
scissors.addEventListener('click', function(e) {
    let playerChoice = 'scissors';
    let ComputerChoice = getComputerChoice();
    let result = playRound(playerChoice, ComputerChoice);
    document.getElementById('comp-choice').textContent = ComputerChoice;
    document.getElementById('user-choice').textContent = playerChoice;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = computerScore;
    if (userScore === 5){
        alert("You Win!");
        location.reload();
    }
    else if (computerScore === 5) {
        alert("You Lose!");
        location.reload();
    }


})
