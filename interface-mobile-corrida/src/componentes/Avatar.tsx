type PropriedadesAvatar = {
  foto: string;
  nome: string;
  tamanho?: 'pequeno' | 'medio' | 'grande';
};

export function Avatar({ foto, nome, tamanho = 'medio' }: PropriedadesAvatar) {
  return (
    <img
      className={`avatar avatar--${tamanho}`}
      src={foto}
      alt={`Foto de ${nome}`}
      loading="lazy"
    />
  );
}