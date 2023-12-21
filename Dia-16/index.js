let operacao;
const nomes = [];
const senhas = [];
let contador = 0;
let continuar = true;
let nome;
let senha;

function opcaoDesejada() {
  operacao = parseInt(
    prompt(
      "Digite qual o opção deseja escolher ? 1 para se cadastrar / 2 para fazer login / 3 para excluir um cadastro / 4 para excluir o programa"
    )
  );
  console.log(operacao);
}

function cadastro() {
  nome = prompt("Insira um nome ");
  nomes.push(nome);
  senha = prompt("Insira uma senha ");
  senhas.push(senha);
}
function login(nome) {
  nome = prompt("Digite o nome");
  if (nomes.includes(nome)) {
    alert("Login realizado com sucesso");
  } else {
    alert("Ocorreu um erro no processo de login. Tente novamente");
  }
}

function excluirCadastro(nome, senha) {
  nome = prompt("Qual nome deseja excluir");
  senha = prompt("QUal senha deseja excluir");
  let index = nomes.indexOf(nome);
  if (index != -1 && senhas[index] === senha) {
    nomes.splice(index, 1);
    senhas.splice(index, 1);
    alert("Nome e senha excluídos com sucesso");
  }
}

while (continuar) {
  opcaoDesejada();
  switch (operacao) {
    case 1:
      cadastro();
      break;
    case 2:
      login();
      break;
    case 3:
      excluirCadastro();
      break;
    case 4:
      continuar = false;
      break;
    default:
      console.log("Opção inválida. Digite novamente ");
      break;
  }
  continuar = prompt("Deseja continuar ? s/n");
  if (continuar === "n") {
    continuar = false;
  } else {
    contador++;
    continue;
  }
}

console.log(nomes);
console.log(senhas);
