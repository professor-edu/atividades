/* ==========================================================================
   BASE DE DADOS: SUPER REVISÃO DE PORTUGUÊS (2º ANO - 46 QUESTÕES)
   ========================================================================== */

const questoesRevisao = [
    // ==========================================================================
    // MINIJOGO 1: Graus dos Nomes (Grandezas e Pequenez - 11 Questões)
    // ==========================================================================
    {
        minijogo: 1,
        pergunta: "Completa com o <span class='destaque-texto'>artigo e grau</span> adequados:<br><br>«Ontem, no zoológico, vi um <span class='destaque-fundo'>___</span> (leão) gigante.»",
        palavraRef: "leao",
        quantidade: 1,
        opcoes: ["leãozinho", "leão", "leãozarrão"],
        correta: "leãozarrão",
        dica: "Representa um leão muito grande. Termina com uma terminação especial."
    },
    {
        minijogo: 1,
        pergunta: "Qual é o <span class='destaque-texto'>diminutivo</span> correto da palavra abelha?",
        palavraRef: "abelha",
        quantidade: 1,
        opcoes: ["abelhaço", "abelhinha", "abelhona"],
        correta: "abelhinha",
        dica: "Indica uma abelha muito pequena ou delicada."
    },
    {
        minijogo: 1,
        pergunta: "Na frase «O avô tem um <span class='destaque-fundo'>carro</span> grande.», qual é o aumentativo correto da palavra destacada?",
        palavraRef: "carro",
        quantidade: 1,
        opcoes: ["carrinho", "carrão", "carro"],
        correta: "carrão",
        dica: "Termina com a terminação típica de grandeza '-ão'."
    },
    {
        minijogo: 1,
        pergunta: "«A boneca vive numa <span class='destaque-fundo'>casinha</span> de brincar.»<br><br>Em que grau está a palavra destacada?",
        palavraRef: "casa",
        quantidade: 1,
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Diminutivo",
        dica: "A terminação '-inha' serve para reduzir o tamanho real do nome."
    },
    {
        minijogo: 1,
        pergunta: "«Aquele <span class='destaque-fundo'>gatão</span> dorme no telhado.»<br><br>Em que grau está a palavra destacada?",
        palavraRef: "gato",
        quantidade: 1,
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "O sufixo '-ão' indica que o gato é de grande porte."
    },
    {
        minijogo: 1,
        pergunta: "Seleciona a opção que <span class='destaque-texto'>só inclui</span> nomes no grau aumentativo (grandeza):",
        opcoes: ["bocarra, casarão, canzarrão", "pedregulho, dedinho, homem", "papelucho, pedra, tesourão"],
        correta: "bocarra, casarão, canzarrão",
        dica: "Procura o grupo onde todas as palavras indicam tamanho grande."
    },
    {
        minijogo: 1,
        pergunta: "Seleciona a opção que <span class='destaque-texto'>só inclui</span> nomes no grau diminutivo (pequenez):",
        opcoes: ["gotinha, peixinho, livrito", "mesa, cãozarrão, peixe", "papelão, porta, caneta"],
        correta: "gotinha, peixinho, livrito",
        dica: "Procura o grupo onde todas as palavras indicam tamanho reduzido."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>livro</span> está em que grau?",
        palavraRef: "livro",
        quantidade: 1,
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Normal",
        dica: "Representa o objeto no seu estado natural e tamanho comum."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>portão</span> está em que grau?",
        palavraRef: "porta",
        quantidade: 1,
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "É uma porta de grande dimensão, usada para entradas de quintas ou garagens."
    },
    {
        minijogo: 1,
        pergunta: "Qual é o <span class='destaque-texto'>diminutivo</span> correto de caneta?",
        palavraRef: "caneta",
        quantidade: 1,
        opcoes: ["canetinha", "canetona", "caneta"],
        correta: "canetinha",
        dica: "Usa o sufixo tradicional '-inha' para encolher a palavra."
    },
    {
        minijogo: 1,
        pergunta: "Qual é o <span class='destaque-texto'>aumentativo</span> correto de sapo?",
        palavraRef: "sapo",
        quantidade: 1,
        opcoes: ["sapinho", "sapo", "saparrão"],
        correta: "saparrão",
        dica: "É um sapo muito grande! Termina com o sufixo especial '-arrão'."
    },

    // ==========================================================================
    // MINIJOGO 2: Classes de Palavras (Nome, Verbo e Adjetivo - 11 Questões)
    // ==========================================================================
    {
        minijogo: 2,
        pergunta: "«O <span class='destaque-fundo'>palhaço</span> do circo é muito engraçado.»<br><br>A palavra destacada pertence a que classe?",
        palavraRef: "palhaco",
        quantidade: 1,
        opcoes: ["Nome (Substantivo)", "Verbo", "Adjetivo"],
        correta: "Nome (Substantivo)",
        dica: "É a palavra que serve para dar nome a esta personagem divertida."
    },
    {
        minijogo: 2,
        pergunta: "«O leão da floresta é muito <span class='destaque-fundo'>forte</span>.»<br><br>A palavra destacada pertence a que classe?",
        palavraRef: "leao",
        quantidade: 1,
        opcoes: ["Nome (Substantivo)", "Verbo", "Adjetivo"],
        correta: "Adjetivo",
        dica: "Indica uma qualidade ou característica do leão."
    },
    {
        minijogo: 2,
        pergunta: "Seleciona a opção que <span class='destaque-texto'>só inclui</span> adjetivos (qualidades):",
        opcoes: ["bonito, calmo, simpático, alegre", "divertido, amoroso, dormir, amigo", "comer, inteligente, gentil, meigo"],
        correta: "bonito, calmo, simpático, alegre",
        dica: "Procura o grupo onde todas as palavras indicam características de algo ou de alguém."
    },
    {
        minijogo: 2,
        pergunta: "Seleciona a opção que <span class='destaque-texto'>só inclui</span> verbos (ações):",
        opcoes: ["correr, saltar, cantar, comer", "bola, correr, feliz, cão", "saltar, bonito, cantar, mesa"],
        correta: "correr, saltar, cantar, comer",
        dica: "Procura o grupo onde todas as palavras indicam coisas que fazemos (ações)."
    },
    {
        minijogo: 2,
        pergunta: "Seleciona a opção que <span class='destaque-texto'>só inclui</span> nomes (substantivos):",
        opcoes: ["escola, gato, caneta, livro", "falar, bonito, rápido, lanche", "gato, correr, belo, cadeira"],
        correta: "escola, gato, caneta, livro",
        dica: "Procura o grupo onde todas as palavras servem para dar nome a seres, objetos ou locais."
    },
    {
        minijogo: 2,
        pergunta: "«A borboleta colorida <span class='destaque-fundo'>voa</span> alto.»<br><br>A palavra destacada é um:",
        palavraRef: "borboleta",
        quantidade: 1,
        opcoes: ["Nome", "Verbo", "Adjetivo"],
        correta: "Verbo",
        dica: "Indica a ação que a borboleta está a realizar."
    },
    {
        minijogo: 2,
        pergunta: "«A laranja que colhemos é muito <span class='destaque-fundo'>doce</span>.»<br><br>A palavra destacada é um:",
        palavraRef: "laranja",
        quantidade: 1,
        opcoes: ["Nome", "Verbo", "Adjetivo"],
        correta: "Adjetivo",
        dica: "É uma característica ou sabor que descreve a laranja."
    },
    {
        minijogo: 2,
        pergunta: "«A <span class='destaque-fundo'>bicicleta</span> nova é azul.»<br><br>A palavra destacada é um:",
        palavraRef: "bicicleta",
        quantidade: 1,
        opcoes: ["Nome", "Verbo", "Adjetivo"],
        correta: "Nome",
        dica: "É o nome de um objeto de transporte e lazer."
    },
    {
        minijogo: 2,
        pergunta: "«O relógio da parede <span class='destaque-fundo'>trabalha</span> muito bem.»<br><br>A palavra destacada é um:",
        palavraRef: "relogio",
        quantidade: 1,
        opcoes: ["Nome", "Verbo", "Adjetivo"],
        correta: "Verbo",
        dica: "Indica a ação ou funcionamento do relógio."
    },
    {
        minijogo: 2,
        pergunta: "«A estrela da noite é muito <span class='destaque-fundo'>brilhante</span>.»<br><br>A palavra destacada é um:",
        palavraRef: "estrela",
        quantidade: 1,
        opcoes: ["Nome", "Verbo", "Adjetivo"],
        correta: "Adjetivo",
        dica: "É uma qualidade da estrela que descreve como ela reluz."
    },
    {
        minijogo: 2,
        pergunta: "«O <span class='destaque-fundo'>sapo</span> salta alto no charco.»<br><br>A palavra destacada é um:",
        palavraRef: "sapo",
        quantidade: 1,
        opcoes: ["Nome", "Verbo", "Adjetivo"],
        correta: "Nome",
        dica: "É o nome que damos a este anfíbio saltitante."
    },

    // ==========================================================================
    // MINIJOGO 3: Tipos de Frase e Pontuação (11 Questões)
    // ==========================================================================
    {
        minijogo: 3,
        pergunta: "«A Rita anda de bicicleta?»<br><br>Que tipo de frase é esta?",
        palavraRef: "bicicleta",
        quantidade: 1,
        opcoes: ["Frase declarativa", "Frase interrogativa", "Frase exclamativa", "Frase imperativa"],
        correta: "Frase interrogativa",
        dica: "Serve para fazer uma pergunta e termina com ponto de interrogação."
    },
    {
        minijogo: 3,
        pergunta: "«Como chove tanto lá fora!»<br><br>Que tipo de frase é esta?",
        palavraRef: "chuva",
        quantidade: 1,
        opcoes: ["Frase declarativa", "Frase interrogativa", "Frase exclamativa", "Frase imperativa"],
        correta: "Frase exclamativa",
        dica: "Exprime uma admiração ou sentimento e termina com ponto de exclamação."
    },
    {
        minijogo: 3,
        pergunta: "«Arruma os teus lápis agora.»<br><br>Que tipo de frase é esta?",
        palavraRef: "lapis",
        quantidade: 3,
        opcoes: ["Frase declarativa", "Frase interrogativa", "Frase exclamativa", "Frase imperativa"],
        correta: "Frase imperativa",
        dica: "Expressa uma ordem, um conselho ou um pedido direto."
    },
    {
        minijogo: 3,
        pergunta: "«O gato dorme tranquilamente no sofá.»<br><br>Que tipo de frase é esta?",
        palavraRef: "gato",
        quantidade: 1,
        opcoes: ["Frase declarativa", "Frase interrogativa", "Frase exclamativa", "Frase imperativa"],
        correta: "Frase declarativa",
        dica: "Dá uma informação de forma simples e direta, terminando com ponto final."
    },
    {
        minijogo: 3,
        pergunta: "Que sinal de pontuação deves usar no final de uma <span class='destaque-texto'>frase interrogativa</span>?",
        opcoes: ["Ponto final (.)", "Ponto de interrogação (?)", "Ponto de exclamação (!)"],
        correta: "Ponto de interrogação (?)",
        dica: "É o sinal que serve para marcar perguntas."
    },
    {
        minijogo: 3,
        pergunta: "Que sinal de pontuação deves usar no final de uma <span class='destaque-texto'>frase exclamativa</span>?",
        opcoes: ["Ponto final (.)", "Ponto de interrogação (?)", "Ponto de exclamação (!)"],
        correta: "Ponto de exclamação (!)",
        dica: "É o sinal que serve para marcar surpresa, admiração ou medo."
    },
    {
        minijogo: 3,
        pergunta: "Que sinal de pontuação indica o início de uma fala de uma personagem num diálogo?",
        opcoes: ["Vírgula (,)", "Dois pontos (:)", "Travessão (—)"],
        correta: "Travessão (—)",
        dica: "É o traço horizontal colocado no início da linha escrita."
    },
    {
        minijogo: 3,
        pergunta: "«Queres beber um copo de água?»<br><br>Esta frase termina com um:",
        palavraRef: "copo",
        quantidade: 1,
        opcoes: ["Ponto final (.)", "Ponto de interrogação (?)", "Ponto de exclamação (!)"],
        correta: "Ponto de interrogação (?)",
        dica: "É uma pergunta direta dirigida a alguém."
    },
    {
        minijogo: 3,
        pergunta: "«O carro corre muito na estrada.»<br><br>Esta frase termina com um:",
        palavraRef: "carro",
        quantidade: 1,
        opcoes: ["Ponto final (.)", "Ponto de interrogação (?)", "Ponto de exclamação (!)"],
        correta: "Ponto final (.)",
        dica: "Dá uma informação simples e direta de uma afirmação."
    },
    {
        minijogo: 3,
        pergunta: "«Que leão tão assustador!»<br><br>Esta frase termina com um:",
        palavraRef: "leao",
        quantidade: 1,
        opcoes: ["Ponto final (.)", "Ponto de interrogação (?)", "Ponto de exclamação (!)"],
        correta: "Ponto de exclamação (!)",
        dica: "Exprime um sentimento forte de susto ou espanto."
    },
    {
        minijogo: 3,
        pergunta: "«Dá pasto à cabra.»<br><br>Que tipo de frase é esta?",
        palavraRef: "cabra",
        quantidade: 1,
        opcoes: ["Frase declarativa", "Frase interrogativa", "Frase exclamativa", "Frase imperativa"],
        correta: "Frase imperativa",
        dica: "Dá uma instrução ou conselho sobre o que fazer com o animal."
    },

    // ==========================================================================
    // MINIJOGO 4: Laboratório de Adjetivos (Escrita - 13 Questões)
    // ==========================================================================
    {
        minijogo: 4,
        pergunta: "Completa a frase com o adjetivo de <span class='destaque-texto'>sabor</span>:<br><br>«A maçã vermelha está muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "maca",
        quantidade: 1,
        opcoes: [], // Não usa opções, o aluno digita no teclado!
        correta: "saborosa",
        dica: "Deriva da palavra 'sabor' e concorda com o nome feminino 'maçã'."
    },
    {
        minijogo: 4,
        pergunta: "Completa a frase com o adjetivo de <span class='destaque-texto'>grandeza</span>:<br><br>«A casa nova é muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "casa",
        quantidade: 1,
        opcoes: [],
        correta: "grande",
        dica: "É o contrário de 'pequena' e refere-se à dimensão da moradia."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>brilho</span>:<br><br>«O sol de verão está muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "sol",
        quantidade: 1,
        opcoes: [],
        correta: "brilhante",
        dica: "Deriva de 'brilho' e refere-se ao estado reluzente do sol."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>simpatia</span>:<br><br>«A nova aluna da escola foi muito <span class='destaque-fundo'>___</span> com todos.»",
        palavraRef: "aluno",
        quantidade: 1,
        opcoes: [],
        correta: "simpática",
        dica: "Deriva de 'simpatia' e deve concordar com 'aluna' (feminino)."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>alegria</span>:<br><br>«A nossa escola nova é muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "escola",
        quantidade: 1,
        opcoes: [],
        correta: "alegre",
        dica: "Deriva de 'alegria' e refere-se à felicidade ou diversão do local."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>limpeza</span>:<br><br>«O caderno do Afonso está muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "caderno",
        quantidade: 1,
        opcoes: [],
        correta: "limpo",
        dica: "Deriva de 'limpeza' e indica que não tem sujidade."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>rapidez</span>:<br><br>«A zebra africana é uma corredora muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "zebra",
        quantidade: 1,
        opcoes: [],
        correta: "rápida",
        dica: "Deriva de 'rapidez' e concorda com 'corredora' (feminino)."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>interesse</span>:<br><br>«Este livro de histórias é muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "livro",
        quantidade: 1,
        opcoes: [],
        correta: "interessante",
        dica: "Deriva de 'interesse' e indica que capta muito a nossa atenção."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>velocidade</span>:<br><br>«O coelhinho fugiu de forma muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "coelho",
        quantidade: 1,
        opcoes: [],
        correta: "veloz",
        dica: "Deriva de 'velocidade' e significa rápido ou célere."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>doçura</span>:<br><br>«O chocolate quente é muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "chocolate",
        quantidade: 1,
        opcoes: [],
        correta: "doce",
        dica: "Deriva de 'doçura' e refere-se ao sabor açucarado."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>perigo</span>:<br><br>«Algumas aranhas do mato são muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "aranha",
        quantidade: 1,
        opcoes: [],
        correta: "perigosas",
        dica: "Deriva de 'perigo' e deve concordar com 'aranhas' (feminino plural)."
    },
    {
        minijogo: 4,
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>peso</span>:<br><br>«A mochila azul está muito <span class='destaque-fundo'>___</span>.»",
        palavraRef: "mochila",
        quantidade: 1,
        opcoes: [],
        correta: "pesada",
        dica: "Deriva de 'peso' e concorda com 'mochila' (feminino singular)."
    },
    {
        pergunta: "Completa com o adjetivo de <span class='destaque-texto'>beleza</span>:<br><br>«Para o quadro ficar <span class='destaque-fundo'>___</span> temos de ser criativos.»",
        opcoes: [],
        correta: "belo",
        dica: "Deriva da palavra 'beleza' e concorda com o nome 'quadro'."
    }
];