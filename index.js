for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let eachButton = this.innerHTML;
        makeSound(eachButton);
        animateButton(eachButton);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    animateButton(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            return;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            return;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            return;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            return;
        case "j":
            new Audio('sounds/crash.mp3').play();
            return;
        case "k":
            new Audio('sounds/kick-bass.mp3').play();
            return;
        case "l":
            new Audio('sounds/snare.mp3').play();
            return;
        default:
            return;
    }
}
function animateButton(currentButton) {
    let pressedButton = document.querySelector("." + currentButton);
    pressedButton.classList.add("pressed");
    setTimeout(function () {
        pressedButton.classList.remove("pressed");
    }, 100)
}