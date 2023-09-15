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
        return message + choiceInfo + "!";
    }

    else if (result === "lose") {
        choiceInfo = computerSelection + " beats " + playerSelection;
        return message + choiceInfo + "!";
    }

    else if (result === "tie") {
        choiceInfo = playerSelection + " and "  + computerSelection + " are the same!";
        return message + choiceInfo;
    }
}

function game() {
    let maxRounds = 5;
    for(let i = 1; i <= 5; i ++) {
        playerSelection = prompt("Enter rock, paper, or scissors");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}