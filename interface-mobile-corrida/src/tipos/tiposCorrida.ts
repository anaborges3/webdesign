export type TipoIcone =
  | 'menu'
  | 'sino'
  | 'carro'
  | 'mensagem'
  | 'coracao'
  | 'pulso'
  | 'calendario'
  | 'voltar'
  | 'ajustes'
  | 'wifi'
  | 'mala'
  | 'seta'
  | 'raio'
  | 'chama'
  | 'microfone';

export type OpcaoPerfil = {
  id: string;
  titulo: string;
  icone: TipoIcone;
  ativo?: boolean;
};

export type DiaCalendario = {
  dia: number;
  mes: string;
};

export type Passageiro = {
  nome: string;
  avaliacoes?: number;
  foto: string;
};

export type RotaCorrida = {
  id: string;
  origem: string;
  destino: string;
  horarioOrigem: string;
  horarioDestino: string;
  distancia: string;
  preco?: string;
  data?: string;
  assentos?: string;
  passageiro?: Passageiro;
  passageiros?: Passageiro[];
  icones?: TipoIcone[];
  destaque?: TipoIcone;
};