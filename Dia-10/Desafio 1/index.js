// Resolvendo o desafio 1.2 e 1.3

let arrayNumeros = [];
let arrayInvertido = [];
let contador = parseInt(prompt("Quantos números deseja inserir no array ?"));

for (let i = 0; i < contador; i++) {
  let numeroinserido = Number(prompt("Insira um número inteiro e positivo"));
  arrayNumeros[i] = numeroinserido;
}

console.log("Array original : " + arrayNumeros);

console.log("Array reverso : " + arrayNumeros.reverse());

