let video = document.getElementById("video1")
let controle = document.getElementsByClassName("controle")

function voltar15(){
   video.currentTime -= 15; 
}
function diminuirVel(){
    video.playbackRate -= .1
}
function executar(){
    video.play();
}
function parar(){
    video.pause();
    video.currentTime = 0;
}
function aumentarVel(){
    video.playbackRate += .1;
}
function avancar15(){
    video.currentTime += 15;
}
