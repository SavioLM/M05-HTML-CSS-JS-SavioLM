function enviarCadastro () {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const div = document.createElement("div");
    div.innerHTML = `
    <h1> Dados do usuário</h1>
    <p>Nome: ${nome}</p>
    <p>Email: ${email}</p>
    <p>Senha: ${senha}</p>`
    document.body.appendChild(div);
    document.getElementById("cadastroForm").requestFullscreen();
}
