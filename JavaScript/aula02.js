const btnAddTask = document.querySelector("#addTask")

btnAddTask.onclick = function (){
    const taskList = document.querySelector("#lista")
    const iptTask = document.querySelector("#task")
    let tarefa = iptTask.value
    const li0bj = document.createElement("li")
    const textoTarefa = document.createTextNode(tarefa) //textNote é uma parte dentro da arvore a parte, que não é interpretada pelo html, impedindo ataque xss
    li0bj.append(textoTarefa)
    taskList.append(li0bj)
}

/*GAMBIARRA 1
const btnAddTask = document.querySelector("#addTask")

btnAddTask.onclick = function(){
    const iptTask = document.querySelector("#task") //ele fa um ponteiro baseado em qualquer informação diferencial, como id, class, etc
    const taskList = document.querySelector("#lista")
    taskList.innerHTML += "<li>" + iptTask.value + "</li>" //iptTask.value pega o valor incerido na elemento que a variavel iptTask aponta
}

const botao = document.getElementById("executar") //ele esta guardando a posição de memória do elemento com id xablau, ou seja, podemos alterar o que há dentro dele
const btnLimpar = document.getElementById("limpar")

botao.onclick = function(){
    const paragrafo = document.getElementsByTagName("h1") //faz o mesmo que o getElementById, mas através do nome da tag, ele considera um vetor, e cada tag recebe um id baseado em sua posição no código
    paragrafo[0].innerHTML = "<strong>XABLAU</strong>" //innerHTML faz com que a string seja posta dentro da tag que ele aponta
    btnLimpar.innerHTML = "Limpar"
}

btnLimpar.onclick = function(){
    const paragrafo = document.getElementById("xablau")
    paragrafo.innerHTML = ""
    btnLimpar.innerHTML = ""
}



//document.getElementById("demo").innerHTML = "My First JavaScript";*/