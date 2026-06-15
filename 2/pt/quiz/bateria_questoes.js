/* =========================================================
   BASE DE DADOS: MEGA REVISÃO - PORTUGUÊS 2º ANO
   ========================================================= */

const perguntasRevisaoPT = [
    // --- NOMES: PRÓPRIOS E COMUNS ---
    { categoria: "Gramática", pergunta: "Qual destas palavras é um <span class='destaque-fundo'>Nome Próprio</span>", opcoes: ["menina", "Portugal", "cidade"], correta: "Portugal", dica: "Escreve-se com letra inicial maiúscula porque é o nome de um país!" },
    { categoria: "Gramática", pergunta: "Qual destas palavras é um <span class='destaque-fundo'>Nome Comum</span>?", opcoes: ["Lisboa", "Tejo", "gato"], correta: "gato", dica: "É o nome que damos a todos os animais dessa espécie." },
    { categoria: "Gramática", pergunta: "<span class='destaque-texto'>O Afonso tem um cão.</span><br><br>Qual é o <span class='destaque-fundo'>Nome Próprio</span>?", opcoes: ["cão", "Afonso", "tem"], correta: "Afonso", dica: "É o nome da pessoa." },
    
    // --- VERBOS E ADJETIVOS ---
    { categoria: "Gramática", pergunta: "A palavra <span class='destaque-fundo'>correr</span> é um...", opcoes: ["Verbo", "Adjetivo", "Nome"], correta: "Verbo", dica: "Indica uma ação, algo que nós fazemos!" },
    { categoria: "Gramática", pergunta: "Na frase <span class='destaque-texto'>A maçã é doce.</span>, qual é o <span class='destaque-fundo'>Adjetivo</span>?", opcoes: ["maçã", "A", "doce"], correta: "doce", dica: "É a palavra que dá uma qualidade ou característica à maçã." },
    { categoria: "Gramática", pergunta: "<span class='destaque-fundo'>Ontem, a Maria cantou.</span><br><br>", opcoes: ["Está a acontecer", "Já aconteceu", "Ainda vai acontecer"], correta: "Já aconteceu", dica: "Se aconteceu «ontem», já passou! É passado!" },
    { categoria: "Gramática", pergunta: "Qual destas palavras é um <span class='destaque-fundo'>Adjetivo</span>?", opcoes: ["lindo", "mesa", "saltar"], correta: "lindo", dica: "Diz como é que uma pessoa ou coisa é." },

    // --- SINÓNIMOS (SIGNIFICADO IGUAL) ---
    { categoria: "Vocabulário", pergunta: "Qual é o <span class='destaque-fundo'>sinónimo</span> (significa o mesmo) de <span class='destaque-texto'>alegre</span>?", opcoes: ["triste", "contente", "zangado"], correta: "contente", dica: "Quando não estás triste, estás..." },
    { categoria: "Vocabulário", pergunta: "O <span class='destaque-fundo'>sinónimo</span> de <span class='destaque-texto'>rápido</span> é...", opcoes: ["veloz", "lento", "devagar"], correta: "veloz", dica: "Um carro de Fórmula 1 é muito..." },
    { categoria: "Vocabulário", pergunta: "Um <span class='destaque-fundo'>sinónimo</span> para <span class='destaque-texto'>enorme</span> é...", opcoes: ["pequeno", "gigante", "fino"], correta: "gigante", dica: "É uma coisa muito, muito grande!" },
    { categoria: "Vocabulário", pergunta: "O <span class='destaque-fundo'>sinónimo</span> de <span class='destaque-texto'>saltar</span> é...", opcoes: ["andar", "correr", "pular"], correta: "pular", dica: "É tirar os dois pés do chão ao mesmo tempo." },

    // --- ANTÓNIMOS (SIGNIFICADO CONTRÁRIO) ---
    { categoria: "Vocabulário", pergunta: "Qual é o <span class='destaque-fundo>'>antónimo</span> (contrário) de <span class='destaque-texto'>grande</span>?", opcoes: ["pequeno", "largo", "enorme"], correta: "pequeno", dica: "Um rato ao pé de um elefante é..." },
    { categoria: "Vocabulário", pergunta: "O <span class='destaque-fundo'>antónimo</span> de <span class='destaque-texto'>chorar</span> é...", opcoes: ["rir", "gritar", "dormir"], correta: "rir", dica: "Quando nos contam uma anedota, nós costumamos..." },
    { categoria: "Vocabulário", pergunta: "Qual é o <span class='destaque-fundo'>antónimo</span> de <span class='destaque-texto'>feio</span>?", opcoes: ["horrível", "bonito", "mau"], correta: "bonito", dica: "Uma princesa de um conto de fadas costuma ser..." },
    { categoria: "Vocabulário", pergunta: "O <span class='destaque-fundo'>antónimo</span> de <span class='destaque-texto'>frio</span> é...", opcoes: ["gelado", "quente", "neve"], correta: "quente", dica: "O fogo não é frio, o fogo é..." },

    // --- SÍLABAS E DIVISÃO SILÁBICA ---
    { categoria: "Sílabas", pergunta: "Quantas sílabas tem a palavra <span class='destaque-texto'>computador</span>?", opcoes: ["4", "3", "5"], correta: "4", dica: "Bate palmas para cada pedacinho: com-pu-ta-dor." },
    { categoria: "Sílabas", pergunta: "Como se divide corretamente a palavra <span class='destaque-texto'>borboleta</span>?", opcoes: ["borb-ole-ta", "bor-bo-le-ta", "bo-rbo-le-ta"], correta: "bor-bo-le-ta", dica: "Bate as palmas e chama a palavra." },
    { categoria: "Sílabas", pergunta: "Quantas sílabas tem a palavra <span class='destaque-texto'>sol</span>?", opcoes: ["1", "2", "3"], correta: "1", dica: "Lê-se tudo de uma só vez, sem parar!" },
    { categoria: "Sílabas", pergunta: "Qual é a <span class='destaque-fundo'>sílaba tónica</span> (mais forte) de <span class='destaque-texto'>café</span>?", opcoes: ["ca", "fé", "af"], correta: "fé", dica: "Repara onde está o acento!" },
    { categoria: "Sílabas", pergunta: "Como se divide em <span class='destaque-fundo'>sílabas</span> a palavra <span class='destaque-texto'>carro</span>?", opcoes: ["ca-rro", "car-ro", "carr-o"], correta: "ca-rro", dica: "Na divisão por sílabas, os dois 'rr' fazem parte do mesmo som. Nunca se separam!" },

    // --- GÉNERO E NÚMERO (MASCULINO/FEMININO, SINGULAR/PLURAL) ---
    { categoria: "Gramática", pergunta: "Qual é o feminino de <span class='destaque-texto'>leão</span>?", opcoes: ["leoa", "leã", "leona"], correta: "leoa", dica: "É a rainha da selva." },
    { categoria: "Gramática", pergunta: "O masculino de <span class='destaque-texto'>ovelha</span> é...", opcoes: ["touro", "carneiro", "cão"], correta: "carneiro", dica: "Tem cornos enrolados e dá muita lã." },
    { categoria: "Gramática", pergunta: "Qual é o plural de <span class='destaque-texto'>cão</span>?", opcoes: ["cãos", "cões", "cães"], correta: "cães", dica: "Muitas raças terminam assim: cã...?" },
    { categoria: "Gramática", pergunta: "Qual é o plural de <span class='destaque-texto'>caracol</span>?", opcoes: ["caracoles", "caracóis", "caracols"], correta: "caracóis", dica: "As palavras terminadas em 'L' mudam para 'is'." },
    { categoria: "Gramática", pergunta: "A palavra <span class='destaque-texto'>lápis</span> está no...", opcoes: ["Singular", "Plural", "Singular e Plural"], correta: "Singular e Plural", dica: "Dizemos 'um lápis' e 'dois lápis'. A palavra não muda!" },

    // --- ORTOGRAFIA (CASOS ESPECIAIS E RASTEIRAS) ---
    { categoria: "Ortografia", pergunta: "Como se escreve corretamente?", opcoes: ["bicicleta", "bicileta", "bicecleta"], correta: "bicicleta", dica: "Pensa na palavra 'ciclo'." },
    { categoria: "Ortografia", pergunta: "Antes de <span class='destaque-fundo'>P</span> e <span class='destaque-fundo'>B</span> escreve-se sempre a letra...", opcoes: ["N", "M", "L"], correta: "M", dica: "Lembra-te da regra do 'M de Maria' antes do 'Pai' e do 'Bebé'." },
    { categoria: "Ortografia", pergunta: "Qual é a palavra que está bem escrita?", opcoes: ["pasarinho", "pássaro", "pácaro"], correta: "pássaro", dica: "Leva acento agudo e dois 'ss'." },
    { categoria: "Ortografia", pergunta: "Completa:<br><br><span class='destaque-texto'>A ca__a do João é azul.</span>", opcoes: ["s", "z", "ss"], correta: "s", dica: "O som é 'Z', mas entre duas vogais escreve-se com..." },
    { categoria: "Ortografia", pergunta: "Completa:<br><br>O <span class='destaque-texto'>__umo</span> está a subir pela chaminé.", opcoes: ["f", "v", "d"], correta: "f", dica: "É cinzento e sai do fogo." },
    { categoria: "Ortografia", pergunta: "Que palavra está escrita corretamente?", opcoes: ["chávena", "xávena", "chavena"], correta: "chávena", dica: "Escreve-se com o mesmo início de 'Chá'." },
    { categoria: "Ortografia", pergunta: "Completa a palavra <span class='destaque-fundo'>P__nguim</span>", opcoes: ["i", "e", "u"], correta: "i", dica: "É uma ave que não voa, vive no gelo e começa com 'Pi'." },
    { categoria: "Ortografia", pergunta: "Qual é a letra que falta? <span class='destaque-fundo'>B__mbom</span> (o doce)", opcoes: ["o", "u", "e"], correta: "o", dica: "É um chocolate muito famoso. B-O-M-B-O-M." }, 
    { categoria: "Ortografia", pergunta: "Completa a palavra com M ou N: <span class='destaque-texto'>Ca__po</span>", opcoes: ["m", "n", "l"], correta: "m", dica: "Lembra-te da regra! Que letra vem a seguir?" },
    { categoria: "Ortografia", pergunta: "Completa a palavra com M ou N: <span class='destaque-texto'>De__te</span>", opcoes: ["n", "m", "nh"], correta: "n", dica: "A seguir vem um 'T'. Não é 'P' nem 'B'!" },

    // --- PONTUAÇÃO ---
    { categoria: "Pontuação", pergunta: "Que sinal usamos no final de uma pergunta?", opcoes: ["!", "?", "."], correta: "?", dica: "Chama-se Ponto de Interrogação." },
    { categoria: "Pontuação", pergunta: "Que sinal usamos para mostrar surpresa, espanto ou grito?", opcoes: ["?", "!", "."], correta: "!", dica: "Chama-se Ponto de Exclamação." },
    { categoria: "Pontuação", pergunta: "A frase <span class='destaque-fundo'>Que bolo delicioso</span> deve terminar com...", opcoes: ["?", "!", "."], correta: "!", dica: "Estás a exclamar, estás admirado com o sabor do bolo." },

    // --- SONS COMPLEXOS (CH, LH, NH, RR, SS) ---
    { categoria: "Ortografia", pergunta: "Qual destas palavras tem o som <span class='destaque-fundo'>NH</span>?", opcoes: ["ninho", "menino", "navio"], correta: "ninho", dica: "É onde os passarinhos põem os ovos." },
    { categoria: "Ortografia", pergunta: "Qual destas palavras tem o som <span class='destaque-fundo'>LH</span>?", opcoes: ["fola", "mola", "folha"], correta: "folha", dica: "Cai da árvore no outono." },
    { categoria: "Ortografia", pergunta: "Se eu quiser um som <span class='destaque-fundo'>FORTE</span> no meio de duas vogais, uso...", opcoes: ["um 'R' apenas", "dois 'RR'", "um 'L'"], correta: "dois 'RR'", dica: "Para escrever 'Carro' precisas de..." },
    { categoria: "Ortografia", pergunta: "Qual destas palavras precisa de <span class='destaque-fundo'>SS</span>?", opcoes: ["Osso", "Ovo", "Mesa"], correta: "Osso", dica: "O cão adora roer isto." },

    // --- DESAFIOS FINAIS DE ATENÇÃO ---
    { categoria: "Gramática", pergunta: "Descobre a palavra <span class='destaque-fundo'>intrusa</span> na família.<br>", opcoes: ["Pão", "Pedra", "Padeiro"], correta: "Pedra", dica: "Qual é a única coisa que não se come nem faz pão?" },
    { categoria: "Gramática", pergunta: "Qual é o feminino de <span class='destaque-fundo'>Herói</span>?", opcoes: ["Heroína", "Heroa", "Heróia"], correta: "Heroína", dica: "A Mulher-Maravilha é uma grande..." },
    { categoria: "Ortografia", pergunta: "Como se escreve o plural de <span class='destaque-fundo'>mão</span>?", opcoes: ["mães", "mãos", "mões"], correta: "mãos", dica: "Bate as palmas com as tuas duas..." },
    { categoria: "Ortografia", pergunta: "A palavra <span class='destaque-fundo'>Hoje</span> começa com que letra?", opcoes: ["O", "H", "J"], correta: "H", dica: "É uma letra muda, não tem som no início da palavra!" },
    { categoria: "Sílabas", pergunta: "Que palavra se forma se juntares: BO + NE + CA ?", opcoes: ["Boca", "Boneca", "Boné"], correta: "Boneca", dica: "É um brinquedo muito querido." },
	
	// --- CLASSIFICAÇÃO SILÁBICA (Monossílabo, Dissílabo, etc.) ---
    { categoria: "Sílabas", pergunta: "Qual destas palavras é um <span class='destaque-fundo'>Monossílabo</span> (tem 1 sílaba)?", opcoes: ["casa", "pé", "gato", "janela"], correta: "pé", dica: "Abre a boca apenas uma vez para a dizer!" },
    { categoria: "Sílabas", pergunta: "Qual destas palavras é um <span class='destaque-fundo'>Dissílabo</span> (tem 2 sílabas)?", opcoes: ["sol", "macaco", "rato", "televisão"], correta: "rato", dica: "Em que palavra bates as palmas duas vezes?" },
    { categoria: "Sílabas", pergunta: "Descobre a palavra <span class='destaque-fundo'>Trissílaba</span> (tem 3 sílabas).", opcoes: ["mão", "girafa", "carro", "luz"], correta: "girafa", dica: "Em que palavra bates as palmas três vezes?" },
    { categoria: "Sílabas", pergunta: "Qual destas palavras é um <span class='destaque-fundo'>Polissílabo</span> (4 ou mais sílabas)?", opcoes: ["elefante", "leão", "urso", "cão"], correta: "elefante", dica: "É a palavra mais comprida." },

    // --- PRONOMES PESSOAIS (Eu, Tu, Ele/Ela, Nós, Vós, Eles/Elas) ---
    { categoria: "Gramática", pergunta: "<span class='destaque-texto'>A Maria e a Ana foram ao parque.</span><br><br>Que <span class='destaque-fundo'>pronome</span> substitui os nomes?", opcoes: ["Elas", "Eles", "Nós", "Vós"], correta: "Elas", dica: "São duas meninas, por isso o pronome está no feminino e no plural." },
    { categoria: "Gramática", pergunta: "<span class='destaque-texto'>Eu e o meu irmão fizemos um bolo.</span><br><br>Seleciona o <span class='destaque-fundo'>pronome</span> correto.", opcoes: ["Eles", "Nós", "Vós", "Tu"], correta: "Nós", dica: "Quando tu estás incluído no grupo, usas a primeira pessoa do plural." },
    { categoria: "Gramática", pergunta: "Substitui corretamente:<br><br> <span class='destaque-texto'>O cão ladrou muito alto.</span>", opcoes: ["Ele ladrou muito alto.", "Nós ladrou muito alto.", "Tu ladrou muito alto."], correta: "Ele ladrou muito alto.", dica: "O cão é um animal no masculino e singular." },

    // --- VERBOS: INFINITIVO E TEMPOS VERBAIS ---
    { categoria: "Gramática", pergunta: "<span class='destaque-texto'>O Pedro saltou o muro.</span><br><br>Qual é o <span class='destaque-fundo'>infinitivo</span> do verbo da frase?", opcoes: ["salto", "saltar", "saltava", "saltitão"], correta: "saltar", dica: "O infinitivo é o 'nome' do verbo, costuma acabar em -ar, -er ou -ir." },
    { categoria: "Gramática", pergunta: "Qual destas frases contém o verbo <span class='destaque-fundo'>ir</span> no passado?", opcoes: ["Eu vou à escola.", "Eu fui ao parque.", "Eu irei à praia."], correta: "Eu fui ao parque.", dica: "Lembra-te: o verbo 'ir' muda muito de forma. Se foi ontem..." },
    { categoria: "Gramática", pergunta: "<span class='destaque-texto'>Nós comeremos a sopa toda.</span><br><br>", opcoes: ["Já aconteceu", "Está a acontecer", "Ainda vai acontecer"], correta: "Ainda vai acontecer", dica: "Ainda não aconteceu, é algo que vamos fazer mais tarde." },
    { categoria: "Gramática", pergunta: "Descobre o <span class='destaque-fundo'>infinitivo</span> do verbo na frase:<br><br> <span class='destaque-texto'>A professora leu uma história.</span>", opcoes: ["ler", "leitura", "lia", "leitor"], correta: "ler", dica: "A ação é o ato de L - -." },

    // --- FONÉTICA (O SOM DAS LETRAS) ---
    { categoria: "Fonética", pergunta: "Em qual destas palavras a letra «O» lê-se com o som «U»?", opcoes: ["porta", "bola", "sapato", "cola"], correta: "sapato", dica: "No final das palavras, o 'O' costuma enganar-nos e disfarça-se de 'U'!" },
    { categoria: "Fonética", pergunta: "Em qual destas palavras a letra «S» tem o som de «Z»?", opcoes: ["sapo", "casa", "sol", "sopa"], correta: "casa", dica: "Quando o 'S' está sozinho entre duas vogais, ganha o som do Zangão." },
    { categoria: "Fonética", pergunta: "Qual destas palavras tem a letra «C» com som de «S»?", opcoes: ["cavalo", "copo", "cenoura", "curioso"], correta: "cenoura", dica: "O 'C' só ganha som de 'S' quando está de mãos dadas com o 'E' ou com o 'I'." },
    { categoria: "Fonética", pergunta: "Em qual palavra o «X» tem o mesmo som que na palavra <span class='destaque-texto'>Exemplo</span>?", opcoes: ["peixe", "exame", "próximo", "caixa"], correta: "exame", dica: "O 'X' aqui soa a 'Z'." },

    // --- VOCABULÁRIO (POLISSEMIA E SENTIDO DAS PALAVRAS) ---
    { categoria: "Vocabulário", pergunta: "<span class='destaque-texto'>Eu sujei a manga da minha camisola.</span><br><br>O que significa <span class='destaque-fundo'>manga</span> aqui?", opcoes: ["Uma fruta deliciosa.", "Uma parte da roupa.", "Uma árvore verde."], correta: "Uma parte da roupa.", dica: "É onde enfias o braço quando te vestes." },
    { categoria: "Vocabulário", pergunta: "<span class='destaque-texto'>O carteiro entregou a carta.</span><br><br>O que significa <span class='destaque-fundo'>carta</span> nesta frase?", opcoes: ["Um papel num jogo de cartas.", "Um documento dentro de um envelope.", "Uma carta de condução."], correta: "Um documento dentro de um envelope.", dica: "Costuma trazer um selo e notícias de alguém." },
    { categoria: "Vocabulário", pergunta: "<span class='destaque-texto'>A folha caiu no outono.</span><br><br>O que significa <span class='destaque-fundo'>folha</span> aqui?", opcoes: ["Um pedaço de papel.", "Uma parte da planta.", "Uma folha de jornal."], correta: "Uma parte da planta.", dica: "Fica amarela e castanha, e cai das árvores." },
    
    // --- ORTOGRAFIA E RASTEIRAS ---
    { categoria: "Ortografia", pergunta: "Qual das frases está escrita corretamente?", opcoes: ["Ele trás o livro na mochila.", "Ele traz o livro na mochila.", "Ele tráz o livro na mochila."], correta: "Ele traz o livro na mochila.", dica: "Quando é do verbo 'trazer', acaba sempre com a letra Z!" },
    { categoria: "Ortografia", pergunta: "Qual das frases está correta?", opcoes: ["Eu vou a escola.", "Eu vou á escola.", "Eu vou à escola."], correta: "Eu vou à escola.", dica: "Quando indica direção/lugar, o 'A' ganha um acento grave (`)." },
    { categoria: "Ortografia", pergunta: "Completa corretamente:<br><br>A formi<span class='destaque-texto'>__</span>a é muito trabalhadora.", opcoes: ["g", "gu", "j"], correta: "g", dica: "Para fazer o som de 'Gato' antes de A, O e U, basta usar o 'G'." },
    { categoria: "Ortografia", pergunta: "Completa corretamente:<br><br>O <span class='destaque-texto'>__</span>eijo é amarelo.", opcoes: ["q", "qu", "c"], correta: "qu", dica: "Para fazer som de 'K' antes do E ou do I, precisamos do U a ajudar!" },
    { categoria: "Ortografia", pergunta: "Qual destas palavras está <span class='destaque-texto'>BEM</span> escrita?", opcoes: ["tampa", "tanpa", "tenpo"], correta: "tampa", dica: "Antes do 'P' ou 'B', usamos sempre o 'M' da Maria!" },
    { categoria: "Ortografia", pergunta: "Como se escreve o nome da estação que vem depois do <span class='destaque-texto'>verão</span>?", opcoes: ["outono", "aotono", "outuno"], correta: "outono", dica: "Começa com ou-." },

    // --- FAMÍLIA DE PALAVRAS ---
    { categoria: "Vocabulário", pergunta: "Qual destas palavras <span class='destaque-texto'>NÃO</span> pertence à família de <span class='destaque-fundo'>Mar</span>?", opcoes: ["maré", "marinheiro", "martelo"], correta: "martelo", dica: "É uma ferramenta para bater pregos, não tem nada a ver com a água salgada!" },
    { categoria: "Vocabulário", pergunta: "Qual destas palavras faz parte da família de <span class='destaque-fundo'>Flor</span>?", opcoes: ["floresta", "florista", "foco"], correta: "florista", dica: "É a pessoa que vende os ramos e os arranjos bonitos." },
    { categoria: "Vocabulário", pergunta: "Que palavra <span class='destaque-texto'>NÃO</span> é da família de <span class='destaque-fundo'>Pedra</span>?", opcoes: ["pedreiro", "pedreira", "pedal"], correta: "pedal", dica: "É a parte da bicicleta onde pões o pé!" },

    // --- SINÓNIMOS E ANTÓNIMOS (Nível 2) ---
    { categoria: "Vocabulário", pergunta: "Qual é o <span class='destaque-fundo'>sinónimo</span> de <span class='destaque-texto'>Lindo</span>?", opcoes: ["feio", "belo", "ruim"], correta: "belo", dica: "A Bela e o Monstro..." },
    { categoria: "Vocabulário", pergunta: "O <span class='destaque-fundo'>antónimo</span> (contrário) de <span class='destaque-texto'>Barulho</span> é...", opcoes: ["grito", "silêncio", "música"], correta: "silêncio", dica: "É o que a professora pede quando quer que a turma oiça a história." },
    { categoria: "Vocabulário", pergunta: "Qual é o <span class='destaque-fundo'>antónimo</span> de <span class='destaque-texto'>Pesado</span>?", opcoes: ["leve", "gordo", "fino"], correta: "leve", dica: "Um elefante é pesado, mas uma pena de pássaro é..." },
    { categoria: "Vocabulário", pergunta: "Qual é o <span class='destaque-fundo'>sinónimo</span> de <span class='destaque-texto'>Iniciar</span>?", opcoes: ["acabar", "começar", "parar"], correta: "começar", dica: "É o mesmo que dar o primeiro passo num jogo!" }
];