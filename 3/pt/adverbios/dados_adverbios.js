/* =========================================================================
   BASE DE DADOS - ADVÉRBIOS (3.º ANO) - REVISADA E SIMPLIFICADA
   ========================================================================= */

const dbAdverbios = {
  // NÍVEL 1: Pool de advérbios para triagem nas 3 subclasses do 3.º ano
  nivel1: [
    // Advérbios de Afirmação
    { palavra: "sim", tipo: "afirmacao", dica: "O 'sim' serve para confirmar!" },

    // Advérbios de Negação
    { palavra: "não", tipo: "negacao", dica: "O 'não' é o principal advérbio para negar uma ação!" },

    // Advérbios de Quantidade e Grau
    { palavra: "bastante", tipo: "quantidade", dica: "Indica uma quantidade abundante ou em bom grau!" },
    { palavra: "mais", tipo: "quantidade", dica: "Indica uma quantidade ou grau superior." },
    { palavra: "menos", tipo: "quantidade", dica: "Indica uma quantidade ou grau inferior." },
    { palavra: "muito", tipo: "quantidade", dica: "Diz que algo existe em grande quantidade ou intensidade." },
    { palavra: "pouco", tipo: "quantidade", dica: "Indica uma quantidade ou intensidade reduzida." },
    { palavra: "quase", tipo: "quantidade", dica: "Indica que faltou muito pouco para atingir a quantidade total." },
    { palavra: "demais", tipo: "quantidade", dica: "Significa em excesso ou de forma exagerada." },
    { palavra: "demasiado", tipo: "quantidade", dica: "Diz que a quantidade ou o grau ultrapassou o limite normal." },
    { palavra: "tão", tipo: "quantidade", dica: "Serve para intensificar a qualidade de outra palavra." }
  ],

  // NÍVEL 2: Diários curtos com lacunas (100% ajustados à gramática oficial)
  nivel2: [
    {
      template: "O Tomás {blank0} gosta de legumes.<br><br>Por isso, ele comeu {blank1} ao almoço, mas comeu {blank2} fruta.",
      corretos: { blank0: "não", blank1: "pouco", blank2: "bastante" },
      opcoes: ["não", "pouco", "bastante", "sim", "tão"],
      dicas: {
        não: "Nega o gosto do Tomás por legumes (Negação).",
        pouco: "Indica uma quantidade reduzida de comida (Quantidade e Grau).",
        bastante: "Indica uma boa quantidade de fruta (Quantidade e Grau)."
      }
    },
    {
      template: "A professora disse que {blank0}, ficou feliz com o nosso trabalho porque {blank1} fizemos barulho.<br><br>O dia correu {blank2} bem para todos.",
      corretos: { blank0: "sim", blank1: "não", blank2: "muito" },
      opcoes: ["sim", "não", "muito", "pouco", "menos"],
      dicas: {
        sim: "Confirma a resposta positiva da professora (Afirmação).",
        não: "Indica que a ação de fazer barulho não aconteceu (Negação).",
        muito: "Intensifica a palavra 'bem' (Quantidade e Grau)."
      }
    },
    {
      template: "A Rita {blank0}, queria ir à praia hoje, mas {blank1} conseguiu porque choveu {blank2}.",
      corretos: { blank0: "sim", blank1: "não", blank2: "muito" },
      opcoes: ["sim", "não", "muito", "pouco", "quase"], 
      dicas: {
        sim: "Confirma o desejo inicial da Rita (Afirmação).",
        não: "Mostra que a ação foi impedida pela chuva (Negação).",
        muito: "Indica uma grande quantidade de chuva (Quantidade e Grau)."
      }
    },
    {
      template: "O cão do João {blank0} quis comer a ração.<br><br>Ele {blank1} bebeu porque estava {blank2} doente.",
      corretos: { blank0: "não", blank1: "pouco", blank2: "muito" },
      opcoes: ["não", "pouco", "muito", "sim", "bastante"], 
      dicas: {
        não: "Mostra que o cão recusou a comida (Negação).",
        pouco: "Indica uma quantidade reduzida (Quantidade e Grau).",
        muito: "Aumenta a intensidade da palavra 'doente' (Quantidade e Grau)."
      }
    },
    {
      template: "A Rita disse que {blank0}, vai à praia amanhã.<br><br>Ela gosta {blank1} do calor e {blank2} se esquece do protetor solar.",
      corretos: { blank0: "sim", blank1: "bastante", blank2: "não" },
      opcoes: ["sim", "bastante", "não", "muito", "pouco"],
      dicas: {
        sim: "Confirma a afirmação de que ela vai à praia (Afirmação).",
        bastante: "Ela gosta do calor em grande quantidade (Quantidade e Grau).",
        não: "Garante que a ação de esquecer não acontece (Negação)."
      }
    },
    {
      template: "O João correu {blank0} rápido no treino!<br><br>Ele {blank1} venceu a corrida, mas ficou {blank2} cansado no final.",
      corretos: { blank0: "tão", blank1: "não", blank2: "muito" },
      opcoes: ["tão", "não", "muito", "sim", "menos"],
      dicas: {
        tão: "Intensifica a velocidade dele (Quantidade e Grau).",
        não: "Diz que ele não conseguiu alcançar a vitória (Negação).",
        muito: "Indica que o cansaço foi grande (Quantidade e Grau)."
      }
    },
    {
      template: "A Maria disse que {blank0}, concorda com a tua ideia.<br><br>Ela explicou que {blank1} faz batota e gosta {blank2} de jogar limpo.",
      corretos: { blank0: "sim", blank1: "não", blank2: "bastante" },
      opcoes: ["sim", "não", "bastante", "menos", "quase"],
      dicas: {
        sim: "Confirma a concordância da Maria (Afirmação).",
        não: "Nega categoricamente a ação de fazer batota (Negação).",
        bastante: "Indica que ela gosta muito de jogar limpo (Quantidade e Grau)."
      }
    },
    {
      template: "Hoje o sol {blank0} brilhou no céu.<br><br>Nós estivemos {blank1} tempo no jardim porque estava {blank2} frio.",
      corretos: { blank0: "não", blank1: "pouco", blank2: "demasiado" },
      opcoes: ["não", "pouco", "demasiado", "sim", "mais"],
      dicas: {
        não: "Diz que o sol esteve escondido (Negação).",
        pouco: "Indica que o tempo no jardim foi curto (Quantidade e Grau).",
        demasiado: "Indica que o frio era excessivo (Quantidade e Grau)."
      }
    },
    {
      template: "O bolo de chocolate da avó ficou {blank0} saboroso.<br><br>O meu primo comeu {blank1} e {blank2} deixou nenhum pedaço.",
      corretos: { blank0: "muito", blank1: "demais", blank2: "não" },
      opcoes: ["muito", "demais", "não", "sim", "menos"],
      dicas: {
        muito: "Indica um grande grau de sabor no bolo (Quantidade e Grau).",
        demais: "Indica que ele comeu em exagero (Quantidade e Grau).",
        não: "Indica que o prato ficou vazio (Negação)."
      }
    },
    {
      template: "Eu respondi que {blank0}, irei visitar a Madeira este ano.<br><br>Quero {blank1} ver o mar e prometo que {blank2} me esqueço da câmara.",
      corretos: { blank0: "sim", blank1: "muito", blank2: "não" },
      opcoes: ["sim", "muito", "não", "mais", "pouco"],
      dicas: {
        sim: "Confirma a resposta afirmativa sobre a viagem (Afirmação).",
        muito: "A vontade de ver o mar é enorme (Quantidade e Grau).",
        não: "Nega a possibilidade de esquecimento (Negação)."
      }
    },
    {
      template: "O Pedro estuda {blank0} para os testes.<br><br>Ele {blank1} tira notas baixas porque se prepara {blank2} bem.",
      corretos: { blank0: "bastante", blank1: "não", blank2: "muito" },
      opcoes: ["bastante", "não", "muito", "quase", "menos"],
      dicas: {
        bastante: "Ele estuda em grande quantidade (Quantidade e Grau).",
        não: "Nega a existência de notas baixas (Negação).",
        muito: "Indica que ele se prepara extremamente bem (Quantidade e Grau)."
      }
    },
    {
      template: "O quarto estava {blank0} quente.<br><br>Nós aproximámo-nos {blank1} da janela e mesmo assim {blank2} conseguimos dormir.",
      corretos: { blank0: "demasiado", blank1: "mais", blank2: "não" },
      opcoes: ["demasiado", "mais", "não", "sim", "pouco"],
      dicas: {
        demasiado: "O calor estava num nível exagerado (Quantidade e Grau).",
        mais: "Indica aproximação em maior grau (Quantidade e Grau).",
        não: "Indica que a tentativa de dormir falhou (Negação)."
      }
    },
    {
      template: "O teste de Matemática foi {blank0} difícil do que esperava.<br><br>Eu estudei {blank1} e, por isso, {blank2} tive dificuldades.",
      corretos: { blank0: "menos", blank1: "bastante", blank2: "não" },
      opcoes: ["menos", "bastante", "não", "sim", "tão"],
      dicas: {
        menos: "Indica um menor grau de dificuldade (Quantidade e Grau).",
        bastante: "Indica que o estudo foi abundante (Quantidade e Grau).",
        não: "Confirma que não existiram problemas no teste (Negação)."
      }
    }
  ]
};