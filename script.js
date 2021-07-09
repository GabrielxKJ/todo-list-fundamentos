const txtInput = document.querySelector("#texto-tarefa")
const olTarefas = document.querySelector("#lista-tarefas")
const btnCriarTarefa = document.querySelector("#criar-tarefa")
btnCriarTarefa.innerText ="adicionar tarefa"

btnCriarTarefa.addEventListener("click", addList)
function addList(){
const liList = document.createElement("li")
let txtValue = txtInput.value;
liList.innerText = txtValue
olTarefas.appendChild(liList);
txtValue = txtInput.value =""
}