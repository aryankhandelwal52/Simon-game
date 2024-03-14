let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
var userClickPattern=[];
var started=false;
var level=0;
$(document).keypress(function(){
if(started!=true){
    $("#level-title").text("level"+level);
    nextSequence();
  started=true;
}
});
$(".btn").click(function(){
    var userChoseColour=$(this).attr("id");
    userClickPattern.push(userChoseColour);
    playSound(userChoseColour);
    animatePress(userChoseColour);
    checkAnswer(userClickPattern.length-1);
});
function checkAnswer(currenLevel){
    if(userClickPattern[currenLevel]===gamePattern[currenLevel]){
        console.log("success");
    
    if(userClickPattern.length===gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
}
else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
        
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
}
}
function nextSequence() {
 userClickPattern=[];
    level++;
  $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
 
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
    
}, 100);
}
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }
  