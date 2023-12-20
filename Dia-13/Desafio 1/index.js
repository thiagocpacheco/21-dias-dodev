class Computador {
  Tipo;
  Processador;
  Video;
  Armazenamento;
  MemoriaRam;
  Ssd;
  constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
    this.Tipo = tipo;
    this.Processador = processador;
    this.Video = video;
    this.Armazenamento = armazenamento;
    this.MemoriaRam = memoriaRam;
    this.Ssd = ssd;
  }
}

let computadores = [];
let continuar = true;
let indexComputadores = 0;

while (continuar) {
  let tipo = prompt("Qual o tipo do computador");
  let processador = prompt("Qual o processador do computador");
  let video = prompt("A GPU é integrada ou dedicada");
  let armazenamento = prompt("Quanto de armazenamento o computador possui");
  let memoriaRam = prompt("Qual o número de GB de memória RAM ");
  let ssd = prompt("Possui SSD");

  let computador = new Computador(
    tipo,
    processador,
    video,
    armazenamento,
    memoriaRam,
    ssd
  );

  computadores[indexComputadores] = computador;

  continuar = prompt("Deseja inserir outro computador ? s/n");

  if (continuar === "n") {
    continuar = false;
    continue;
  } else {
    indexComputadores++;
  }
}

console.log(computadores);
