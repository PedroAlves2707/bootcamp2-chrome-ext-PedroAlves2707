# ⏳ Extensão Pomodoro – Pedro Alves  

Uma extensão simples de **Pomodoro** para Google Chrome / Opera GX.  
Ideal para quem quer organizar o tempo de estudo ou trabalho com ciclos de 25 minutos de foco.

---

## 🗂️ Estrutura do Projeto

```bash
pomodoro-extension/
├─ index.html
├─ style.css
├─ scrip.js
├─ manifest.json
└─ README.md
```
Simples e direto: apenas os arquivos essenciais para a extensão funcionar.

# 🖼️ Screenshots
📌 Popup da Extensão
(adicione aqui um print do popup aberto no navegador)

📌 Alerta de Fim de Ciclo
(adicione aqui um print da mensagem de alerta quando o tempo acabar)

# 💻 Código dos Arquivos
```
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
```
# ⚡ Funcionalidades
✅ Contagem regressiva de 25 minutos (padrão Pomodoro).
✅ Botão Iniciar para começar o ciclo.
✅ Botão Resetar para reiniciar a contagem.
✅ Alerta visual no final do ciclo para lembrar de fazer uma pausa.

# 🔧 Instalação (Modo Desenvolvedor)
Baixe este repositório como .zip ou clone no seu computador.

Abra o Chrome ou Opera GX e vá em chrome://extensions/.

Ative o Modo do Desenvolvedor (canto superior direito).

Clique em Carregar sem compactação.

Selecione a pasta onde está o projeto.

O ícone da extensão aparecerá na barra do navegador. Clique para abrir o popup.

# 📜 Licença
Distribuído sob a licença MIT.
Você pode usar, modificar e distribuir este projeto livremente, desde que mantenha os créditos.

# 🌐 GitHub Pages
()

