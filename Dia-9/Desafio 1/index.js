let continuarPrograma = "s";
do {
  let nome;
  let idade;
  let peso;
  let altura;
  let profissao;
  let perfilCompleto;

  nome = prompt("Digite seu nome");
  idade = parseInt(prompt("Digite sua idade"));
  peso = prompt("Digite seu peso");
  altura = prompt("Digite sua altura ");
  profissao = prompt("Digite sua profissão");
  perfilCompleto = [nome, idade, peso, altura, profissao];

  console.log(perfilCompleto);

  alert(
    `Olá ${perfilCompleto[0]}, você tem ${perfilCompleto[1]} anos, é ${perfilCompleto[4]}, tem ${perfilCompleto[3]}M de altura e pesa ${perfilCompleto[3]}kg`
  );

  if (perfilCompleto[1] >= 18) {
    alert(`${perfilCompleto[0]}, está liberado para tomar umas geladas `);
  } else alert(`${perfilCompleto[0]}, Sem gelada para você `);

  let idadeEmMeses = perfilCompleto[1] * 12;
  let idadeEmSemanas = perfilCompleto[1] * 52;
  let idadeEmDias = perfilCompleto[1] * 365;

  console.log(`Sua idade em meses é de : ${idadeEmMeses} `);
  console.log(`Sua idade em semanas é de : ${idadeEmSemanas} `);
  console.log(`Sua idade em meses é de : ${idadeEmDias} `);

  //Calculando IMC agora

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log("Magreza");
  } else if (imc > 18.5 && imc < 24.9) {
    console.log("Normal");
  } else if (imc > 24.9 && imc < 30) {
    console.log("sobrepeso");
  } else if (imc > 30) {
    console.log("Obesidade");
  }

  let anoAtual = 2023;
  let anoNascimento = anoAtual - perfilCompleto[1];
  console.log(`Você nasceu em : ${anoNascimento}`);

  let anoVivido = anoNascimento;
  let idadeAtual = 0;

  for (let anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++) {
    console.log(`${anoVivido} =  ${idadeAtual} anos de idade`);
    idadeAtual++;
  }

  continuarPrograma = prompt("Deseja inserir os dados novamente ? s/n  ");
} while (continuarPrograma === "s");

console.log("Acabou o loop");
