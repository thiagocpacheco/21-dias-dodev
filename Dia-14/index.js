let nome;
let conitnuar = true;
let salario;

function perguntarSalario() {
  nome = prompt("Insira o nome do colaborador");
  salario = parseFloat(prompt("Insira o salário"));
  calcularAumento(nome, salario);
}

function calcularAumento(nome, salario) {
  let aumento = 0;
  if (salario <= 1500) {
    aumento = 0.2;
  } else if (salario > 1500 && salario <= 2000) {
    aumento = 0.15;
  } else if (salario > 2000 && salario < 3000) {
    aumento = 0.1;
  } else if (salario > 3000) {
    aumento = 0.05;
  }

  let novoSalario = salario + salario * aumento;
  console.log(" O nome do colaborador é : " + nome);
  console.log(" O salário do colaborador é : " + salario);
  console.log(` O aumento do colaborador é de : ${aumento * 100}%`);
  console.log(" O salário reajustado do colaborador é de : " + novoSalario);

  perguntarNovamente();
}

function perguntarNovamente() {
  let resposta = prompt("Deseja calcular novamente ? s/n");
  if (resposta === "s") {
    perguntarSalario();
  } else {
    console.log("Acabou o processo");
  }
}

perguntarSalario();
