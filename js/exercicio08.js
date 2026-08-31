const entrada = prompt("Digite um número inteiro:");
const numero = +entrada;

if (entrada === null || entrada.trim() === "" || !Number.isInteger(numero)) {
  console.log("Erro: informe um número inteiro válido.");
} else {
  console.log(`Tabuada do ${numero}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}