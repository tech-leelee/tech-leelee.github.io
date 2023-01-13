//DETECTING BUTTON PRESSES/CLICKS
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    //additional code  --- this.style.color = "white"; --- this line of code turns letters inside button white when clicked. DOES NOT work with Switch Statements

    var buttonInnerHTML = this.innerHTML; //THE CLICK TAKES innerHTML, SAVES IT AS VARAIBLE VALUE

    makeSound(buttonInnerHTML);
  //THE VARIABLE -buttonInnerHTML- BECOMES THE INPUT FOR FUNCTION, IS THE innerHTML (w, a, s, d, j, k, l)
  //makeSound(w) -- SENT TO THE makeSound FUNCTION

    buttonAnimation(buttonInnerHTML);
//THIS WORKS IN THE SAME WAY AS makeSound FUNCTION, BUT NOW GOES TO buttonAnimation FUNCTION


    });
}


//DETECTING KEYPRESSES
document.addEventListener("keydown", function(event) {      //THIS EVL IS FOR ANY KEYPRESS - IS LISTENING TO THE ENTIRE PAGE
//THE event INPUT IS A LIST WITH INFORMATION ABOUT WHAT ACTIVATED THE KEYDOWN EVL

  //additional code -- alert ("You pressed a key."); --

  makeSound(event.key);
  //WITHIN event LIST IS INFORMATION ON THE KEY THAT WAS PRESSED -- REFERRED TO AS key
  //makeSound(p) MAY COME UP BUT WON'T PLAY SOUND BECASUE IT DOESN'T MATCH WITH ANY IF THE CASES IN THE SWITCH STATEMENT
  //makeSound(w) COMES UP, WILL BE SENT TO makeSound FUNCTION AND THEN PLAY THE ASSIGNED SOUND

  buttonAnimation(event.key);
//THIS WORKS IN THE SAME WAY AS makeSound FUNCTION, BUT NOW GOES TO buttonAnimation FUNCTION

});


function makeSound(keySound) {
//keySound USED TO BE NAMED key BUT WAS CONFUSING AS IT HAS NO CONNECTION WITH event.key -- CAN BE CALLED ANYTHING

switch (keySound) {
  case "w":
  var crash = new Audio('sounds/crash.mp3');
  crash.play();
    break;

  case "a":
  var kick = new Audio('sounds/kick-bass.mp3');
  kick.play();
    break;

  case "s":
  var snare = new Audio('sounds/snare.mp3');
  snare.play();
    break;

  case "d":
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
    break;

  case "j":
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
    break;

  case "k":
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
    break;

  case "l":
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
    break;
  default: console.log (buttonInnerHTML)

}

};

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
//WHEN THE currentKey INPUT IS FILLED IT WILL ONLY BE A LETTER, SO EED TO CONCATENATE "." TO MAKE IT A CLASS

  activeButton.classList.add("pressed");
//CAN CALL VARIABLE WITHOUT --document.querySelector--
//.classList.add --- CAN ADD CLASS TO VALUE OF VARIABLE, IN THIS CASE IS THE ELEMENTS WITH CLASS OF .(letter)

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 500);
//THIS CODE ALLOWS A TIMER ON FUNCTIONS
//setTimeout(FUNCTION,AMOUNT OF TIME IN MILLISECONDS)

//additional code ---  activeButton.classList.toggle("pressed");
  //.toggle WILL TURN .pressed CLASS ON AND OFF WHEN CLICKED OR PRESSED, ISN-\'T NECESSARY WITH TIMER



}
