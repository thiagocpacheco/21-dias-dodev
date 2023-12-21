let arrayUm = [20, 24, 46, 56, 35, 89, 23, 12, 92, 45];
let arrayDois = [20, 27, 56, 78, 89, 17, 54, 79, 3, 18];

function acharnNumerosComum(arrayUm, arryaDois) {
  let resultado = [];
  let contador = 0;

  for (let i = 0; i < arrayUm.length; i++) {
    for (let j = 0; j < arrayDois.length; j++) {
      if (arrayUm[i] == arrayDois[j]) {
        resultado[contador] = arrayUm[i];
        contador++;
        j = arrayDois.length;
      }
    }
  }
  return resultado;
}

console.log(acharnNumerosComum(arrayUm, arrayDois));
