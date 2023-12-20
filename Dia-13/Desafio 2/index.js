class Carro {
  Nome;
  Potencia;
  VelocidadeMaxima;
  Aceleracao;
  constructor(nome, potencia, velocidadeMaxima, aceleracao) {
    this.Nome = nome;
    this.Potencia = potencia;
    this.VelocidadeMaxima = velocidadeMaxima;
    this.Aceleracao = aceleracao;
  }
  CalcularTempoMedio(distancia) {
    let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao);
    return resultado;
  }
}

class Corrida {
  NomeDoLocal;
  Tipo;
  Distancia;
  Participantes;
  Vencedor;
  constructor(nomeDoLocal, tipo, distancia) {
    this.NomeDoLocal = nomeDoLocal;
    this.Tipo = tipo;
    this.Distancia = distancia;
    this.Participantes = [];
    this.Vencedor = "";
  }

  CalcularVencedor() {
    let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia);
    let vencedor = this.Participantes[0];

    for (let i = 1; i < this.Participantes.length; i++) {
      let tempo = this.Participantes[i].CalcularTempoMedio(this.Distancia);
      if (tempo < menorTempo) {
        menorTempo = tempo;
        vencedor = this.Participantes[i];
      }
    }
    return (this.Vencedor = vencedor);
  }

  ExibirVencedor() {
    alert("O vencedor é " + this.Vencedor.Nome);
  }
}

let corrida = new Corrida("Roma", "F1", 8000);

corrida.Participantes[0] = new Carro("Ferrari", 100, 250, 8);
corrida.Participantes[1] = new Carro("Mercedes", 150, 300, 6);
corrida.Participantes[2] = new Carro("Red Bull ", 200, 280, 7);

corrida.CalcularVencedor();
corrida.ExibirVencedor();
