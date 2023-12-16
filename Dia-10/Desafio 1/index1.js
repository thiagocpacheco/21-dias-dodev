//Resolvendo o desafio 1.1

let array = [];
let indice = [];
let numeroProcurado;
let contadorIndice = 0;

numeroProcurado = parseInt(prompt("Insira um número inteiro a ser procurado"));

for (let i = 0; i < 10; i++) {
  const elemento = parseInt(prompt(`Digite o elemento ${i + 1}`));
  array[i] = elemento;
}

for (let i = 0; i < 10; i++) {
  if (array[i] === numeroProcurado) {
    indice[contadorIndice] = i;
    contadorIndice++;
  }
}

console.log(
  `O número ${numeroProcurado} foi econtrado nos índices : ${indice}`
);
