let quantidade = 0;
let soma = 0;
let maior;
let menor;

let numero = +prompt("Digite um número (0 para encerrar):");

while (numero !== 0) {
  soma += numero;
  quantidade++;

  if (maior === undefined || numero > maior) {
    maior = numero;
  }

  if (menor === undefined || numero < menor) {
    menor = numero;
  }

  numero = +prompt("Digite outro número (0 para encerrar):");
}

if (quantidade === 0) {
  console.log("Nenhum número foi informado.");
} else {
  const media = soma / quantidade;

  console.log(`Quantidade de números: ${quantidade}`);
  console.log(`Soma: ${soma}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Maior número: ${maior}`);
  console.log(`Menor número: ${menor}`);
}