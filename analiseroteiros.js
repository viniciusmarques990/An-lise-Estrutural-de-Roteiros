class Cena {
  constructor(numero, locacao, periodo, paginas) {
    this.numero = numero;
    this.locacao = locacao;
    this.periodo = periodo;
    this.paginas = paginas;
  }
}

function converterPaginasEmHoras(paginas) {
  return paginas * 1.5;
}

class Cronograma {
  constructor() {
    this.cenasConfirmadas = [];
  }

  adicionarCena(cena) {
    if (cena.locacao.toLowerCase() === "a definir") {
      return;
    }

    this.cenasConfirmadas.push(cena);
  }

  avaliarViabilidade() {
    let horasTotais = 0;

    for (let i = 0; i < this.cenasConfirmadas.length; i++) {
      horasTotais += converterPaginasEmHoras(
        this.cenasConfirmadas[i].paginas
      );
    }

    const limiteSemanal = 40;

    if (horasTotais > limiteSemanal) {
      return `Projeto Inviável: ${horasTotais}h excede o limite semanal de ${limiteSemanal}h.`;
    }

    return `Projeto Viável: ${horasTotais}h estimadas.`;
  }
}

const cron = new Cronograma();

cron.adicionarCena(
  new Cena(1, "Estúdio A", "Diurno", 10)
);

console.log(cron.avaliarViabilidade());