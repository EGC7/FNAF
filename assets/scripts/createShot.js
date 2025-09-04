function createShot(e) {
    const shot = document.createElement("div");
    shot.classList.add('shot');

    const naveRect = document.querySelector("#nozes").getBoundingClientRect();
    const gameScreen = document.querySelector("#gameScreen").getBoundingClientRect();

    shot.style.left = `${naveRect.left + naveRect.width/2}px`;
    shot.style.top = `${naveRect.top - gameScreen.top + 20}px`;

    document.querySelector("#gameScreen").appendChild(shot);

    moveShot(shot);
}

function moveShot(shot) {
    const intervalo = setInterval(() => {
        let shotTop = parseInt(shot.style.top);
        shot.style.top = `${shotTop - 5}px`;

        if (shotTop <= 0) {
            shot.remove();
            clearInterval(intervalo);
            return;
        }

        const shotRect = shot.getBoundingClientRect();
        const aliens = document.querySelectorAll(".aliens");

        aliens.forEach(alien => {
            const alienRect = alien.getBoundingClientRect();
            if (
                shotRect.left < alienRect.right &&
                shotRect.right > alienRect.left &&
                shotRect.top < alienRect.bottom &&
                shotRect.bottom > alienRect.top
            ) {
                alien.remove();
                shot.remove();
                clearInterval(intervalo);
            }
        });
    }, 10);
}

export {createShot}
