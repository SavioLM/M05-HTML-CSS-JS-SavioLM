function esconder () {
    const foto = document.getElementById("foto");
    if (foto.style.visibility == "hidden")
        foto.style.visibility = "visible";
    else
        foto.style.visibility = "hidden";
}

function mudartextalign () {
    const sobre = document.getElementById("sobre");
    const textalign = document.getElementById("textalign");
    sobre.style.textAlign = textalign.value;
}

function cor() {
    const header = document.getElementById("header");
    const input = document.getElementById("cor");
    const footer = document.getElementById("footer");
  
    if (input.value === "black") {
      header.style.background = input.value;
      header.style.color = "white";
      footer.style.background = input.value;
      footer.style.color = "white";
    } else if (input.value === "white") {
      header.style.color = "black";
      header.style.background = input.value;
      footer.style.color = "black";
      footer.style.background = input.value;
    } else {
      header.style.background = input.value;
      footer.style.background = input.value;
    }
}

function mudarfonte () {
  const sobre = document.getElementById("sobre");
  const fonte = document.getElementById("fonte");
  sobre.style.fontFamily = fonte.value;
}

function modoec () {
    const conteudo = document.getElementById("conteudo")
    if (conteudo.style.backgroundColor == "black") {
        conteudo.style.backgroundColor = "white";
        conteudo.style.color = "black";
    }
    else {
        conteudo.style.backgroundColor = "black";
        conteudo.style.color = "white";
    }
}
