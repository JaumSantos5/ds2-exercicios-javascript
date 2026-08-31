function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2
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

let totalAlunos = 0
let continuar = "sim"

while (continuar === "sim") {
  const nome = prompt("Digite o nome do aluno:");
  const curso = prompt("Digite o nome do curso:");
  let nota1 = +prompt("Digite a primeira nota");
  let nota2 = +prompt("Digite a segunda nota");

  while (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    +isNaN(nota1) ||
    +isNaN(nota2)
  ) {
    alert("Erro: as notas devem estar entre 0 e 10.");

    nota1 = +prompt("Digite novamente a primeira nota (0 a 10):");
    nota2 = +prompt("Digite novamente a segunda nota (0 a 10):");
  }

  const media = calcularMedia(nota1, nota2)
  const situacao = classificarMedia(media)

  totalAlunos++;

  console.log(`Nome do aluno: ${nome}`)
  console.log(`Curso: ${curso}`)
  console.log(`Primeria nota: ${nota1.toFixed(1)}`)
  console.log(`Segunda nota: ${nota2.toFixed(1)}`)
  console.log(`Média: ${media.toFixed(1)}`)
  console.log(`Situação: ${situacao}`)
  console.log("==========================")

  continuar = prompt("Deseja cadastrar outro aluno? (sim ou não)")

}

console.log(`Total de alunos cadastrados: ${totalAlunos}`)

