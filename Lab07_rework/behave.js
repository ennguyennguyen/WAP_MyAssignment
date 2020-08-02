let text = "";
let frames = [];
let index = 0;
let intervalObject;
const DEFAULT_INTERVAL = 250;

function startInterval() {
    let speed = document.getElementById("turbo");

    intervalObject = setInterval(function() {
        let textArea = document.getElementById("text-area");
        if(index == frames.length) {
            index = 0;
        }
        textArea.value = frames[index++];
    }, speed.checked == false ? DEFAULT_INTERVAL : 50);
}

function stopInterval() {
    clearInterval(intervalObject);
}

function clickStartBtn() {
    let startBtn = document.getElementById("start");
    startBtn.disabled = true;

    let stopBtn = document.getElementById("stop");
    stopBtn.disabled = false;

    // Store the existing text for later use
    text = document.getElementById("text-area").value;

    // Get the Animation pattern
    let aniPattern = document.getElementById("animation").value;
    frames = ANIMATIONS[aniPattern].split("=====\n");

    // Start iterating through the frame
    startInterval();
}

function clickStopBtn() {
    let stopBtn = document.getElementById("stop");
    stopBtn.disabled = true;

    let startBtn = document.getElementById("start");
    startBtn.disabled = false;

    // Stop iterating through the frame
    stopInterval();

    // return the existing value of text area
    let textArea = document.getElementById("text-area");
    textArea.value = text;
}

function clickAnimationBtn() {
    let aniPattern = document.getElementById("animation").value;
    frames = ANIMATIONS[aniPattern].split("=====\n");
    index = 0;
}

function clickSizeBtn() {
    let size = document.getElementById("size").value;
    document.getElementById("text-area").style.fontSize = size;
}

function clickTurboBtn() {
    stopInterval();

    startInterval();
}

window.onload = function() {
    let btnStart = document.getElementById("start");
    btnStart.onclick = clickStartBtn;

    let btnStop = document.getElementById("stop");
    btnStop.onclick = clickStopBtn;

    let animationPattern = document.getElementById("animation");
    animationPattern.onchange = clickAnimationBtn;

    let sizeBtn = document.getElementById("size");
    sizeBtn.onchange = clickSizeBtn;

    let turboBtn = document.getElementById("turbo");
    turboBtn.onchange = clickTurboBtn;
}