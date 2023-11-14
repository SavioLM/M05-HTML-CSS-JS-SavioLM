function adicionarTarefa () {

    const tarefa = document.getElementById("tarefa").value;
    const listaTarefas = document.getElementById("listaTarefas");

    const novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = `
    <p>${tarefa}</p>
    <button onclick = "removeTarefa(this)">Remover</button>`;

    listaTarefas.appendChild(novaTarefa);

    document.getElementById("tarefaForm").reset();
}

function removeTarefa (button) {
    const tarefa = button.parentNode;
    tarefa.remove();
}