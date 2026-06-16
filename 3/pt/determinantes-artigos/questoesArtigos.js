/* ==========================================================================
   BASE DE DADOS: O DESAFIO DOS ARTIGOS (3º ANO) - MEGA BATERIA (60 QUESTÕES)
   ========================================================================== */

const questoesArtigos = [
    // ==========================================
    // 1. ARTIGOS DEFINIDOS (SINGULAR)
    // ==========================================
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> borboleta voa livre sobre as flores do jardim.»",
        palavraRef: "borboleta",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "A",
        dica: "Borboleta é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> carro do meu pai está estacionado na garagem.»",
        palavraRef: "carro",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Carro é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> avião voa muito alto no céu.»",
        palavraRef: "aviao",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Avião é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> mochila da escola está muito pesada.»",
        palavraRef: "mochila",
        quantidade: 1,
        opcoes: ["O", "A", "As"],
        correta: "A",
        dica: "Mochila é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> caderno de desenho tem páginas em branco.»",
        palavraRef: "caderno",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Caderno é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> casa dos meus avós tem um quintal bonito.»",
        palavraRef: "casa",
        quantidade: 1,
        opcoes: ["O", "A", "As"],
        correta: "A",
        dica: "Casa é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> computador é excelente para estudar e pesquisar.»",
        palavraRef: "computador",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Computador é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> escola onde eu ando é muito divertida.»",
        palavraRef: "escola",
        quantidade: 1,
        opcoes: ["O", "A", "As"],
        correta: "A",
        dica: "Escola é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> leão é conhecido como o rei da selva.»",
        palavraRef: "leao",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Leão é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> girafa consegue comer as folhas mais altas.»",
        palavraRef: "girafa",
        quantidade: 1,
        opcoes: ["O", "A", "As"],
        correta: "A",
        dica: "Girafa é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> relógio de parede bate as horas certas.»",
        palavraRef: "relogio",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Relógio é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> janela da sala está fechada devido ao vento.»",
        palavraRef: "janela",
        quantidade: 1,
        opcoes: ["O", "A", "As"],
        correta: "A",
        dica: "Janela é um nome feminino singular."
    },

    // ==========================================
    // 2. ARTIGOS DEFINIDOS (PLURAL)
    // ==========================================
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> balões coloridos voaram no céu da festa.»",
        palavraRef: "balao",
        quantidade: 3, // Desenha 3 balões
        opcoes: ["O", "Os", "As"],
        correta: "Os",
        dica: "Balões é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> estrelas brilham imenso durante a noite.»",
        palavraRef: "estrela",
        quantidade: 3, // Desenha 3 estrelas
        opcoes: ["A", "Os", "As"],
        correta: "As",
        dica: "Estrelas é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> peixes nadam de forma rápida no aquário.»",
        palavraRef: "peixe",
        quantidade: 2, // Desenha 2 peixes
        opcoes: ["O", "Os", "As"],
        correta: "Os",
        dica: "Peixes é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> chaves abrem as portas principais de casa.»",
        palavraRef: "chave",
        quantidade: 2, // Desenha 2 chaves
        opcoes: ["A", "Os", "As"],
        correta: "As",
        dica: "Chaves é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> coelhos adoram comer cenouras na horta.»",
        palavraRef: "coelho",
        quantidade: 3, // Desenha 3 coelhos
        opcoes: ["O", "Os", "As"],
        correta: "Os",
        dica: "Coelhos é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> laranjas que colhemos na quinta são doces.»",
        palavraRef: "laranja",
        quantidade: 3, // Desenha 3 laranjas
        opcoes: ["A", "Os", "As"],
        correta: "As",
        dica: "Laranjas é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> livros estão bem arrumados na prateleira.»",
        palavraRef: "livro",
        quantidade: 2, // Desenha 2 livros
        opcoes: ["O", "Os", "As"],
        correta: "Os",
        dica: "Livros é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> cenouras fazem muito bem aos nossos olhos.»",
        palavraRef: "cenoura",
        quantidade: 3, // Desenha 3 cenouras
        opcoes: ["A", "Os", "As"],
        correta: "As",
        dica: "Cenouras é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> lápis de cor servem para pintar o desenho.»",
        palavraRef: "lapis",
        quantidade: 3, // Desenha 3 lápis
        opcoes: ["O", "Os", "As"],
        correta: "Os",
        dica: "Lápis é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> ovelhas do pastor dão lã muito quentinha.»",
        palavraRef: "ovelha",
        quantidade: 2, // Desenha 2 ovelhas
        opcoes: ["A", "Os", "As"],
        correta: "As",
        dica: "Ovelhas é um nome feminino plural."
    },

    // ==========================================
    // 3. ARTIGOS INDEFINIDOS (SINGULAR)
    // ==========================================
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No meu quintal, vi <span class='destaque-fundo'>___</span> gato a correr atrás de um rato.»",
        palavraRef: "gato",
        quantidade: 1,
        opcoes: ["um", "uma", "uns"],
        correta: "um",
        dica: "Gato é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«Encontrei <span class='destaque-fundo'>___</span> joaninha vermelha em cima de uma flor.»",
        palavraRef: "joaninha",
        quantidade: 1,
        opcoes: ["um", "uma", "umas"],
        correta: "uma",
        dica: "Joaninha é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«O meu primo comprou <span class='destaque-fundo'>___</span> bicicleta nova para passear.»",
        palavraRef: "bicicleta",
        quantidade: 1,
        opcoes: ["um", "uma", "umas"],
        correta: "uma",
        dica: "Bicicleta é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«A mãe comprou <span class='destaque-fundo'>___</span> ananás doce para a sobremesa.»",
        palavraRef: "ananas",
        quantidade: 1,
        opcoes: ["um", "uma", "uns"],
        correta: "um",
        dica: "Ananás é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«A Rita adotou <span class='destaque-fundo'>___</span> tartaruga de estimação pequenina.»",
        palavraRef: "tartaruga",
        quantidade: 1,
        opcoes: ["um", "uma", "umas"],
        correta: "uma",
        dica: "Tartaruga é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No porto de pesca, avistei <span class='destaque-fundo'>___</span> barco azul a balançar.»",
        palavraRef: "barco",
        quantidade: 1,
        opcoes: ["um", "uma", "uns"],
        correta: "um",
        dica: "Barco é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No documentário sobre a selva, vi <span class='destaque-fundo'>___</span> zebra às riscas.»",
        palavraRef: "zebra",
        quantidade: 1,
        opcoes: ["um", "uma", "umas"],
        correta: "uma",
        dica: "Zebra é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«A minha mãe plantou flores em <span class='destaque-fundo'>___</span> vaso de barro.»",
        palavraRef: "vaso",
        quantidade: 1,
        opcoes: ["um", "uma", "uns"],
        correta: "um",
        dica: "Vaso é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«Podes emprestar-me <span class='destaque-fundo'>___</span> borracha para apagar este erro?»",
        palavraRef: "borracha",
        quantidade: 1,
        opcoes: ["um", "uma", "umas"],
        correta: "uma",
        dica: "Borracha é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«O professor escreveu no quadro com <span class='destaque-fundo'>___</span> caneta azul.»",
        palavraRef: "caneta",
        quantidade: 1,
        opcoes: ["um", "uma", "umas"],
        correta: "uma",
        dica: "Caneta é um nome feminino singular."
    },

    // ==========================================
    // 4. ARTIGOS INDEFINIDOS (PLURAL)
    // ==========================================
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No almoço, comi <span class='destaque-fundo'>___</span> morangos bem vermelhos e doces.»",
        palavraRef: "morango",
        quantidade: 3, // Desenha 3 morangos
        opcoes: ["um", "uns", "umas"],
        correta: "uns",
        dica: "Morangos é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No campo verde, pastavam <span class='destaque-fundo'>___</span> ovelhas brancas.»",
        palavraRef: "ovelha",
        quantidade: 2, // Desenha 2 ovelhas
        opcoes: ["uma", "uns", "umas"],
        correta: "umas",
        dica: "Ovelhas é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No fundo do charco, ouvi <span class='destaque-fundo'>___</span> sapos a coaxar à noite.»",
        palavraRef: "sapo",
        quantidade: 3, // Desenha 3 sapos
        opcoes: ["um", "uns", "umas"],
        correta: "uns",
        dica: "Sapos é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«Vou descascar <span class='destaque-fundo'>___</span> laranjas para fazermos sumo fresco.»",
        palavraRef: "laranja",
        quantidade: 3, // Desenha 3 laranjas
        opcoes: ["uma", "uns", "umas"],
        correta: "umas",
        dica: "Laranjas é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«Arruma <span class='destaque-fundo'>___</span> copos limpos na mesa para os convidados.»",
        palavraRef: "copo",
        quantidade: 2, // Desenha 2 copos
        opcoes: ["um", "uns", "umas"],
        correta: "uns",
        dica: "Copos é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«O chaveiro antigo tinha <span class='destaque-fundo'>___</span> chaves muito pesadas.»",
        palavraRef: "chave",
        quantidade: 2, // Desenha 2 chaves
        opcoes: ["um", "uns", "umas"],
        correta: "umas",
        dica: "Chaves é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«Na papelaria, comprei <span class='destaque-fundo'>___</span> cadernos pautados para as aulas.»",
        palavraRef: "caderno",
        quantidade: 3, // Desenha 3 cadernos
        opcoes: ["um", "uns", "umas"],
        correta: "uns",
        dica: "Cadernos é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«No cesto da cozinha, guardámos <span class='destaque-fundo'>___</span> maçãs bem vermelhinhas.»",
        palavraRef: "maca",
        quantidade: 3, // Desenha 3 maçãs
        opcoes: ["uma", "uns", "umas"],
        correta: "umas",
        dica: "Maçãs é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«O João fez <span class='destaque-fundo'>___</span> desenhos fantásticos para pintar.»",
        palavraRef: "desenho",
        quantidade: 2, // Desenha 2 desenhos
        opcoes: ["um", "uns", "umas"],
        correta: "uns",
        dica: "Desenhos é um nome masculino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«O antigo castelo tem <span class='destaque-fundo'>___</span> portas gigantescas de madeira.»",
        palavraRef: "porta",
        quantidade: 2, // Desenha 2 portas
        opcoes: ["uma", "uns", "umas"],
        correta: "umas",
        dica: "Portas é um nome feminino plural."
    },

    // ==========================================
    // 5. CASOS ESPECIAIS & DETALHES DE GÉNERO
    // ==========================================
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«O avô perdeu <span class='destaque-fundo'>___</span> óculos de leitura outra vez.»",
        palavraRef: "oculos",
        quantidade: 1, // Exibe 1 imagem de óculos, mas o nome é plural!
        opcoes: ["o", "os", "as"],
        correta: "os",
        dica: "A palavra 'óculos' é sempre masculina e plural!"
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> sol brilha muito forte durante o dia.»",
        palavraRef: "sol",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "O Sol é único e é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> mães dos alunos prepararam lanches para todos.»",
        palavraRef: "maes",
        quantidade: 2,
        opcoes: ["Os", "As", "Umas"],
        correta: "As",
        dica: "Mães é um nome feminino plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> nuvem escura escondeu a luz do sol.»",
        palavraRef: "nuvem",
        quantidade: 1,
        opcoes: ["O", "A", "Os"],
        correta: "A",
        dica: "Nuvem é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«De repente, começou <span class='destaque-fundo'>___</span> chuva muito forte e fria.»",
        palavraRef: "chuva",
        quantidade: 1,
        opcoes: ["um", "uma", "uns"],
        correta: "uma",
        dica: "Chuva é um nome feminino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«Guardei <span class='destaque-fundo'>___</span> dinheiro no meu mealheiro para poupar.»",
        palavraRef: "dinheiro",
        quantidade: 1,
        opcoes: ["o", "a", "os"],
        correta: "o",
        dica: "Dinheiro é um nome masculino singular."
    },

    // ==========================================
    // 6. CLASSIFICAÇÕES E CONCORDÂNCIA (SEM IMAGEM)
    // ==========================================
    {
        pergunta: "Na frase «Comi <span class='destaque-fundo'>uma</span> deliciosa piza.», a palavra destacada é um artigo:",
        opcoes: ["Definido", "Indefinido", "Nome Próprio"],
        correta: "Indefinido",
        dica: "Os artigos indefinidos referem-se a coisas de forma geral (um, uma, uns, umas)."
    },
    {
        pergunta: "Qual das seguintes opções apresenta um <span class='destaque-texto'>artigo definido</span> no feminino e plural?",
        opcoes: ["umas", "os", "as"],
        correta: "as",
        dica: "Os artigos definidos femininos são 'a' (singular) e 'as' (plural)."
    },
    {
        pergunta: "Qual destas palavras representa um artigo <span class='destaque-texto'>indefinido</span> no masculino e singular?",
        opcoes: ["um", "uma", "uns"],
        correta: "um",
        dica: "Os artigos indefinidos masculinos são 'um' (singular) e 'uns' (plural)."
    },
    {
        pergunta: "Na frase «<span class='destaque-fundo'>Os</span> barcos partiram para o mar.», a palavra destacada é um artigo:",
        opcoes: ["Definido", "Indefinido", "Feminino"],
        correta: "Definido",
        dica: "Identifica se nos referimos a barcos específicos ou barcos genéricos."
    },
    {
        pergunta: "Os artigos definidos servem para nos referirmos a:",
        opcoes: ["Coisas conhecidas e específicas", "Coisas gerais e desconhecidas", "Nomes de pessoas"],
        correta: "Coisas conhecidas e específicas",
        dica: "Dizemos 'O carro' quando sabemos exatamente qual é o carro."
    },
    {
        pergunta: "Os <span class='destaque-texto'>artigos indefinidos</span> no plural são: 'uns' e...",
        opcoes: ["as", "umas", "os"],
        correta: "umas",
        dica: "Procura o artigo feminino plural que pertence ao grupo 'um / uma'."
    },
    {
        pergunta: "Completa a frase com a opção correta:<br><br>«Os artigos definidos são: o, a, os e <span class='destaque-fundo'>___</span>»",
        opcoes: ["uma", "as", "uns"],
        correta: "as",
        dica: "Falta o artigo definido feminino no plural."
    },
    {
        pergunta: "Na frase «O Afonso comprou <span class='destaque-fundo'>uns</span> lápis novos.», a palavra destacada é um artigo:",
        opcoes: ["Definido", "Indefinido", "Feminino"],
        correta: "Indefinido",
        dica: "Lembra-te do grupo dos artigos indefinidos (um, uma, uns, umas)."
    },
    {
        pergunta: "Qual destas palavras <span class='destaque-texto'>não pertence</span> ao grupo dos artigos?",
        opcoes: ["uma", "os", "com"],
        correta: "com",
        dica: "A palavra 'com' é uma preposição, não serve para acompanhar nomes."
    },
    {
        pergunta: "Na frase «<span class='destaque-fundo'>As</span> borboletas voam no parque.», a palavra em destaque está no:",
        opcoes: ["Singular feminino", "Plural feminino", "Plural masculino"],
        correta: "Plural feminino",
        dica: "A palavra refere-se a mais do que uma borboleta."
    },
    {
        pergunta: "Qual destas palavras é um <span class='destaque-texto'>artigo indefinido</span> no feminino e plural?",
        opcoes: ["umas", "uns", "as"],
        correta: "umas",
        dica: "Pertence ao grupo indefinido e refere-se a palavras femininas plurais."
    },
    {
        pergunta: "O artigo definido <span class='destaque-fundo'>o</span> pertence a que género gramatical?",
        opcoes: ["Feminino", "Masculino", "Neutro"],
        correta: "Masculino",
        dica: "Dizemos 'o menino', 'o lobo', 'o livro'."
    }
];