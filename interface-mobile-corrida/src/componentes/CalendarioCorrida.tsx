import type { DiaCalendario } from '../tipos/tiposCorrida';
import { Icone } from './Icone';

type PropriedadesCalendarioCorrida = {
  dias: DiaCalendario[];
  diaSelecionado: number;
  aoSelecionarDia: (dia: number) => void;
};

export function CalendarioCorrida({
  dias,
  diaSelecionado,
  aoSelecionarDia,
}: PropriedadesCalendarioCorrida) {
  return (
    <nav className="calendario-corrida" aria-label="Calendário de corridas">
      {dias.map((dia) => {
        const selecionado = dia.dia === diaSelecionado;

        return (
          <button
            key={dia.dia}
            type="button"
            className={`calendario-corrida__dia ${
              selecionado ? 'calendario-corrida__dia--selecionado' : ''
            }`}
            onClick={() => aoSelecionarDia(dia.dia)}
            aria-pressed={selecionado}
          >
            {selecionado && <Icone nome="calendario" tamanho={23} />}
            <strong>{dia.dia}</strong>
            <span>{dia.mes}</span>
          </button>
        );
      })}
    </nav>
  );
}