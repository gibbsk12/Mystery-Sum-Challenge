
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
    var greenNumber = Math.floor(Math.random() * 10)+1;
    var redNumber = Math.floor(Math.random() * 10)+1;
    var orangeNumber = Math.floor(Math.random() * 10)+1;
    var blueNumber = Math.floor(Math.random() * 10)+1;
    var greenMultiplier = Math.floor(Math.random() * 5)+1;
    var redMultiplier = Math.floor(Math.random() * 5)+1;
    var blueMultiplier = Math.floor(Math.random() * 5)+1;
    var orangeMultiplier = Math.floor(Math.random() * 5)+1;

    //Generates magicNumber
    var generatedNumber = greenNumber * greenMultiplier + redNumber * redMultiplier + orangeNumber * orangeMultiplier + blueNumber * blueMultiplier;
    console.log(generatedNumber);

    $("#magicNumber").text(generatedNumber);
    $("#playerTotal").text(playerSum);

    //When a player clicks a gem, the gemNumber will be added to player total.
    $('.blue').on('click', function () {
        playerSum = playerSum + blueNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
    });

    $('.green').on('click', function () {
        playerSum = playerSum + greenNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
    });

    $('.red').on('click', function () {
        playerSum = playerSum + redNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
    });

    $('.orange').on('click', function () {
        playerSum = playerSum + orangeNumber;
        console.log("New playerTotal= " + playerTotal);
        $('#playerTotal').text(playerSum);
    });


});