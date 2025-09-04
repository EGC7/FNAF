import { createShot } from "/assets/scripts/createShot.js";

const gameScreen = document.querySelector("#gameScreen");
const playGame = gameScreen.querySelector("#play");
const about = gameScreen.querySelector("#about");

playGame.addEventListener("click", () => {
    

    const sectAli = document.createElement('div');
    sectAli.id = 'sectAlien';
    const nozes = document.createElement('div');
    nozes.id = 'nozes';

    gameScreen.removeChild(gameScreen.querySelector("#Menu"))

    const gap = 20;
    const alienWidth = Math.floor((window.innerWidth - gap) / 15) - gap;
    const alienHeight = alienWidth;
    const lines = Math.floor((window.innerHeight / 3) / (alienHeight + gap));

    const aliensArray = [];

    for (let row = 0; row < lines; row++) {
        for (let col = 0; col < 10; col++) {
            const alien = document.createElement("div");
            alien.classList.add("aliens");

            alien.style.width = `${alienWidth}px`;
            alien.style.height = `${alienHeight}px`;
            alien.style.position = "absolute";
            alien.style.left = `${gameScreen.getBoundingClientRect().width / 5 + col * (alienWidth + gap)}px`;
            alien.style.top = `${gameScreen.getBoundingClientRect().height / 4 + (row * (alienHeight + gap))}px`;
            alien.style.backgroundImage = `url('/assets/images/alien0${Math.floor(Math.random() * 3)}.png')`;

            sectAli.appendChild(alien);

            aliensArray.push({
                element: alien,
                x: parseFloat(alien.style.left),
                y: parseFloat(alien.style.top),
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2 
            });
        }
    }

    gameScreen.appendChild(sectAli)
    gameScreen.appendChild(nozes)

    gameScreen.style.justifyContent = 'space-around'

    gameScreen.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let width = nozes.getBoundingClientRect().width;
        nozes.style.left = `${x - (width / 2)}px`;
    });

    gameScreen.addEventListener("click", createShot)

    function moveAliens() {
        const screenRect = gameScreen.getBoundingClientRect();
        aliensArray.forEach(alien => {

            alien.x += alien.dx;
            alien.y += alien.dy;

            if (alien.x < 0 || alien.x + alienWidth > screenRect.width) alien.dx *= -1;
            if (alien.y < 0 || alien.y + alienHeight > screenRect.height) alien.dy *= -1;

            alien.element.style.left = `${alien.x}px`;
            alien.element.style.top = `${alien.y}px`;
        });

        requestAnimationFrame(moveAliens);
    }

    moveAliens();

    about.addEventListener("click", () => {
        const newInfo = document.createElement('div');
        newInfo.id = 'aboutInfo';
        gameScreen.appendChild(newInfo)
        gameScreen.querySelector("#Menu").style.display = 'none';
    })
});
