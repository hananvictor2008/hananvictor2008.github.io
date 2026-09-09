const produtosCamp = document.querySelector("#produtos");
const carrinhoCamp = document.querySelector("#carrinho");
const total = document.querySelector("#total");
let carrinho = [];
if (localStorage.getItem("carrinho")) {
    carrinho = JSON.parse(localStorage.getItem("carrinho"));
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    carrinhoCamp.innerHTML = "";

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}`;

        // Botão para remover item
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerDoCarrinho(item.id);

        li.appendChild(botaoRemover);
        carrinhoCamp.appendChild(li);
    });

    // Atualizar total
    const totalValor = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    total.textContent = `Total: R$ ${totalValor.toFixed(2)}`;
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto) {
    const encontrado = carrinho.find(item => item.id === produto.id);

    if (encontrado) {
        encontrado.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Função para remover item do carrinho
function removerDoCarrinho(id) {
    const index = carrinho.findIndex(item => item.id === id);

    if (index !== -1) {
        if (carrinho[index].quantidade > 1) {
            carrinho[index].quantidade--;
        } else {
            carrinho.splice(index, 1);
        }
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Renderizar os produtos na tela
produtos.lista.forEach(value => {
    const produto = document.createElement("li");
    const titulo = document.createElement("h3");
    const imagem = document.createElement("img");
    const preco = document.createElement("p");

    produto.id = value.id;
    titulo.textContent = value.nome;
    imagem.src = value.imagem;
    imagem.alt = value.nome;
    preco.textContent = `R$ ${value.preco.toFixed(2)}`;

    produto.appendChild(imagem);
    produto.appendChild(titulo);
    produto.appendChild(preco);

    produto.style.cursor = "pointer";
    produto.onclick = () => adicionarAoCarrinho(value);

    produtosCamp.appendChild(produto);
});
