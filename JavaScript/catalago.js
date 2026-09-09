const container = document.querySelector(".container");
const boxLinhas = [document.createElement("div")];
boxLinhas[boxLinhas.length - 1].className = "boxLinha";
let i = 1;

filmes.forEach(filme => {
    const box = document.createElement("div");
    box.className = "box";

    const titulo = document.createElement("h2");
    titulo.textContent = filme["titulo"];
    box.appendChild(titulo);

    const resumoBox = document.createElement("div");
    const resumoTitulo = document.createElement("h3");
    const resumo = document.createElement("p");
    resumoTitulo.textContent = "Resumo";
    resumo.textContent = filme["resumo"];
    resumoBox.appendChild(resumoTitulo);
    resumoBox.appendChild(resumo);
    box.appendChild(resumoBox);
    resumoBox.className = "resumoBox";

    const figura = document.createElement("img");
    figura.src = filme["figura"];
    box.appendChild(figura);

    const generosBox = document.createElement("div");
    const generosTitulo = document.createElement("h3");
    const generosLista = document.createElement("ul");
    generosTitulo.textContent = "Gêneros";
    filme["generos"].forEach(genero => {
        const generoItem = document.createElement("li");
        generoItem.textContent = genero;
        generosLista.appendChild(generoItem);
    });
    generosBox.appendChild(generosTitulo);
    generosBox.appendChild(generosLista);
    box.appendChild(generosBox);
    generosBox.className = "generosBox";

    const semelhantesBox = document.createElement("div");
    const semelhantesTitulo = document.createElement("h3");
    const semelhantesLista = document.createElement("ul");
    semelhantesTitulo.textContent = "Semelhantes";
    filme["titulosSemelhantes"].forEach(semelhante => {
        const semelhanteItem = document.createElement("li");
        semelhanteItem.textContent = filmes[semelhante]["titulo"];
        semelhantesLista.appendChild(semelhanteItem);
    });
    semelhantesBox.appendChild(semelhantesTitulo);
    semelhantesBox.appendChild(semelhantesLista);
    box.appendChild(semelhantesBox);
    semelhantesBox.className = "semelhantesBox";

    const elencoBox = document.createElement("div");
    const elencoTitulo = document.createElement("h3");
    const elencoLista = document.createElement("ul");
    elencoTitulo.textContent = "Elenco";
    filme["elenco"].forEach(membro => {
        const elencoItem = document.createElement("li");
        elencoItem.textContent = membro;
        elencoLista.appendChild(elencoItem);
    });
    elencoBox.appendChild(elencoTitulo);
    elencoBox.appendChild(elencoLista);
    box.appendChild(elencoBox);
    elencoBox.className = "elencoBox";

    const opinioesBox = document.createElement("div");
    const opinioesTitulo = document.createElement("h3");
    const opinioes = document.createElement("div");
    opinioesTitulo.textContent = "Opiniões";
    filme["opinioes"].forEach(opiniao => {
        const avaliacao = document.createElement("div");
        const descricao = document.createElement("p");
        descricao.className = "descricao";
        avaliacao.className = "avaliacao";

        for (let j = 0; j < opiniao["rating"]; j++) {
            const estrela = document.createElement("img");
            estrela.src = "estrela.png";
            estrela.className = "estrela";
            avaliacao.appendChild(estrela);
        }

        descricao.textContent = opiniao["descricao"];
        opinioes.appendChild(avaliacao);
        opinioes.appendChild(descricao);
    });
    opinioesBox.appendChild(opinioesTitulo);
    opinioesBox.appendChild(opinioes);
    box.appendChild(opinioesBox);
    opinioesBox.className = "opinioesBox";
    opinioes.className = "opinioes";

    const classificacao = document.createElement("span");
    classificacao.textContent = filme["classificacao"];
    switch(filme["classificacao"]) {
        case 18 : classificacao.style.backgroundColor = "#222"; break;
        case 16 : classificacao.style.backgroundColor = "#f00"; break;
        case 14 : classificacao.style.backgroundColor = "#f80"; break;
        case 12 : classificacao.style.backgroundColor = "#fd0"; break;
        case 10 : classificacao.style.backgroundColor = "#08f"; break;
        default : classificacao.style.backgroundColor = "#080"; 
                  classificacao.textContent = "L";
    }
    box.appendChild(classificacao);
    classificacao.className = "classificacao";

    if(i % 4 === 0) {
        boxLinhas.push(document.createElement("div"));
        boxLinhas[boxLinhas.length - 1].className = "boxLinha";
        i++;
    }
    boxLinhas[boxLinhas.length - 1].appendChild(box);
    i++;
});

boxLinhas.forEach(function(linha) {
    container.appendChild(linha);
});