let nomeMotorista = prompt("Digite seu nome ");
let idadeMotorista = parseInt(prompt("Digite sua idade "));
let possuiCartaMotorista = prompt(
  "Digite sim ou não, se possui carta de motorista"
);
let temCarro = prompt("Digite sim ou não, se tem carro ");

if (idadeMotorista < 18 || possuiCartaMotorista === "não") {
  alert(nomeMotorista + ", você não pode dirigir");
} else if (
  idadeMotorista > 18 &&
  possuiCartaMotorista === "sim" &&
  temCarro === "não"
) {
  alert(nomeMotorista + ", você pode dirigir, mas não tem um carro ");
} else if (
  idadeMotorista > 18 &&
  possuiCartaMotorista === "sim" &&
  temCarro === "sim"
) {
  alert(nomeMotorista + ", você será o motorista");
}
/*fazendo um teste*/
