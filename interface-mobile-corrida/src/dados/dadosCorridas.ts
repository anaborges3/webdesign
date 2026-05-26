import type { DiaCalendario, OpcaoPerfil, Passageiro, RotaCorrida } from '../tipos/tiposCorrida';

export const motoristaPrincipal: Passageiro = {
  nome: 'Daniel Quite',
  foto: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=300&q=80',
};

export const passageiroJeck: Passageiro = {
  nome: 'Jeck, N.',
  avaliacoes: 158,
  foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
};

export const passageiraMulher: Passageiro = {
  nome: 'Laura',
  foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
};

export const passageiroHomem: Passageiro = {
  nome: 'Chris',
  foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
};

export const opcoesPerfil: OpcaoPerfil[] = [
  {
    id: 'corrida',
    titulo: 'Ride',
    icone: 'carro',
    ativo: true,
  },
  {
    id: 'mensagem',
    titulo: 'Message',
    icone: 'mensagem',
  },
  {
    id: 'avaliacao',
    titulo: 'Rating',
    icone: 'coracao',
  },
  {
    id: 'feed',
    titulo: 'My feed',
    icone: 'pulso',
  },
];

export const diasCalendario: DiaCalendario[] = [
  { dia: 26, mes: 'May' },
  { dia: 27, mes: 'May' },
  { dia: 28, mes: 'May' },
  { dia: 29, mes: 'May' },
  { dia: 30, mes: 'May' },
];

export const solicitacaoCorrida: RotaCorrida = {
  id: 'solicitacao-001',
  origem: 'Chicago',
  destino: 'Oak Park',
  horarioOrigem: '20:00',
  horarioDestino: '22:30',
  distancia: '15, 8 km',
  preco: '50 $',
  data: '25 May, 2019',
  assentos: '1 seat',
  passageiro: passageiroJeck,
  icones: ['raio', 'chama'],
};

export const corridasAgendadas: RotaCorrida[] = [
  {
    id: 'agenda-001',
    origem: 'Chicago',
    destino: 'Oak Park',
    horarioOrigem: '20:00',
    horarioDestino: '22:30',
    distancia: '15, 8 km',
    passageiros: [passageiroJeck, passageiraMulher],
    icones: ['wifi', 'mala', 'seta'],
  },
  {
    id: 'agenda-002',
    origem: 'New York',
    destino: 'Park Avenue',
    horarioOrigem: '21:45',
    horarioDestino: '22:40',
    distancia: '19, 3 km',
    passageiros: [passageiraMulher, passageiroHomem],
    icones: ['wifi', 'mala'],
    destaque: 'microfone',
  },
];