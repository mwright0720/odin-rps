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