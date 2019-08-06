var teste = $("button");
console.log(teste);

$("button").click(function() {
   //TODO: flash button background color on click - SetTimeout not working
  var buttonPressed = $(this).attr("class");
  $(this).toggleClass("pressed");
  setTimeout(function() {
    $(this).toggleClass("pressed");}, 100);
   nextSequence(buttonPressed);
});


var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence(buttonPressed) {
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  // console.log(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  // console.log(buttonPressed);
}

function flashButton() {
  $(this).toggleClass("pressed");
  setTimeout(function() {
    $(this).toggleClass("pressed");}, 100);
}
