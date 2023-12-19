let nomes = [];
let senhas = [];
let operacao;
let contador = 0;
let continuar = true;
let novoNome;
let novaSenha;

while (continuar) {
  operacao = parseInt(
    prompt(
      "Digite o número correspondente ao que deseja fazer : 1 para cadastrar / 2 para fazer login / 3 para excluir um cadastro / 4 para encerrar o programa"
    )
  );
  switch (operacao) {
    case 1:
      novoNome = prompt("Insira um nome");
      nomes[contador] = novoNome;

      novaSenha = prompt("insria uma senha");
      senhas[contador] = novaSenha;

      break;

    case 2:
      let nome = prompt("Qual o nome");
      let senha = prompt("Qual a senha");
      let loginValido;

      for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i] && senha == senhas[i]) {
          loginValido = true;
        }
      }
      if (loginValido) {
        alert("Login valido com sucesso");
      } else {
        alert("Nome ou senha incorretos");
      }
      break;
    case 3:
      let excluirLogin = prompt("Qual nome deseja excluir ");
      let nomesExcluir = [];
      let senhasExcluir = [];
      let contadorExcluir = 0;

      for (let i = 0; i < nomes.length; i++) {
        if (excluirLogin == nomes[i]) {
          alert("Cadastro excluído com sucesso");
        } else {
          nomesExcluir[contadorExcluir] = nomes[i];
          senhasExcluir[contadorExcluir] = senhas[i];
          contadorExcluir++;
        }
      }
      nomes = nomesExcluir;
      senhas = senhasExcluir;
      contador--;
      break;

    case 4:
      continuar = false;
      break;
    default:
      console.log("Mensagem inválida");
      break;
  }
  contador++;
}

console.log(nomes);
console.log(senhas);
