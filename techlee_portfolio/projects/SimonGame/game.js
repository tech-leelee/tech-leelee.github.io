alert("Rules: repeat the colour sequence");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var firstGameStarted = false; //A way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

var level = "0";



$(document).keypress(function() {
  if (!firstGameStarted) { //if the variable firstGameStarted equals a boolean of false --- (!var) means 'not true', therefore false

    $("h1").text("Level " + level); //...then change h1 to Level 0...
    nextSequence(); //if statement satisfied will carry out nextSequence function...
    firstGameStarted = true //...then change the value of variable firstGameStarted = true...
  }                         //...now the firstGameStarted has a value of true, the keypress function cannot happen again
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  //console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.lastIndexOf(userChosenColour));
  console.log(userClickedPattern);
});

function checkAnswer(currentLevel) {

    //if answer is correct will console log success
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log ("success");

        //if there is success will then check that the user's sequence is complete by checking the length of both arrays
        if (userClickedPattern.length === gamePattern.length){

        setTimeout(function(){
          nextSequence()},
           1000);}


      } else {
      console.log ("wrong");

      var audioWrong = new Audio ('sounds/wrong.mp3');
      audioWrong.play();

      $("body").addClass("game-over");
      setTimeout (function (){
        $("body").removeClass("game-over");
      }, 200);

      $("h1").text("Game Over - Press any key to Restart...");

      startOver();
    }
}



function nextSequence() {

  userClickedPattern.length = 0; //can also clear array with --- userClickedPattern = [];

  level++;

  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
 }


  function playSound(name) {
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
  }


  function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
    }, 100);
  }


  function startOver(){
    level = 0;
    gamePattern = [];
    firstGameStarted = false;
  }
