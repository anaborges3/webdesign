import { useState } from 'react';
import { corridasAgendadas, diasCalendario } from '../dados/dadosCorridas';
import { CalendarioCorrida } from './CalendarioCorrida';
import { CartaoRota } from './CartaoRota';
import { Icone } from './Icone';
import { MolduraCelular } from './MolduraCelular';

const DIA_PADRAO_SELECIONADO = 28;

export function TelaCorridas() {
  const [diaSelecionado, setDiaSelecionado] = useState(DIA_PADRAO_SELECIONADO);

  function selecionarDia(dia: number) {
    setDiaSelecionado(dia);
  }

  return (
    <MolduraCelular className="tela-corridas">
      <section className="topo-corridas">
        <div className="topo-corridas__navegacao">
          <button className="botao-icone botao-icone--claro" type="button" aria-label="Voltar">
            <Icone nome="voltar" tamanho={31} />
          </button>

          <button className="botao-icone botao-icone--claro" type="button" aria-label="Abrir filtros">
            <Icone nome="ajustes" tamanho={29} />
          </button>
        </div>

        <h1>Ride</h1>

        <CalendarioCorrida
          dias={diasCalendario}
          diaSelecionado={diaSelecionado}
          aoSelecionarDia={selecionarDia}
        />
      </section>

      <section className="lista-corridas" aria-label={`Corridas do dia ${diaSelecionado} de maio`}>
        {corridasAgendadas.map((corrida) => (
          <CartaoRota key={corrida.id} corrida={corrida} variante="agenda" />
        ))}
      </section>
    </MolduraCelular>
  );
}