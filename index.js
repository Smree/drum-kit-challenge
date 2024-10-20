//for first button click-
//document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked!");
}


//for all buttons click-
var numOfButtons = document.querySelectorAll(".drum").length;
for (var i =0; i<numOfButtons; i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

     function handleClick(){
         alert("I got clicked!");
}
}


//for all buttons sound instead of alert-
var numOfButtons = document.querySelectorAll(".drum").length;
for (var i =0; i<numOfButtons; i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
 });
}



