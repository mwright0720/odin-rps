function getComputerChoice () {
    randomNumber = getRandomNumber(1,3);

    if (randomNumber === 1) {
        return "Rock";
    }

    else if (randomNumber === 2) {
        return "Paper";
    }

    else if (randomNumber == 3) {
        return "Scissors";
    }

    else {
        return "Error";
    }


}

// Gives a random number from [lowerBound, upperBound] inclusive
function getRandomNumber(lowerBound, upperBound) {
    //Make sure the bounds are integers
    lowerBound = Math.ceil(lowerBound);
    upperBound = Math.ceil(upperBound);
    
    return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
}

function capitalize(stringToChange) {
    return stringToChange.charAt(0) + stringToChange.slice(1).toLowerCase();
    
}

function updateScore(score, results) {
    score.textContent = "Player:" + playerScore + ", Computer:" + computerScore;
    results.appendChild(score);
}

function declareWinner(winner)
{
    playerScore = 0;
    computerScore = 0;
    const gameEndMessage = document.createElement('h1');
    gameEndMessage.textContent = "The " + winner + " has won!";
    results.appendChild(gameEndMessage); 
}

function playRound(playerSelection, computerSelection) {
    

    
    const results = document.querySelector('#results');
    const score = document.createElement('p');
    playerSelection = capitalize(playerSelection);
    result = "Error";

    if (playerSelection === "Rock") {

        if (computerSelection === "Rock") {
            result = "tie";
        }

        else if (computerSelection === "Paper") {
            result = "lose";
        }

        else if (computerSelection === "Scissors") {
            result = "win";
        }

    }

    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            result = "win";
        }

        else if (computerSelection === "Paper") {
            result = "tie";
        }

        else if (computerSelection === "Scissors") {
            result = "lose";
        }

    }

    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            result = "lose";
        }

        else if (computerSelection === "Paper") {
            result = "win";
        }

        else if (computerSelection === "Scissors") {
            result = "tie";
        }

    }

    message = "You " + result + "! ";
    if (result === "win") {
        playerScore += 1;
        choiceInfo = playerSelection + " beats " + computerSelection;
        results.textContent =  message + choiceInfo + "!";

    }

    else if (result === "lose") {
        computerScore += 1;
        choiceInfo = computerSelection + " beats " + playerSelection;
        results.textContent =  message + choiceInfo + "!";
    }

    else if (result === "tie") {
        choiceInfo = playerSelection + " and "  + computerSelection + " are the same!";
        results.textContent =  message + choiceInfo;
    }
    
    updateScore(score, results);
    
    if (playerScore === 5)
    {
        declareWinner("player", results);
        
    }

    if (computerScore === 5)
    {
        declareWinner("computer", results);
    
    }
    
}



const buttons = document.querySelectorAll('button');
var playerScore = 0;
var computerScore = 0;

buttons.forEach( (button) => {

    button.addEventListener('click', function (e) {
        
        
        console.log(playRound(e.target.id, getComputerChoice()));
    });
});