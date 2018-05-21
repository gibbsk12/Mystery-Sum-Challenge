
$(document).ready(function(){
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
var greenNumber = Math.floor(Math.random() * 11);
var redNumber = Math.floor(Math.random() * 11);
var orangeNumber = Math.floor(Math.random() * 11);
var blueNumber = Math.floor(Math.random() * 11);
var greenMultiplier = Math.floor(Math.random() * 6);
var redMultiplier = Math.floor(Math.random() * 6);
var blueMultiplier = Math.floor(Math.random() * 6);
var orangeMultiplier = Math.floor(Math.random() * 6);

//Generates magicNumber
var generatedNumber = greenNumber*greenMultiplier + redNumber*redMultiplier + orangeNumber*orangeMultiplier + blueNumber*blueMultiplier;
console.log(generatedNumber);

$("#magicNumber").text(generatedNumber);
$("#playerTotal").text(playerSum);

});

// $(".green").on ("click", function(){
//     var NewTotal = playerSum + greenNumber;
//     console.log(newTotal);
//     $("#playerTotal").text(newTotal);
// });


$(".green").on ("click", function(){
    playerSum = playerSum + greenNumber;
    console.log("New playerTotal= " + playerSum);
    $('#playerTotal').text(playerSum); });