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
    id: "sistemas-de-informacao",
    nome: "Sistemas de Informação",
    descricao: "Como o computador organiza, processa e representa a informação por dentro.",
    cor: "bin",
    pagina: "disciplinas/sistemas-de-informacao.html",
    assuntos: [
      {
        nome: "Sistemas de Numeração",
        descricao: "Binário, decimal, octal e hexadecimal — com odômetro, calculadora de bits e exercícios.",
        cor: "bin",
        pagina: "disciplinas/sistemas-numeracao.html",
        status: "live"
      },
      {
        nome: "Gerência de Memória",
        descricao: "Memória RAM, endereçamento, paginação e segmentação — como o sistema gerencia o espaço disponível.",
        cor: "oct",
        status: "soon"
      },
      {
        nome: "Processos e Escalonamento",
        descricao: "Como o sistema operacional gerencia múltiplos programas ao mesmo tempo e decide a ordem de execução.",
        cor: "dec",
        status: "soon"
      },
      {
        nome: "Sistemas de Arquivos",
        descricao: "Estrutura de diretórios, permissões, FAT, NTFS e ext4 — como o computador organiza seus dados em disco.",
        cor: "hex",
        status: "soon"
      }
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
