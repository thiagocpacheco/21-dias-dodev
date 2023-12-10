let seuNome = prompt("Qual o seu nome ");
let suaIdade = Number(prompt("qual a sua idade"));
let suaAltura = Number(prompt("Qual a sua altura em m"));
let seuPeso = Number(prompt("Qual o seu peso"));

let anoNascimento = 2023 - suaIdade;
//alert("Você nasceu em " + anoNascimento);
let alturaAoQuadrado = suaAltura * suaAltura;

let imc = seuPeso / alturaAoQuadrado;
//alert("Seu IMC é de " + imc + " Kg/m2");
alert(
  "Olá " +
    seuNome +
    "," +
    " você tem " +
    suaIdade +
    " anos, nasceu em " +
    anoNascimento +
    ", tem " +
    suaAltura +
    " de altura, pesa " +
    seuPeso +
    "kg e seu IMC é de " +
    imc +
    " Kg/m2"
);
