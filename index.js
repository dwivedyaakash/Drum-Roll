//Img press
var noOfButtons = document.querySelectorAll(".drum").length

for (var i=0; i<noOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //An anonymous function i.e. without a name, passing it directly

        var currentButton = this.innerHTML;

        playAudio(currentButton)
        buttonAnimations(currentButton)
    });
}


//Keyboard press
addEventListener("keydown", function(event) {
    playAudio(event.key)
    buttonAnimations(event.key)
})


//Playing the audio
function playAudio(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(currentButton);
    }
}


//Button animations
function buttonAnimations(currentKey) {
    var pressedKey = document.querySelector("." + currentKey);
    pressedKey.classList.add("pressed");

    setTimeout(function() {
        pressedKey.classList.remove("pressed");
    }, 100)
}