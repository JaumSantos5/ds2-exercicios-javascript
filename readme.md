# Fundamentos da Web

Atividade prática da disciplina de Desenvolvimento para Servidores II.

## Exercício 1 — Página estática e fluxo de uma requisição

**Em qual momento uma página dinâmica é processada?**

Uma página dinâmica pode ser processada quando o servidor recebe uma requisição do navegador. O servidor executa as regras necessárias, pode consultar informações armazenadas e prepara uma resposta que será enviada ao navegador.

**Por que um banco de dados pode ser necessário?**

Um banco de dados pode ser necessário para armazenar e recuperar informações da aplicação, como usuários, produtos, pedidos, mensagens e outras informações que precisam continuar existindo.

## Exercício 2 — Client-side e Server-side

### Tabela Comparativa

| Característica | 🖥️ Client-side | 🗄️ Server-side |
|---|---|---|
| **Local de execução** | Navegador do usuário | Servidor |
| **Tecnologias** | HTML, CSS e JavaScript | Node.js, Java, PHP, Python e C# |
| **Responsabilidades** | Interface, interações e validações visuais | Regras de negócio, autenticação, segurança e acesso aos dados |
| **Vantagens** | Respostas rápidas e melhor experiência para o usuário | Maior controle sobre dados e regras importantes |
| **Limitações** | Não deve ser responsável sozinho pela segurança | Depende da comunicação entre cliente e servidor |
| **Exemplos** | Alterar elementos da tela e validar formulários | Login, consultas ao banco e controle de permissões |

---

## 📝 Classificação das Operações

**1. Validar se um campo obrigatório foi preenchido**

**Classificação:** `CLIENT-SIDE + SERVER-SIDE`

A validação pode ser realizada no client-side para informar imediatamente ao usuário que determinado campo não foi preenchido.

Entretanto, o server-side também deve realizar a validação, pois não é seguro confiar somente nas informações validadas pelo navegador.

---

**2. Consultar dados sigilosos de um cliente**

**Classificação:** `SERVER-SIDE`

Informações sigilosas devem ser acessadas de maneira controlada pelo servidor.

Antes de retornar as informações, o servidor deve verificar se o usuário está autenticado e possui autorização para realizar aquela consulta.

---

**3. Alterar a cor de um botão após um clique**

**Classificação:** `CLIENT-SIDE`

Essa operação está relacionada à interface da aplicação e pode ser realizada diretamente no navegador utilizando JavaScript e CSS.

---

**4. Verificar login e senha em um banco de dados**


**Classificação:** `SERVER-SIDE`

O navegador não deve acessar diretamente o banco de dados.

As informações de autenticação são enviadas ao servidor, que realiza a verificação e informa se o acesso poderá ser autorizado.

---

**5. Calcular o total de uma compra**

**Classificação:** `CLIENT-SIDE + SERVER-SIDE`

O navegador pode calcular o total para apresentar rapidamente o resultado ao usuário.

Exemplo:


Produto: R$ 100,00
Quantidade: 2

Total: R$ 200,00


O servidor deve calcular ou validar novamente o valor antes de finalizar a compra.

Isso evita que valores alterados no navegador sejam considerados válidos pelo sistema.

---

**6. Controlar uma sessão de usuário**

**Classificação:** `SERVER-SIDE`

O servidor é responsável por controlar e validar a sessão do usuário, verificando se ele está autenticado e quais recursos possui autorização para acessar.

O navegador pode armazenar identificadores relacionados à autenticação, mas não deve ser a única fonte responsável por validar o acesso.

---

## Exercício 3 — Primeiro script e diagnóstico pelo console

**Teste de erro alterando o console.log por Console.log**
```
exercicio01.js:5 Uncaught ReferenceError: Console is not defined
    at exercicio01.js:5:1
(anonymous) @ exercicio01.js:5
```
**Motivo do Erro**

O erro acontece porque JavaScript é uma linguagem case-sensitive.

Isso significa que existe diferença entre letras maiúsculas e minúsculas.

## Exercício 4 — Variáveis e tipos de dados

Exibindo valores com typeof 

## Exercício 5 — Entrada de dados e concatenação

Solicitando dados por meio de prompt e exibindo no console

## Exercício 6 — Conversão de dados e cálculo de idade 

Os valores recebidos por meio de prompt, não somam corretamente no console, pois qualquer resultado de um prompt retorna uma string. Sendo assim, é impossivel somar uma string com um number, resultando em uma concatenação 

## Exercício 7 — Classificação do voto

Solicitando idade do usuário e apresentando obrigatoriedade de voto

## Exercício 8 — Sistema acadêmico de notas

Solicitando nome e nota de aluno e calculando a média

## Exercício 9 — Login simples

Criando programa para solicitar usuário e senha 

## Exercício 10 — Tabuada com for

Solicitando um numero inteiro para criar uma taboada com laço 'for'