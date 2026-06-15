/* =========================================================================
   BASE DE DADOS - ADVÉRBIOS (3.º ANO)
   ========================================================================= */

const dbAdverbios = {
  // NÍVEL 1: Pool de 18 advérbios para triagem simultânea nas 3 subclasses
  nivel1: [
    // Advérbios de Afirmação
    { palavra: "sim", tipo: "afirmacao", dica: "O 'sim' serve para confirmar!" },
    { palavra: "certamente", tipo: "afirmacao", dica: "Diz que temos certeza absoluta de algo." },
	{ palavra: "realmente", tipo: "afirmacao", dica: "Mostra que algo é verdadeiro ou que aconteceu de verdade." },
	{ palavra: "positivamente", tipo: "afirmacao", dica: "Significa aprovar algo, dizer que sim ou confirmar de forma certa." },

    // Advérbios de Negação
    { palavra: "não", tipo: "negacao", dica: "O 'não' serve para negar!" },
    { palavra: "nunca", tipo: "negacao", dica: "Indica que uma ação não acontece nenhuma vez." },
    { palavra: "jamais", tipo: "negacao", dica: "Uma negação forte e absoluta que dura para sempre." },
	{ palavra: "nem", tipo: "negacao", dica: "Significa 'também não' e serve para juntar duas ideias negativas." },

    // Advérbios de Quantidade e Grau
    { palavra: "bastante", tipo: "quantidade", dica: "Indica uma quantidade abundante ou em bom grau!" },
    { palavra: "mais", tipo: "quantidade", dica: "Indica uma quantidade ou grau superior." },
    { palavra: "menos", tipo: "quantidade", dica: "Indica uma quantidade ou grau inferior." },
    { palavra: "muito", tipo: "quantidade", dica: "Diz que algo existe em grande quantidade ou intensidade." },
    { palavra: "pouco", tipo: "quantidade", dica: "Indica uma quantidade ou intensidade reduzida." },
    { palavra: "quanto", tipo: "quantidade", dica: "Usado para relacionar ou perguntar a quantidade." },
    { palavra: "quase", opacity: "0.3", tipo: "quantidade", dica: "Indica que faltou muito pouco para atingir a quantidade total." },
    { palavra: "excessivamente", tipo: "quantidade", dica: "Diz que algo é feito em exagero, em excesso." },
    { palavra: "demais", tipo: "quantidade", dica: "Significa em excesso ou de forma exagerada." },
    { palavra: "demasiado", tipo: "quantidade", dica: "Diz que a quantidade ou o grau ultrapassou o limite normal. " },
    { palavra: "tão", tipo: "quantidade", dica: "Serve para intensificar a qualidade de outra palavra." }
  ],

  // NÍVEL 2: Pool de 13 diários curtos. Sorteia 5 aleatórios com 2 distratores cada
  nivel2: [
    {
      template: "O Tomás {blank0} come sopa ao almoço porque {blank1} gosta de legumes.<br><br>Mas, hoje, ele comeu {blank2}.",
      corretos: { blank0: "nunca", blank1: "não", blank2: "muito" },
      opcoes: ["nunca", "não", "muito", "sim", "tão"], // 3 certas + 2 distratores
      dicas: {
        nunca: "Indica um hábito que ele não faz nenhuma vez (Negação). ",
        não: "Completa a negação da frase: 'ele... gosta'. ",
        muito: "Indica que a quantidade de comida foi grande (Quantidade e Grau). "
      }
    },
	{
	  template: "A professora avaliou {blank0} a nossa atitude na aula porque {blank1} fizemos barulho.<br><br>O dia correu {blank2} bem para todos.",
	  corretos: { blank0: "positivamente", blank1: "não", blank2: "muito" },
	  opcoes: ["positivamente", "não", "muito", "jamais", "talvez"],
	  dicas: {
		positivamente: "Confirma que a avaliação da professora foi boa e afirmativa (Afirmação). ",
		não: "Indica que a ação de fazer barulho não aconteceu de maneira nenhuma (Negação). ",
		muito: "Intensifica a palavra 'bem', mostrando o grande nível de sucesso do dia (Quantidade e Grau). "
	  }
	},
	{
	  template: "A Rita {blank0} queria ir à praia hoje, mas {blank1} conseguiu porque começou a chover.<br><br>Ela ficou {blank2} triste.",
	  corretos: { blank0: "realmente", blank1: "não", blank2: "muito" },
	  opcoes: ["realmente", "não", "muito", "sim", "quase"], 
	  dicas: {
		realmente: "Confirma com toda a certeza o desejo que a Rita tinha (Afirmação). ",
		não: "Mostra que a ação foi impedida por causa da chuva (Negação). ",
		muito: "Intensifica a palavra 'triste', mostrando que a tristeza era grande (Quantidade e Grau). "
	  }
	},
	{
	  template: "O cão do João {blank0} quis comer a ração, {blank1} beber a água.<br><br>Ele estava {blank2} doente.",
	  corretos: { blank0: "não", blank1: "nem", blank2: "muito" },
	  opcoes: ["não", "nem", "muito", "sim", "pouco"], 
	  dicas: {
		não: "Mostra que o cão recusou a primeira coisa, a ração (Negação). ",
		nem: "Significa 'também não' e junta a segunda coisa que o cão não quis fazer (Negação). ",
		muito: "Aumenta a intensidade da palavra 'doente', mostrando que a situação era grave (Quantidade e Grau). "
	  }
	},
    {
      template: "A Rita {blank0} vai à praia amanhã.<br><br>Ela gosta {blank1} do calor e {blank2} se esquece de colocar protetor solar.",
      corretos: { blank0: "certamente", blank1: "bastante", blank2: "nunca" },
      opcoes: ["certamente", "bastante", "nunca", "não", "pouco"],
      dicas: {
        certamente: "Indica uma certeza absoluta de que ela vai à praia (Afirmação). ",
        bastante: "Ela gosta do calor em grande quantidade (Quantidade e Grau). ",
        nunca: "Ela tem muito cuidado e não se esquece nenhuma vez (Negação). "
      }
    },
    {
      template: "O João correu {blank0} rápido no treino!<br><br>Ele {blank1} venceu a corrida, mas ficou {blank2} cansado no final.",
      corretos: { blank0: "tão", blank1: "não", blank2: "muito" },
      opcoes: ["tão", "não", "muito", "sim", "menos"],
      dicas: {
        tão: "Intensifica a velocidade dele: ele correu... rápido! ",
        não: "Diz que ele não conseguiu alcançar a vitória (Negação). ",
        muito: "Indica que o esforço foi grande e ele ficou cansado (Quantidade e Grau). "
      }
    },
    {
      template: "A Maria {blank0} concorda com a tua ideia.<br><br>Ela explicou que {blank1} fará batota e que gosta {blank2} de jogar limpo.",
      corretos: { blank0: "certamente", blank1: "nunca", blank2: "bastante" },
      opcoes: ["certamente", "nunca", "bastante", "não", "menos"],
      dicas: {
        certamente: "Dá uma garantia absoluta e certeza de que ela concorda (Afirmação). ",
        nunca: "Indica que ela não fará batota nenhuma vez (Negação). ",
        bastante: "Ela gosta muito de jogar limpo (Quantidade e Grau). "
      }
    },
    {
      template: "Hoje o sol {blank0} brilhou no céu.<br><br>Nós estivemos {blank1} tempo no jardim porque estava {blank2} frio.",
      corretos: { blank0: "não", blank1: "pouco", blank2: "demasiado" },
      opcoes: ["não", "pouco", "demasiado", "certamente", "mais"],
      dicas: {
        não: "Completa a frase dizendo que o sol esteve escondido (Negação). ",
        pouco: "Como estava frio, o tempo no jardim foi curto (Quantidade e Grau). ",
        demasiado: "O frio era em excesso, em grande quantidade (Quantidade e Grau). "
      }
    },
    {
      template: "O bolo de chocolate da avó ficou {blank0} saboroso.<br><br>O meu primo comeu {blank1} e {blank2} deixou nenhum pedaço.",
      corretos: { blank0: "muito", blank1: "demais", blank2: "não" },
      opcoes: ["muito", "demais", "não", "sim", "menos"],
      dicas: {
        muito: "Indica que o bolo estava em grande grau de sabor (Quantidade e Grau). ",
        demais: "Coloca-se após o verbo 'comeu' para indicar exagero (Quantidade e Grau). ",
        não: "Indica que o prato ficou totalmente vazio (Negação). "
      }
    },
    {
      template: "Eu {blank0} irei visitar a Madeira este ano.<br><br>Quero {blank1} ver o mar e prometo que {blank2} esquecerei a câmara.",
      corretos: { blank0: "certamente", blank1: "muito", blank2: "não" },
      opcoes: ["certamente", "muito", "nunca", "não", "pouco"],
      dicas: {
        certamente: "Dá uma garantia absoluta da minha viagem (Afirmação). ",
        muito: "A minha vontade de ver o mar é enorme (Quantidade e Grau). ",
        não: "Vou trazer muitas memórias e não me vou esquecer de nada (Negação). "
      }
    },
    {
      template: "O Pedro estuda {blank0} para os testes.<br><br>Ele {blank1} tira notas baixas porque se prepara {blank2} bem.",
      corretos: { blank0: "bastante", blank1: "nunca", blank2: "muito" },
      opcoes: ["bastante", "nunca", "quase", "muito", "menos"],
      dicas: {
        bastante: "Ele estuda em grande quantidade (Quantidade e Grau). ",
        nunca: "O Pedro é muito empenhado e não tem negativas nenhuma vez (Negação). ",
        quase: "Ele prepara-se de forma muito próxima da perfeição (Quantidade e Grau). "
      }
    },
    {
	  template: "O quarto estava {blank0} quente.<br><br>Nós aproximámo-nos {blank1} da janela e mesmo assim {blank2} conseguimos dormir.",
	  corretos: { blank0: "excessivamente", blank1: "mais", blank2: "não" },
	  opcoes: ["excessivamente", "mais", "não", "sim", "pouco"],
	  dicas: {
		excessivamente: "O calor estava num nível exagerado, acima do suportável (Quantidade e Grau).",
		mais: "Aproximámo-nos numa quantidade maior da janela em busca de ar (Quantidade e Grau).",
		não: "Indica que o esforço foi em vão e o sono foi impossível devido ao calor (Negação)."
      }
    },
    {
      template: "O teste de Matemática foi {blank0} difícil do que esperava.<br><br>Eu estudei {blank1} e, por isso, {blank2} tive dificuldades.",
      corretos: { blank0: "menos", blank1: "tanto", blank2: "não" },
      opcoes: ["menos", "tanto", "não", "sim", "nunca"],
      dicas: {
        menos: "Foi um teste mais fácil, com menor grau de dificuldade (Quantidade e Grau). ",
        tanto: "Indica que estudei muito, em grande quantidade (Quantidade e Grau). ",
        não: "Completa dizendo que fiz o teste sem qualquer problema (Negação). "
      }
    }
  ]
};