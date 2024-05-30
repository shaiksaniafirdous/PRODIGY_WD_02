// script.js
let timer;
let running = false;
let elapsed = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStopBtn').innerText = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStopBtn').innerText = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    elapsed = 0;
    running = false;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStopBtn').innerText = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (running) {
        const lapTime = formatTime(elapsed);
        const li = document.createElement('li');
        li.innerText = lapTime;
        document.getElementById('laps').appendChild(li);
    }
}

function updateDisplay() {
    elapsed++;
    document.getElementById('display').innerText = formatTime(elapsed);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
