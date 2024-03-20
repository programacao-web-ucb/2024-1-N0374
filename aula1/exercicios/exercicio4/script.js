function adicionarTarefa() {
    let novaTarefa = document.getElementById("tarefa").value;

    if (novaTarefa.trim() === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }

    var novoItemLista = document.createElement("li");
    novoItemLista.textContent = novaTarefa;

    document.getElementById("listaTarefas").appendChild(novoItemLista);

    // Limpa o campo de entrada após o cadastro
    document.getElementById("tarefa").value = "";
}
