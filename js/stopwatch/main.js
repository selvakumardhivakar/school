let startButton = document.getElementById("start");
startButton.addEventListener("click", startWatch);

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopWatch);

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetWatch);

let lapButton = document.getElementById("lap");
lapButton.addEventListener("click", lapWatch);

let display = document.getElementById("display");

var ul = document.getElementById("list");

let startTime,
  createdInterval,
  isLap = false;

function calcStartTime() {
  startTime = Date.now();
}

function startWatch() {
  calcStartTime();
  createdInterval = setInterval(() => {
    let time = Date.now() - startTime;
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    display.innerHTML = `${pad(hours % 24)}:${pad(minutes % 60)}:${pad(
      seconds % 60
    )}`;
  }, 1000);
}

function stopWatch() {
  clearInterval(createdInterval);
  isLap = false;
}

function lapWatch() {
  isLap = true;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(display.innerText));
  ul.appendChild(li);
}

function resetWatch() {
  isLap = false;
  clearInterval(createdInterval);
  display.innerHTML = "00:00:00";
  ul.innerHTML = "";
}

function pad(digits) {
  return digits < 10 ? "0" + digits : digits;
}
