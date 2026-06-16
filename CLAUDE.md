# Portal Professor Cassiano

Portal de materiais de aula para ensino médio, em HTML/CSS/JavaScript puro,
pensado para ser hospedado no GitHub Pages (somente arquivos estáticos — sem
PHP, sem banco de dados, sem build).

## Arquitetura: três níveis

1. **Portal** (`index.html`) — página principal. Lista as disciplinas.
2. **Disciplina** (`disciplinas/<id>.html`) — lista os assuntos daquela disciplina.
3. **Assunto** (`disciplinas/<assunto>.html`) — o conteúdo da aula em si.

Fluxo de navegação: Portal → Disciplina → Assunto.

## Estrutura de arquivos

```
portal/
├── CLAUDE.md                 ← este arquivo
├── index.html                ← página principal (lista disciplinas)
├── assets/
│   ├── style.css             ← TODO o visual do portal (tokens de cor, layout, componentes)
│   ├── shell.js              ← injeta cabeçalho + rodapé + proteção anti-cópia
│   └── disciplinas.js        ← DADOS: lista de disciplinas e assuntos (única fonte de conteúdo)
└── disciplinas/
    ├── sistemas-operacionais.html   ← página da disciplina (gerada a partir de disciplinas.js)
    └── sistemas-numeracao.html      ← assunto: tem layout próprio (sidebar interna) + interativos
```

## Regra de ouro: onde editar o quê

- **Adicionar/alterar conteúdo (disciplinas e assuntos):** editar SOMENTE `assets/disciplinas.js`.
  O arquivo tem um array `window.PORTAL_DISCIPLINAS`. Cada disciplina é um objeto com
  `id`, `nome`, `descricao`, `cor`, `pagina` e uma lista `assuntos`. Cada assunto tem
  `nome`, `descricao`, `cor`, `pagina` (opcional) e `status` ("live" ou "soon").
- **Mudar o visual de todo o site:** editar `assets/style.css`. As cores ficam em `:root`
  como variáveis (--bin, --oct, --dec, --hex são as cores temáticas; --ink, --paper etc.
  são neutros). Mudar ali muda em todas as páginas.
- **Mudar cabeçalho, rodapé ou a proteção anti-cópia:** editar `assets/shell.js`.

## Como cada página carrega o shell

Toda página inclui, antes de `</body>`:
```html
<script src="CAMINHO/assets/disciplinas.js"></script>
<script src="CAMINHO/assets/shell.js" data-base="CAMINHO/"></script>
```
O `data-base` é o caminho até a raiz do portal:
- `index.html` (raiz): `data-base=""`
- páginas em `disciplinas/`: `data-base="../"`

As páginas que usam header/footer do portal têm `<div id="site-header"></div>`
logo após `<body>` e `<div id="site-footer"></div>` antes de `</body>`.
O shell.js substitui essas divs pelo HTML real.

## Proteção anti-cópia

Implementada em `shell.js`: bloqueia menu de contexto, seleção de texto, Ctrl+C/X,
Ctrl+U (ver fonte), Ctrl+S (salvar) e arrastar. Os campos `<input>`/`<textarea>`
(exercícios) continuam funcionando — há exceção explícita no CSS (`.no-copy input`)
e no JS (função `isInField`).
IMPORTANTE: é atrito contra cópia casual, não segurança real. Quem abrir o DevTools
ainda acessa o conteúdo. Isso é uma limitação de qualquer página web, não um bug.

## A página de Sistemas de Numeração (caso especial)

`disciplinas/sistemas-numeracao.html` NÃO usa o header/footer do portal. Ela tem
layout próprio: uma sidebar fixa de navegação interna (seções 00–05) com scrollspy,
e vários componentes interativos em JavaScript puro:
- Odômetro multibase (troca base 2/8/10/16, conta com +1/−1)
- Calculadora de bits clicáveis (liga/desliga, soma decimal)
- Conversor universal (decimal → 4 bases, com decomposição binária)
- 8 exercícios com correção automática

Ela carrega o `shell.js` apenas para a proteção anti-cópia (o shell detecta a
ausência das divs de header/footer e não quebra nada). Os estilos dela são
embutidos no próprio arquivo (`<style>` no head), além de importar o style.css
compartilhado. Ao mexer nela, preservar a sidebar e os interativos.

## Convenções

- Português do Brasil em todo o conteúdo.
- Tom didático, devagar, com analogias (ex.: odômetro para valor posicional).
- Sem dependências externas além das fontes do Google Fonts.
- Sem frameworks. Nada de build. Abrir o HTML no navegador tem que funcionar direto.
- Para testar localmente: abrir `index.html` no navegador, ou rodar um servidor
  simples (ex.: extensão Live Server do VS Code) para os caminhos relativos
  funcionarem igual ao GitHub Pages.

## Próximos passos prováveis

- Adicionar mais assuntos em Sistemas Operacionais (gerência de memória, processos,
  sistemas de arquivos) — começar com `status: "soon"` em disciplinas.js.
- Adicionar novas disciplinas (copiar o bloco comentado de exemplo em disciplinas.js
  e criar o arquivo da disciplina em `disciplinas/`, espelhando sistemas-operacionais.html
  e trocando a constante `DISC_ID`).
