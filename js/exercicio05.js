let entrada;
let idade;

while (true) {
  entrada = prompt("Quantos anos você tem?");

  idade = +entrada

  if (entrada !== null && entrada.trim() !== "" && idade >= 0 && !isNaN(idade)) {
    break;
  }
  alert("Digite uma idade válida")
}

if (idade < 16) {
  console.log("Não pode votar")
} else if (idade > 17) {
  console.log("Voto obrigatório")
} else {
  console.log("Voto opcional")
}
