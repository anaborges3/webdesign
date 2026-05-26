import type { RotaCorrida } from '../tipos/tiposCorrida';
import { Avatar } from './Avatar';
import { Icone } from './Icone';

type PropriedadesCartaoRota = {
  corrida: RotaCorrida;
  variante?: 'solicitacao' | 'agenda';
  aceita?: boolean;
  aoAceitar?: () => void;
};

export function CartaoRota({
  corrida,
  variante = 'agenda',
  aceita = false,
  aoAceitar,
}: PropriedadesCartaoRota) {
  const ehSolicitacao = variante === 'solicitacao';

  return (
    <article className={`cartao-rota cartao-rota--${variante}`}>
      {ehSolicitacao && corrida.passageiro && (
        <header className="cartao-rota__cabecalho">
          <div className="cartao-rota__icones">
            {corrida.icones?.map((icone) => (
              <span className="mini-icone" key={icone}>
                <Icone nome={icone} tamanho={15} />
              </span>
            ))}
          </div>

          <div className="cartao-rota__passageiro">
            <div>
              <strong>{corrida.passageiro.nome}</strong>
              <span>{corrida.passageiro.avaliacoes} ratings</span>
            </div>

            <Avatar foto={corrida.passageiro.foto} nome={corrida.passageiro.nome} tamanho="pequeno" />
          </div>
        </header>
      )}

      {ehSolicitacao && (
        <div className="cartao-rota__faixa">
          <div>
            <strong>{corrida.data}</strong>
            <span>{corrida.assentos}</span>
          </div>

          <strong className="cartao-rota__preco">{corrida.preco}</strong>
        </div>
      )}

      {!ehSolicitacao && (
        <header className="cartao-rota__topo-agenda">
          <div className="cartao-rota__icones">
            {corrida.icones?.map((icone) => (
              <span className="mini-icone" key={icone}>
                <Icone nome={icone} tamanho={15} />
              </span>
            ))}
          </div>

          <div className="cartao-rota__avatares">
            {corrida.destaque && (
              <span className="icone-destaque">
                <Icone nome={corrida.destaque} tamanho={17} />
              </span>
            )}

            {corrida.passageiros?.map((passageiro) => (
              <Avatar
                key={passageiro.nome}
                foto={passageiro.foto}
                nome={passageiro.nome}
                tamanho="pequeno"
              />
            ))}
          </div>
        </header>
      )}

      <div className="trajeto">
        <div className="trajeto__marcadores" aria-hidden="true">
          <span className="trajeto__ponto trajeto__ponto--origem"></span>
          <span className="trajeto__linha"></span>
          <span className="trajeto__ponto trajeto__ponto--destino"></span>
        </div>

        <div className="trajeto__conteudo">
          <div className="trajeto__linha-texto">
            <strong>{corrida.origem}</strong>
            <span>{corrida.horarioOrigem}</span>
          </div>

          <small>Distance&nbsp;&nbsp;{corrida.distancia}</small>

          <div className="trajeto__linha-texto">
            <strong>{corrida.destino}</strong>
            <span>{corrida.horarioDestino}</span>
          </div>
        </div>
      </div>

      {ehSolicitacao && (
        <footer className="cartao-rota__acoes">
          <button className="botao-recusar" type="button">
            Decline
          </button>

          <button
            className={`botao-aceitar ${aceita ? 'botao-aceitar--ativo' : ''}`}
            type="button"
            onClick={aoAceitar}
          >
            {aceita ? 'Accepted' : 'Accept'}
          </button>
        </footer>
      )}
    </article>
  );
}