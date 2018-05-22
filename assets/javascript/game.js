$(document).ready(function () {
    //Sets up variables
    var generatedNumber = 0; //number that player will need to match
    var playerSum = 0; //sum of player's gem clicks 
    var greenNumber = 0; //number the green gem is worth
    var greenMultiplier = 0; //number of times the green gem should be clicked
    var redNumber = 0; //number the red gem is worth
    var redMultiplier = 0; //number of times the red gem should be clicked
    var blueNumber = 0; //number the blue gem is worth
    var blueMultiplier = 0; //number the blue gem should be clicked
    var orangeNumber = 0; //number the orange gem is worth
    var orangeMultiplier = 0; //number the orange gem should be clicked
    var winTotal = 0; //number of wins 
    var lossTotal = 0; //number of losses 
    //Resets for a new game
    function newGame() {
        playerSum = 0;
        console.log("This is a NEW game");
        greenNumber = Math.floor(Math.random() * 10) + 1;
        redNumber = Math.floor(Math.random() * 10) + 1;
        orangeNumber = Math.floor(Math.random() * 10) + 1;
        blueNumber = Math.floor(Math.random() * 10) + 1;
        greenMultiplier = Math.floor(Math.random() * 5) + 1;
        console.log("Click the green gem " + greenMultiplier + " times")
        redMultiplier = Math.floor(Math.random() * 5) + 1;
        console.log("Click the red gem " + redMultiplier + " times")
        blueMultiplier = Math.floor(Math.random() * 5) + 1;
        console.log("Click the blue gem " + blueMultiplier + " times")
        orangeMultiplier = Math.floor(Math.random() * 5) + 1;
        console.log("Click the orange gem " + orangeMultiplier + " times")
        generatedNumber = greenNumber * greenMultiplier + redNumber * redMultiplier + orangeNumber * orangeMultiplier + blueNumber * blueMultiplier;
        console.log(generatedNumber);
        $("#magicNumber").text(generatedNumber);
        $("#playerTotal").text(playerSum);
    }
    //Calls the newGame function to start Game 1
    newGame();

    //Add to win count, reset game 
    function youWin() {
        winTotal++;
        $('#numberOfWins').html(winTotal);
        alert("Congratulations! You've won!");
        newGame();
    }
    //Add to loss count, reset game 
    function youLose() {
        lossTotal++;
        $('#numberOfLosses').html(lossTotal);
        alert("Sorry, you've lost! Try again!");
        newGame();   
    }
    //When a player clicks a gem, the gemNumber will be added to player total.
    $('.blue').on('click', function () {
        playerSum = playerSum + blueNumber;
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber) {
            youWin();
        } else if (playerSum > generatedNumber) {
            youLose();
        }
    });
    $('.green').on('click', function () {
        playerSum = playerSum + greenNumber;
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber) {
            youWin();
        } else if (playerSum > generatedNumber) {
            youLose();
        }
    });
    $('.red').on('click', function () {
        playerSum = playerSum + redNumber;
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber) {
            youWin();
        } else if (playerSum > generatedNumber) {
            youLose();
        }
    });
    $('.orange').on('click', function () {
        playerSum = playerSum + orangeNumber;
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber) {
            youWin();
        } else if (playerSum > generatedNumber) {
            youLose();
        }
    });
});