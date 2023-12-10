let estaComFome = prompt("Responda sim ou não, se está com fome");
let temDinheiro = prompt("Responda sim ou não, se tem dinheiro");
let estaRestaurenteAberto = prompt(
  "Responda sim ou não, se o restaurante está aberto"
);
/*if (estáComFome === "sim") {
  alert("Você está com fome");
} else if (estáComFome === "não") {
  alert("Você não está com fome");
}*/
if (estaComFome === "não" || temDinheiro === "não") {
  alert("Hoje a janta será em casa");
} else if (temDinheiro === "sim" && estaRestaurenteAberto === "sim") {
  alert("Hoje o jantar será no seu restaurante preferido");
} else {
  alert("Peça um delivery");
}
/*fazendo um teste*/
