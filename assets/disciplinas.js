/* ===================================================================
   PORTAL PROFESSOR CASSIANO — dados das disciplinas
   ===================================================================
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA ADICIONAR CONTEÚDO.

   Para adicionar uma DISCIPLINA nova: copie um bloco { ... } da lista
   e ajuste os campos. Para adicionar um ASSUNTO dentro de uma disciplina,
   acrescente um item na lista "assuntos" dela.

   Campos da disciplina:
     id        -> identificador curto, sem espaços (usado no link)
     nome      -> título exibido
     descricao -> frase curta no cartão
     cor       -> cor da faixa do cartão (use as variáveis: bin, oct, dec, hex)
     pagina    -> arquivo da disciplina dentro de /disciplinas/
     assuntos  -> lista de aulas/temas

   Campos do assunto:
     nome      -> título do assunto
     descricao -> frase curta
     cor       -> cor da faixa
     pagina    -> caminho do arquivo do assunto (a partir da raiz), ou
     status    -> "live" (pronto) ou "soon" (em breve)
   =================================================================== */

window.PORTAL_DISCIPLINAS = [
  {
    id: "sistemas-operacionais",
    nome: "Sistemas Operacionais",
    descricao: "Como o computador organiza, processa e representa a informação por dentro.",
    cor: "bin",
    pagina: "disciplinas/sistemas-operacionais.html",
    assuntos: [
      {
        nome: "Sistemas de Numeração",
        descricao: "Binário, decimal, octal e hexadecimal — com odômetro, calculadora de bits e exercícios.",
        cor: "bin",
        pagina: "disciplinas/sistemas-numeracao.html",
        status: "live"
      },
      {
        nome: "Exercícios para Entrega",
        descricao: "Resolva as questões de sistemas de numeração e envie os resultados diretamente ao professor.",
        cor: "dec",
        pagina: "disciplinas/exercicios-numeracao.html",
        status: "live"
      },
      {
        nome: "Exercícios Aleatórios",
        descricao: "Banco de 50 questões, 10 por tentativa, sorteadas a cada vez. Ideal para reforçar o conteúdo.",
        cor: "oct",
        pagina: "disciplinas/exercicios-aleatorios.html",
        status: "live"
      }
      // Próximos assuntos desta disciplina entram aqui. Exemplo:
      // { nome:"Gerência de Memória", descricao:"...", cor:"oct", status:"soon" }
    ]
  }

  // Próximas disciplinas entram aqui. Exemplo:
  // {
  //   id:"redes", nome:"Redes de Computadores",
  //   descricao:"...", cor:"hex",
  //   pagina:"disciplinas/redes.html",
  //   assuntos:[ { nome:"...", descricao:"...", cor:"hex", status:"soon" } ]
  // }
];
