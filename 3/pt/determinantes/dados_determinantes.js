/* =========================================================================
   BASE DE DADOS - DETERMINANTES POSSESSIVOS E DEMONSTRATIVOS (3.º ANO) [1.1.2]
   ========================================================================= */

const dbDeterminantes = {
  // NÍVEL 1: 12 Determinantes Demonstrativos para análise de Género e Número [1.1.2]
	nivel1: [
	  { palavra: "ESTE", genero: "masculino", numero: "singular", dica: "Aponta para um único objeto que está perto de quem fala, como 'este livro'." },
	  { palavra: "ESTA", genero: "feminino", numero: "singular", dica: "Aponta para um único objeto que está perto de quem fala, como 'esta caneta'." },
	  { palavra: "ESTES", genero: "masculino", numero: "plural", dica: "Aponta para vários objetos que estão perto de quem fala, como 'estes livros'." },
	  { palavra: "ESTAS", genero: "feminino", numero: "plural", dica: "Aponta para vários objetos que estão perto de quem fala, como 'estas canetas'." },
	  { palavra: "ESSE", genero: "masculino", numero: "singular", dica: "Aponta para um único objeto que está perto de quem ouve, como 'esse casaco'." },
	  { palavra: "ESSA", genero: "feminino", numero: "singular", dica: "Aponta para um único objeto que está perto de quem ouve, como 'essa cadeira'." },
	  { palavra: "ESSES", genero: "masculino", numero: "plural", dica: "Aponta para vários objetos que estão perto de quem ouve, como 'esses casacos'." },
	  { palavra: "ESSAS", genero: "feminino", numero: "plural", dica: "Aponta para vários objetos que estão perto de quem ouve, como 'essas cadeiras'." },
	  { palavra: "AQUELE", genero: "masculino", numero: "singular", dica: "Aponta para um único objeto que está longe de ambos, como 'aquele avião'." },
	  { palavra: "AQUELA", genero: "feminino", numero: "singular", dica: "Aponta para um único objeto que está longe de ambos, como 'aquela estrela'." },
	  { palavra: "AQUELES", genero: "masculino", numero: "plural", dica: "Aponta para vários objetos que estão longe de ambos, como 'aqueles aviões'." },
	  { palavra: "AQUELAS", genero: "feminino", numero: "plural", dica: "Aponta para vários objetos que estão longe de ambos, como 'aquelas estrelas'." }
	],

  // NÍVEL 2: 10 Adivinhas Originais com Possessivos e Demonstrativos misturados [1.1.2]
nivel2: [
  {
    id: "adivinhaChuva",
    texto: "Olha para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> céu cinzento.<br>As <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='minhas'>minhas</span> gotas caem sem parar.<br>Eu rego a <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='tua'>tua</span> horta com <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='esta'>esta</span> água fresca.",
    alvos: ["aquele", "minhas", "tua", "esta"],
    resposta: "chuva",
    dica: "A água cai de um local distante e rega a horta perto de ti com água que está na minha mão."
  },
  {
    id: "adivinhaSol",
    texto: "Olha para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='este'>este</span> horizonte de manhã.<br>Com o <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='meu'>meu</span> calor aqueço o teu dia.<br>Se olhares para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> céu azul, vais ver o <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='meu'>meu</span> brilho forte.",
    alvos: ["este", "meu", "aquele", "meu"],
    resposta: "sol",
    dica: "O astro brilha muito no céu e dá-nos o seu calor no dia a dia."
  },
  {
    id: "adivinhaLivro",
    texto: "Eu guardo as <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='tuas'>tuas</span> histórias preferidas.<br>Lê <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='esta'>esta</span> capa colorida que trago.<br>Nas <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='minhas'>minhas</span> páginas viajas para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> mundo de fantasia.",
    alvos: ["tuas", "esta", "minhas", "aquele"],
    resposta: "livro",
    dica: "Guarda folhas escritas e capas que lês para viajar no pensamento."
  },
  {
    id: "adivinhaComboio",
    texto: "Vês <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> caminho de ferro?<br>O <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='nosso'>nosso</span> maquinista experiente conduz com atenção.<br>Eu levo as <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='vossas'>vossas</span> malas durante <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='esta'>esta</span> viagem rápida.",
    alvos: ["aquele", "nosso", "vossas", "esta"],
    resposta: "comboio",
    dica: "Corre sobre carris metálicos e apita nas estações do percurso."
  },
  {
    id: "adivinhaVento",
    texto: "Não tenho mãos mas sei empurrar.<br>Com o <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='meu'>meu</span> sopro invisível agito <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='estas'>estas</span> folhas.<br>Afasto <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquela'>aquela</span> nuvem cinzenta com a <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='minha'>minha</span> força.",
    alvos: ["meu", "estas", "aquela", "minha"],
    resposta: "vento",
    dica: "Sopra com força invisível nas folhas das árvores e move os barcos."
  },
  {
    id: "adivinhaMar",
    texto: "Vês <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> horizonte azul?<br>Na <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='minha'>minha</span> praia guardo conchas e as <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='tuas'>tuas</span> pegadas sobre <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='esta'>esta</span> areia dourada.",
    alvos: ["aquele", "minha", "tuas", "esta"],
    resposta: "mar",
    dica: "Contém água salgada, peixes, ondas e cobre grande parte do nosso planeta."
  },
  {
    id: "adivinhaLua",
    texto: "Olha para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='este'>este</span> céu escuro à noite.<br>Com a <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='minha'>minha</span> luz prateada ilumino <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquela'>aquela</span> colina distante.",
    alvos: ["este", "minha", "aquela"],
    resposta: "lua",
    dica: "Aparece à noite no céu, brilhando de forma prateada ou branca."
  },
  {
    id: "adivinhaArvore",
    texto: "Os <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='meus'>meus</span> ramos abrigam os ninhos dos pássaros.<br>Com a <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='nossa'>nossa</span> sombra protegemos <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> bosque fresco durante <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='esta'>esta</span> estação quente.",
    alvos: ["meus", "nossa", "aquele", "esta"],
    resposta: "árvore",
    dica: "Tem folhas verdes, ramos de madeira, raízes na terra e dá-nos oxigénio."
  },
  {
    id: "adivinhaRelogio",
    texto: "Olha para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='este'>este</span> mostrador redondo.<br>Eu marco o <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='teu'>teu</span> tempo e as horas do <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='teu'>teu</span> dia sobre <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquela'>aquela</span> parede distante.",
    alvos: ["este", "teu", "teu", "aquela"],
    resposta: "relógio",
    dica: "Tem ponteiros que andam em círculo para marcar os minutos e as horas."
  },
  {
    id: "adivinhaEspelho",
    texto: "Se olhares para <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='este'>este</span> vidro liso, vais ver a <span class='palavra-secreta-l2' data-tipo='possessivo' data-palavra='tua'>tua</span> imagem refletida.<br>Mas se perderes <span class='palavra-secreta-l2' data-tipo='demonstrativo' data-palavra='aquele'>aquele</span> reflexo, ele desaparece.",
    alvos: ["este", "tua", "aquele"],
    resposta: "espelho",
    dica: "Reflete perfeitamente tudo o que for colocado à sua frente."
  }
],

// NÍVEL 3: 10 Cenários de Proximidade e Distância (Demonstrativos)
  nivel3: [
    {
      template: "Guarda {blank0} estojo que está aí ao teu lado, por favor.<br><br>{blank1} lápis que tenho na minha mão escreve muito bem.",
      blanks: [
        { id: "blank0", correto: "esse", opcoes: ["este", "esse", "aquele"] },
        { id: "blank1", correto: "Este", opcoes: ["Este", "Esse", "Aquele"] }
      ],
      dica: "Para objetos perto de quem ouve usa-se 'esse'. Para objetos perto de quem fala usa-se 'Este'."
    },
    {
      template: "{blank0} conchas aqui no chão são tão bonitas.<br><br>Olha para {blank1} gaivotas que voam lá longe, quase a tocar nas nuvens.",
      blanks: [
        { id: "blank0", correto: "Estas", opcoes: ["Estas", "Essas", "Aquelas"] }, 
        { id: "blank1", correto: "aquelas", opcoes: ["estas", "essas", "aquelas"] } 
      ],
      dica: "As conchas estão perto de quem fala (estas). As gaivotas estão muito afastadas de ambos (aquelas)."
    },
    {
      template: "Tu trazes {blank0} sapatos pretos calçados nos teus pés?<br><br>Olha {blank1} rapazes que correm lá ao fundo na areia.",
      blanks: [
        { id: "blank0", correto: "esses", opcoes: ["estes", "esses", "aqueles"] },
        { id: "blank1", correto: "aqueles", opcoes: ["estes", "esses", "aqueles"] }
      ],
      dica: "Os sapatos estão perto de quem ouve (esses). Os rapazes encontram-se distantes de ambos (aqueles)."
    },
    {
      template: "É muito antiga {blank0} caravela onde estamos a passear.<br><br>Mas {blank1} ilha que vemos ao longe parece deserta.",
      blanks: [
        { id: "blank0", correto: "esta", opcoes: ["esta", "essa", "aquela"] },
        { id: "blank1", correto: "aquela", opcoes: ["esta", "essa", "aquela"] }
      ],
      dica: "A caravela é onde nós estamos (esta). A ilha está situada a grande distância de nós (aquela)."
    },
    {
      template: "Vês {blank0} peixinho que nada aqui perto da minha mão?<br><br>Lá ao fundo, {blank1} peixe é bem maior.",
      blanks: [
        { id: "blank0", correto: "este", opcoes: ["este", "esse", "aquele"] },
        { id: "blank1", correto: "aquele", opcoes: ["este", "esse", "aquele"] }
      ],
      dica: "O peixinho está muito perto de quem fala (este). O peixe maior encontra-se a grande distância (aquele)."
    },
    {
      template: "Por favor, arruma {blank0} livros que estão aí na tua secretária.<br><br>{blank1} armário ao fundo da sala é onde devem estar.",
      blanks: [
        { id: "blank0", correto: "esses", opcoes: ["estes", "esses", "aqueles"] },
        { id: "blank1", correto: "Aquele", opcoes: ["Este", "Esse", "Aquele"] }
      ],
      dica: "Os livros encontram-se junto de quem ouve (esses). O armário está distante de ambos (aquele)."
    },
    {
      template: "Experimenta {blank0} sopa deliciosa que acabo de cozinhar aqui no meu tacho.<br><br>Depois, come também {blank1} sobremesa que tens aí no teu prato.",
      blanks: [
        { id: "blank0", correto: "esta", opcoes: ["esta", "essa", "aquela"] },
        { id: "blank1", correto: "essa", opcoes: ["esta", "essa", "aquela"] }
      ],
      dica: "A sopa está junto de quem fala (esta). A sobremesa está junto de quem ouve (essa)."
    },
    {
      template: "Gosto muito de usar {blank0} relógio que trago no meu pulso.<br><br>Ele foi-me oferecido por {blank1} tio meu que mora lá longe na América.",
      blanks: [
        { id: "blank0", correto: "este", opcoes: ["este", "esse", "aquele"] },
        { id: "blank1", correto: "aquele", opcoes: ["este", "esse", "aquele"] }
      ],
      dica: "O relógio está no pulso de quem fala (este). O tio reside a uma grande distância física (aquele)."
    },
    {
      template: "Adoro {blank0} óculos de sol que comprei aqui na loja onde estou.<br><br>Eles protegem muito mais do que {blank1} óculos antigos que perdi no ano passado.",
      blanks: [
        { id: "blank0", correto: "estes", opcoes: ["estes", "esses", "aqueles"] },
        { id: "blank1", correto: "aqueles", opcoes: ["estes", "esses", "aqueles"] }
      ],
      dica: "Os óculos novos estão na mão de quem fala (estes). Os óculos perdidos estão distantes no passado (aqueles)."
    },
    {
      template: "{blank0} praia onde estamos deitados é fantástica.<br><br>Mas {blank1} falésia distante seria um cenário ainda mais bonito.",
      blanks: [
        { id: "blank0", correto: "Esta", opcoes: ["Esta", "Essa", "Aquela"] },
        { id: "blank1", correto: "aquela", opcoes: ["esta", "essa", "aquela"] }
      ],
      dica: "A praia é o local onde nós estamos neste momento (esta). A falésia está visivelmente distante (aquela)."
    }
  ],

  // NÍVEL 4: 15 Perguntas de escolha múltipla (Quiz de Possessivos) [1.1.2]
  nivel4: [
    {
      pergunta: "Seleciona a frase que contém um <span class='destaque-fundo'>determinante possessivo</span> no <span class='destaque-texto'>feminino plural</span>.",
      opcoes: [
        "As minhas conchas são muito brilhantes.",
        "O teu barco de pesca é azul.",
        "Nós vimos o farol ao longe.",
        "Aquelas gaivotas voam alto no céu."
      ],
      correta: "As minhas conchas são muito brilhantes.",
      dica: "Procura a palavra que indica posse de elementos femininos e no plural."
    },
    {
      pergunta: "Classifica a seguinte afirmação: <br><br>A palavra <span class='destaque-texto'>vosso</span> é um determinante possessivo.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Verdadeira",
      dica: "A palavra indica que algo pertence à segunda pessoa do plural (vós)."
    },
    {
      pergunta: "Completa a frase:<br><br>A Ana arrumou o <span class='destaque-fundo'>______</span> caderno de notas na mochila.",
      opcoes: ["teu", "seu", "meu", "nossos"],
      correta: "seu",
      dica: "A Ana representa a terceira pessoa do singular (ela). O possessivo deve concordar."
    },
    {
      pergunta: "Classifica a seguinte afirmação:<br><br> Na frase <span class='destaque-fundo'>Esta é a minha escola.</span>, a palavra <span class='destaque-texto'>Esta</span> é um determinante possessivo.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Falsa",
      dica: "A palavra 'Esta' indica uma proximidade física, sendo um determinante demonstrativo."
    },
    {
      pergunta: "Seleciona a opção em que todos os elementos pertencem aos <span class='destaque-fundo'>determinantes possessivos</span>.",
      opcoes: [
        "meu, teu, nosso",
        "este, aquele, esse",
        "sim, não, certamente",
        "um, dois, metade"
      ],
      correta: "meu, teu, nosso",
      dica: "Identifica a lista de palavras que indicam a quem pertence um objeto."
    },
    {
      pergunta: "Classifica a seguinte afirmação:<br><br> Os <span class='destaque-fundo'>determinantes possessivos</span> variam em <span class='destaque-texto'>género</span> e em <span class='destaque-texto'>número</span>.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Verdadeira",
      dica: "Verifica as variações de género (meu/minha) e número (meu/meus)."
    },
    {
      pergunta: "Na frase <span class='destaque-fundo'>Os marinheiros limparam o nosso convés.</span>, qual é o <span class='destaque-texto'>determinante possessivo</span>?",
      opcoes: ["Os", "nosso", "convés", "limparam"],
      correta: "nosso",
      dica: "Procura a palavra que estabelece a posse do convés em relação à tripulação."
    },
    {
      pergunta: "Classifica a seguinte afirmação:<br><br> A palavra <span class='destaque-fundo'>aquele</span> é um <span class='destaque-texto'>determinante possessivo de distância</span>.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Falsa",
      dica: "A palavra indica distância, mas pertence à classe dos determinantes demonstrativos."
    },
    {
      pergunta: "Completa a frase:<br><br> Tu e a tua irmã arrumaram as <span class='destaque-fundo'>______</span> malas de viagem?",
      opcoes: ["vossas", "vossos", "teus", "meus"],
      correta: "vossas",
      dica: "O sujeito indica a segunda pessoa do plural (vós). O possessivo deve concordar com 'malas'."
    },
    {
      pergunta: "Classifica a seguinte afirmação:<br><br>Na frase <span class='destaque-fundo'>O meu cão corre muito.</span>, a palavra <span class='destaque-texto'>meu</span> concorda em género e número com o nome <span class='destaque-texto'>cão</span>.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Verdadeira",
      dica: "Tanto o determinante como o nome encontram-se no masculino singular."
    },
    {
      pergunta: "Seleciona a frase que contém um <span class='destaque-fundo'>determinante possessivo na primeira pessoa do plural</span>.",
      opcoes: [
        "Nós navegamos na nossa caravela.",
        "O teu barco é muito rápido.",
        "Eles limparam o seu camarote.",
        "Eu pesquei a minha lula no cais."
      ],
      correta: "Nós navegamos na nossa caravela.",
      dica: "A primeira pessoa do plural é 'nós'. O possessivo correspondente indica essa posse."
    },
    {
      pergunta: "Classifica a seguinte afirmação:<br><br> A palavra <span class='destaque-fundo'>suas</span> é um <span class='destaque-texto'>determinante possessivo na terceira pessoa do plural</span>.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Verdadeira",
      dica: "A palavra refere-se a elementos que pertencem a eles ou a elas."
    },
    {
      pergunta: "Completa a frase:<br><br>Eu perdi as <span class='destaque-fundo'>______</span> chaves na praia ontem à tarde.'",
      opcoes: ["minhas", "meus", "tua", "nossas"],
      correta: "minhas",
      dica: "O sujeito é 'Eu' (primeira pessoa do singular) e o nome 'chaves' é feminino plural."
    },
    {
      pergunta: "Classifica a afirmação:<br><br> Os determinantes concordam em género e número com o nome que acompanham.",
      opcoes: ["Verdadeira", "Falsa"],
      correta: "Verdadeira",
      dica: "Esta é a regra de flexão de determinantes com nomes."
    },
    {
      pergunta: "Na frase <span class='destaque-fundo'>O teu mapa indica o caminho correto.</span>, qual é o <span class='destaque-texto'>determinante possessivo</span>?",
      opcoes: ["O", "teu", "mapa", "caminho"],
      correta: "teu",
      dica: "Procura a palavra que determina a quem pertence o mapa."
    }
  ]
};