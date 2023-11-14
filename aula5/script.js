document.getElementById("btnClick").onclick = function() {
    alert("Clicou em 'Clique-me!'");
}

var inputText = document.getElementById("inputText");
inputText.onchange = function() {
    this.style.color = "blue";
}
inputText.oninput = function() {
    this.style.color = "red";
}
inputText.onkeydown = function() {
    document.getElementById("outputMessage").innerText = "1. Pressionou uma tecla";
}
inputText.onkeypress = function() {
    document.getElementById("outputMessage").innerText = "2. Pressionando uma tecla";
}
inputText.onkeyup = function() {
    document.getElementById("outputMessage").innerText = "3. Soltou a tecla";
}


var box = document.getElementById("box");
box.onmouseover = function() {
    this.style.background = "blue";
}
box.onmouseout = function() {
    this.style.background = "#00c8a8";
}
box.ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", "Arrastado!");
}
box.ondragover = function(event) {
    event.preventDefault();
}
box.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    box.innerText = data;
}

window.onload = function() {
    alert("A página foi carregada")
}

var desafio = document.getElementById("btnChallenge");
var clickCounter = 0;

desafio.onclick = function() {
    clickCounter++;
    document.getElementById("count").innerText = clickCounter;
}

setTimeout(function(){
    alert(`Acabou o tempo! você clicou ${clickCounter} vezes.`)
}, 10000);
