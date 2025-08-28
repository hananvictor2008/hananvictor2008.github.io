// Exercício 1
function exercicio1() {
  const input = document.getElementById('ex1Input').value;
  const invertido = input.split('').reverse().join('');
  document.getElementById('ex1Output').textContent = invertido;
}

// Exercício 2
function exercicio2() {
  const frase = document.getElementById('ex2Input').value;
  const vogais = /[aeiouáéíóúàèìòùãõâêîôûAEIOUÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛ]/g;
  const resultado = frase.replace(vogais, m => `<span class="negrito">${m}</span>`);
  document.getElementById('ex2Output').innerHTML = resultado;
}

// Exercício 3
function exercicio3() {
  const texto = document.getElementById('ex3Input').value.toLowerCase();
  const palavras = texto.match(/\b[\wçãõáéíóúàèìòùâêîôû]+\b/g) || [];
  const contagem = {};
  palavras.forEach(p => contagem[p] = (contagem[p] || 0) + 1);

  let tabela = '<table><thead><tr><th>Palavra</th><th>Ocorrências</th></tr></thead><tbody>';
  for (const p in contagem) {
    tabela += `<tr><td>${p}</td><td>${contagem[p]}</td></tr>`;
  }
  tabela += '</tbody></table>';
  document.getElementById('ex3Output').innerHTML = tabela;
}

// Exercício 4
function exercicio4() {
  const texto = document.getElementById('ex4Input').value.toLowerCase();
  const palavras = texto.match(/\b[\wçãõáéíóúàèìòùâêîôû]+\b/g) || [];
  if (palavras.length === 0) {
    document.getElementById('ex4Output').textContent = 'Nenhuma palavra encontrada.';
    return;
  }

  const contagem = {};
  palavras.forEach(p => contagem[p] = (contagem[p] || 0) + 1);

  let maiorPalavra = '';
  let maiorOcorrencia = 0;
  for (const p in contagem) {
    if (contagem[p] > maiorOcorrencia) {
      maiorOcorrencia = contagem[p];
      maiorPalavra = p;
    }
  }

  const totalLetras = texto.replace(/[^a-zçãõáéíóúàèìòùâêîôû]/g, '').length;

  const resultado = 
    `Palavra de maior ocorrência: "${maiorPalavra}" (${maiorOcorrencia} vezes)\n` +
    `Número total de palavras: ${palavras.length}\n` +
    `Número total de letras: ${totalLetras}`;
  document.getElementById('ex4Output').textContent = resultado;
}

// Exercício 5
function exercicio5() {
  let texto = document.getElementById('ex5Texto').value;
  const procurar = document.getElementById('ex5Procurar').value;
  const substituir = document.getElementById('ex5Substituir').value;

  if (!procurar) {
    alert('Digite o texto a procurar');
    return;
  }

  const escProcurar = procurar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escProcurar, 'g');
  texto = texto.replace(regex, substituir);
  document.getElementById('ex5Output').textContent = texto;
}

// Exercício 6
function exercicio6() {
  const dataStr = document.getElementById('ex6Input').value;
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataStr)) {
    document.getElementById('ex6Output').textContent = 'Formato inválido. Use dd/mm/aaaa';
    return;
  }
  const [dia, mes, ano] = dataStr.split('/').map(Number);
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
    document.getElementById('ex6Output').textContent = 'Data inválida';
    return;
  }
  document.getElementById('ex6Output').textContent = `${String(dia).padStart(2,'0')} de ${meses[mes-1]} de ${ano}`;
}

// Exercício 7
function exercicio7() {
  const senha = document.getElementById('ex7Input').value;
  const forcaEl = document.getElementById('forcaSenha');
  if (!senha) {
    forcaEl.textContent = '';
    forcaEl.className = '';
    return;
  }

  const temMinuscula = /[a-z]/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);
  const temNumero = /\d/.test(senha);
  const temEspecial = /[@#!$%&*()\-\+\.=]/.test(senha);

  let classe = '', texto = '';
  if ((temMinuscula && !temMaiuscula && !temNumero && !temEspecial) ||
      (!temMinuscula && temMaiuscula && !temNumero && !temEspecial)) {
    classe = 'fraca';
    texto = 'Fraca';
  } else if (temMinuscula && temMaiuscula && temNumero && !temEspecial) {
    classe = 'moderada';
    texto = 'Moderada';
  } else if (temMinuscula && temMaiuscula && temNumero && temEspecial) {
    classe = 'forte';
    texto = 'Forte';
  } else {
    classe = 'fraca';
    texto = 'Fraca';
  }

  forcaEl.textContent = texto;
  forcaEl.className = classe;
}

// Exercício 8
function exercicio8() {
  const input = document.getElementById('ex8Input').value;
  const map = {
    'T': 'P', 'P': 'T',
    'E': 'O', 'O': 'E',
    'N': 'L', 'L': 'N',
    'I': 'A', 'A': 'I',
    'S': 'R', 'R': 'S',
    't': 'p', 'p': 't',
    'e': 'o', 'o': 'e',
    'n': 'l', 'l': 'n',
    'i': 'a', 'a': 'i',
    's': 'r', 'r': 's',
  };

  let resultado = '';
  for (let c of input) {
    resultado += map[c] || c;
  }
  document.getElementById('ex8Output').textContent = resultado;
}

// Exercício 9
function exercicio9() {
  const inputData = document.getElementById('ex9Input').value;
  if (!inputData) {
    document.getElementById('ex9Output').textContent = 'Selecione uma data';
    return;
  }
  const nascimento = new Date(inputData);
  const hoje = new Date();
  if (nascimento > hoje) {
    document.getElementById('ex9Output').textContent = 'Data de nascimento no futuro?';
    return;
  }
  const diffMs = hoje - nascimento;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  document.getElementById('ex9Output').textContent = `Você tem ${diffDias} dias de vida.`;
}

// Exercício 10
function exercicio10() {
  const data1Str = document.getElementById('ex10Data1').value;
  const data2Str = document.getElementById('ex10Data2').value;
  if (!data1Str || !data2Str) {
    document.getElementById('ex10Output').textContent = 'Selecione as duas datas';
    return;
  }
  const d1 = new Date(data1Str);
  const d2 = new Date(data2Str);
  const diffMs = Math.abs(d2 - d1);
  const diffSemanas = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  document.getElementById('ex10Output').textContent = `Distância: ${diffSemanas} semana(s).`;
}
