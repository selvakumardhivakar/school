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
  intervalId,
  isLap = false;

function calcStartTime() {
  startTime = Date.now();
}

function startWatch() {
  if (!intervalId) {
    clearIntervals();
  }
  calcStartTime();
  intervalId = setInterval(() => {
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
  clearIntervals();
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
  clearIntervals();
  display.innerHTML = "00:00:00";
  ul.innerHTML = "";
}

function pad(digits) {
  return digits < 10 ? "0" + digits : digits;
}

function clearIntervals() {
  // Get a reference to the last interval + 1
  const interval_id = window.setInterval(function () {},
  Number.MAX_SAFE_INTEGER);
  // Clear any timeout/interval up to that id
  for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }
}
