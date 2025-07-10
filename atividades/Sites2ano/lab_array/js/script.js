const btnBuscar = document.querySelector("#buscarProd")
const btnListar = document.querySelector("#listProd")
const btnNome = document.querySelector("#nomeProd")
const btnValorEst = document.querySelector("#valorTotalEstoque")
const btnEsgotados = document.querySelector("#prodEsgotados")
const btnPreJus = document.querySelector("#precosJust")
const campoResposta = document.querySelector("#resultado")

const produtos = [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 }
];


const buscarProduto = () => {
  produtos.find()
}

const listarProdutos = () => {
  produtos.forEach(value => {
    campoResposta.innerHTML += "<b>Nome: </b>" + value["nome"] + "</br>"
    campoResposta.innerHTML += "<b>Preço: </b>" + value["preco"] + "</br>"
    campoResposta.innerHTML += "<b>Qnt Dísponivel: </b>" + value["quantidade"] + "</br></br>"
  });
}

const mostrarNomes = () => {

}

const calcularTotal = () => {

}

const verificarEsgotados = () => {

}

const verificarPrecos = () => {

}

btnBuscar.addEventListener("click", buscarProduto)
btnListar.addEventListener("click", listarProdutos)
btnEsgotados.addEventListener("click", verificarEsgotados)
btnNome.addEventListener("click", mostrarNomes)
btnValorEst.addEventListener("click", calcularTotal)
btnPreJus.addEventListener("click", verificarPrecos)