const btnBuscar = document.querySelector("#buscarProd");
const btnListar = document.querySelector("#listProd");
const btnNome = document.querySelector("#nomeProd");
const btnValorEst = document.querySelector("#valorTotalEstoque");
const btnEsgotados = document.querySelector("#prodEsgotados");
const btnPreJus = document.querySelector("#precosJust");
const campoResposta = document.querySelector("#resultado");
const campoBusca = document.querySelector("#buscar");
const resultadoBusca = document.querySelector("#resultadoBusca");

let produtos = JSON.parse(localStorage.getItem("produtos")) || [
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


const listarProdutos = () => {
  campoResposta.innerHTML = "";
  produtos.forEach(produto => {
    campoResposta.innerHTML += `🛒 ${produto.nome} - R$${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}\n`;
  });
};

const mostrarNomes = () => {
  const nomes = produtos.map(p => p.nome);
  campoResposta.textContent = "📦 Produtos:\n" + nomes.join("\n");
};

const calcularTotal = () => {
  const total = produtos.reduce((acc, p) => acc + (p.preco * p.quantidade), 0);
  campoResposta.textContent = `💰 Valor total em estoque: R$${total.toFixed(2)}`;
};

const verificarEsgotados = () => {
  const esgotados = produtos.filter(p => p.quantidade === 0);

  if (esgotados.length > 0) {
    const lista = esgotados.map(p => `❌ ${p.nome}`).join("\n");
    campoResposta.textContent = `🚨 Produtos esgotados:\n${lista}`;
  } else {
    campoResposta.textContent = "✅ Todos os produtos estão disponíveis.";
  }
};

const verificarPrecos = () => {
  const todosJustos = produtos.every(p => p.preco > 10);
  campoResposta.textContent = todosJustos
    ? "💸 Todos os produtos têm preço justo."
    : "⚠️ Há produtos com preço muito baixo.";
};

const buscarProduto = () => {
  const termo = campoBusca.value.trim().toLowerCase();
  if (!termo) {
    resultadoBusca.textContent = "Digite um nome para buscar.";
    return;
  }

  const encontrado = produtos.find(p => p.nome.toLowerCase().includes(termo));
  if (encontrado) {
    resultadoBusca.textContent =
      `🔍 Produto encontrado:\n${encontrado.nome}\nPreço: R$${encontrado.preco.toFixed(2)}\nQuantidade: ${encontrado.quantidade}`;
  } else {
    resultadoBusca.textContent = "❌ Produto não encontrado.";
  }
};

btnBuscar.addEventListener("click", buscarProduto);
btnListar.addEventListener("click", listarProdutos);
btnEsgotados.addEventListener("click", verificarEsgotados);
btnNome.addEventListener("click", mostrarNomes);
btnValorEst.addEventListener("click", calcularTotal);
btnPreJus.addEventListener("click", verificarPrecos);

// Salvar no localStorage ao iniciar (caso não tenha nada)
salvarProdutos();
