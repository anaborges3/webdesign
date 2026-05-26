import type { OpcaoPerfil } from '../tipos/tiposCorrida';
import { Icone } from './Icone';

type PropriedadesBotaoAcaoPerfil = {
  opcao: OpcaoPerfil;
};

export function BotaoAcaoPerfil({ opcao }: PropriedadesBotaoAcaoPerfil) {
  return (
    <button
      className={`botao-acao-perfil ${opcao.ativo ? 'botao-acao-perfil--ativo' : ''}`}
      type="button"
      aria-label={opcao.titulo}
    >
      <Icone nome={opcao.icone} tamanho={24} />
      <span>{opcao.titulo}</span>
    </button>
  );
}