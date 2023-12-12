let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
  const nome = prompt("Digite seu nome");
  const cpf = Number(prompt("Digite seu CPF "));
  const valor = Number(prompt("Digite o valor a ser inserido"));
  const operacao = prompt(
    "Qual operacao deseja realizar: s para saque/ d para deposito"
  );
  if (valor < 0) {
    console.log("Valor inválido. Digite outro valor");
  } else if (operacao === "s" && valor > saldo) {
    console.log("Saldo insuficiente para operação. Digite outro valor");
  } else if (operacao === "s") {
    console.log(`Olá, ${nome} (${cpf}), seu saldo é atual é de R$${saldo} `);
    saldo -= valor;
    totalTransacoes++;
    somaValoresInseridos += valor;
    if (valor > maiorValorInserido) {
      maiorValorInserido = valor;
    }
    console.log(
      `Transação realizada com sucesso. Seu saldo agora é de R$${saldo}.`
    );
  } else {
    console.log(`Olá, ${nome} (${cpf}), seu saldo é atual é de R$${saldo} `);
    saldo += valor;
    totalTransacoes++;
    somaValoresInseridos += valor;
    if (valor > maiorValorInserido) {
      maiorValorInserido = valor;
    }
    console.log(
      `Transação realizada com sucesso. Seu saldo agora é de R$${saldo}.`
    );
  }

  const opcao = Number(
    prompt("Deseja continuar: Aperte 1 para continuar / 2 para parar")
  );
  if (opcao === 1) {
    continuar = true;
  } else if (opcao === 2) {
    continuar = false;
  } else {
    alert("Opção inválida. Programa encerrado");
    continuar = false;
  }
} while (continuar);

console.log(`Saldo final é de R$${saldo}`);
console.log(`Maior valor inserido : R$${maiorValorInserido}`);
console.log(
  `A média dos valores inseridos foi de: R$${
    somaValoresInseridos / totalTransacoes
  } `
);
