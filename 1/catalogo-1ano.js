// ======================================================================
// CATÁLOGO CENTRAL DE JOGOS DO 1º ANO
// Sempre que criar um jogo novo, é necessário adicioná-lo a esta lista!
// O site vai atualizar as contagens e os sorteios automaticamente.
// ======================================================================

const todosOsJogos =[
    // ------------------------------------
    // PORTUGUÊS (cat: "pt") 
    // ------------------------------------
    { nome: "O Meu Teclado", icone: "icones/meu-teclado.png", link: "pt/meu-teclado/", cat: "pt" },
    { nome: "Palavra Certa", icone: "icones/palavra_certa.png", link: "pt/palavra-certa/", cat: "pt" },
    { nome: "Letra em Falta", icone: "icones/letra_em_falta.png", link: "pt/letra-em-falta/", cat: "pt" },
    { nome: "Contar Sílabas", icone: "icones/contar_silabas.png", link: "pt/contar-silabas/", cat: "pt" },
    { nome: "Rimas", icone: "icones/rimas.png", link: "pt/rimas/", cat: "pt" },
    { nome: "Comboio das Letras", icone: "icones/comboio_letras.png", link: "pt/comboio-letras/", cat: "pt" },
    { nome: "Código Secreto", icone: "icones/codigo_secreto.png", link: "pt/codigo-secreto/", cat: "pt" },
    { nome: "Sílaba Inicial", icone: "icones/primeira_silaba.png", link: "pt/primeira-silaba/", cat: "pt" },
    { nome: "28 Palavras", icone: "icones/28_palavras.png", link: "pt/28-palavras/", cat: "pt" }, 
    { nome: "Comboio das Sílabas", icone: "icones/comboio_silabas.png", link: "pt/comboio-silabas/", cat: "pt" }, 
    { nome: "Memória de Imagens", icone: "icones/memoria_imagens.png", link: "pt/memoria-imagens", cat: "pt" },
    { nome: "Palavras e Imagens", icone: "icones/memoria.png", link: "pt/memoria", cat: "pt" },
    { nome: "Ordenar Sílabas", icone: "icones/ordenar_silabas.png", link: "pt/arrastar-silabas", cat: "pt" },
    { nome: "Escrever Sílabas", icone: "icones/puzzle_silabas.png", link: "pt/escrever-silabas", cat: "pt" },
    { nome: "Bolhas de Sabão", icone: "icones/bolhas_sabao.png", link: "pt/bolhas", cat: "pt" },
    { nome: "Monstro das Sílabas", icone: "icones/monstro_silabas.png", link: "pt/monstro-silabas", cat: "pt" },
    { nome: "Escrever Palavras", icone: "icones/ditado_palavras.png", link: "pt/escrever-palavras", cat: "pt" },
    { nome: "Ditado de Palavras", icone: "icones/ditado_palavras.png", link: "pt/ditado-palavras", cat: "pt" },
    { nome: "Sopa de letras", icone: "icones/sopa_letras.png", link: "pt/sopa-letras", cat: "pt" },
    { nome: "Copiar Frases", icone: "icones/copiar_frases.png", link: "pt/copia-frases", cat: "pt" }, 
    { nome: "Lanterna Mágica", icone: "icones/lanterna_magica.png", link: "pt/lanterna-magica", cat: "pt" },
    { nome: "Verdadeiro ou Falso", icone: "icones/verdadeiro_falso.png", link: "pt/verdadeiro-falso", cat: "pt" },
    { nome: "Palavra Flash", icone: "icones/palavra_flash.png", link: "pt/palavra-flash", cat: "pt" },
    { nome: "Caixa das Adivinhas", icone: "icones/caixa_adivinhas.png", link: "pt/caixa-adivinhas", cat: "pt" },
    { nome: "Jogo da Forca", icone: "icones/jogo_forca.png", link: "pt/forca", cat: "pt" },
    { nome: "Puzzle das Sílabas", icone: "icones/puzzle_silabas.png", link: "pt/puzzle-silabas", cat: "pt" },
    { nome: "Vogais", icone: "icones/vogais.png", link: "pt/vogais", cat: "pt" },
    { nome: "Cruzadas de Animais", icone: "icones/cruzadas_animais.png", link: "pt/cruzadas-animais", cat: "pt" },
    
    // ------------------------------------
    // MATEMÁTICA (cat: "mat") 
    // ------------------------------------
    { nome: "Vamos Contar!", icone: "icones/vamos_contar.png", link: "mat/vamos-contar/", cat: "mat" },
    { nome: "O Detetive", icone: "icones/detetive.png", link: "mat/detetive/", cat: "mat" },
    { nome: "Camião de Carga", icone: "icones/camiao_carga.png", link: "mat/camiao-carga/", cat: "mat" }, 
    { nome: "Sapo Saltitão", icone: "icones/sapo_saltitao.png", link: "mat/sapo-saltitao/", cat: "mat" }, 
    { nome: "Gráficos", icone: "icones/graficos.png", link: "mat/graficos/", cat: "mat" },
    { nome: "Ligar Quantidades", icone: "icones/ligar_quantidades.png", link: "mat/ligar-quantidades/", cat: "mat" },
    { nome: "Desafio Final", icone: "icones/quiz.png", link: "mat/quiz/", cat: "mat" }, 
    { nome: "Memória de Números", icone: "icones/memoria_numeros.png", link: "mat/memoria-numeros", cat: "mat" },
    { nome: "Máquina de Somar", icone: "icones/maquina_somar.png", link: "mat/maquina-somar", cat: "mat" },
    { nome: "Máquina de Subtrair", icone: "icones/maquina_subtrair.png", link: "mat/maquina-subtrair", cat: "mat" },
    { nome: "Comboio das Sequências", icone: "icones/comboio_sequencias.png", link: "mat/sequencias", cat: "mat" },
    
    // ------------------------------------
    // ESTUDO DO MEIO (cat: "em") 
    // ------------------------------------
    { nome: "Reciclagem", icone: "icones/reciclagem.png", link: "em/reciclagem/", cat: "em" }, 
    { nome: "Profissões", icone: "icones/profissoes.png", link: "em/profissoes/", cat: "em" }, 
    { nome: "Roupas e Estações", icone: "icones/tempo.png", link: "em/roupas-estacoes/", cat: "em" },
    { nome: "Memória do Corpo", icone: "icones/memoria_corpo.png", link: "em/corpo/", cat: "em" },
    { nome: "Memória Saudável", icone: "icones/memoria_saudavel.png", link: "em/vida-saudavel/", cat: "em" },
    { nome: "Memória do Vestuário", icone: "icones/memoria_vestuario.png", link: "em/vestuario/", cat: "em" },
    { nome: "Memória dos Alimentos", icone: "icones/memoria_alimentos.png", link: "em/alimentos/", cat: "em" },
    { nome: "Memória dos Animais", icone: "icones/memoria_animais.png", link: "em/animais/", cat: "em" },
    { nome: "Memória do Tempo", icone: "icones/memoria_tempo.png", link: "em/tempo/", cat: "em" }
];