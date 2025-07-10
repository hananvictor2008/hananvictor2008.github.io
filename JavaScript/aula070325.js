//recuperar o UL no DOM
const ulReceitas = document.querySelector("#receitasLista")

//iterar a s receitas
receitas.forEach(elemento => {
    console.log(elemento["nome"])
    //Criar um novo LI acrescentando os dados da receita atual
    liObj = document.createElement("li")
    //adicionando o título da receita
    liObj.textContent = elemento.nome
    //Adicionar um novo LI na UL
    ulReceitas.appendChild(liObj)

    const descricao = document.createElement("p")
    descricao.textContent = elemento.descricao
    liObj.appendChild(descricao)

    const figura = document.createElement("img")
    figura.src = elemento.foto
    liObj.appendChild(figura)

    const ingredientes = document.createElement("ul")
    elemento.ingredientes.forEach(ingredienteV => {
        const ingrediente = document.createElement("li")
        ingrediente.textContent = ingredienteV
        ingredientes.appendChild(ingrediente)
    })
    liObj.appendChild(ingredientes)

    const modoPreparo = document.createElement("ol")
    elemento.preparo.forEach(etapaV => {
        const etapa = document.createElement("li")
        etapa.textContent = etapaV
        modoPreparo.appendChild(etapa)
    })
    liObj.appendChild(modoPreparo)
})