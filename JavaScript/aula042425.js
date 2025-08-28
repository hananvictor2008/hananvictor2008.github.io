const saida = document.querySelector("#saida");

const executarSum = () => {
  const nums = lerArray();
  const resultado = nums.reduce((acc, n) => acc + n, 0);
  saida.innerHTML = `Soma: ${resultado}`;
};

const executarSumOdds = () => {
  const nums = lerArray();
  const resultado = nums.filter(n => n % 2 !== 0).reduce((acc, n) => acc + n, 0);
  saida.textContent = `Soma dos ímpares: ${resultado}`;
};

const executarProduct = () => {
  const nums = lerArray();
  const resultado = nums.reduce((acc, n) => acc * n, 1);
  saida.textContent = `Produto: ${resultado}`;
};

const lerArray = () => {
  const valor = document.getElementById("arrayInput").value;
  return valor.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));
};

const gerarPrimos = () => {
  const valor = document.getElementById("primosInput").value;
  const partes = valor.split(",").map(n => parseInt(n.trim()));
  let primos = [];

  if (partes.length === 1) {
    let count = 0, num = 2;
    while (count < partes[0]) {
      if (ehPrimo(num)) {
        primos.push(num);
        count++;
      }
      num++;
    }
  } else if (partes.length === 2) {
    const [inicio, fim] = [Math.min(...partes), Math.max(...partes)];
    for (let i = inicio; i <= fim; i++) {
      if (ehPrimo(i)) primos.push(i);
    }
  }

  saida.textContent = `Primos: ${primos.join(", ")}`;
};

const ehPrimo = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const converterParaRomano = () => {
  let num = parseInt(document.getElementById("romanoInput").value);
  if (isNaN(num) || num <= 0) {
    saida.textContent = "Digite um número válido.";
    return;
  }

  const romanos = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let resultado = "";
  for (let [romano, valor] of romanos) {
    while (num >= valor) {
      resultado += romano;
      num -= valor;
    }
  }

  saida.textContent = `Romano: ${resultado}`;
};

const calcularSaque = () => {
  let valor = parseInt(document.getElementById("saqueInput").value);
  if (isNaN(valor) || valor <= 0) {
    saida.textContent = "Digite um valor válido.";
    return;
  }

  const cedulas = [100, 50, 20, 10, 5, 2];
  let resultado = "Cédulas necessárias:\n";

  for (let c of cedulas) {
    let qtd = Math.floor(valor / c);
    if (qtd > 0) {
      resultado += `R$${c}: ${qtd}x\n`;
      valor -= qtd * c;
    }
  }

  if (valor > 0) {
    resultado += `Valor restante não sacável: R$${valor}`;
  }

  saida.textContent = resultado;
};
