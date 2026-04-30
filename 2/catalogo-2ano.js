// ======================================================================
// CATÁLOGO CENTRAL DE JOGOS DO 2º ANO
// Sempre que criar um jogo novo, é necessário adicioná-lo a esta lista!
// O site vai atualizar as contagens e os sorteios automaticamente.
// ======================================================================

const todosOsJogos =[
    // ------------------------------------
    // PORTUGUÊS (cat: "pt")
    // ------------------------------------
    { nome: "Masculino e Feminino", icone: "icones/genero.png", link: "pt/genero/", cat: "pt" },
    { nome: "Singular e Plural", icone: "icones/numero.png", link: "pt/numero", cat: "pt" },
	{ nome: "Sinónimos", icone: "icones/sinonimos.png", link: "pt/sinonimos", cat: "pt" },
	{ nome: "Antónimos", icone: "icones/antonimos.png", link: "pt/antonimos", cat: "pt" },
	{ nome: "Sinónimos e Antónimos", icone: "icones/sinonimos_antonimos".png, link: "pt/sinonimos-antonimos", cat: "pt" },
	{ nome: "Pontos e Acentos", icone: "icones/pontos_acentos.png", link: "pt/pontos-acentos", cat: "pt" },
    { nome: "Chuva de Palavras", icone: "icones/chuva_palavras.png", link: "pt/classes", cat: "pt" },
	{ nome: "Construtor de Frases", icone: "icones/construtor_frases.png", link: "pt/ordenar-frases", cat: "pt" },
	{ nome: "Ler e Copiar", icone: "icones/copiar_textos.png", link: "pt/escrita-textos", cat: "pt" },
	{ nome: "Letras Mágicas", icone: "icones/letras_magicas.png", link: "pt/letras-magicas", cat: "pt" },
	{ nome: "Aventura dos Sons", icone: "icones/aventura_sons.png", link: "pt/aventura-sons", cat: "pt" },
	{ nome: "Missão dos Sons", icone: "icones/missao_sons.png", link: "pt/missao-sons", cat: "pt" },
	{ nome: "Ditado de Frases", icone: "icones/ditado_frases.png", link: "pt/ditado-frases", cat: "pt" },
	{ nome: "Palavras Cruzadas", icone: "icones/palavras_cruzadas.png", link: "pt/cruzadas", cat: "pt" },
	{ nome: "Cruzadas de Animais", icone: "icones/cruzadas_animais.png", link: "pt/cruzadas-animais/", cat: "pt" },
	{ nome: "Sopa de Letras", icone: "icones/sopa_letras.png", link: "pt/sopa-letras/", cat: "pt" },
	{ nome: "Divisão Silábica", icone: "icones/divisao_silabica.png", link: "pt/divisao-silabica/", cat: "pt" },
	
	
    // ------------------------------------
    // MATEMÁTICA (cat: "mat")
    // ------------------------------------
    { nome: "Máquina das Tabuadas", icone: "icones/tabuadas.png", link: "mat/tabuadas/", cat: "mat" },
	{ nome: "Missão Matemática", icone: "icones/missao_matematica.png", link: "mat/missao-matematica/", cat: "mat" },
	{ nome: "Balança da Adição", icone: "icones/balanca_adicao.png", link: "mat/balanca-adicao/", cat: "mat" },
	{ nome: "Balança da Subtração", icone: "icones/balanca_subtracao.png", link: "mat/balanca-subtracao/", cat: "mat" },
	{ nome: "O Monstro Guloso", icone: "icones/comparar.png", link: "mat/comparar/", cat: "mat" },
	{ nome: "Construtor de Números", icone: "icones/construtor_numeros.png", link: "mat/construtor-numeros/", cat: "mat" },
	{ nome: "O Trator MAB", icone: "icones/trator_mab.png", link: "mat/trator-mab/", cat: "mat" },
	{ nome: "Problemas Mágicos", icone: "icones/problemas_magicos.png", link: "mat/problemas-magicos/", cat: "mat" },
	{ nome: "Frações Divertidas", icone: "icones/fracoes.png", link: "mat/fracoes/", cat: "mat" },
	{ nome: "Cruzadas Numéricas", icone: "icones/cruzadas_numericas.png", link: "mat/cruzadas-numericas/", cat: "mat" },
	{ nome: "Estratégias de Cálculo", icone: "icones/estrategias_calculo.png", link: "mat/estrategias-calculo/", cat: "mat" },
	{ nome: "Tabuadas Flash", icone: "icones/tabuadas_flash.png", link: "mat/tabuadas-flash/", cat: "mat" },
	{ nome: "Sequências de Repetição", icone: "icones/sequencias_repeticao.png", link: "mat/sequencias-repeticao/", cat: "mat" },
	{ nome: "Sequências de Crescimento", icone: "icones/sequencias_crescimento.png", link: "mat/sequencias-crescimento/", cat: "mat" },
	{ nome: "Comboio das Sequências", icone: "icones/comboio_sequencias.png", link: "mat/comboio-sequencias/", cat: "mat" },
	{ nome: "Revisão de Sequências", icone: "icones/sequencias_revisoes.png", link: "mat/sequencias-revisoes/", cat: "mat" },
   	{ nome: "Simetria", icone: "icones/simetria.png", link: "mat/simetria/", cat: "mat" },
	{ nome: "Gráficos", icone: "icones/graficos.png", link: "mat/graficos/", cat: "mat" },
	
	
    
    // ------------------------------------
    // ESTUDO DO MEIO (cat: "em")
    // ------------------------------------
    { nome: "Animais", icone: "icones/animais.png", link: "em/animais/", cat: "em" },
   	{ nome: "Continentes e Oceanos", icone: "icones/continentes_oceanos.png", link: "em/continentes-oceanos/", cat: "em" },
	{ nome: "O Corpo Humano", icone: "icones/corpo_humano.png", link: "em/corpo-humano/", cat: "em" },
	{ nome: "Estados da Água", icone: "icones/estados_agua.png", link: "em/estados-agua/", cat: "em" },
	{ nome: "As Plantas", icone: "icones/plantas.png", link: "em/plantas/", cat: "em" },
	{ nome: "Sopa de Letras", icone: "icones/sopa_letras_meios_comunicacao.png", link: "em/sopa-letras/", cat: "em" },
	{ nome: "Máquina do Tempo", icone: "icones/maquina_tempo.png", link: "em/maquina-tempo/", cat: "em" }
];
