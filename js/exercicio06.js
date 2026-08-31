const nome = prompt("Qual é o seu nome?");
let nota1 = +prompt("Difite a primeira nota");
let nota2 = +prompt("Difite a segunda nota");

if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
  console.log ("Erro: digite uma nota entre 0 e 10");
} else {

  
  const media = (nota1 + nota2) / 2;
  
  let situacao;
  
  if (media >= 7) {
    situacao = "Aprovado"
  } else if (media >= 5 && media < 7) {
    situacao = "Recuperação"
  } else {
    situacao = "Reprovado"
  }
  
  console.log(`Nome: ${nome}`);
  console.log(`Nota 1: ${nota1.toFixed(1)}`);
  console.log(`Nota 2: ${nota2.toFixed(1)}`);
  console.log(`Média: ${media.toFixed(1)}`);
  console.log(`Situação: ${situacao}`);
}