//Algoritmo 1

let valorPerguntado;

valorPerguntado = parseInt(prompt("Insira um valor"));

for (
  let contandoNumero = 0;
  contandoNumero <= valorPerguntado;
  contandoNumero++
) {
  console.log("A contagem dos números é: " + contandoNumero);
}

// Algoritmo 2
for (
  let numeroDeCincoEmCInco = 0;
  numeroDeCincoEmCInco <= 50;
  numeroDeCincoEmCInco += 5
) {
  console.log(
    "Os números de cinco em cinco começando de zero é: " + numeroDeCincoEmCInco
  );
}

// Algoritmo 3
for (
  let numeroDiminiuindoCInco = 50;
  numeroDiminiuindoCInco >= 0;
  numeroDiminiuindoCInco -= 5
) {
  console.log("Os números diminuindo de 5 em 5 são: " + numeroDiminiuindoCInco);
}

// Algoritmo 4

let numero;

numero = parseInt(
  prompt(" Digite um número inteiro e positivo para receber a tabuada dele ")
);

for (let i = numero; i < numero + 3; i++) {
  console.log("Tábuada do número : " + i);
  for (let j = 0; j <= 5; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}
