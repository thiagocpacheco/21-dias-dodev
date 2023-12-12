let mediaGeral;
let quantidadeHomens = 0;
let quantidadeMulheres = 0;
let mulheresNotaAcima7 = 0;
let maiorNotaHomens = 0;
let totalAlunos = 0;
let somaNotas = 0;
let condicao = "s";

while (condicao === "s") {
  let nota = Number(prompt("Digite a nota do aluno "));
  let sexoAluno = prompt(
    " Insira o sexo do aluno : m para masculino / f para feminino  "
  );

  somaNotas += nota;
  totalAlunos++;

  if (sexoAluno === "m") {
    quantidadeHomens++;
  }
  if (sexoAluno === "f") {
    quantidadeMulheres++;
  }

  if (nota > 7 && sexoAluno === "f") {
    mulheresNotaAcima7++;
  } else if (nota > maiorNotaHomens) {
    maiorNotaHomens = nota;
  }

  condicao = prompt(
    "Deseja inserir outra nota, digite s para sim e n para não"
  );
}

mediaGeral = somaNotas / totalAlunos;

console.log("A media geral foi de: " + mediaGeral);
console.log(
  "A quantidade de homens que enviaram as notas é de: " + quantidadeHomens
);
console.log(
  "A quantidade de mulheres que enviaram as notas é de: " + quantidadeMulheres
);
console.log(
  "A quantidade de mulheres que tiveram notas acima de 7 é de: " +
    mulheresNotaAcima7
);
console.log("A maior nota entre os homens foi: " + maiorNotaHomens);
