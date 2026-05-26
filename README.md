# Interface Mobile de Corrida — Projeto de Web Design

Projeto desenvolvido para a disciplina de **Web Design** do curso de **Engenharia da Computação**, com o objetivo de replicar, em formato de página web responsiva, duas telas mobile de um aplicativo de corrida.

A interface foi construída com foco em fidelidade visual, componentização, organização de código, responsividade e interações básicas.

---

## 1. Objetivo do Projeto

O objetivo principal é reproduzir uma interface mobile com duas telas:

1. **Tela de solicitação de nova corrida**
   - Perfil do motorista;
   - Menu de ações do perfil;
   - Card de solicitação de corrida;
   - Botões de aceitar ou recusar corrida.

2. **Tela de listagem de corridas**
   - Cabeçalho com título;
   - Calendário interativo;
   - Cards com detalhes das rotas;
   - Informações de origem, destino, horários, distância, ícones e passageiros.

O projeto simula visualmente duas telas de aplicativo mobile dentro de uma página web responsiva.

---

## 2. Tecnologias Utilizadas

O projeto foi implementado com as seguintes tecnologias:

- **React**
- **TypeScript**
- **Vite**
- **SASS/SCSS**
- **HTML5**
- **CSS3**
- **Flexbox**
- **CSS Grid**
- **Componentização com React**
- **Ícones SVG customizados**

---

## 3. Justificativa da Stack

A stack foi escolhida por permitir uma implementação moderna, organizada e componentizada.

### React

Foi utilizado para criar a interface em componentes reutilizáveis, facilitando a manutenção e a separação de responsabilidades.

### TypeScript

Foi utilizado para adicionar tipagem estática ao projeto, reduzindo erros e melhorando a clareza dos dados manipulados pelos componentes.

### Vite

Foi escolhido por ser uma ferramenta moderna, rápida e simples para desenvolvimento front-end com React.

### SASS/SCSS

Foi utilizado para organizar melhor os estilos, permitindo o uso de variáveis, agrupamento de regras e separação visual mais limpa do CSS.

---

## 4. Estrutura de Pastas

```txt
interface-mobile-corrida/
├─ package.json
├─ index.html
├─ tsconfig.json
├─ vite.config.ts
├─ README.md
├─ relatorio-componentizacao.md
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ estilos/
│  │  ├─ global.scss
│  │  ├─ variaveis.scss
│  │  └─ responsivo.scss
│  ├─ dados/
│  │  └─ dadosCorridas.ts
│  ├─ tipos/
│  │  └─ tiposCorrida.ts
│  └─ componentes/
│     ├─ Icone.tsx
│     ├─ MolduraCelular.tsx
│     ├─ Avatar.tsx
│     ├─ BotaoAcaoPerfil.tsx
│     ├─ CartaoRota.tsx
│     ├─ CalendarioCorrida.tsx
│     ├─ TelaSolicitacaoCorrida.tsx
│     └─ TelaCorridas.tsx
```

---

## 5. Componentes Principais

### `MolduraCelular`

Responsável por simular a estrutura visual de um smartphone, incluindo:

* Moldura arredondada;
* Sombra externa;
* Barra de status;
* Área interna da tela.

### `TelaSolicitacaoCorrida`

Representa a primeira tela da referência visual. Ela exibe:

* Cabeçalho com menu e notificação;
* Perfil do motorista;
* Botões de ações;
* Card de nova solicitação de corrida.

### `TelaCorridas`

Representa a segunda tela da referência visual. Ela exibe:

* Cabeçalho azul;
* Botão de voltar;
* Botão de filtros;
* Título da tela;
* Calendário interativo;
* Lista de corridas.

### `CalendarioCorrida`

Componente responsável pela exibição dos dias do calendário. Possui interação para alterar o dia selecionado.

### `CartaoRota`

Componente reutilizável para representar uma rota de corrida. É usado tanto na tela de solicitação quanto na tela de listagem de corridas.

### `BotaoAcaoPerfil`

Representa os botões de ação do perfil:

* Ride;
* Message;
* Rating;
* My feed.

### `Avatar`

Componente reutilizável para exibir imagens de motorista e passageiros.

### `Icone`

Componente centralizado para renderização dos ícones SVG usados na interface.

---

## 6. Funcionalidades Implementadas

O projeto contém as seguintes funcionalidades:

* Exibição de duas telas mobile lado a lado;
* Simulação visual de smartphones;
* Componentes reutilizáveis;
* Calendário com alteração de estado ao clicar nos dias;
* Botão `Accept` com estado visual de clique;
* Layout responsivo para telas menores;
* Estilização com SASS;
* Uso de variáveis de cor, sombra e fonte;
* Ícones SVG criados diretamente no código;
* Dados centralizados em arquivo separado;
* Tipagem dos dados com TypeScript.

---

## 7. Como Executar o Projeto

### 7.1. Instalar as dependências

```bash
npm install
```

### 7.2. Rodar o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse no navegador:

```txt
http://localhost:5173/
```

---

## 8. Como Gerar Build de Produção

```bash
npm run build
```

O projeto será gerado na pasta:

```txt
dist/
```

---

## 9. Como Visualizar o Build Localmente

```bash
npm run preview
```

---

## 10. Critérios Técnicos Atendidos

### Precisão Visual

A interface foi construída buscando fidelidade em:

* Cores;
* Tipografia;
* Espaçamentos;
* Tamanho dos cards;
* Arredondamento das bordas;
* Sombras;
* Hierarquia visual;
* Organização dos elementos.

### Qualidade do Código

O código foi estruturado com:

* Componentes reutilizáveis;
* Separação entre dados, tipos, componentes e estilos;
* Tipagem com TypeScript;
* Organização clara de arquivos;
* Evitação de duplicação desnecessária.

### Uso de Ferramentas de Engenharia

Foram utilizadas ferramentas modernas de front-end:

* React;
* TypeScript;
* Vite;
* SASS;
* Componentização;
* Responsividade;
* Controle de estado com `useState`.

---

## 11. Interações Implementadas

### Calendário

Ao clicar em um dia do calendário, o destaque visual é atualizado para o dia selecionado.

### Botão Accept

O botão `Accept` possui estado visual após o clique, simulando a aceitação da corrida.

---

## 12. Convenções de Código

Para manter o código coerente com a proposta do projeto, foram adotadas as seguintes convenções:

* Tipos centralizados em `tiposCorrida.ts`;
* Dados mockados centralizados em `dadosCorridas.ts`;
* Estilos globais organizados em `global.scss`;
* Variáveis de estilo organizadas em `variaveis.scss`.

---

## 13. Autores

Projeto desenvolvido em grupo para a disciplina de Web Design.
Ana Carolina Silva Borges
Marielle Rodrigues Vaz
Stéphany Lima Vital

---

## 14. Conclusão

O projeto entrega uma replicação funcional e responsiva de uma interface mobile, aplicando conceitos importantes de desenvolvimento front-end moderno, como componentização, organização de estilos, tipagem, responsividade e interatividade básica.

A implementação busca unir fidelidade visual com boas práticas de organização de código.