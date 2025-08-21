const dominio = "https://rafaelescalfoni.github.io/desenv_web/restaurante/"
const servico = dominio + "/items.json"

fetch(servico)
    .then(respostaDoServidor => respostaDoServidor.json())
    .then(respostaDaPromise => {
        let cardapio = respostaDaPromise
        document.querySelector("#main-content").innerHTML = carregandoCardapio(cardapio)
    })

const carregandoCardapio = cardapioList => {
    return cardapioList.reduce((acum, e) => {
        let item = `<div class="item"><h3>${e.name || e.title}</h3><img src="${dominio + e.photo}"></div>`
        return acum + item
    }, "")
}