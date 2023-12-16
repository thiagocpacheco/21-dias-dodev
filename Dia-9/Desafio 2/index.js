let salarioCliente;
let continuar = "n";

while (continuar != "s") {
  let nomeCliente;
  let idadeCliente;
  let perfilCliente;

  //Atribuindo valores
  nomeCliente = prompt("Digite seu nome");
  idadeCliente = parseInt(prompt("Digite sua idade"));
  salarioCliente = parseFloat(prompt("Digite seu salário"));

  perfilCliente = [nomeCliente, idadeCliente, salarioCliente];
  console.log(perfilCliente);

  continuar = prompt("Informou todas as informações corretamente ? Digite s/n");
  if (continuar == "n") {
    console.log("Coloque todas as informações corretamente");
  } else {
    continuar = "s";
  }
}
console.log("Acabou o loop");

//Previsão dos salários nos próximos anos
let aumento = 0.015;
console.log("Previsão salarial dos próximos 10 anos");

for (let ano = 1; ano <= 10; ano++) {
  salarioCliente += salarioCliente * aumento;
  aumento *= 2;
  console.log(`${2023 + ano}:  R$${salarioCliente}`);
}
// teste
