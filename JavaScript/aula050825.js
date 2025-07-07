const palavras = [
    "labenga",
    "misto",
    "deputado",
    "cefet",
    "vilipendioso",
    "senescencia",
    "pizza",
    "xablau"
];

const palavraR = sortearPalavra(palavras)
const btn = document.querySelector("#btn");
const campoR = document.querySelector("#campoR");
const tentativaInput = document.querySelector("#tentativa");
const maxErros = 6;
let resposta = Array(palavraR.length).fill("_");
let erros = 0;

function sortearPalavra(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice].toLowerCase();
}

function atualizarDisplay() {
  campoR.textContent = resposta.join(" ");
}

function encontrarPosicoes(letra) {
  const pos = [];
  for (let i = 0; i < palavraR.length; i++) {
    if (palavraR[i] === letra) pos.push(i);
  }
  return pos;
}

function venceu() {
  return resposta.join("") === palavraR;
}

btn.addEventListener("click", () => {
  if (venceu() || erros >= maxErros) return;

  const tentativa = tentativaInput.value.trim().toLowerCase();
  tentativaInput.value = "";

  if (tentativa.length !== 1 || !/[a-zá-ú]/i.test(tentativa)) {
    alert("Digite apenas UMA letra válida.");
    return;
  }

  const posicoes = encontrarPosicoes(tentativa);

  if (posicoes.length) {
    posicoes.forEach(p => resposta[p] = tentativa);
  } else {
    erros++;
  }

  atualizarDisplay();

  if (venceu()) {
    campoR.textContent = `GANHOU! Palavra: ${palavraR}`;
  } else if (erros >= maxErros) {
    campoR.textContent = `PERDEU! A palavra era: ${palavraR}`;
  }
});

atualizarDisplay();
