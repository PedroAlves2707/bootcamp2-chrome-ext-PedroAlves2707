# ⏳ Extensão Pomodoro – Pedro Alves

Uma extensão simples de **Pomodoro** feita para ajudar no gerenciamento de tempo.  
Com ela, você pode iniciar um ciclo de **25 minutos de foco** e receber um alerta quando o tempo acabar.

---

## 📂 Estrutura do Projeto

```bash
focusfox-chrome-extension/
├─ src/
│  ├─ popup/
│  │  ├─ popup.html
│  │  ├─ popup.js
│  │  └─ popup.css
│  ├─ content/
│  │  └─ content.js
│  ├─ background/
│  │  └─ service-worker.js
│  ├─ options/
│  │  ├─ options.html
│  │  └─ options.js
│  ├─ assets/
│  │  └─ logo.svg
│  └─ styles/
│     └─ global.css
├─ icons/
│  ├─ icon16.png
│  ├─ icon32.png
│  ├─ icon48.png
│  └─ icon128.png
├─ docs/
│  └─ index.html
├─ manifest.json
├─ README.md
└─ LICENSE
🖼️ Screenshots
Popup da Extensão	Alerta de Fim de Ciclo

(Tire screenshots do popup aberto no Chrome e do alerta aparecendo quando o tempo acaba, salve na pasta docs/ e use os nomes acima para aparecerem aqui)

📜 Código dos Principais Arquivos
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
⚙️ Instalação
Baixe ou clone este repositório.

Abra o Google Chrome e vá em chrome://extensions/.

Ative o Modo do Desenvolvedor (canto superior direito).

Clique em Carregar sem compactação.

Selecione a pasta do projeto.

Pronto! A extensão será carregada e estará disponível no seu navegador.

🎯 Funcionalidades
✅ Inicia um cronômetro de 25 minutos
✅ Exibe o tempo restante em tempo real
✅ Mostra alerta sonoro/visual quando o ciclo acaba
✅ Permite resetar o cronômetro a qualquer momento

📸 O que Entregar
README.md (este arquivo bem organizado)

Código da extensão funcionando

Manifest.json válido

Screenshots mostrando:

Popup da extensão aberto

Alerta de fim de ciclo

Vídeo ou GIF opcional mostrando o funcionamento

📄 Licença
Este projeto está sob a licença MIT – fique à vontade para usar e modificar.
