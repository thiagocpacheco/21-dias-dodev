//Resposta do Desafio 2 do Dia-5 da DoDev

//Declarando as variáveis
let valor;
let quantidade;
let calibrarPneus;

//criando o algoritmo
let opcaoDeAbastecer = parseInt(
  prompt(
    "Digite 1 para escolher abastecer com gasolina / Digite 2 para abastecer com Álcool / Digite 3 para calibrar os pneus"
  )
);
switch (opcaoDeAbastecer) {
  case 1:
    valor = parseInt(prompt(" Digite o valor desejado em R$"));
    quantidade = valor / 5;
    alert("Foram abastecidos " + quantidade + "L de gasolina");
    break;
  case 2:
    valor = parseInt(prompt("Digite o valor desejado em R$"));
    quantidade = valor / 3;
    alert("Foram abastecidos " + quantidade + "L de Álcool");
    break;
  case 3:
    alert("Pneus calibrados com sucesso");
    break;
  default:
    alert("Opção inválida, digite o número correto ");
    break;
}
