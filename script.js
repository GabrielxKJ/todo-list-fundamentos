const txtInput = document.querySelector("#texto-tarefa")
const olTarefas = document.querySelector("#lista-tarefas")
const btnCriarTarefa = document.querySelector("#criar-tarefa")
btnCriarTarefa.innerText = "adicionar tarefa"

    btnCriarTarefa.addEventListener("click", addList)
    function addList() {
        const liList = document.createElement("li")
        let txtValue = txtInput.value;
        liList.innerText = txtValue
        olTarefas.appendChild(liList);
        txtValue = txtInput.value = ""
    }

olTarefas.addEventListener("click", function(event){
    
    for(i = 0; i < olTarefas.children.length; i += 1) {
        olTarefas.children[i].style.backgroundColor ="white" // percorre todas os elementos da lista  e deixa o fundo branco
    }
    event.target.style.backgroundColor ="rgb(128,128,128)"
})

olTarefas.addEventListener("dblclick", function(event){
   
    let olChildren = olTarefas.children
    for(i = 0; i < olChildren.length; i += 1){
        olChildren[i]
    }
    event.target.classList.toggle("completed")
})
