# ⏳ Extensão Pomodoro – Pedro Alves

Uma extensão simples de **Pomodoro** para Google Chrome/Opera GX.  
Ideal para quem quer organizar o tempo de estudo ou trabalho com ciclos de 25 minutos de foco.

---

## 📂 Estrutura do Projeto

```bash
pomodoro-extension/
├─ popup.html
├─ popup.css
├─ popup.js
├─ manifest.json
└─ README.md
Simples e direto: só os arquivos essenciais para a extensão funcionar.

🖼️ Screenshots
Popup da Extensão	Alerta de Fim de Ciclo
(adicione aqui uma imagem do popup aberto)	(adicione aqui o alerta que aparece quando o tempo acaba)

📜 Código dos Arquivos
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
manifest.json
json
Copiar código
{
  "manifest_version": 3,
  "name": "Pomodoro - Pedro Alves",
  "version": "1.0",
  "description": "Extensão simples de Pomodoro para gerenciar tempo de foco.",
  "action": {
    "default_popup": "popup.html"
  },
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}

⚙️ Instalação
Baixe ou clone este repositório.

Abra o Google Chrome/OperaGX e vá em chrome://extensions/.

Ative o Modo do Desenvolvedor (canto superior direito).

Clique em Carregar sem compactação.

Selecione a pasta onde os arquivos estão.

Pronto! A extensão já vai aparecer na sua barra de extensões.

🎯 Funcionalidades
✅ Cronômetro de 25 minutos
✅ Alerta quando o tempo acaba
✅ Botão para resetar o contador
✅ Design simples e leve

📄 Licença
Projeto desenvolvido para fins acadêmicos.
Você pode modificar e melhorar como quiser. 🎓
