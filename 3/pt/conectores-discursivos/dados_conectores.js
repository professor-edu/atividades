/* =========================================================================
   BASE DE DADOS - CONECTORES DISCURSIVOS (3.º ANO) [1.1.7]
   ========================================================================= */

const dbConectores = {
  // NÍVEL 1: Pool de 24 conectores para triagem rápida em 3 categorias [1.1.7]
  nivel1: [
    // Adição (8 conectores)
    { conector: "e", tipo: "adic", dica: "Serve para somar ou agrupar elementos na frase." },
    { conector: "também", tipo: "adic", dica: "Indica a inclusão ou soma de uma nova ideia." },
    { conector: "nem", tipo: "adic", dica: "Utiliza-se para somar duas ideias negativas." },
    { conector: "assim como", tipo: "adic", dica: "Une duas ideias somando-as de forma comparativa." },
    { conector: "além disso", tipo: "adic", dica: "Adiciona uma informação extra à ideia anterior." },
    { conector: "igualmente", tipo: "adic", dica: "Soma uma ideia com o mesmo valor da anterior." },
    { conector: "bem como", tipo: "adic", dica: "Une elementos adicionando-os na frase." },
    { conector: "adicionalmente", tipo: "adic", dica: "Introduz um novo dado ou informação de soma." },

    // Causa (8 conectores)
    { conector: "porque", tipo: "caus", dica: "Explica a razão ou o motivo de algo ter acontecido." },
    { conector: "pois", tipo: "caus", dica: "Apresenta uma justificação ou causa." },
    { conector: "visto que", tipo: "caus", dica: "Introduz a causa de uma ação anterior." },
    { conector: "já que", tipo: "caus", dica: "Anuncia a justificação ou motivo do acontecimento." },
    { conector: "como", tipo: "caus", dica: "Pode ser usado no início da frase para indicar a causa." },
    { conector: "uma vez que", tipo: "caus", dica: "Explica a razão que originou o acontecimento." },
    { conector: "devido a", tipo: "caus", dica: "Indica o motivo ou a causa direta de algo." },
    { conector: "por causa de", tipo: "caus", dica: "Explica a razão de um determinado facto." },

    // Contraste (8 conectores)
    { conector: "mas", tipo: "cont", dica: "Apresenta uma ideia contrária ou oposta à anterior." },
    { conector: "porém", tipo: "cont", dica: "Mostra oposição ou contraste de ideias." },
    { conector: "todavia", tipo: "cont", dica: "Articula um facto contrário ao que foi dito." },
    { conector: "contudo", tipo: "cont", dica: "Indica oposição ou contraste na frase." },
    { conector: "no entanto", tipo: "cont", dica: "Apresenta uma contrariedade em relação ao facto anterior." },
    { conector: "apesar disso", tipo: "cont", dica: "Une duas ideias que são opostas." },
    { conector: "ainda assim", tipo: "cont", dica: "Mostra um contraste com o que aconteceu antes." },
    { conector: "só que", tipo: "cont", dica: "Introduz uma oposição informal na frase." }
  ],

  // NÍVEL 2: Pool de 10 exercícios originais de união de frases (Pontes) [1.1.7]
  nivel2: [
    {
      id: "ponteA",
      ilhaA: "O Tomás ficou cansadíssimo.",
      ilhaB: "Ele adormeceu logo no sofá.",
      instrucao: "Escolhe a expressão de <span class='destaque-fundo'>consequência</span> correta para unir as duas ilhas numa só frase:",
      opcoes: ["tão ... que", "para", "mas"],
      correta: "tão ... que",
      fraseCompleta: "O Tomás ficou tão cansado que adormeceu logo no sofá.",
      dica: "A fadiga do Tomás provocou um resultado direto: adormecer."
    },
    {
      id: "ponteB",
      ilhaA: "A Maria estudou muito.",
      ilhaB: "Ela queria ter boa nota no teste.",
      instrucao: "Escolhe a palavra de <span class='destaque-fundo'>finalidade ou intenção</span> correta para unir as duas ilhas:",
      opcoes: ["para", "mas", "contudo"],
      correta: "para",
      fraseCompleta: "A Maria estudou muito para ter boa nota no teste.",
      dica: "Estudar tinha um objetivo ou intenção clara."
    },
    {
      id: "ponteC",
      ilhaA: "O barco navegava rápido.",
      ilhaB: "O vento soprava muito a favor.",
      instrucao: "Escolhe o conector que indica a <span class='destaque-fundo'>causa</span> da velocidade do barco:",
      opcoes: ["porque", "mas", "além disso"],
      correta: "porque",
      fraseCompleta: "O barco navegava rápido porque o vento soprava muito a favor.",
      dica: "O vento a favor foi o motivo ou a razão de o barco andar rápido."
    },
    {
      id: "ponteD",
      ilhaA: "O Simão pescou peixe fresco.",
      ilhaB: "A sua irmã preparou o jantar.",
      instrucao: "Escolhe o conector de <span class='destaque-fundo'>adição</span> para somar as duas ações da pescaria:",
      opcoes: ["e", "porém", "como"],
      correta: "e",
      fraseCompleta: "O Simão pescou peixe fresco e a sua irmã preparou o jantar.",
      dica: "Queremos apenas somar e agrupar as duas atividades na mesma frase."
    },
    {
      id: "ponteE",
      ilhaA: "Nós queríamos navegar hoje.",
      ilhaB: "O mar estava demasiado perigoso.",
      instrucao: "Escolhe o conector de <span class='destaque-fundo'>oposição</span> para unir estas ideias opostas:",
      opcoes: ["mas", "também", "pois"],
      correta: "mas",
      fraseCompleta: "Nós queríamos navegar hoje, mas o mar estava demasiado perigoso.",
      dica: "As duas ideias são contrárias: a vontade de navegar e o perigo do mar."
    },
    {
      id: "ponteF",
      ilhaA: "As gaivotas voaram baixo.",
      ilhaB: "A tempestade estava muito próxima.",
      instrucao: "Escolhe o conector que apresenta a <span class='destaque-fundo'>causa</span> do voo baixo das aves:",
      opcoes: ["pois", "contudo", "também"],
      correta: "pois",
      fraseCompleta: "As gaivotas voaram baixo pois a tempestade estava muito próxima.",
      dica: "O voo das aves aconteceu devido à aproximação da tempestade."
    },
    {
      id: "ponteG",
      ilhaA: "O cozinheiro assou o peixe.",
      ilhaB: "Ele fez uma deliciosa sopa.",
      instrucao: "Escolhe o conector de <span class='destaque-fundo'>adição</span> para agrupar as duas tarefas da cozinha:",
      opcoes: ["também", "todavia", "visto que"],
      correta: "também",
      fraseCompleta: "O cozinheiro assou o peixe, também fez uma deliciosa sopa.",
      dica: "Procura a palavra que indica a soma de uma nova ação na cozinha."
    },
    {
      id: "ponteH",
      ilhaA: "O vigia acendeu o farol.",
      ilhaB: "A noite ficou muito escura.",
      instrucao: "Escolhe o conector que estabelece a relação de <span class='destaque-fundo'>tempo</span> correta entre as ações:",
      opcoes: ["quando", "porém", "isto é"],
      correta: "quando",
      fraseCompleta: "O vigia acendeu o farol quando a noite ficou muito escura.",
      dica: "As ações ocorreram no mesmo momento temporal."
    },
    {
      id: "ponteI",
      ilhaA: "O jovem marinheiro correu muito.",
      ilhaB: "Ele não conseguiu apanhar o navio.",
      instrucao: "Escolhe o conector de <span class='destaque-fundo'>oposição</span> que mostra a contrariedade do esforço dele:",
      opcoes: ["contudo", "assim como", "como"],
      correta: "contudo",
      fraseCompleta: "O jovem marinheiro correu muito, contudo não conseguiu apanhar o navio.",
      dica: "Apesar do esforço de correr, o resultado foi oposto ao esperado."
    },
    {
      id: "ponteJ",
      ilhaA: "A viagem marítima foi longa.",
      ilhaB: "A tripulação chegou muito cansada.",
      instrucao: "Escolhe o conector que apresenta a <span class='destaque-fundo'>causa</span> da longa viagem:",
      opcoes: ["por isso", "entretanto", "ou seja"],
      correta: "por isso",
      fraseCompleta: "A viagem marítima foi longa, por isso a tripulação chegou muito cansada.",
      dica: "O cansaço da tripulação foi o resultado direto da duração da viagem."
    }
  ],

  // NÍVEL 3 REFEITO: Pool de 15 textos curtos de 3 lacunas cada de temas diversos [1, 2]
  nivel3: [
    {
      template: "A mãe preparou a massa das panquecas {blank0} o leite aquecia.<br><br>As panquecas ficaram muito douradas, {blank1} estavam prontas a comer.<br><br>Nós lanchámos todos contentes {blank2} o prato ficou pronto.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "ou seja", "nem"] },
        { id: "blank1", correto: "isto é", opcoes: ["isto é", "quando", "mas"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "O primeiro conector indica que a massa e o leite aqueciam ao mesmo tempo, o segundo explica e o terceiro indica tempo imediato."
    },
    {
      template: "O avançado correu com a bola {blank0} os adeptos gritavam.<br><br>Ele marcou o golo decisivo, {blank1} garantiu a vitória da equipa.<br><br>Nós festejámos no relvado {blank2} o árbitro apitou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "porém"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Procura os dois momentos de tempo do jogo de futebol e a explicação da vitória da equipa."
    },
    {
      template: "As abelhas voam de flor em flor {blank0} procuram néctar.<br><br>Elas levam o alimento para a colmeia, {blank1} produzem mel saboroso.<br><br>O mel fica armazenado {blank2} as abelhas terminam o trabalho.",
      blanks: [
        { id: "blank0", correto: "quando", opcoes: ["quando", "isto é", "mas"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "enquanto", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Identifica a busca do néctar, a explicação do processo do mel e o momento de fecho do trabalho."
    },
    {
      template: "O professor misturou os líquidos {blank0} nós observávamos atentos.<br><br>A mistura mudou de cor, {blank1} a reação química funcionou.<br><br>Nós registámos as notas {blank2} a experiência terminou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "contudo"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "também"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Temos a observação simultânea, a explicação da cor e o momento de registar no caderno."
    },
    {
      template: "O meu irmão jogou o nível difícil {blank0} eu esperava pela vez.<br><br>Ele conseguiu vencer o monstro, {blank1} passou de nível no jogo.<br><br>Nós desligámos a consola {blank2} a hora de deitar chegou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "porém"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "O primeiro indica as ações simultâneas dos irmãos, o segundo explica a vitória e o terceiro indica tempo."
    },
    {
      template: "A família estendeu a toalha xadrez {blank0} o sol brilhava no parque.<br><br>O lanche estava muito farto, {blank1} tinha fruta, sumos e bolos.<br><br>Nós arrumámos o espaço {blank2} o entardecer começou.",
      blanks: [
        { id: "blank0", correto: "quando", opcoes: ["quando", "ou seja", "nem"] },
        { id: "blank1", correto: "isto é", opcoes: ["isto é", "enquanto", "mas"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "O primeiro indica o tempo de sol, o segundo explica a ementa do lanche e o terceiro indica o momento de arrumar."
    },
    {
      template: "O Tomás misturou o azul com o amarelo {blank0} pintava a tela.<br><br>Ele obteve a cor verde, {blank1} conseguiu o tom que desejava.<br><br>Ele limpou os pincéis {blank2} o quadro secou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "contudo"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "também"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "O primeiro indica ações ao mesmo tempo, o segundo explica a cor obtida e o terceiro indica tempo."
    },
    {
      template: "A Leonor olhou pela lente {blank0} a noite estava escura.<br><br>Ela avistou o planeta Saturno, {blank1} viu os anéis brilhantes.<br><br>Nós guardámos o telescópio {blank2} as nuvens taparam o céu.",
      blanks: [
        { id: "blank0", correto: "quando", opcoes: ["quando", "ou seja", "mas"] },
        { id: "blank1", correto: "isto é", opcoes: ["isto é", "enquanto", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Associa a observação noturna, a explicação dos anéis e o fecho devido à entrada de nuvens."
    },
    {
      template: "Nós vimos o enorme esqueleto {blank0} entrámos na sala do museu.<br><br>O dinossauro era de uma espécie rara, {blank1} pertencia ao período Jurássico.<br><br>Nós saímos da exposição {blank2} o guia fez o sinal.",
      blanks: [
        { id: "blank0", correto: "logo que", opcoes: ["logo que", "ou seja", "nem"] },
        { id: "blank1", correto: "isto é", opcoes: ["isto é", "enquanto", "mas"] },
        { id: "blank2", correto: "quando", opcoes: ["quando", "quer dizer", "pois"] }
      ],
      dica: "O primeiro indica a entrada imediata, o segundo explica o período e o terceiro indica o tempo de saída."
    },
    {
      template: "O avô regou a terra preta {blank0} as sementes brotavam.<br><br>O girassol cresceu forte, {blank1} ficou muito alto e bonito.<br><br>Nós colhemos as sementes {blank2} a flor secou no final do outono.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "porém"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Associa a rega simultânea com o brotar, a explicação do crescimento e a colheita no final do outono."
    },
    {
      template: "A Rita disparou a câmara {blank0} o pássaro levantava voo.<br><br>A imagem ficou muito nítida, {blank1} capturou o movimento das asas.<br><br>Nós vimos a fotografia {blank2} o computador ligou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "contudo"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "também"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Identifica a fotografia ao mesmo tempo que o voo, a explicação da nitidez e a visualização imediata."
    },
    {
      template: "O Pedro pedalou pela ciclovia {blank0} os amigos o acompanhavam.<br><br>Eles treinaram para a corrida, {blank1} fizeram um excelente esforço.<br><br>Todos descansaram à sombra {blank2} a tarde terminou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "porém"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "nem"] },
        { id: "blank2", correto: "quando", opcoes: ["quando", "quer dizer", "pois"] }
      ],
      dica: "O primeiro indica o pedalar simultâneo, o segundo explica o esforço e o terceiro indica o tempo de repouso."
    },
    {
      template: "Os atores entraram no palco {blank0} as luzes se acenderam.<br><br>A peça foi muito divertida, {blank1} fez rir toda a plateia.<br><br>Todos nós aplaudimos de pé {blank2} o espetáculo terminou.",
      blanks: [
        { id: "blank0", correto: "quando", opcoes: ["quando", "ou seja", "mas"] },
        { id: "blank1", correto: "isto é", opcoes: ["isto é", "enquanto", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Associa o tempo de acender as luzes, a explicação do riso e o aplauso no final do espetáculo."
    },
    {
      template: "O médico examinou o gatinho {blank0} a dona o acalmava.<br><br>O animal estava saudável, {blank1} tinha muita energia e força.<br><br>Nós regressámos a casa {blank2} a consulta acabou.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "contudo"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "também"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Temos o exame ao mesmo tempo que o carinho, a explicação da saúde e o regresso após a consulta."
    },
    {
      template: "A Maria escolheu um livro {blank0} a chuva caía lá fora.<br><br>A história era fascinante, {blank1} prendeu a sua atenção de imediato.<br><br>Ela começou a ler {blank2} se sentou no cadeirão confortável.",
      blanks: [
        { id: "blank0", correto: "enquanto", opcoes: ["enquanto", "isto é", "porém"] },
        { id: "blank1", correto: "ou seja", opcoes: ["ou seja", "quando", "nem"] },
        { id: "blank2", correto: "logo que", opcoes: ["logo que", "quer dizer", "pois"] }
      ],
      dica: "Associa a leitura simultânea com a chuva, a explicação do interesse e o início da leitura ao sentar."
    }
  ],

  // NÍVEL 4: Pool de 20 frases desafiantes para distinguir MAS (oposição) de MAIS (quantidade) [1.1.3, 1.1.7]
  nivel4: [
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Eu gostava de ir navegar hoje, <span class='destaque-fundo'>______</span> o vento está demasiado forte.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "A frase apresenta uma oposição (ideia contrária) à vontade de navegar."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O pescador trouxe <span class='destaque-fundo'>______</span> peixe hoje do que na semana passada.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica uma quantidade maior de peixe pescado."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Nós chamámos o capitão, <span class='destaque-fundo'>______</span> ele estava muito longe e não ouviu.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta um facto contrário (contraste) ao termos chamado o capitão."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Por favor, coloca <span class='destaque-fundo'>______</span> água fresca na minha garrafa de viagem.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Pretende-se adicionar uma quantidade superior de água."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Eu estudei a rota, <span class='destaque-fundo'>______</span> esqueci-me de verificar a bússola.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta um facto que se opõe ao estudo da rota (ideia de contraste)."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Este navio é o <span class='destaque-fundo'>______</span> rápido de toda a nossa frota portuária.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica superioridade ou intensidade de velocidade."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O mar acalmou à noite, <span class='destaque-fundo'>______</span> os marinheiros continuaram vigilantes.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta um contraste: o mar acalmar, mas a vigilância continuar."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Quero ler <span class='destaque-fundo'>______</span> uma página deste livro de aventuras náuticas.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Significa somar ou adicionar mais uma unidade à leitura."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O pirata procurou o baú, <span class='destaque-fundo'>______</span> não encontrou nenhuma pista.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta uma oposição frustrada à procura do baú."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Tu deves prestar <span class='destaque-fundo'>______</span> atenção às indicações do farol à noite.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica um grau ou quantidade superior de atenção exigida."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O dia estava bonito, <span class='destaque-fundo'>______</span> a água do mar continuava muito fria.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Une as duas ideias com um contraste (sol bonito, mas água fria)."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Nós pescámos <span class='destaque-fundo'>______</span> dez sardinhas na maré de hoje de tarde.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica uma adição de quantidade de peixes."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Eu ouvi o trovão ao longe, <span class='destaque-fundo'>______</span> a chuva não chegou ao cais.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta um facto contrário ao esperado após ouvir o trovão."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O capitão é o homem <span class='destaque-fundo'>______</span> experiente destas águas frias.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica superioridade ou intensidade de experiência."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Eu tentei avistar a costa, <span class='destaque-fundo'>______</span> a neblina tapou todo o horizonte.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Mostra uma oposição em relação à tentativa de ver a costa."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Precisamos de comprar <span class='destaque-fundo'>______</span> cordas para amarrar o barco ao cais.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Pretende-se uma quantidade superior de cordas."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O jantar estava delicioso, <span class='destaque-fundo'>______</span> o cozinheiro fez pouca quantidade.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta uma oposição (saboroso, mas em pouca quantidade)."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'Nós queremos correr <span class='destaque-fundo'>______</span> dez metros na praia hoje.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica uma adição de distância."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'O vento acalmou um pouco, <span class='destaque-fundo'>______</span> a viagem continuou lenta.'",
      opcoes: ["mas", "mais"],
      correta: "mas",
      dica: "Apresenta um contraste em relação à acalmia do vento."
    },
    {
      pergunta: "Completa a frase de forma correta:<br><br> 'A pequena marinheira é a <span class='destaque-fundo'>______</span> corajosa de toda a tripulação.'",
      opcoes: ["mas", "mais"],
      correta: "mais",
      dica: "Indica intensidade máxima ou superioridade de coragem."
    }
  ]
};