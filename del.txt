const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-tasks')

let listaItens = []

function addTarefa(){
    listaItens.push(input.value)

    input.value = ''

    showTasks()
}

function showTasks(){

    let novaLi = ''

    listaItens.forEach((tarefa, index) =>{

        novaLi += `
                <li class="task" >
                    <img class="btn-check" src="./img/checked.png" alt="checked">
                    <p>${tarefa}</p>
                    <img class="btn-done" src="./img/cancel.png" alt="cancel" onclick="deleteItem(${index})">
                </li>
                `
    })
    fullList.innerHTML =  novaLi
}

function deleteItem(index){
    listaItens.splice(index, 1)
    console.log(index)

    showTasks()
}

button.addEventListener('click', addTarefa)

