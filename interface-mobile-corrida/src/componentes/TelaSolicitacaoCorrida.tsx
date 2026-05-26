import { useState } from 'react';
import { motoristaPrincipal, opcoesPerfil, solicitacaoCorrida } from '../dados/dadosCorridas';
import { Avatar } from './Avatar';
import { BotaoAcaoPerfil } from './BotaoAcaoPerfil';
import { CartaoRota } from './CartaoRota';
import { Icone } from './Icone';
import { MolduraCelular } from './MolduraCelular';

export function TelaSolicitacaoCorrida() {
  const [corridaAceita, setCorridaAceita] = useState(false);

  function aceitarCorrida() {
    setCorridaAceita(true);
  }

  return (
    <MolduraCelular className="tela-solicitacao">
      <header className="cabecalho-solicitacao">
        <button className="botao-icone" type="button" aria-label="Abrir menu">
          <Icone nome="menu" tamanho={29} />
        </button>

        <button className="botao-icone botao-notificacao" type="button" aria-label="Ver notificações">
          <Icone nome="sino" tamanho={27} />
          <span>1</span>
        </button>
      </header>

      <section className="perfil-motorista">
        <Avatar foto={motoristaPrincipal.foto} nome={motoristaPrincipal.nome} tamanho="grande" />

        <div className="perfil-motorista__texto">
          <h1>{motoristaPrincipal.nome}</h1>
          <p>+29 0278 3850</p>
          <span>Driver</span>
        </div>
      </section>

      <section className="acoes-perfil" aria-label="Ações do perfil">
        {opcoesPerfil.map((opcao) => (
          <BotaoAcaoPerfil key={opcao.id} opcao={opcao} />
        ))}
      </section>

      <section className="bloco-solicitacao">
        <h2>New ride request!</h2>

        <CartaoRota
          corrida={solicitacaoCorrida}
          variante="solicitacao"
          aceita={corridaAceita}
          aoAceitar={aceitarCorrida}
        />
      </section>
    </MolduraCelular>
  );
}