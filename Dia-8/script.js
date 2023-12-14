///Código usado para o clone de calculadora

function calculadora(numero1, numero2, operador) {
  let resultado;
  let num1 = parseInt(numero1);
  let num2 = parseInt(numero2);

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "e":
      let contador = 1;
      resultado = num1 * num1;
      while (contador < num2) {
        resultado = resultado * num1;
        contador++;
      }
      break;
  }
  if (resultado == undefined || resultado > 1000000) {
    resultado = "ERRO";
  }
  return resultado;
}
