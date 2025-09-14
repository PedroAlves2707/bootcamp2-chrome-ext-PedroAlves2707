let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let time = 25 * 60; // 25 minutos
let timerInterval = null;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerDisplay.textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return; // evita rodar duas vezes

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Tempo acabou! Faça uma pausa. ☕");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25 * 60;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();