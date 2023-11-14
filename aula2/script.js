const nPrincipal = document.getElementById("noticia-principal");
alert(nPrincipal.innerHTML);

const h1s = document.getElementsByTagName("h1");
for (const h1z of h1s) {
    h1z.style.fontWeight = "bold";
    h1z.style.color = "blue"
}

const pNoticias = document.getElementsByClassName("paragrafo-noticia");
for (const p of pNoticias) {
    p.innerHTML = "Leia a notícia completa";
}

const sComentarios = document.getElementById("secao-comentarios");
const nComentario = document.createElement("p");
nComentario.innerHTML = "Deixe seu comentário";
sComentarios.appendChild(nComentario);

const uAtualizacoes = document.getElementById("ultimas-atualizacoes")
const uItem = uAtualizacoes.lastElementChild;
uAtualizacoes.removeChild(uItem);

const aTema = document.getElementById("alternar-tema");

aTema.addEventListener("click", () => {
    document.body.classList.toggle("tEscuro");
})



