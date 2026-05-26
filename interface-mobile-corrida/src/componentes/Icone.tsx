import type { ReactElement } from 'react';
import type { TipoIcone } from '../tipos/tiposCorrida';

type PropriedadesIcone = {
  nome: TipoIcone;
  tamanho?: number;
  className?: string;
};

export function Icone({ nome, tamanho = 22, className = '' }: PropriedadesIcone) {
  const propriedadesComuns = {
    width: tamanho,
    height: tamanho,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: `icone ${className}`,
    'aria-hidden': true,
  };

  const icones: Record<TipoIcone, ReactElement> = {
    menu: (
      <svg {...propriedadesComuns}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),

    sino: (
      <svg {...propriedadesComuns}>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    ),

    carro: (
      <svg {...propriedadesComuns}>
        <path d="M5 17h14" />
        <path d="M7 17v2" />
        <path d="M17 17v2" />
        <path d="M6 13l1.4-4.2A2 2 0 0 1 9.3 7h5.4a2 2 0 0 1 1.9 1.8L18 13" />
        <path d="M5 13h14v4H5z" />
      </svg>
    ),

    mensagem: (
      <svg {...propriedadesComuns}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),

    coracao: (
      <svg {...propriedadesComuns}>
        <path d="M20.8 8.6c0 5.3-8.8 10-8.8 10S3.2 13.9 3.2 8.6A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.2Z" />
      </svg>
    ),

    pulso: (
      <svg {...propriedadesComuns}>
        <path d="M3 12h4l2-5 4 10 2-5h6" />
      </svg>
    ),

    calendario: (
      <svg {...propriedadesComuns}>
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M4 8h16" />
        <path d="M5 5h14v15H5z" />
      </svg>
    ),

    voltar: (
      <svg {...propriedadesComuns}>
        <path d="m15 18-6-6 6-6" />
      </svg>
    ),

    ajustes: (
      <svg {...propriedadesComuns}>
        <path d="M6 4v16" />
        <path d="M12 4v16" />
        <path d="M18 4v16" />
        <circle cx="6" cy="9" r="1.35" fill="currentColor" stroke="none" />
        <circle cx="12" cy="15" r="1.35" fill="currentColor" stroke="none" />
        <circle cx="18" cy="8" r="1.35" fill="currentColor" stroke="none" />
      </svg>
    ),

    wifi: (
      <svg {...propriedadesComuns}>
        <path d="M5 12.5a10 10 0 0 1 14 0" />
        <path d="M8.5 16a5 5 0 0 1 7 0" />
        <path d="M12 19h.01" />
      </svg>
    ),

    mala: (
      <svg {...propriedadesComuns}>
        <path d="M9 7V5h6v2" />
        <path d="M5 7h14v12H5z" />
        <path d="M5 12h14" />
      </svg>
    ),

    seta: (
      <svg {...propriedadesComuns}>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    ),

    raio: (
      <svg {...propriedadesComuns}>
        <path d="m13 2-7 11h6l-1 9 7-12h-6z" />
      </svg>
    ),

    chama: (
      <svg {...propriedadesComuns}>
        <path d="M12 22c4 0 7-2.8 7-7 0-3-1.8-5.4-4.2-7.5.2 2-1 3.5-2.4 4.3.2-3.6-1.6-6-4.4-8C8.3 8 5 10.5 5 15c0 4.2 3 7 7 7Z" />
      </svg>
    ),

    microfone: (
      <svg {...propriedadesComuns}>
        <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v3" />
      </svg>
    ),
  };

  return icones[nome];
}