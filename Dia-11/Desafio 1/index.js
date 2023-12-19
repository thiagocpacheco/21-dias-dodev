let arrayNomes = [];
let arraysNotas = [];
let continuar = true;
let contador = 0;
let perguntaNome = "";
let perguntaNota = 0;
let mediaGeral = 0;
let contadorNome = 0;
let contadorNotas = 0;
let somaNotas = 0;

do {
  perguntaNome = prompt("Insira o nome do aluno");
  perguntaNota = Number(prompt("Insira a nota do aluno"));

  arrayNomes[contador] = perguntaNome;
  arraysNotas[contador] = perguntaNota;

  contador++;

  somaNotas += perguntaNota;

  continuar = prompt("Deseja continuar? (s/n)");
  contadorNome++;
  contadorNotas++;
} while (continuar === "s");

for (let i = 0; i < arrayNomes.length; i++) {
  console.log(arrayNomes[i] + " - " + arraysNotas[i]);
}

mediaGeral = somaNotas / contadorNotas;

console.log(`Foram ${contadorNome} alunos e ${contadorNotas} notas`);

console.log(`As notas dos alunos foram ${arraysNotas}`);

console.log(`E o nomes dos alunos : ${arrayNomes}`);

console.log(`A soma das notas foi de :${somaNotas}`);
console.log(`A média geral da turma foi de : ${mediaGeral}`);
