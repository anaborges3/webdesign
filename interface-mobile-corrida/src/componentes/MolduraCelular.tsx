import type { ReactNode } from 'react';

type PropriedadesMolduraCelular = {
  children: ReactNode;
  className?: string;
};

export function MolduraCelular({ children, className = '' }: PropriedadesMolduraCelular) {
  return (
    <article className={`moldura-celular ${className}`}>
      <div className="barra-status">
        <span>9:41</span>

        <div className="status-icones" aria-hidden="true">
          <span className="sinal"></span>
          <span className="wifi-status"></span>
          <span className="bateria"></span>
        </div>
      </div>

      {children}
    </article>
  );
}