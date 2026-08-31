function somar(numero1, numero2) {
  return numero1 + numero2;
}

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function classificarMedia(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function criarSaudacao(nome) {
  return `Olá, ${nome}! Seja bem-vindo!`;
}


const resultadoSoma = somar(10, 5);

const resultadoMedia = calcularMedia(8, 6);

const resultadoClassificacao = classificarMedia(resultadoMedia);

const resultadoSaudacao = criarSaudacao("João");


console.log(`Resultado da soma: ${resultadoSoma}`);
console.log(`Média: ${resultadoMedia.toFixed(1)}`);
console.log(`Classificação: ${resultadoClassificacao}`);
console.log(resultadoSaudacao);
