
/*Contador*/
var currentNumber = document.getElementById('currentNumber')
var subtrair = document.getElementById('subtrair')

var contador = 0


subtrair.addEventListener('click', ()=>{
    contador = contador - 1
    currentNumber.innerHTML = contador
    if(contador < 0){
        currentNumber.style.color = 'red'
    }else{
        currentNumber.style.color = 'black'
    }
})

function increment(){
    contador = contador + 1
    currentNumber.innerHTML = contador
    if(contador < 0){
        currentNumber.style.color = 'red'
    }else{
        currentNumber.style.color = 'black'
    }
}

/**********Lista de tarefas******************/

var tarefa = document.getElementById('tarefa')
var lista = document.getElementById('lista')
var adiconaTarefa = document.getElementById('adiciona-tarefa')

adiconaTarefa.addEventListener('click',()=>{
    if(tarefa.value == ''){
        alert('Insira uma tarefa para continuar!!!')
    }else{
        criandoElementosEAdicionando(tarefa.value)
    }
    tarefa.value = ""
})

function criandoElementosEAdicionando(tarefa){
   const div = document.createElement('div')
   const novoInput = document.createElement('input')
   const novaLabel = document.createElement('label')
   const imgExcluir =document.createElement('img')
   const inserindoTexto = document.createTextNode(tarefa)
   

   div.setAttribute('id', tarefa)

   novoInput.setAttribute('type', 'checkbox')
   novoInput.setAttribute('name',tarefa+1)
   novoInput.setAttribute('id',tarefa+1)

   novaLabel.setAttribute('for',tarefa+1)
   
   novaLabel.appendChild(inserindoTexto)

   imgExcluir.classList.add('img')
   imgExcluir.setAttribute('data-excluir', tarefa)
   
   div.classList.add('novo-item')
   div.appendChild(novoInput)
   div.appendChild(novaLabel)
   div.appendChild(imgExcluir)
   
    lista.appendChild(div)
    imgExcluir.addEventListener('click', excluir)
}

function excluir(e){
    //criando um target personalizado
    var posicao = e.target.getAttribute('data-excluir')
    //removendo usando metodo remove
    var divExcluir = document.getElementById(posicao)
    
    divExcluir.remove()
    /* removendo pelo child
    const divElemento = document.querySelector('#lista')
    const divExcluir = document.getElementById(posicao)
    
    divElemento.removeChild(divExcluir)
    */
}
