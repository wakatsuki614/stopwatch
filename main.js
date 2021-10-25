const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let timerID;
let elapsedTime = 1;
let htmlTime = document.getElementById("counter");

function startTimer() {
  timerID = setInterval("countTime()", 100);
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled", false);
  resetBtn.removeAttribute("disabled", false);
}

function countTime() {
  var hour = Math.floor(elapsedTime / 36000);
  var min = Math.floor(elapsedTime % 36000 / 600);
  var s = Math.floor(elapsedTime % 600 / 10);
  var ms = elapsedTime % 10;
  htmlTime.innerHTML = hour + ':' + min + ':' + s + ':' + ms;
  elapsedTime++;
}

function stopTimer() {
  clearInterval(timerID);
  stopBtn.setAttribute("disabled", true);
  startBtn.removeAttribute("disabled", false);
}

function resetTimer() {
  clearInterval(timerID);
  counter.textContent = "0:0:0:0";
  startBtn.removeAttribute("disabled", false);
  stopBtn.setAttribute("disabled", true);
  resetBtn.setAttribute("disabled", true);
  elapsedTime = 1;
}