//adding event listener to whole document for 
//keyboard press instead of button press-

//detecting button press-
var numOfButtons = document.querySelectorAll(".drum").length;
for (var i =0; i<numOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
});
}


//detecting key press-
document.addEventListener("keypress", function(event){
   makeSound(event.key);
});



//to play relevant sound-
function makeSound(key){
switch (key) {
    case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    default:console.log(buttonInnerHTML);
        break;
}
}
