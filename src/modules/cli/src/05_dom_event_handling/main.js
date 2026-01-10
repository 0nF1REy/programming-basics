// 1º FORMA DE DISPARAR UM EVENTO
var clickArea = document.getElementById("area");

function handleClick() {
  clickArea.innerText = "Clicou!";
  clickArea.style.background = "#4704b2ff";
}


function handleMouseEnter() {
  clickArea.innerText = "Entrou!";
}

function handleMouseOut() {
  clickArea.innerText = "Saiu!";
  clickArea.style.background = "hsla(263, 56%, 56%, 1.00)";
}

// 2º FORMA DE DISPARAR UM EVENTO
var eventArea = document.getElementById("area2");

eventArea.addEventListener("click", handleClick2);
eventArea.addEventListener("mouseenter", handleMouseEnter2);
eventArea.addEventListener("mouseout", handleMouseOut2);

function handleClick2() {
  eventArea.innerText = "Clicou!";
}

function handleMouseEnter2() {
  eventArea.innerText = "Entrou!";
}

function handleMouseOut2() {
  eventArea.innerText = "Saiu!";
}
