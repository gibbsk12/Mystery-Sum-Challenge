
$(document).ready(function () {

    //Sets up variables
    var generatedNumber = 0;
    var playerSum = 0;
    var greenNumber = 0;
    var greenMultiplier = 0;
    var redNumber = 0;
    var redMultiplier = 0;
    var blueNumber = 0;
    var blueMultiplier = 0;
    var orangeNumber = 0;
    var orangeMultiplier = 0;
    var winTotal = 0;
    var lossTotal = 0;

    //Generates random variables 
    var greenNumber = Math.floor(Math.random() * 10) + 1;
    var redNumber = Math.floor(Math.random() * 10) + 1;
    var orangeNumber = Math.floor(Math.random() * 10) + 1;
    var blueNumber = Math.floor(Math.random() * 10) + 1;
    var greenMultiplier = Math.floor(Math.random() * 5) + 1;
    console.log("Click the green gem " + greenMultiplier + " times")
    var redMultiplier = Math.floor(Math.random() * 5) + 1;
    console.log("Click the red gem " + redMultiplier + " times")
    var blueMultiplier = Math.floor(Math.random() * 5) + 1;
    console.log("Click the blue gem " + blueMultiplier + " times")
    var orangeMultiplier = Math.floor(Math.random() * 5) + 1;
    console.log("Click the orange gem " + orangeMultiplier + " times")

    //Generates magicNumber
    var generatedNumber = greenNumber * greenMultiplier + redNumber * redMultiplier + orangeNumber * orangeMultiplier + blueNumber * blueMultiplier;
    console.log(generatedNumber);

    $("#magicNumber").text(generatedNumber);
    $("#playerTotal").text(playerSum);

    //Starts a new game
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
    //Display when a player wins 
    function alertWin() {
        alert("Congratulations! You've won!")
    }
    //Display when a player loses
    function alertLoss() {
        alert("Sorry, you've lost! Try again!")
    }
    //Add to win count, reset game 
    function youWin() {
        winTotal++;
        var slowWinAlert = setTimeout(alertWin, 500);
        $('#numberOfWins').text(winTotal);
        var SlowReset = setTimeout(newGame, 500);
    }
    //Add to loss count, reset game 
    function youLose() {
        lossTotal++;
        var slowLossAlert = setTimeout(alertLoss, 500);
        $('#numberOfLosses').text(lossTotal);
        var SlowReset = setTimeout(newGame, 500);
    }

    //When a player clicks a gem, the gemNumber will be added to player total.
    $('.blue').on('click', function () {
        playerSum = playerSum + blueNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber){
            youWin();
        }else if (playerSum > generatedNumber){
            youLose();
        }
    });

    $('.green').on('click', function () {
        playerSum = playerSum + greenNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber){
            youWin();
        }else if (playerSum > generatedNumber){
            youLose();
        }
    });

    $('.red').on('click', function () {
        playerSum = playerSum + redNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber){
            youWin();
        }else if (playerSum > generatedNumber){
            youLose();
        }
    });

    $('.orange').on('click', function () {
        playerSum = playerSum + orangeNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
        if (playerSum == generatedNumber){
            youWin();
        }else if (playerSum > generatedNumber){
            youLose();
        }
    });


});