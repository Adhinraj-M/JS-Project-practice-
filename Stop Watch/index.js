const timeEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elaspedTime = 0;
let timeInterval;

function start() {
  startTime = Date.now() - elaspedTime;

  timeInterval = setInterval(() => {
    elaspedTime = Date.now() - startTime;
    timeEl.textContent = formatTime(elaspedTime);
  }, 10);
}

function formatTime(elaspedTime) {
  const milliSeconds = Math.floor((elaspedTime % 1000) / 10);
  const seconds = Math.floor((elaspedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elaspedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elaspedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
  );
}

function stop() {
  clearInterval(timeInterval);
}

function reset() {
  clearInterval(timeInterval);
  elaspedTime = 0;
  timeEl.textContent = "00:00:00";
}
