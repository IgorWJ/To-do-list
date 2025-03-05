const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ul = document.querySelector('.list-tasks')
let listaItem = []

function addTarefa(){
    listaItem.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefa()
}

function mostrarTarefa(){
    novaLi = ''
    listaItem.forEach((item, index) => {
        novaLi += `
            <li class="task ${item.concluida && "done"} ">
                     <img class="btn-check" src="./img/checked.png" alt="checked" onclick="tarefaConcluida(${index})">
                     <p>${item.tarefa}</p>
                     <img class="btn-done" src="./img/cancel.png" alt="cancel" onclick="deletarTarefa(${index})">
                 </li>
        `
    })
    ul.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(listaItem))
}

function deletarTarefa(index){
    listaItem.splice(index, 1)
    mostrarTarefa()
}

function tarefaConcluida(index){
    listaItem[index].concluida = !listaItem[index].concluida
    mostrarTarefa()
}

function recarregarTarefa(){
    const tarefaLocal = localStorage.getItem('lista')
    if(tarefaLocal){
        listaItem = JSON.parse(tarefaLocal)
    }
    mostrarTarefa()
}
recarregarTarefa()
button.addEventListener('click', addTarefa)