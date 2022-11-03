import './styles/styles.scss'

const minutesNode = document.getElementById('minutes');
const secondsNode = document.getElementById('seconds');
const millisecondsNode = document.getElementById('milliseconds');
const pauseBtn = document.getElementById('pause-button');
const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let stopwatchTimer = null;

startBtn.addEventListener('mousedown', startTimer);
stopBtn.addEventListener('mousedown', stopTimer);
pauseBtn.addEventListener('mousedown', pauseTimer);

function startTimer() {
  if (stopwatchTimer) return;
  stopwatchTimer = window.setInterval(() => {
    millisecondsNode.innerText = milliseconds.toString().slice(0, 2);
    milliseconds += 10;
    
    if (minutes === 59 && seconds === 59 && milliseconds === 990) {
      stopInterval()
    } else if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++
      secondsNode.innerText = seconds < 10 ? '0' + seconds : seconds;
    } else if (seconds === 60) {
      seconds = 0;
      minutes++;
      minutesNode.innerText = minutes < 10 ? '0' + minutes : minutes;
    }
  }, 10);
}

function stopTimer() {
  window.clearInterval(stopwatchTimer);
  stopwatchTimer = null;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  millisecondsNode.innerText = '00';
  secondsNode.innerText = seconds < 10 ? '0' + seconds : seconds;
  minutesNode.innerText = minutes < 10 ? '0' + minutes : minutes;
  console.log(stopwatchTimer)
}

function pauseTimer() {
  window.clearInterval(stopwatchTimer);
  stopwatchTimer = null;
}

