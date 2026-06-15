// ======================================================================
// CATÁLOGO CENTRAL DE JOGOS DO 3º ANO
// Sempre que criar um jogo novo, é necessário adicioná-lo a esta lista!
// O site vai atualizar as contagens e os sorteios automaticamente.
// ======================================================================

const todosOsJogos =[
    // ------------------------------------
    // PORTUGUÊS (cat: "pt")
    // ------------------------------------
	{ nome: "Determinantes Artigos", icone: "icones/determinantes_artigos.png", link: "pt/determinantes-artigos/", cat: "pt" },
	{ nome: "Sinónimos e Antónimos", icone: "icones/sinonimos_antonimos.png", link: "pt/sinonimos-antonimos/", cat: "pt" },
	{ nome: "Graus das Palavras", icone: "icones/graus.png", link: "pt/graus/", cat: "pt" },
	{ nome: "Revisões", icone: "icones/revisoes.png", link: "pt/revisoes/", cat: "pt" },
	{ nome: "Pronomes Pessoais", icone: "icones/pronomes_pessoais.png", link: "pt/pronomes-pessoais/", cat: "pt" },
	{ nome: "Acentuação", icone: "icones/acentuacao.png", link: "pt/acentuacao/", cat: "pt" },
	{ nome: "Sinais", icone: "icones/sinais.png", link: "pt/sinais/", cat: "pt" },
	{ nome: "Quantificadores Numerais", icone: "icones/quantificadores_numerais.png", link: "pt/quantificadores-numerais/", cat: "pt" },
	{ nome: "A Viagem dos Verbos", icone: "icones/viagem_verbos.png", link: "pt/viagem_verbos/", cat: "pt" },
	{ nome: "Grupos nas Frases", icone: "icones/grupos_frases.png", link: "pt/grupos-frases/", cat: "pt" },
	{ nome: "Advérbios", icone: "icones/adverbios.png", link: "pt/adverbios/", cat: "pt" },
	{ nome: "Conectores Discursivos", icone: "icones/conectores_discursivos.png", link: "pt/conectores-discursivos/", cat: "pt" },
	{ nome: "Determinantes", icone: "icones/determinantes.png", link: "pt/determinantes/", cat: "pt" },
	{ nome: "Fábrica das Palavras", icone: "icones/fabrica_palavras.png", link: "pt/fabrica-palavras/", cat: "pt" },
	{ nome: "Mistérios do Português", icone: "icones/misterios_portugues.png", link: "pt/misterios-portugues/", cat: "pt" },
	{ nome: "Nomes Comuns Coletivos", icone: "icones/comuns_coletivos.png", link: "pt/comuns-coletivos/", cat: "pt" },
	{ nome: "Escrita Rápida", icone: "icones/escrita_rapida.png", link: "pt/escrita-rapida/", cat: "pt" },
	{ nome: "Sopa de Letras", icone: "icones/sopa_letras.png", link: "pt/sopa-letras/", cat: "pt" },
   
	
	
    // ------------------------------------
    // MATEMÁTICA (cat: "mat")
    // ------------------------------------
	{ nome: "Tabuadas Turbo", icone: "icones/tabuadas_turbo.png", link: "mat/tabuadas-turbo/", cat: "mat" },
	{ nome: "Desafios do Mar", icone: "icones/desafios_mar.png", link: "mat/desafios-mar/", cat: "mat" },
	{ nome: "Adição", icone: "icones/adicao.png", link: "mat/adicao/", cat: "mat" },
	{ nome: "Subtração", icone: "icones/subtracao.png", link: "mat/subtracao/", cat: "mat" },
	{ nome: "Subtração com Milhares", icone: "icones/subtracao_milhares.png", link: "mat/subtracao-milhares/", cat: "mat" },
	{ nome: "O Jacaré Comilão", icone: "icones/jacare_comilao.png", link: "mat/jacare-comilao/", cat: "mat" },
	{ nome: "Laboratório do Equilíbrio", icone: "icones/igualdades.png", link: "mat/igualdades/", cat: "mat" },
	{ nome: "Detetive das Coordenadas", icone: "icones/coordenadas.png", link: "mat/coordenadas/", cat: "mat" },
	{ nome: "O Robô do Ábaco", icone: "icones/abaco.png", link: "mat/abaco/", cat: "mat" },
	{ nome: "O Chefe das Frações", icone: "icones/fracoes.png", link: "mat/fracoes/", cat: "mat" },
    { nome: "Fábrica de Cálculos", icone: "icones/fabrica_calculo.png", link: "mat/fabrica_calculo/", cat: "mat" },
	{ nome: "O Sapo saltador", icone: "icones/sapo_saltador.png", link: "mat/sapo-saltador/", cat: "mat" },
	{ nome: "Perímetro e Área", icone: "icones/perimetro_area.png", link: "mat/perimetro-area/", cat: "mat" },
	{ nome: "Numeração Romana", icone: "icones/numeracao_romana.png", link: "mat/numeracao-romana/", cat: "mat" },
	{ nome: "As Horas", icone: "icones/horas.png", link: "mat/horas/", cat: "mat" },
	{ nome: "Arredondamentos", icone: "icones/arredondamentos.png", link: "mat/arredondamentos/", cat: "mat" },
	{ nome: "Grelha das Tabuadas", icone: "icones/grelha_tabuadas.png", link: "mat/grelha-tabuadas/", cat: "mat" },
	{ nome: "Cálculo Mental", icone: "icones/calculo_mental.png", link: "mat/calculo-mental/", cat: "mat" },
	
    
    // ------------------------------------
    // ESTUDO DO MEIO (cat: "em")
    // ------------------------------------

	{ nome: "Direitos da Criança", icone: "icones/direitos_crianca.png", link: "mat/direitos-crianca/", cat: "em" },
	{ nome: "Saúde e Bem-Estar", icone: "icones/saude.png", link: "mat/saude/", cat: "em" },
	{ nome: "A Máquina do Tempo", icone: "icones/maquina_tempo.png", link: "mat/maquina-tempo/", cat: "em" },
	{ nome: "Portugal e a Europa", icone: "icones/portugal_europa.png", link: "mat/portugal-europa/", cat: "em" },
	{ nome: "A Teia da Vida", icone: "icones/teia_vida.png", link: "mat/teia-vida/", cat: "em" },
	{ nome: "Terra, Lua e Luz", icone: "icones/terra_lua_luz.png", link: "mat/terra_lua_luz/", cat: "em" },
	{ nome: "Relevo e Rios", icone: "icones/relevo.png", link: "mat/relevo/", cat: "em" },
	{ nome: "Continentes e Oceanos", icone: "icones/continentes_oceanos.png", link: "mat/continentes-oceanos/", cat: "em" }

];
