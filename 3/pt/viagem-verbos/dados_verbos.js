/* =========================================================================
   BASE DE DADOS - CONJUGAÇÕES E TEMPOS VERBAIS (3.º ANO)
   ========================================================================= */

const dbVerbos = {
  // NÍVEL 1: Pool de 27 verbos no infinitivo para triagem em 3 conjugações [1.1.4]
  nivel1: [
    // 1.ª Conjugação (-ar)
    { palavra: "falar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "navegar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "cantar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "nadar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "saltar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "adorar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "pescar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "amar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },
    { palavra: "marchar", tipo: "1", dica: "Termina em '-ar'. Repara nas caixas!" },

    // 2.ª Conjugação (-er / -or)
    { palavra: "saber", tipo: "2", dica: "Termina em '-er'. Repara nas caixas!" },
    { palavra: "ler", tipo: "2", dica: "Termina em '-er'. Repara nas caixas!" },
    { palavra: "correr", tipo: "2", dica: "Termina em '-er'. Repara nas caixas!" },
    { palavra: "beber", tipo: "2", dica: "Termina em '-er'. Repara nas caixas!" },
    { palavra: "comer", tipo: "2", dica: "Termina em '-er'. Repara nas caixas!" },
    { palavra: "pôr", tipo: "2", dica: "Verbos terminados em '-or' pertencem à 2.ª conjugação!" },
    { palavra: "propor", tipo: "2", dica: "Verbos terminados em '-or' pertencem à 2.ª conjugação!" },
    { palavra: "compor", tipo: "2", dica: "Verbos terminados em '-or' pertencem à 2.ª conjugação!" },
    { palavra: "ver", tipo: "2", dica: "Termina em '-er' (infinitivo ver). Pertence à 2.ª conjugação!" },

    // 3.ª Conjugação (-ir)
    { palavra: "sorrir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "subir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "partir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "dormir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "ouvir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "pedir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "rir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "abrir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" },
    { palavra: "assistir", tipo: "3", dica: "Termina em '-ir'. Repara nas caixas!" }
  ],

  // NÍVEL 2: Pool de 5 textos de marinheiros com 5 perguntas cada [1.1.4]
  nivel2: [
    {
      id: "textoA",
      texto: `O marinheiro Tomás <span class="palavra-clicavel" data-alvo="subiu">subiu</span> ao mastro mais alto do barco. Lá de cima, ele <span class="palavra-clicavel" data-alvo="avistou">avistou</span> uma ilha misteriosa no horizonte. Os seus companheiros de tripulação <span class="palavra-clicavel" data-alvo="gritaram">gritaram</span> de alegria com a notícia. No dia seguinte, eles <span class="palavra-clicavel" data-alvo="exploraram">exploraram</span> a praia arenosa. Eu <span class="palavra-clicavel" data-alvo="escrevo">escrevo</span> esta fantástica aventura no diário de bordo.`,
      perguntas: [
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>3.ª conjugação</span> que indica a ação do Tomás no mastro!", resposta: "subiu", dica: "Vem do verbo 'subir' (termina em -ir). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação</span> que indica o que o Tomás fez no horizonte!", resposta: "avistou", dica: "Vem do verbo 'avistar' (termina em -ar). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação</span> que indica a reação alegre dos companheiros!", resposta: "gritaram", dica: "Vem do verbo 'gritar' (termina em -ar). " },
        { instrucao: "Clica no verbo no <span class='destaque-fundo'>Pretérito Perfeito</span> que indica a ação realizada na praia!", resposta: "exploraram", dica: "Indica uma ação que já aconteceu (verbo explorar). " },
        { instrucao: "Clica no verbo no <span class='destaque-fundo'>Presente</span> que indica o que eu faço no diário de bordo!", resposta: "escrevo", dica: "Descreve a ação que está a acontecer agora (verbo escrever). " }
      ]
    },
    {
      id: "textoB",
      texto: `O velho capitão <span class="palavra-clicavel" data-alvo="bebe">bebe</span> um chá bem quente na sua cabine. Ele <span class="palavra-clicavel" data-alvo="navegou">navegou</span> por mares perigosos durante muitos anos. Amanhã, nós <span class="palavra-clicavel" data-alvo="chegaremos">chegaremos</span> ao porto de abrigo com sucesso. Os peixes <span class="palavra-clicavel" data-alvo="saltam">saltam</span> contentes à volta do navio. Eu <span class="palavra-clicavel" data-alvo="sinto">sinto</span> o vento fresco do mar na minha cara.`,
      perguntas: [
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>2.ª conjugação no Presente</span> que indica a ação do capitão!", resposta: "bebe", dica: "Vem do verbo 'beber' (termina em -er). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação no Pretérito Perfeito</span>!", resposta: "navegou", dica: "Vem do verbo 'navegar' e indica uma ação já concluída no passado. " },
        { instrucao: "Clica no verbo no <span class='destaque-fundo'>Futuro</span> que indica o momento em que atracamos no porto!", resposta: "chegaremos", dica: "Descreve algo que irá acontecer amanhã (verbo chegar). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação no Presente</span> sobre a ação dos peixes!", resposta: "saltam", dica: "Vem do verbo 'saltar' e indica o que acontece agora. " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>3.ª conjugação</span> que diz o que eu sinto na cara!", resposta: "sinto", dica: "Vem do verbo 'sentir' (termina em -ir). " }
      ]
    },
    {
      id: "textoC",
      texto: `A forte tempestade <span class="palavra-clicavel" data-alvo="bate">bate</span> contra as madeiras do navio. Os marinheiros <span class="palavra-clicavel" data-alvo="protegeram">protegeram</span> as velas rapidamente. Tu <span class="palavra-clicavel" data-alvo="ouvirás">ouvirás</span> o trovão assustador logo à noite. O capitão <span class="palavra-clicavel" data-alvo="propõe">propõe</span> uma rota mais segura para o barco. O vento <span class="palavra-clicavel" data-alvo="soprou">soprou</span> com muita força ontem à tarde.`,
      perguntas: [
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>2.ª conjugação no Presente</span> que indica a ação da tempestade!", resposta: "bate", dica: "Vem do verbo 'bater' (termina em -er). " },
        { instrucao: "Clica no verbo no <span class='destaque-fundo'>Pretérito Perfeito</span> que indica o que os marinheiros fizeram às velas!", resposta: "protegeram", dica: "Indica uma ação que já aconteceu no passado (verbo proteger). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>3.ª conjugação no Futuro</span> sobre o que acontecerá à noite!", resposta: "ouvirás", dica: "Vem do verbo 'ouvir' e indica um acontecimento futuro. " },
        { instrucao: "Clica no verbo especial terminado em '-or' que pertence à <span class='destaque-fundo'>2.ª conjugação</span>!", resposta: "propõe", dica: "Vem do verbo 'propor'. Lembra-te: verbos em -or pertencem à 2.ª conjugação! " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação no Pretérito Perfeito</span> sobre o vento de ontem!", resposta: "soprou", dica: "Vem do verbo 'soprar' e indica uma ação concluída no passado. " }
      ]
    },
    {
      id: "textoD",
      texto: `Os jovens piratas <span class="palavra-clicavel" data-alvo="abrem">abrem</span> o baú de madeira escura. Eles <span class="palavra-clicavel" data-alvo="encontraram">encontraram</span> muitas moedas de ouro brilhantes lá dentro. O Simão <span class="palavra-clicavel" data-alvo="guardará">guardará</span> o mapa num sítio muito seguro. Nós <span class="palavra-clicavel" data-alvo="repartimos">repartimos</span> o tesouro de forma igual. O capitão <span class="palavra-clicavel" data-alvo="sorri">sorri</span> com o sucesso da missão marítima.`,
      perguntas: [
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>3.ª conjugação no Presente</span> que indica o que fazem ao baú!", resposta: "abrem", dica: "Vem do verbo 'abrir' (termina em -ir). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação no Pretérito Perfeito</span> sobre a descoberta do tesouro!", resposta: "encontraram", dica: "Vem do verbo 'encontrar' e indica uma ação passada. " },
        { instrucao: "Clica no verbo no <span class='destaque-fundo'>Futuro</span> que indica a ação que o Simão irá realizar!", resposta: "guardará", dica: "Descreve o que acontecerá depois (verbo guardar). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>3.ª conjugação no Pretérito Perfeito</span> sobre a partilha!", opacity: "0.3", resposta: "repartimos", dica: "Vem do verbo 'repartir' e indica uma ação já concluída. " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>3.ª conjugação no Presente</span> que mostra a alegria do capitão!", resposta: "sorri", dica: "Vem do verbo 'sorrir' (termina em -ir). " }
      ]
    },
    {
      id: "textoE",
      texto: `O farol da ilha <span class="palavra-clicavel" data-alvo="ilumina">ilumina</span> o caminho dos barcos à noite. O vigia de serviço <span class="palavra-clicavel" data-alvo="come">come</span> uma sopa saborosa na torre. Nós <span class="palavra-clicavel" data-alvo="vimos">vimos</span> o brilho da luz ao longe ontem à noite. Os marinheiros <span class="palavra-clicavel" data-alvo="evitarão">evitarão</span> as rochas perigosas da costa. Eu <span class="palavra-clicavel" data-alvo="agradeço">agradeço</span> a ajuda deste grande sinal.`,
      perguntas: [
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>1.ª conjugação no Presente</span> que indica o trabalho do farol!", resposta: "ilumina", dica: "Vem do verbo 'iluminar' (termina em -ar). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>2.ª conjugação no Presente</span> que indica a ação do vigia!", resposta: "come", dica: "Vem do verbo 'comer' (termina em -er). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>2.ª conjugação no Pretérito Perfeito</span> sobre o avistamento de ontem!", resposta: "vimos", dica: "Vem do verbo 'ver' e indica um acontecimento passado. " },
        { instrucao: "Clica no verbo no tempo <span class='destaque-fundo'>Futuro</span> sobre o que os marinheiros farão com as rochas!", resposta: "evitarão", dica: "Descreve uma ação que irá acontecer (verbo evitar). " },
        { instrucao: "Clica no verbo da <span class='destaque-fundo'>2.ª conjugação no Presente</span> que indica o meu sentimento de gratidão!", resposta: "agradeço", dica: "Vem do verbo 'agradecer' e descreve a ação presente. " }
      ]
    }
  ],

  // NÍVEL 3: Pool de 5 diários de bordo para caçar TODOS os verbos (5 alvos cada) [1.1.4]
  nivel3: [
    {
      id: "textoA",
      texto: `O nosso navio <span class="palavra-alvo-l3" data-palavra="partiu">partiu</span> do porto bem cedo. Nós <span class="palavra-alvo-l3" data-palavra="comemos">comemos</span> peixe fresco ao almoço. O capitão <span class="palavra-alvo-l3" data-palavra="escreve">escreve</span> as novidades no livro de bordo. Amanhã, nós <span class="palavra-alvo-l3" data-palavra="veremos">veremos</span> os golfinhos no alto mar. Os marinheiros de vigia <span class="palavra-alvo-l3" data-palavra="sorriem">sorriem</span> felizes.`,
      alvos: ["partiu", "comemos", "escreve", "veremos", "sorriem"],
      dica: "Existem 5 verbos escondidos: um de 3.ª conj. (passado), um de 2.ª conj. (passado), um de 2.ª conj. (presente), um de 2.ª conj. (futuro) e um de 3.ª conj. (presente). "
    },
    {
      id: "textoB",
      texto: `A nossa tripulação <span class="palavra-alvo-l3" data-palavra="trabalhou">trabalhou</span> muito na limpeza do convés. Eu <span class="palavra-alvo-l3" data-palavra="bebo">bebo</span> água bem fresca para o calor. Tu <span class="palavra-alvo-l3" data-palavra="subirás">subirás</span> ao mastro mais logo para <span class="palavra-alvo-l3" data-palavra="vigiar">vigiar</span>. Ontem, o vento <span class="palavra-alvo-l3" data-palavra="soprou">soprou</span> com pouca força. Nós <span class="palavra-alvo-l3" data-palavra="adoramos">adoramos</span> a bela vida no grande oceano.`,
      alvos: ["trabalhou", "bebo", "vigiar", "subirás", "soprou", "adoramos"],
      dica: "Descobre os 6 verbos: procura as palavras que descrevem ações dos marinheiros ou do vento! "
    },
    {
	  id: "textoC",
	  texto: `O experiente capitão <span class="palavra-alvo-l3" data-palavra="pôs">pôs</span> o chapéu na cabeça. Os marinheiros <span class="palavra-alvo-l3" data-palavra="correm">correm</span> para <span class="palavra-alvo-l3" data-palavra="puxar">puxar</span> as cordas. Eu <span class="palavra-alvo-l3" data-palavra="ouvi">ouvi</span> o som das baleias ao longe. Amanhã de manhã, nós <span class="palavra-alvo-l3" data-palavra="pescaremos">pescaremos</span> o nosso jantar. O belo sol <span class="palavra-alvo-l3" data-palavra="brilha">brilha</span> no horizonte azul.`,
	  alvos: ["pôs", "correm", "puxar", "ouvi", "pescaremos", "brilha"],
	  dica: "Atenção aos 6 verbos: um terminado em -or (pôr), um de corrida, um de movimento (puxar), um de audição, um de pesca futura e um do brilhar do sol!"
	},
    {
      id: "textoD",
      texto: `O jovem grumete <span class="palavra-alvo-l3" data-palavra="limpa">limpa</span> a mesa de refeições da cabine. O cozinheiro <span class="palavra-alvo-l3" data-palavra="assou">assou</span> um belo peixe. Os piratas <span class="palavra-alvo-l3" data-palavra="proporão">proporão</span> um acordo de paz ao capitão. Nós <span class="palavra-alvo-l3" data-palavra="dormimos">dormimos</span> sob as estrelas brilhantes. O navio <span class="palavra-alvo-l3" data-palavra="desliza">desliza</span> suavemente.`,
      alvos: ["limpa", "assou", "proporão", "dormimos", "desliza"],
      dica: "Temos 5 verbos: foca-te nas ações de limpar, cozinhar, propor no futuro, dormir e no movimento do navio!"
    },
    {
      id: "textoE",
      texto: `Nós <span class="palavra-alvo-l3" data-palavra="vimos">vimos</span> o farol da ilha ao longe ontem à noite. O mar <span class="palavra-alvo-l3" data-palavra="acalma">acalma</span> finalmente após a grande tempestade. Os peixes <span class="palavra-alvo-l3" data-palavra="nadarão">nadarão</span> à volta do navio amanhã. Eu <span class="palavra-alvo-l3" data-palavra="sinto">sinto</span> o balanço suave das ondas. Tu <span class="palavra-alvo-l3" data-palavra="venceste">venceste</span> o medo do alto mar.`,
      alvos: ["vimos", "acalma", "nadarão", "sinto", "venceste"],
      dica: "Encontra os 5 verbos: foca nas ações de ver no passado, acalmar, nadar no futuro, sentir no presente e vencer o medo! "
    }
  ],

  // NÍVEL 4: Pool de 5 diários de bordo lacunados para preenchimento de tempos verbais [1.1.4]
  nivel4: [
    {
      template: "Ontem de manhã, o meu belo navio {blank0} de Lisboa.<br>Hoje, nós {blank1} por águas muito tranquilas e azuis.<br>Amanhã, os marinheiros {blank2} o nosso peixe fresco para o jantar.<br>Neste momento, eu {blank3} esta fantástica aventura no meu diário.",
      blanks: [
        { id: "blank0", correto: "partiu", opcoes: ["partiu", "partirá", "parte"] }, // partir - Pretérito Perfeito
        { id: "blank1", correto: "navegamos", opcoes: ["navegámos", "navegamos", "navegaremos"] }, // navegar - Presente (distinção do acento PT-PT!)
        { id: "blank2", correto: "pescarão", opcoes: ["pescaram", "pescarão", "pescam"] }, // pescar - Futuro (distinção fonética -am vs -ão!)
        { id: "blank3", correto: "escrevo", opcoes: ["escrevi", "escrevo", "escreverei"] } // escrever - Presente
      ]
    },
    {
      template: "No mês passado, o capitão {blank0} o mapa do tesouro no baú secreto.<br>Agora, os jovens marinheiros {blank1} com afinco as moedas de ouro.<br>No próximo ano, nós {blank2} para uma ilha misteriosa e distante.<br>Neste momento, tu {blank3} a rota exata de navegação segura.",
      blanks: [
        { id: "blank0", correto: "pôs", opcoes: ["pôs", "põe", "porá"] }, // pôr - Pretérito Perfeito
        { id: "blank1", correto: "procuram", opcoes: ["procuraram", "procuram", "procurarão"] }, // procurar - Presente
        { id: "blank2", correto: "viajaremos", opcoes: ["viajámos", "viajamos", "viajaremos"] }, // viajar - Futuro
        { id: "blank3", correto: "sabes", opcoes: ["sabias", "sabes", "saberás"] } // saber - Presente
      ]
    },
    {
      template: "Ontem à noite, as fortes ondas {blank0} com muita força no casco.<br>Neste momento de bonança, a tempestade {blank1} devagarinho.<br>Amanhã de manhã, o belo sol {blank2} novamente no horizonte marítimo.<br>Agora, todos nós {blank3} descansados e felizes nas cabines do navio.",
      blanks: [
        { id: "blank0", correto: "bateram", opcoes: ["bateram", "batem", "baterão"] }, // bater - Pretérito Perfeito
        { id: "blank1", correto: "acalma", opcoes: ["acalmou", "acalma", "acalmará"] }, // acalmar - Presente
        { id: "blank2", correto: "brilhará", opcoes: ["brilhou", "brilhará", "brilha"] }, // brilhar - Futuro
        { id: "blank3", correto: "dormimos", opcoes: ["dormimos", "dormíamos", "dormiremos"] } // dormir - Presente
      ]
    },
    {
      template: "No ano letivo passado, tu {blank0} a dar nós marinheiros nas cordas.<br>Hoje, tu {blank1} com entusiasmo o capitão na condução do navio.<br>No próximo mês, nós {blank2} chegar a bom porto sãos e salvos.<br>Nesta manhã, o jovem grumete {blank3} todo o convés com água fresca.",
      blanks: [
        { id: "blank0", correto: "aprendeste", opcoes: ["aprendias", "aprendeste", "aprenderás"] }, // aprender - Pretérito Perfeito
        { id: "blank1", correto: "ajudas", opcoes: ["ajudaste", "ajudas", "ajudarás"] }, // ajudar - Presente
        { id: "blank2", correto: "conseguiremos", opcoes: ["conseguimos", "conseguiremos", "conseguíamos"] }, // conseguir - Futuro
        { id: "blank3", correto: "limpou", opcoes: ["limpa", "limpou", "limpará"] } // limpar - Pretérito Perfeito
      ]
    },
    {
      template: "Ontem de tarde, eu {blank0} o belo canto das baleias no alto mar.<br>Agora, os peixes coloridos {blank1} à volta do navio alegremente.<br>Amanhã, os piratas {blank2} um acordo de paz ao nosso capitão.<br>Neste momento de comemoração, nós {blank3} uma água de coco bem fresca.",
      blanks: [
        { id: "blank0", correto: "ouvi", opcoes: ["ouço", "ouvi", "ouvirei"] }, // ouvir - Pretérito Perfeito
        { id: "blank1", correto: "saltam", opcoes: ["saltaram", "saltam", "saltarão"] }, // saltar - Presente
        { id: "blank2", correto: "proporão", opcoes: ["propuseram", "proporão", "propõem"] }, // propor - Futuro
        { id: "blank3", correto: "bebemos", opcoes: ["bebemos", "bebíamos", "beberemos"] } // beber - Presente
      ]
    }
  ]
};