const DEFAULT_INTERVAL = 250;
let text = "";
let frames = [];
let startIntervalId;
let index = 0;

// -- UTILITIES --
function startInterval() {
    let speed = document.getElementById("turbo");

    startIntervalId = setInterval(function () {
        let textArea = document.getElementById("text-area");
        if (index == frames.length) index = 0;
        textArea.value = frames[index++];
    }, speed.checked == false ? DEFAULT_INTERVAL : 50);
}

function stopInterval() {
    clearInterval(startIntervalId);
}

// -- ACTIONS --
function onStartClick() {
    let btnStart = document.getElementById("start");
    btnStart.disabled = true;

    let btnStop = document.getElementById("stop");
    btnStop.disabled = false;

    let txtArea = document.getElementById("text-area");
    text = txtArea.value;

    let animationValue = document.getElementById("animation").value;
    frames = ANIMATIONS[animationValue].split("=====\n");

    startInterval();
}

function onStopClick() {
    let btnStop = document.getElementById("stop");
    btnStop.disabled = true;

    let btnStart = document.getElementById("start");
    btnStart.disabled = false;

    stopInterval();
    let textArea = document.getElementById("text-area");
    textArea.value = text;
}

function changeSize() {
    let fontSize = document.getElementById("size");
    document.getElementById("text-area").style.fontSize = fontSize.value;
}

function changeSpeed() {
    let speed = document.getElementById("turbo");

    stopInterval();

    startInterval();
}

function animationChange() {
    let animationValue = document.getElementById("animation").value;
    frames = ANIMATIONS[animationValue].split("=====\n");
    index = 0;
}

// -- EXECUTION --
window.onload = function () {
    let btnStart = document.getElementById("start");
    btnStart.onclick = onStartClick;

    let btnStop = document.getElementById("stop");
    btnStop.onclick = onStopClick;

    let btnSetSize = document.getElementById("size");
    btnSetSize.onchange = changeSize;

    let btnSetSpeed = document.getElementById("turbo");
    btnSetSpeed.onchange = changeSpeed;

    let btnAnimation = document.getElementById("animation");
    btnAnimation.onchange = animationChange;
}