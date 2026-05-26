# Relatório Técnico de Componentização

## Projeto: Interface Mobile de Corrida

Este relatório apresenta a estrutura de componentização utilizada no projeto de replicação de interface mobile desenvolvido para a disciplina de Web Design do curso de Engenharia da Computação.

O projeto consiste na reprodução de duas telas mobile de um aplicativo de corrida, utilizando React, TypeScript, Vite e SASS.

---

## 1. Objetivo da Componentização

A componentização foi aplicada para dividir a interface em partes menores, reutilizáveis e de fácil manutenção.

Essa estratégia permite:

- Melhor organização do código;
- Reutilização de elementos visuais;
- Separação de responsabilidades;
- Facilidade para ajustes de layout;
- Redução de repetição de código;
- Melhor legibilidade;
- Maior facilidade para manutenção futura.

Como o projeto possui vários elementos repetidos, como cards, ícones, avatares, botões e estruturas de rota, a divisão em componentes foi essencial para manter o código limpo e escalável.

---

## 2. Organização Geral dos Componentes

Os componentes foram organizados dentro da pasta:

```
src/componentes/
```

A estrutura utilizada foi:

```
src/componentes/
├─ Icone.tsx
├─ MolduraCelular.tsx
├─ Avatar.tsx
├─ BotaoAcaoPerfil.tsx
├─ CartaoRota.tsx
├─ CalendarioCorrida.tsx
├─ TelaSolicitacaoCorrida.tsx
└─ TelaCorridas.tsx
```

Além disso, os dados e tipos foram separados em pastas próprias:

```txt
src/dados/
└─ dadosCorridas.ts

src/tipos/
└─ tiposCorrida.ts
```

Essa divisão evita que os componentes fiquem sobrecarregados com dados fixos ou regras de tipagem.

---

## 3. Componentes Criados

## 3.1. Componente `MolduraCelular`

### Responsabilidade

O componente `MolduraCelular` é responsável por criar a estrutura visual que simula um aparelho celular.

Ele encapsula:

* Corpo do smartphone;
* Cantos arredondados;
* Sombra externa;
* Barra de status;
* Área interna onde cada tela é renderizada.

### Justificativa

Como as duas telas precisam aparecer dentro de molduras iguais, foi criado um componente específico para essa estrutura.

Isso evita duplicação de código e garante que ambas as telas mantenham a mesma proporção visual.

### Uso

```tsx
<MolduraCelular className="tela-solicitacao">
  {/* conteúdo da tela */}
</MolduraCelular>
```

---

## 3.2. Componente `TelaSolicitacaoCorrida`

### Responsabilidade

O componente `TelaSolicitacaoCorrida` representa a primeira tela da interface, correspondente à tela de solicitação de nova corrida.

Ele organiza:

* Cabeçalho com menu e notificação;
* Perfil do motorista;
* Ações do perfil;
* Título "New ride request!";
* Card de solicitação de corrida.

### Justificativa

Essa tela possui composição própria e reúne vários componentes menores. Por isso, foi separada em um componente de tela, responsável apenas por montar a estrutura geral da primeira visualização.

### Componentes utilizados

* `MolduraCelular`;
* `Avatar`;
* `BotaoAcaoPerfil`;
* `CartaoRota`;
* `Icone`.

---

## 3.3. Componente `TelaCorridas`

### Responsabilidade

O componente `TelaCorridas` representa a segunda tela da interface, correspondente à listagem de corridas.

Ele organiza:

* Cabeçalho azul;
* Botão de voltar;
* Botão de filtros;
* Título "Ride";
* Calendário;
* Cards de rotas agendadas.

### Justificativa

A segunda tela possui comportamento próprio, especialmente no calendário interativo. Por isso, ela foi isolada em um componente específico.

### Estado interno

Esse componente utiliza `useState` para controlar o dia selecionado no calendário.

```tsx
const [diaSelecionado, setDiaSelecionado] = useState(28);
```

### Componentes utilizados

* `MolduraCelular`;
* `CalendarioCorrida`;
* `CartaoRota`;
* `Icone`.

---

## 3.4. Componente `CalendarioCorrida`

### Responsabilidade

O componente `CalendarioCorrida` renderiza os dias do calendário exibidos na tela de corridas.

Ele recebe:

* Lista de dias;
* Dia selecionado;
* Função para selecionar um novo dia.

### Propriedades

```tsx
type PropriedadesCalendarioCorrida = {
  dias: DiaCalendario[];
  diaSelecionado: number;
  aoSelecionarDia: (dia: number) => void;
};
```

### Justificativa

O calendário possui lógica própria de seleção e destaque visual. Separá-lo em um componente independente deixa a tela principal mais limpa e facilita futuras melhorias.

### Interatividade

Quando o usuário clica em outro dia, o componente chama:

```tsx
aoSelecionarDia(dia.dia)
```

Isso atualiza o estado da tela principal e muda o destaque visual do calendário.

---

## 3.5. Componente `CartaoRota`

### Responsabilidade

O componente `CartaoRota` representa as informações de uma corrida.

Ele é usado em dois contextos:

1. Card da solicitação de corrida;
2. Cards da lista de corridas agendadas.

### Dados exibidos

O card pode exibir:

* Ícones de recursos;
* Passageiro;
* Avatares;
* Origem;
* Destino;
* Horário de origem;
* Horário de destino;
* Distância;
* Preço;
* Data;
* Botões de ação.

### Variações

O componente aceita a propriedade `variante`, permitindo que o mesmo componente seja usado em layouts diferentes:

```tsx
variante?: 'solicitacao' | 'agenda';
```

### Justificativa

Como os cards das duas telas compartilham a mesma lógica visual de rota, origem, destino, distância e horários, foi melhor criar um único componente flexível em vez de dois componentes duplicados.

Essa decisão melhora a manutenção e reduz repetição.

---

## 3.6. Componente `BotaoAcaoPerfil`

### Responsabilidade

O componente `BotaoAcaoPerfil` representa os botões de ação da tela do motorista.

Os botões são:

* Ride;
* Message;
* Rating;
* My feed.

### Propriedades

O componente recebe uma opção de perfil:

```tsx
type PropriedadesBotaoAcaoPerfil = {
  opcao: OpcaoPerfil;
};
```

### Justificativa

Os quatro botões possuem estrutura visual parecida. A diferença está apenas no texto, ícone e estado ativo.

Por isso, o componente foi criado para evitar repetição e permitir que os botões sejam renderizados a partir de uma lista de dados.

---

## 3.7. Componente `Avatar`

### Responsabilidade

O componente `Avatar` renderiza imagens de usuários.

Ele é utilizado para:

* Foto do motorista;
* Foto do passageiro;
* Fotos dos usuários nos cards de corrida.

### Variações

O componente aceita diferentes tamanhos:

```tsx
tamanho?: 'pequeno' | 'medio' | 'grande';
```

### Justificativa

Como várias imagens de perfil aparecem na interface com tamanhos diferentes, o componente `Avatar` centraliza essa regra visual.

Isso facilita alterações futuras no formato, borda, sombra ou tamanho das imagens.

---

## 3.8. Componente `Icone`

### Responsabilidade

O componente `Icone` centraliza todos os ícones SVG usados no projeto.

Ele recebe o nome do ícone e retorna o SVG correspondente.

### Exemplos de ícones

* menu;
* sino;
* carro;
* mensagem;
* coração;
* calendário;
* voltar;
* ajustes;
* wifi;
* mala;
* seta;
* raio;
* chama;
* microfone.

### Justificativa

Em vez de importar vários arquivos SVG separados, os ícones foram centralizados em um único componente.

Essa abordagem facilita:

* Padronização de tamanho;
* Padronização de cor;
* Reutilização;
* Manutenção;
* Evitar dependências externas de bibliotecas de ícones.

---

## 4. Separação dos Dados

Os dados utilizados pela interface foram centralizados no arquivo:

```txt
src/dados/dadosCorridas.ts
```

Esse arquivo contém:

* Dados do motorista;
* Dados dos passageiros;
* Opções do menu de perfil;
* Dias do calendário;
* Solicitação de corrida;
* Corridas agendadas.

### Justificativa

A separação dos dados evita que os componentes tenham informações fixas espalhadas pelo código.

Com isso, a interface fica mais organizada e preparada para uma futura integração com API ou banco de dados.

---

## 5. Separação dos Tipos

Os tipos TypeScript foram centralizados no arquivo:

```txt
src/tipos/tiposCorrida.ts
```

Foram definidos os seguintes tipos:

* `TipoIcone`;
* `OpcaoPerfil`;
* `DiaCalendario`;
* `Passageiro`;
* `RotaCorrida`.

### Justificativa

A centralização dos tipos melhora a consistência do projeto e reduz erros no uso dos dados.

Também facilita a manutenção, pois qualquer alteração estrutural nos dados pode ser feita em um único local.

---

## 6. Organização dos Estilos

Os estilos foram organizados na pasta:

```txt
src/estilos/
```

Com os arquivos:

```txt
global.scss
variaveis.scss
responsivo.scss
```

### `global.scss`

Contém a maior parte da estilização visual da interface, incluindo:

* Estrutura da página;
* Moldura dos celulares;
* Barra de status;
* Tela de solicitação;
* Tela de corridas;
* Cards;
* Botões;
* Calendário;
* Rotas.

### `variaveis.scss`

Contém variáveis reutilizáveis, como:

* Cores;
* Fonte principal;
* Raios de borda;
* Cores de sombra;
* Tons principais da interface.

### `responsivo.scss`

Contém ajustes para telas menores, permitindo que os celulares fiquem empilhados verticalmente em dispositivos com menor largura.

---

## 7. Interações Implementadas

## 7.1. Seleção de Dia no Calendário

O calendário permite clicar em diferentes dias.

Quando um dia é clicado, o estado da tela é atualizado e o destaque visual muda para o novo dia selecionado.

Essa interação foi implementada com `useState`.

---

## 7.2. Botão Accept

O botão `Accept` possui uma ação de clique que altera o estado da solicitação.

A estrutura foi preparada para representar visualmente o aceite da corrida.

---

## 8. Decisões de Design

Durante a implementação, foram adotadas decisões para aproximar a interface da referência visual:

* Uso de fundo claro com gradiente suave;
* Simulação de tela mobile com bordas arredondadas;
* Uso de azul intenso na tela de corridas;
* Uso de rosa/magenta como cor de destaque;
* Cards brancos com sombras suaves;
* Tipografia com peso alto em títulos;
* Ícones lineares em SVG;
* Espaçamentos ajustados para se aproximar do layout original;
* Uso de cards arredondados;
* Calendário com destaque no dia selecionado.

---

## 9. Boas Práticas Aplicadas

Foram aplicadas as seguintes boas práticas:

* Componentes com responsabilidade única;
* Separação entre dados, tipos, componentes e estilos;
* Nomes de variáveis e funções em português;
* Uso de TypeScript para tipagem;
* Evitação de duplicação de código;
* Estrutura de pastas organizada;
* Reutilização de componentes;
* Estilos centralizados;
* Uso de variáveis SCSS;
* Layout responsivo;
* Código preparado para manutenção.

---

## 10. Relação entre Componentes

A composição geral do projeto pode ser resumida assim:

```txt
App
├─ TelaSolicitacaoCorrida
│  ├─ MolduraCelular
│  ├─ Avatar
│  ├─ BotaoAcaoPerfil
│  ├─ CartaoRota
│  └─ Icone
│
└─ TelaCorridas
   ├─ MolduraCelular
   ├─ CalendarioCorrida
   ├─ CartaoRota
   └─ Icone
```

Essa estrutura permite que a aplicação seja dividida entre componentes de tela e componentes reutilizáveis.

---

## 11. Benefícios da Estrutura Utilizada

A estrutura adotada traz os seguintes benefícios:

### 11.1. Manutenção facilitada

Alterações em um componente específico não exigem modificar toda a aplicação.

### 11.2. Reutilização

Componentes como `Avatar`, `Icone` e `CartaoRota` podem ser reutilizados em outras telas.

### 11.3. Clareza

Cada arquivo possui uma função clara dentro do projeto.

### 11.4. Escalabilidade

A estrutura permite adicionar novas telas, novos cards ou novas interações sem comprometer a organização atual.

### 11.5. Melhor leitura do código

A separação de responsabilidades torna o projeto mais fácil de entender, revisar e apresentar.

---

## 12. Possíveis Melhorias Futuras

Apesar de o projeto atender à proposta, algumas melhorias poderiam ser realizadas futuramente:

* Separar o SCSS por componente;
* Criar arquivos SVG individuais para os ícones;
* Substituir imagens externas por assets locais;
* Adicionar testes automatizados;
* Criar animações mais suaves;
* Implementar navegação real entre telas;
* Melhorar suporte completo à acessibilidade;
* Adicionar controle de tema;
* Integrar com uma API simulada;
* Criar uma versão com dados dinâmicos.

---

## 13. Conclusão

A componentização aplicada no projeto permitiu transformar uma interface visual complexa em uma estrutura organizada, reutilizável e de fácil manutenção.

Cada parte da interface foi separada de acordo com sua responsabilidade, garantindo melhor legibilidade e melhor controle sobre o comportamento visual.

O resultado é uma aplicação front-end moderna, responsiva e estruturada, alinhada aos critérios técnicos do projeto de Web Design.
