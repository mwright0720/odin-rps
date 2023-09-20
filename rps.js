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

function playRound(playerSelection, computerSelection) {
    
    const results = document.querySelector('#results');
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
        choiceInfo = playerSelection + " beats " + computerSelection;
        results.textContent =  message + choiceInfo + "!";
    }

    else if (result === "lose") {
        choiceInfo = computerSelection + " beats " + playerSelection;
        results.textContent =  message + choiceInfo + "!";
    }

    else if (result === "tie") {
        choiceInfo = playerSelection + " and "  + computerSelection + " are the same!";
        results.textContent =  message + choiceInfo;
    }
}



const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {

    button.addEventListener('click', function (e) {
        
        
        console.log(playRound(e.target.id, getComputerChoice()));
    });
});