//* selecionar s tags

const inputText = document.getElementById('task');
const taskList = document.getElementById('task-list')
const btnAdd = document.getElementById('btnAdd')

//* conectar o btnadd a uma funcao via js
//* function () {} fumcao anonima
btnAdd.addEventListener('click', function (){
    addTask();
})

//* funcao - conectada ao botao
function addTask(){
    if(inputText.value == ''){
        alert("Voce precisa adicionar a descricao da tarefa");
    }
    else{
        //* criando uma tag e salvndo em uma variavel
        //* createElement () cria uma tag
        let li = document.createElement("li");
        //*^o conteudo de li recebe o que a pessoa digitou

        li.innerHTML = inputText.value;
        //*^appendchild adiciona uma tag dentro de outra
        //*^no caso o novo <li> é colocado dentro do ul tasklist


        taskList.appendChild(li);
    }
    //* Limpando caixa de texto para a proxima tarefa
    inputText.value = '';

}
