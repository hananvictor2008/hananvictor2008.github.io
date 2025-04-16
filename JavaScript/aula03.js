const butao1 = document.querySelector("#butao1")
const butao2 = document.querySelector("#butao2")
const butao3 = document.querySelector("#butao3")
const butao4 = document.querySelector("#butao4")
const butao5 = document.querySelector("#butao5")
const butao6 = document.querySelector("#butao6")
const butao7 = document.querySelector("#butao7")
const butao8 = document.querySelector("#butao8")
const butao9 = document.querySelector("#butao9")
const butao10 = document.querySelector("#butao10")

const limpar1 = document.querySelector("#clear1")
const limpar2 = document.querySelector("#clear2")
const limpar3 = document.querySelector("#clear3")
const limpar4 = document.querySelector("#clear4")
const limpar5 = document.querySelector("#clear5")
const limpar6 = document.querySelector("#clear6")
const limpar7 = document.querySelector("#clear7")
const limpar8 = document.querySelector("#clear8")
const limpar9 = document.querySelector("#clear9")
const limpar10 = document.querySelector("#clear10")

limpar1.onclick = () => {
  document.querySelector("#resultado1").innerHTML = ""
}

limpar2.onclick = () => {
  document.querySelector("#resultado2").innerHTML = ""
}

limpar3.onclick = () => {
  document.querySelector("#resultado3").innerHTML = ""
}

limpar4.onclick = () => {
  document.querySelector("#resultado4").innerHTML = ""
}

limpar5.onclick = () => {
  document.querySelector("#resultado5").innerHTML = ""
  document.querySelector("#frase5").style.display = "block"
  document.querySelector("#substituir").style.display = "none"
}

limpar6.onclick = () => {
  document.querySelector("#resultado6").innerHTML = ""
}

limpar7.onclick = () => {
  document.querySelector("#resultado7").innerHTML = ""
}

limpar8.onclick = () => {
  document.querySelector("#resultado8").innerHTML = ""
}

limpar9.onclick = () => {
  document.querySelector("#resultado9").innerHTML = ""
}

limpar10.onclick = () => {
  document.querySelector("#resultado10").innerHTML = ""
}

const pegaFrase = (seletor) => document.querySelector(seletor).value

const inverteFrase = (frase) => {
  for (let i = 0; i < frase.length; i++) {
    let palavraInvertida = ""
    for (let j = frase[i].length - 1; j >= 0; j--) {
      palavraInvertida += frase[i][j]
    }
    frase[i] = palavraInvertida
  }
  return frase
}

const escreveFrase = (frase, seletor) => {
  document.querySelector(seletor).innerHTML += frase + "<br/>"
}

const questao1 = () => {
  let fraseQuestao1 = pegaFrase("#frase1").split(" ")
  let fraseQuestao1Invertida = inverteFrase(fraseQuestao1)
  escreveFrase(`${fraseQuestao1Invertida.join(" ")}`, "#resultado1")
}

butao1.addEventListener("click", questao1)

const temVogal = (frase) => {
  let vogalNegrito = []
  for (let i = 0; i < frase.length; i++) {
    let palavra = ""
    for (let j = 0; j < frase[i].length; j++) {
      let letra = frase[i][j]
      if (
        letra.toLowerCase() == "a" ||
        letra.toLowerCase() == "e" ||
        letra.toLowerCase() == "i" ||
        letra.toLowerCase() == "o" ||
        letra.toLowerCase() == "u"
      ) {
        palavra += `<strong>${letra}</strong>`
      } else palavra += letra
    }
    vogalNegrito[i] = palavra
  }
  return vogalNegrito
}

const questao2 = () => {
  let fraseQuestao2 = pegaFrase("#frase2").split(" ")
  let fraseNegrito = temVogal(fraseQuestao2)
  escreveFrase(`${fraseNegrito.join(" ")}`, "#resultado2")
}

butao2.addEventListener("click", questao2)

const contaPalavra = (frase) => {
  contador = {}
  for (let i = 0; i < frase.length; i++) {
    let palavra = frase[i]
    if (contador[palavra]) {
      contador[palavra] += 1
    } else contador[palavra] = 1
  }
  return contador
}

const criaTabela = (contador) => {
  let tabela = "<table>"

  const palavras = Object.entries(contador)
  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i][0]
    const quantidade = palavras[i][1]

    tabela += `<tr><td>${palavra}</td><td>${quantidade}</td></tr>`
  }

  tabela += "</table>"

  document.querySelector("#resultado3").innerHTML += tabela
}

const questao3 = () => {
  const fraseQuestao3 = pegaFrase("#frase3").split(" ")
  const palavrasRepetidas = contaPalavra(fraseQuestao3)
  criaTabela(palavrasRepetidas)
}

butao3.addEventListener("click", questao3)

const maiorOcorrencia = (frase) => {
  const fraseOcorrencia = frase.split(" ")
  const objOcorrencias = contaPalavra(fraseOcorrencia)
  const ocorrencias = Object.entries(objOcorrencias)

  let maiorQtd = 0
  let maiorPalavra
  for (let i = 0; i < ocorrencias.length; i++) {
    if (maiorQtd < ocorrencias[i][1]) {
      maiorQtd = ocorrencias[i][1]
      maiorPalavra = ocorrencias[i][0]
    }
  }

  return [maiorPalavra, maiorQtd]
}

const questao4 = () => {
  const fraseQuestao4 = pegaFrase("#frase4")
  const [palavraQuestao4, qtdQuestao4] = maiorOcorrencia(fraseQuestao4)
  escreveFrase(
    `Maior ocorrência = ${palavraQuestao4}, Ocorrências: ${qtdQuestao4}`,
    "#resultado4"
  )
}

butao4.addEventListener("click", questao4)

const substitui = (frase, palavraProcurada, palavraSubstituicao) => {
  const fraseSubstitui = frase.split(" ")

  for (let i = 0; i < fraseSubstitui.length; i++) {
    if (fraseSubstitui[i] == palavraProcurada) {
      fraseSubstitui[i] = palavraSubstituicao
    }
  }

  return fraseSubstitui.join(" ")
}

const questao5 = () => {
  let fraseQuestao5 = document.querySelector("#frase5")
  const divQuestao5 = document.querySelector("#substituir")

  if (fraseQuestao5.style.display != "none") {
    fraseSalva = fraseQuestao5.value
    escreveFrase(fraseSalva, "#resultado5")
    fraseQuestao5.style.display = "none"
    divQuestao5.style.display = "flex"
  } else {
    const procurar = document.querySelector("#procurar5").value
    const substituir = document.querySelector("#substituir5").value

    fraseSalva = substitui(fraseSalva, procurar, substituir)
    escreveFrase(fraseSalva, "#resultado5")
  }
}

butao5.addEventListener("click", questao5)

const mesPorExtenso = (mes) => {
  let resultado
  switch (parseInt(mes, 10)) {
    case 1:
      resultado = "janeiro"
      break
    case 2:
      resultado = "fevereiro"
      break
    case 3:
      resultado = "março"
      break
    case 4:
      resultado = "abril"
      break
    case 5:
      resultado = "maio"
      break
    case 6:
      resultado = "junho"
      break
    case 7:
      resultado = "julho"
      break
    case 8:
      resultado = "agosto"
      break
    case 9:
      resultado = "setembro"
      break
    case 10:
      resultado = "outubro"
      break
    case 11:
      resultado = "novembro"
      break
    case 12:
      resultado = "dezembro"
      break
    default:
      resultado = `${mes}`
  }

  return resultado
}

const dataPorExtenso = (data) => {
  const dataArray = data.split("/")
  const resultado = `Dia ${dataArray[0]} de ${mesPorExtenso(dataArray[1])} de ${
    dataArray[2]
  }`
  return resultado
}

const questao6 = () => {
  const dataQuestao6 = pegaFrase("#frase6")
  escreveFrase(dataPorExtenso(dataQuestao6), "#resultado6")
}

butao6.addEventListener("click", questao6)

const senhaForte = (senha) => {
  let maiusculas = /[A-Z]/.test(senha)
  let minusculas = /[a-z]/.test(senha)
  let numeros = /[0-9]/.test(senha)
  let especiais = /[@, #, !, $, %, &, *, (, ), -, +, ., =]/.test(senha)

  const resultado = document.querySelector("#resultado7")
  let nivel
  let cor
  if (maiusculas == 0 || minusculas == 0) {
    nivel = "Coloque no mínimo letras maiúsculas e minúsculas"
    cor = "#ff0"
  } else if (numeros == 0) {
    nivel = "Senha fraca"
    cor = "#f22"
  } else if (especiais == 0) {
    nivel = "Senha moderada"
    cor = "#f70"
  } else {
    nivel = "Senha forte"
    cor = "#5f5"
  }

  resultado.textContent = nivel
  resultado.style.color = cor
}

const questao7 = () => {
  const senhaQuestao7 = pegaFrase("#frase7")
  senhaForte(senhaQuestao7)
}

butao7.addEventListener("click", questao7)

const tenisPolar = (frase) => {
  const fraseOriginal = frase.split("")
  let novaFrase = []

  for (let i = 0; i < fraseOriginal.length; i++) {
    switch (fraseOriginal[i]) {
      case "t":
        novaFrase[i] = "p"
        break
      case "T":
        novaFrase[i] = "P"
        break
      case "e":
        novaFrase[i] = "o"
        break
      case "E":
        novaFrase[i] = "O"
        break
      case "n":
        novaFrase[i] = "l"
        break
      case "N":
        novaFrase[i] = "L"
        break
      case "i":
        novaFrase[i] = "a"
        break
      case "I":
        novaFrase[i] = "A"
        break
      case "s":
        novaFrase[i] = "r"
        break
      case "S":
        novaFrase[i] = "R"
        break
      case "p":
        novaFrase[i] = "t"
        break
      case "P":
        novaFrase[i] = "T"
        break
      case "o":
        novaFrase[i] = "e"
        break
      case "O":
        novaFrase[i] = "E"
        break
      case "l":
        novaFrase[i] = "n"
        break
      case "L":
        novaFrase[i] = "N"
        break
      case "a":
        novaFrase[i] = "i"
        break
      case "A":
        novaFrase[i] = "I"
        break
      case "r":
        novaFrase[i] = "s"
        break
      case "R":
        novaFrase[i] = "S"
        break
      default:
        novaFrase[i] = fraseOriginal[i]
    }
  }
  return novaFrase.join("")
}

const questao8 = () => {
  const fraseQuestao8 = pegaFrase("#frase8")
  const resultado = tenisPolar(fraseQuestao8)
  escreveFrase(resultado, "#resultado8")
}

butao8.addEventListener("click", questao8)

const tempoDeVida = (dia, mes, ano) => {
  const nasc = new Date(`${ano}-${mes}-${dia}`)
  const hoje = new Date()

  let resultado = hoje - nasc
  resultado /= 1000 * 60 * 60 * 24

  return Math.floor(resultado)
}

const questao9 = () => {
  let dataDeNasc = pegaFrase("#frase9")
  dataDeNasc = dataDeNasc.split("/")
  const dia = dataDeNasc[0]
  const mes = dataDeNasc[1]
  const ano = dataDeNasc[2]
  const resultado = tempoDeVida(dia, mes, ano)
  escreveFrase(`${resultado} dias de vida`, "#resultado9")
}

butao9.addEventListener("click", questao9)

const tempoDistancia = (inicio, fim) => {
  inicio = new Date(inicio)
  fim = new Date(fim)

  resultado = fim - inicio
  resultado /= 1000 * 60 * 60 * 24
  resultado /= 7

  return Math.trunc(resultado)
}

const questao10 = () => {
  const inicio = document.querySelector("#data1").value
  const fim = document.querySelector("#data2").value
  const resultado = tempoDistancia(inicio, fim)
  escreveFrase(`${resultado} semanas`, "#resultado10")
}

butao10.addEventListener("click", questao10)