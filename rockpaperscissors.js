const selections = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return selections[~~(Math.random() * selections.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'rock') {
            return ("Tie!");
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return ("You Lose! Paper beats Rock");
        }
        else if (computerSelection.toLowerCase() === 'scissors') {
            return ("You Win! Rock beats Scissors");
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'rock') {
            return ("You Win! Paper beats Rock");
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return ("Tie!");
        }
        else if (computerSelection.toLowerCase() === 'scissors') {
            return ("You Lose! Rock beats Scissors");
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection.toLowerCase() === 'rock') {
            return ("You Lose! Rock beats Scissors");
        }
        else if (computerSelection.toLowerCase() === 'paper') {
            return ("You Win! Paper beats Rock");
        }
        else if (computerSelection.toLowerCase() === 'scissors') {
            return ("Tie!");
        }
    }
    return;
}

function game() {
    for (let i = 0; i < 5; ++i) {
        let x = prompt("Please pick rock, paper, or scissors");
        let a = computerPlay();
        playRound(x, a);
    }
}