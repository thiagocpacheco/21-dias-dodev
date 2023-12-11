//Resposta do Desafio 1 do Dia-5 da DoDev

//Declarando as váriaveis
let num1;
let num2;
let operacaoMat;
//Criando o algoritmo
num1 = parseInt(prompt("Digite um número"));
num2 = parseInt(prompt("Digite outro número "));
operacaoMat = parseInt(
  prompt(
    "Digite de 1 a 4, para qual operação matemática será realizada com esses números (n1=+ ;n2=- ;n3=* ; n4=/ ;n5= %; n6= **) "
  )
);

switch (operacaoMat) {
  case 1:
    alert(num1 + " + " + num2 + " = " + (num1 + num2));
    break;
  case 2:
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
    break;
  case 3:
    alert(num1 + " * " + num2 + " = " + num1 * num2);
    break;
  case 4:
    alert(num1 + " / " + num2 + " = " + num1 / num2);
    break;
  case 5:
    alert(num1 + " % " + num2 + " = " + (num1 % num2));
    break;
  case 6:
    alert(num1 + " ** " + num2 + " = " + num1 ** num2);
    break;
  default:
    alert("Essa operação está incorreta, por favor digite o número de 1 a 6 ");
    break;
}
