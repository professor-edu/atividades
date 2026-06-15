/* =========================================================================
   BASE DE DADOS - SINTAXE: SUJEITO, PREDICADO E GRUPOS (3.º ANO) [1.1.1]
   ========================================================================= */

const dbSintaxe = {
  // NÍVEL 1: Cais da Sintaxe. Triagem rápida de GN/Sujeito vs GV/Predicado [1.1.1]
  nivel1: [
    // Grupo Nominal (Sujeito)
    { palavra: "O capitão", tipo: "gn", dica: "É quem realiza a ação (nome principal). É o Grupo Nominal/Sujeito! ⚓" },
    { palavra: "A tempestade forte", tipo: "gn", dica: "É o sujeito da frase. É um Grupo Nominal! ⚓" },
    { palavra: "Os marinheiros", tipo: "gn", dica: "É o sujeito no plural. É um Grupo Nominal! ⚓" },
    { palavra: "O pequeno barco", tipo: "gn", dica: "Tem como palavra principal o nome 'barco'. É um Grupo Nominal! ⚓" },
    { palavra: "Nós", tipo: "gn", dica: "O pronome pessoal desempenha a função de sujeito. É um Grupo Nominal! ⚓" },
    { palavra: "Os peixes coloridos", tipo: "gn", dica: "É o sujeito em redor do nome 'peixes'. É um Grupo Nominal! ⚓" },
    { palavra: "A pequena marinheira", tipo: "gn", dica: "Tem o nome principal 'marinheira'. É o Grupo Nominal/Sujeito! ⚓" },
    { palavra: "Tu e eu", tipo: "gn", dica: "Representa as pessoas que fazem a ação. É um Grupo Nominal! ⚓" },
    { palavra: "As gaivotas", tipo: "gn", dica: "Quem realiza a ação no céu. É o Grupo Nominal/Sujeito! ⚓" },

    // Grupo Verbal (Predicado)
    { palavra: "navega no alto mar", tipo: "gv", dica: "Começa com o verbo 'navega'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "bateu contra o navio", tipo: "gv", dica: "Inicia com o verbo 'bateu'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "puxam as cordas", tipo: "gv", dica: "Inicia com o verbo de ação 'puxam'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "desliza nas ondas", tipo: "gv", dica: "Começa com o verbo 'desliza'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "vimos os golfinhos", tipo: "gv", dica: "Inicia com o verbo de ação 'vimos'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "saltam na água", tipo: "gv", dica: "Inicia com o verbo 'saltam'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "escreve no diário", tipo: "gv", dica: "Começa com o verbo 'escreve'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "pescamos o jantar", tipo: "gv", dica: "Inicia com o verbo de ação 'pescam'. É o Grupo Verbal/Predicado! ⚓" },
    { palavra: "voam alto", tipo: "gv", dica: "Começa com o verbo 'voam'. É o Grupo Verbal/Predicado! ⚓" }
  ],

  // NÍVEL 2 REFEITO: Pool de 5 frases originais para arrumação completa de GN e GV [1.1.1]
  nivel2: [
    {
      id: "textoA",
      sujeito: "O jovem marinheiro",
      predicado: "limpa o convés do navio todos os dias.",
      dica: "Quem limpa o convés? 'O jovem marinheiro' é o Sujeito. O resto da frase é o Predicado! ⚓"
    },
    {
      id: "textoB",
      sujeito: "Os peixes coloridos",
      predicado: "nadam à volta do grande barco de madeira.",
      dica: "Quem realiza a ação de nadar? 'Os peixes coloridos'. O resto é o Predicado! ⚓"
    },
    {
      id: "textoC",
      sujeito: "O experiente capitão do barco",
      predicado: "colocou o seu belo chapéu na cabeça.",
      dica: "Quem colocou o chapéu? 'O experiente capitão do barco' é o Sujeito! ⚓"
    },
    {
      id: "textoD",
      sujeito: "Uma violenta tempestade",
      predicado: "assustou os marinheiros ontem à noite.",
      dica: "O que assustou os marinheiros? 'Uma violenta tempestade' é o Sujeito! ⚓"
    },
    {
      id: "textoE",
      sujeito: "Nós",
      predicado: "comemos peixe fresco grelhado ao almoço.",
      dica: "Quem realizou a ação de comer? 'Nós' é o Sujeito (Grupo Nominal). ⚓"
    },
    {
      id: "textoF",
      sujeito: "O barco de pesca",
      predicado: "entrou no porto de abrigo ao fim do dia.",
      dica: "Quem entrou no porto? 'O barco de pesca'. Esse é o Sujeito (Grupo Nominal). ⚓"
    },
    {
      id: "textoG",
      sujeito: "As gaivotas brancas",
      predicado: "voam alto por cima do convés do navio.",
      dica: "Quem voa por cima do convés? 'As gaivotas brancas' é o Sujeito da frase. ⚓"
    },
    {
      id: "textoH",
      sujeito: "A água do mar",
      predicado: "brilha intensamente sob a luz do sol.",
      dica: "O que brilha sob a luz do sol? 'A água do mar'. Esse é o Sujeito! ⚓"
    },
    {
      id: "textoI",
      sujeito: "O jovem pescador",
      predicado: "apanhou um peixe muito grande ontem.",
      dica: "Quem apanhou o peixe grande? 'O jovem pescador' é o Sujeito (Grupo Nominal). ⚓"
    },
    {
      id: "textoJ",
      sujeito: "Uma baleia simpática",
      predicado: "saltou perto da proa do navio.",
      dica: "Quem realizou o salto? 'Uma baleia simpática' é o Sujeito da frase. ⚓"
    },
    {
      id: "textoK",
      sujeito: "Os fortes marinheiros",
      predicado: "puxaram as amarras do barco com determinação.",
      dica: "Quem puxou as amarras? 'Os fortes marinheiros' é o Sujeito (Grupo Nominal). ⚓"
    },
    {
      id: "textoL",
      sujeito: "Nós",
      predicado: "vimos o pôr-do-sol dourado no horizonte.",
      dica: "Quem viu o pôr-do-sol? 'Nós'. Sendo apenas um pronome, é o Sujeito da frase. ⚓"
    },
    {
      id: "textoM",
      sujeito: "O capitão atento",
      predicado: "conduziu o leme com muita segurança na tempestade.",
      dica: "Quem conduziu o leme com segurança? 'O capitão atento' é o Sujeito (Grupo Nominal). ⚓"
    },
    {
      id: "textoN",
      sujeito: "As pequenas conchas",
      predicado: "enfeitam a areia da praia dourada.",
      dica: "O que enfeita a areia da praia? 'As pequenas conchas'. Esse é o Sujeito. ⚓"
    },
    {
      id: "textoO",
      sujeito: "O farol luminoso",
      predicado: "guia todos os navios na escuridão da noite.",
      dica: "O que guia os navios na escuridão? 'O farol luminoso' é o Sujeito (Grupo Nominal). ⚓"
    }
  ],

  // NÍVEL 3: O Estaleiro das Frases. Completar as lacunas construindo frases lógicas (GN + GV) [1.1.1]
  nivel3: [
    {
      template: "{blank0} {blank1} no porto marítimo.<br><br>Depois de atracarem, {blank2} {blank3} no diário de bordo do navio.",
      blanks: [
        { id: "blank0", correto: "Os marinheiros", opcoes: ["Os marinheiros", "Puxam as cordas", "No alto mar"] }, // Sujeito 1 (GN)
        { id: "blank1", correto: "atracaram os barcos", opcoes: ["atracaram os barcos", "o vento forte", "peixe fresco"] }, // Predicado 1 (GV)
        { id: "blank2", correto: "a pequena marinheira", opcoes: ["a pequena marinheira", "escreve as notas", "ao fim do dia"] }, // Sujeito 2 (GN)
        { id: "blank3", correto: "registou a viagem", opcoes: ["registou a viagem", "as grandes baleias", "sob as estrelas"] } // Predicado 2 (GV)
      ]
    },
    {
      template: "{blank0} {blank1} contra o casco de madeira.<br><br>Felizmente, {blank2} {blank3} do navio de forma segura para o cais.",
      blanks: [
        { id: "blank0", correto: "As ondas gigantes", opcoes: ["As ondas gigantes", "Bateram com força", "Os marinheiros"] },
        { id: "blank1", correto: "bateram com força", opcoes: ["bateram com força", "o leme do barco", "rapidamente"] },
        { id: "blank2", correto: "o capitão do barco", opcoes: ["o capitão do barco", "conduziu a rota", "da tempestade"] },
        { id: "blank3", correto: "guiou a tripulação", opcoes: ["guiou a tripulação", "as gaivotas brancas", "pelo oceano"] }
      ]
    },
    {
      template: "{blank0} {blank1} à volta do nosso navio.<br><br>Lá de cima, {blank2} {blank3} com alegria para as águas azuis.",
      blanks: [
        { id: "blank0", correto: "Três golfinhos cinzentos", opcoes: ["Três golfinhos cinzentos", "Saltavam contentes", "Os pescadores"] },
        { id: "blank1", correto: "saltavam na água", opcoes: ["saltavam na água", "o grande oceano", "alegremente"] },
        { id: "blank2", correto: "os jovens turistas", opcoes: ["os jovens turistas", "olhavam surpresos", "da amura"] },
        { id: "blank3", correto: "sorriam maravilhados", opcoes: ["sorriam maravilhados", "o pôr-do-sol", "atentamente"] }
      ]
    },
    {
      template: "{blank0} {blank1} nas rochas à noite.<br><br>Por essa razão, {blank2} {blank3} das velas para desviar o barco a tempo.",
      blanks: [
        { id: "blank0", correto: "O farol da ilha", opcoes: ["O farol da ilha", "Avisou do perigo", "Os marinheiros"] },
        { id: "blank1", correto: "brilhou muito forte", opcoes: ["brilhou muito forte", "o capitão atento", "pelo canal"] },
        { id: "blank2", correto: "os marinheiros vigilantes", opcoes: ["os marinheiros vigilantes", "puxaram as amarras", "rapidamente"] },
        { id: "blank3", correto: "ajustaram a rota", opcoes: ["ajustaram a rota", "as nuvens escuras", "pelo mar alto"] }
      ]
    },
    {
      template: "{blank0} {blank1} no mapa escondido no baú.<br><br>No dia seguinte, {blank2} {blank3} das moedas de ouro brilhantes na areia.",
      blanks: [
        { id: "blank0", correto: "Os jovens piratas", opcoes: ["Os jovens piratas", "Encontraram a pista", "O tesouro"] },
        { id: "blank1", correto: "estudaram o trajeto", opcoes: ["estudaram o trajeto", "a ilha deserta", "atentamente"] },
        { id: "blank2", correto: "toda a tripulação", opcoes: ["toda a tripulação", "desenterrou a caixa", "com pás"] },
        { id: "blank3", correto: "repartiu a riqueza", opcoes: ["repartiu a riqueza", "o capitão feliz", "de forma justa"] }
      ]
    },
	// --- NOVOS DESAFIOS DE CONSTRUÇÃO ADICIONADOS (DO 6.º AO 10.º) ---
    {
      template: "{blank0} {blank1} durante toda a manhã.<br><br>Depois da pescaria, {blank2} {blank3} para toda a tripulação.",
      blanks: [
        { id: "blank0", correto: "O pescador do cais", opcoes: ["O pescador do cais", "Apanhou um peixe", "Durante a manhã"] },
        { id: "blank1", correto: "pescou um peixe gigante", opcoes: ["pescou um peixe gigante", "as redes de pesca", "com muita força"] },
        { id: "blank2", correto: "o cozinheiro do navio", opcoes: ["o cozinheiro do navio", "assou o peixe fresco", "na cozinha"] },
        { id: "blank3", correto: "preparou um almoço delicioso", opcoes: ["preparou um almoço delicioso", "as pequenas panelas", "rapidamente"] }
      ]
    },
    {
      template: "{blank0} {blank1} antes de a tempestade começar.<br><br>Para se proteger, {blank2} {blank3} do capitão.",
      blanks: [
        { id: "blank0", correto: "As gaivotas assustadas", opcoes: ["As gaivotas assustadas", "Voaram para longe", "O céu escuro"] },
        { id: "blank1", correto: "fugiram do vento forte", opcoes: ["fugiram do vento forte", "as asas cinzentas", "no horizonte"] },
        { id: "blank2", correto: "um pequeno passarinho", opcoes: ["um pequeno passarinho", "entrou com pressa", "pela vigia"] },
        { id: "blank3", correto: "procurou abrigo na cabine", opcoes: ["procurou abrigo na cabine", "o timoneiro do navio", "rapidamente"] }
      ]
    },
    {
      template: "{blank0} {blank1} para estudar o fundo do mar.<br><br>Lá em baixo, {blank2} {blank3} de forma pacífica.",
      blanks: [
        { id: "blank0", correto: "Dois biólogos marinhos", opcoes: ["Dois biólogos marinhos", "Mergulharam no mar", "Os fatos de mergulho"] },
        { id: "blank1", correto: "exploraram os recifes de coral", opcoes: ["exploraram os recifes de coral", "as águas profundas", "atentamente"] },
        { id: "blank2", correto: "várias baleias gigantes", opcoes: ["várias baleias gigantes", "deslizaram sob a água", "perto dos mergulhadores"] },
        { id: "blank3", correto: "nadavam muito calmas", opcoes: ["nadavam muito calmas", "o submarino de pesquisa", "suavemente"] }
      ]
    },
    {
      template: "{blank0} {blank1} nas férias escolares passadas.<br><br>Durante o passeio, {blank2} {blank3} na areia fina da praia.",
      blanks: [
        { id: "blank0", correto: "O Simão e a Sofia", opcoes: ["O Simão e a Sofia", "Viajaram de barco", "As conchas"] },
        { id: "blank1", correto: "navegaram num grande veleiro", opcoes: ["navegaram num grande veleiro", "as velas brancas", "alegremente"] },
        { id: "blank2", correto: "as duas crianças curiosas", opcoes: ["as duas crianças curiosas", "apanharam conchinhas", "na maré vazia"] },
        { id: "blank3", correto: "encontraram estrelas-do-mar", opcoes: ["encontraram estrelas-do-mar", "as águas límpidas", "com cuidado"] }
      ]
    },
    {
      template: "{blank0} {blank1} mesmo perto do mar.<br><br>Ao anoitecer, {blank2} {blank3} com as suas chamas quentes.",
      blanks: [
        { id: "blank0", correto: "Os jovens escuteiros", opcoes: ["Os jovens escuteiros", "Montaram o acampamento", "A praia de areia"] },
        { id: "blank1", correto: "armaram as tendas na areia", opcoes: ["armaram as tendas na areia", "os sacos de dormir", "com rapidez"] },
        { id: "blank2", correto: "uma fogueira brilhante", opcoes: ["uma fogueira brilhante", "aqueceu o acampamento", "com a lenha seca"] },
        { id: "blank3", correto: "iluminou o espaço escuro", opcoes: ["iluminou o espaço escuro", "os pequenos cantores", "alegremente"] }
      ]
    }
  ],

  // NÍVEL 4: O Farol do Conhecimento (Bateria de Quiz de Escolha Múltipla) [1.1.1]
  nivel4: [
    {
      pergunta: "As palavras ou grupo de palavras que indicam quem realiza a ação na frase pertencem ao...",
      opcoes: ["Grupo Verbal (Predicado)", "Grupo Nominal (Sujeito)", "Grupo Adjetival", "Grupo de Advérbios"],
      correta: "Grupo Nominal (Sujeito)",
      dica: "Pensa quem é o 'herói' que realiza a ação! É o Sujeito (Grupo Nominal). ⚓"
    },
    {
      pergunta: "Como se chama o grupo constituído em redor de um Verbo, que indica o que o sujeito faz?",
      opcoes: ["Grupo Nominal (Sujeito)", "Grupo Adjetival", "Grupo Verbal (Predicado)", "Grupo de Nomes"],
      correta: "Grupo Verbal (Predicado)",
      dica: "Se tem um Verbo no centro e descreve a ação, é o Grupo Verbal (Predicado)! ⚓"
    },
    {
      pergunta: "Na frase 'As baleias azuis nadam no mar', qual é o Grupo Nominal (Sujeito)?",
      opcoes: ["nadam no mar", "As baleias azuis", "no mar", "As baleias"],
      correta: "As baleias azuis",
      dica: "Quem é que nada no mar? 'As baleias azuis'. Esse é o Sujeito completo! ⚓"
    },
    {
      pergunta: "Na frase 'O capitão escreveu no diário', qual é o Grupo Verbal (Predicado)?",
      opcoes: ["O capitão", "no diário", "escreveu", "escreveu no diário"],
      correta: "escreveu no diário",
      dica: "O que é que o capitão fez? Ele 'escreveu no diário'. Esse é o Predicado! ⚓"
    },
    {
      pergunta: "O Sujeito de uma frase é habitualmente representado por que grupo constituinte?",
      opcoes: ["Grupo Verbal", "Grupo Adjetival", "Grupo Nominal", "Grupo de Advérbios"],
      correta: "Grupo Nominal",
      dica: "O Sujeito tem como palavra principal um nome (substantivo) ou pronome, logo é o Grupo Nominal! ⚓"
    },
    {
      pergunta: "Na frase 'Nós comemos peixe fresco', qual é o sujeito da frase?",
      opcoes: ["peixe fresco", "comemos", "Nós", "comemos peixe fresco"],
      correta: "Nós",
      dica: "Quem realizou a ação de comer peixe? Fomos 'Nós'! ⚓"
    },
    {
      pergunta: "Qual é a palavra principal (núcleo) do Grupo Nominal 'A pequena marinheira'?",
      opcoes: ["A", "pequena", "marinheira", "pequena marinheira"],
      correta: "marinheira",
      dica: "Qual é o nome (substantivo) mais importante deste grupo? É 'marinheira'! ⚓"
    },
    {
      pergunta: "Qual é a palavra principal (núcleo) do Grupo Verbal 'navegam muito felizes'?",
      opcoes: ["navegam", "muito", "felizes", "muito felizes"],
      correta: "navegam",
      dica: "O núcleo do Grupo Verbal é sempre o próprio Verbo! Qual é o verbo aqui? ⚓"
    },
    {
      pergunta: "Na frase 'O vento forte agitou as ondas', qual é o Predicado da frase?",
      opcoes: ["O vento forte", "agitou", "agitou as ondas", "as ondas"],
      correta: "agitou as ondas",
      dica: "O que é que o vento forte fez? Ele 'agitou as ondas'. Tudo o que começa no verbo é o Predicado! ⚓"
    },
    {
      pergunta: "Na frase 'A tripulação atracou o barco', qual é o Grupo Nominal?",
      opcoes: ["atracou o barco", "o barco", "atracou", "A tripulação"],
      correta: "A tripulação",
      dica: "Quem realizou a ação de atracar? 'A tripulação'! ⚓"
    }
  ]
};