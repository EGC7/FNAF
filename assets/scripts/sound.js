var backSound = document.querySelector("#back-sound");

document.body.addEventListener("mousemove", () => {
    if (backSound.paused){
        backSound.play()
    }
})