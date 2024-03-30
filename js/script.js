// ELEMENTOS
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe2');
const bullet = document.querySelector('.bullet');
const cloud = document.querySelector('.cloud');
const street = document.querySelector('.street');

// AUDIOS
const audioTema = document.querySelector('#audioTema');
const audioLost = document.querySelector('#audioLost');
const audioJump = document.querySelector('#audioJump')

// REINICIAR
const reload = document.querySelector('#reload')
const hidden = document.querySelector('.hidden')

// FUNÇÃO DE PULO
const jump = () => { 

    audioJump.play()

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}
 
// FUNÇÃO DE PARAR MUSICA TEMA
const stop = () => {
    audioTema.pause();
    audioTema.currentTime = 0;
}

// FUNÇÃO PLAY = PARA JUMP E LOST
const play = () => {
    audioLost.play()
}

// FUNÇÃO DE REINICIAR 
function buttonReload() {
    location.reload();
}

 const showButton = () => {
    hidden.classList.remove('hidden')
 }

// LOGICA DO GAME
const loop = setInterval(() => {

    const bulletPosition = bullet.offsetLeft

    const pipePosition = pipe.offsetLeft;

    const pipe2Position = pipe2.offsetLeft;

    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition < 93 && pipePosition > -40 && marioPosition < 265 ) {

        bullet.style.animation = 'none';
        bullet.style.left = `${bulletPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe2.style.animation = 'none';
        pipe2.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "../img/over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "10px";
        mario.style.marginBottom = "-5px";

        street.style.animation = 'none';
        cloud.style.animation = 'none';
        pipe2.style.animation = 'none';

        stop();
        play();
        showButton()
        clearInterval(loop);
    }

    else if (pipe2Position < 93 && pipe2Position > -40 && marioPosition < 265 ) {

        bullet.style.animation = 'none';
        bullet.style.left = `${bulletPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe2.style.animation = 'none';
        pipe2.style.left = `${pipe2Position}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "../img/over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "10px";
        mario.style.marginBottom = "-5px";

        street.style.animation = 'none';
        cloud.style.animation = 'none';


        stop();
        play();
        showButton()

        clearInterval(loop);
    }

    else if (bulletPosition < 93 && bulletPosition > -20 && marioPosition < 260) {

        bullet.style.animation = 'none';
        bullet.style.left = `${bulletPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe2.style.animation = 'none';
        pipe2.style.left = `${pipe2Position}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "../img/over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "10px";
        mario.style.marginBottom = "-5px";

        street.style.animation = 'none';
        cloud.style.animation = 'none';


        stop();
        play();
        showButton()
        clearInterval(loop);
    }

    

}, 10)



 
reload.addEventListener('click',buttonReload)

document.addEventListener("keydown", jump);
