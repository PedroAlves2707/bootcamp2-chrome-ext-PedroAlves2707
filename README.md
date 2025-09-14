# ⏳ Extensão Pomodoro – Pedro Alves

Uma extensão simples de Pomodoro feita para ajudar no gerenciamento de tempo.  
Com ela, você pode iniciar um ciclo de 25 minutos de foco e receber alerta quando o tempo acabar.

---

## 📂 Estrutura do Projeto

bootcamp2-chrome-ext-PedroAlves/
├─ manifest.json # Configurações da extensão
├─ popup.html # Interface do popup (timer e botões)
├─ popup.css # Estilo do popup (cores, layout)
└─ popup.js # Lógica do timer (contagem, reset, alerta)

yaml
Copiar código

---

## 📜 Código dos Arquivos

### `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "Pomodoro Simples",
  "version": "1.0.0",
  "description": "Uma extensão simples para gerenciar seu tempo com Pomodoro.",
  "action": {
    "default_popup": "popup.html"
  }
}
popup.html
html
Copiar código
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Pomodoro</title>
    <link rel="stylesheet" href="popup.css">
  </head>
  <body>
    <h1>Pomodoro</h1>
    <div id="timer">25:00</div>
    <button id="start">Iniciar</button>
    <button id="reset">Resetar</button>
    <script src="popup.js"></script>
  </body>
</html>
popup.css
css
Copiar código
body {
  width: 200px;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 10px;
}

#timer {
  font-size: 2em;
  margin: 10px 0;
}

button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  background: #ff6b6b;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #ff4c4c;
}
popup.js
js
Copiar código
let timeLeft = 25 * 60; // 25 minutos em segundos
let timerId = null;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerId);
      timerId = null;
      alert("⏰ Tempo acabou! Faça uma pausa!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
📸 Screenshots
<p align="center"> <img src="docs/screenshot1.png" width="300" alt="Popup com timer inicial"> <img src="docs/screenshot2.png" width="300" alt="Popup durante a contagem"> </p>
🚀 Como Instalar
Baixe ou clone o repositório.

Abra o Chrome/Opera GX e vá em Extensões → Gerenciar Extensões.

Ative o Modo do desenvolvedor.

Clique em Carregar sem compactação.

Escolha a pasta da extensão.

Clique no ícone e use seu Pomodoro!

🎯 Funcionalidades
✅ Timer de 25 minutos
✅ Botão de iniciar e resetar
✅ Alerta ao fim do tempo
✅ Layout simples e funcional
