import { TelaSolicitacaoCorrida } from './componentes/TelaSolicitacaoCorrida';
import { TelaCorridas } from './componentes/TelaCorridas';

export default function App() {
  return (
    <main className="pagina">
      <section className="vitrine-celulares" aria-label="Prévia das telas do aplicativo de corrida">
        <TelaSolicitacaoCorrida />
        <TelaCorridas />
      </section>
    </main>
  );
}