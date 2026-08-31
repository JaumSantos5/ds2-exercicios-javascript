const usuarioCorreto = "admin";
const senhaCorreta = "1234";

let tentativas = 0;
const maxTentativas = 3;
let acessoPermitido = false;

while (tentativas < maxTentativas) {
  const usuario = prompt("Digite o usuário:");
  const senha = prompt("Digite a senha:");

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Acesso permitido");
    acessoPermitido = true;
    break;
  }

  tentativas++;

  const tentativasRestantes = maxTentativas - tentativas;

  if (tentativasRestantes > 0) {
    console.log(`Acesso negado. Restam ${tentativasRestantes} tentativa(s).`);
  }
}

if (!acessoPermitido) {
  console.log("Acesso bloqueado");
}
