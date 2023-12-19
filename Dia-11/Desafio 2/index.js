let arrayModelos = [];
let arrayAnos = [];
let arrayValores = [];
let arrayCarro = [];
let contador = 0;

do {
  let modeloInserido = prompt("Insira um modelo de carro");
  arrayModelos[contador] = modeloInserido;
  let anoInserido = parseInt(prompt("Insira o ano do carro"));
  arrayAnos[contador] = anoInserido;
  let valorInserido = Number(prompt("Insira o valor do carro"));
  arrayValores[contador] = valorInserido;

  contador++;

  continuar = prompt("Deseja continuar? (s/n)");
} while (continuar === "s");

for (let i = 0; i < arrayModelos.length; i++) {
  console.log(`${arrayModelos[i]}, ${arrayAnos[i]} Valor: ${arrayValores[i]}`);
}

for (let i = 0; i < arrayValores.length - 1; i++) {
  for (let j = i + 1; j < arrayValores.length; j++) {
    if (arrayValores[i] > arrayValores[j]) {
      let tempValores = arrayValores[i];
      arrayValores[i] = arrayValores[j];
      arrayValores[j] = tempValores;

      let tempModelos = arrayModelos[i];
      arrayModelos[i] = arrayModelos[j];
      arrayModelos[j] = tempModelos;

      let tempAnos = arrayAnos[i];
      arrayAnos[i] = arrayAnos[j];
      arrayAnos[j] = tempAnos;
    }
  }
}

console.log("Carros ordenados pelo preço:");
for (let i = 0; i < arrayModelos.length; i++) {
  console.log(`${arrayModelos[i]}, ${arrayAnos[i]}, Valor: ${arrayValores[i]}`);
}
