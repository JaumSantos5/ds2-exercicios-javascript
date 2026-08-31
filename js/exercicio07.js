const usuario = prompt("Qual é o seu nome de usuário?");
const senha = prompt("Digite a sua senha")

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso Permitido")
} else {
  console.log("Acesso Negado")
}

