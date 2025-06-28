// title: Stop Watch


const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }

}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){

    // let timer = null;
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000*60*60));
    hours = String(hours).padStart(2,"0");
    let minutes = Math.floor((elapsedTime / (1000*60))%60);
    minutes = String(minutes).padStart(2,"0");
    let seconds = Math.floor((elapsedTime / 1000)%60);
    seconds = String(seconds).padStart(2,"0");
    let miliSeconds = Math.floor((elapsedTime % 1000)/10);
    miliSeconds = String(miliSeconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;

}