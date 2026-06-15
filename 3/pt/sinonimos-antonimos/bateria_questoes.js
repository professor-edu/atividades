/* ==========================================================================
   BASE DE DADOS: QUIZ - SINÓNIMOS E ANTÓNIMOS (3º ANO)
   ========================================================================== */

const questoesSinonimosAntonimos = [
    // ==========================================
    // MÚLTIPLA ESCOLHA - SINÓNIMOS (1 a 15)
    // ==========================================
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>feliz</span>?", 
        opcoes: ["Alegre", "Triste", "Cansado"], 
        correta: "Alegre" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>bonito</span>?", 
        opcoes: ["Feio", "Belo", "Sujo"], 
        correta: "Belo" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>grande</span>?", 
        opcoes: ["Enorme", "Pequeno", "Curto"], 
        correta: "Enorme" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>rápido</span>?", 
        opcoes: ["Lento", "Parado", "Veloz"], 
        correta: "Veloz" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>saltar</span>?", 
        opcoes: ["Cair", "Pular", "Correr"], 
        correta: "Pular" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>iniciar</span>?", 
        opcoes: ["Começar", "Acabar", "Parar"], 
        correta: "Começar" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>calmo</span>?", 
        opcoes: ["Nervoso", "Tranquilo", "Zangado"], 
        correta: "Tranquilo" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>barulho</span>?", 
        opcoes: ["Ruído", "Silêncio", "Paz"], 
        correta: "Ruído" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>distante</span>?", 
        opcoes: ["Perto", "Aqui", "Longe"], 
        correta: "Longe" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>escutar</span>?", 
        opcoes: ["Falar", "Ouvir", "Cheirar"], 
        correta: "Ouvir" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>inteligente</span>?", 
        opcoes: ["Esperto", "Lento", "Distraído"], 
        correta: "Esperto" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>auxiliar</span>?", 
        opcoes: ["Prejudicar", "Ajudar", "Esconder"], 
        correta: "Ajudar" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>caminhar</span>?", 
        opcoes: ["Andar", "Parar", "Sentar"], 
        correta: "Andar" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>morar</span>?", 
        opcoes: ["Viajar", "Partir", "Habitar"], 
        correta: "Habitar" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>perfume</span>?", 
        opcoes: ["Cheiro", "Cor", "Sabor"], 
        correta: "Cheiro" 
    },

    // ==========================================
    // MÚLTIPLA ESCOLHA - ANTÓNIMOS (16 a 30)
    // ==========================================
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>alto</span>?", 
        opcoes: ["Baixo", "Gigante", "Comprido"], 
        correta: "Baixo" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>chorar</span>?", 
        opcoes: ["Gritar", "Rir", "Berrar"], 
        correta: "Rir" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>forte</span>?", 
        opcoes: ["Musculado", "Duro", "Fraco"], 
        correta: "Fraco" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>escuro</span>?", 
        opcoes: ["Preto", "Claro", "Sombrio"], 
        correta: "Claro" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>cheio</span>?", 
        opcoes: ["Vazio", "Largo", "Pesado"], 
        correta: "Vazio" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>limpo</span>?", 
        opcoes: ["Lavado", "Sujo", "Brilhante"], 
        correta: "Sujo" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>abrir</span>?", 
        opcoes: ["Fechar", "Rasgar", "Destrancar"], 
        correta: "Fechar" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>fácil</span>?", 
        opcoes: ["Simples", "Rápido", "Difícil"], 
        correta: "Difícil" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>quente</span>?", 
        opcoes: ["Morno", "Frio", "A ferver"], 
        correta: "Frio" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>molhado</span>?", 
        opcoes: ["Húmido", "Seco", "Encharcado"], 
        correta: "Seco" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>rico</span>?", 
        opcoes: ["Milionário", "Feliz", "Pobre"], 
        correta: "Pobre" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>doce</span>?", 
        opcoes: ["Açucarado", "Amargo", "Saboroso"], 
        correta: "Amargo" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>subir</span>?", 
        opcoes: ["Descer", "Cair", "Trepar"], 
        correta: "Descer" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>novo</span>?", 
        opcoes: ["Recente", "Velho", "Moderno"], 
        correta: "Velho" 
    },
    { 
        pergunta: "Qual é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>gordo</span>?", 
        opcoes: ["Magro", "Obeso", "Pesado"], 
        correta: "Magro" 
    },

    // ==========================================
    // VERDADEIRO OU FALSO - SINÓNIMOS (31 a 38)
    // ==========================================
    { 
        pergunta: "As palavras <span class='destaque-fundo'>triste</span> e <span class='destaque-fundo'>infeliz</span> são sinónimas.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>perto</span> é <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>distante</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },
    { 
        pergunta: "As palavras <span class='destaque-fundo'>zangado</span> e <span class='destaque-fundo'>furioso</span> são sinónimas.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>medo</span> é <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>coragem</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },
    { 
        pergunta: "As palavras <span class='destaque-fundo'>idoso</span> e <span class='destaque-fundo'>velho</span> são sinónimas.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>correto</span> é <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>errado</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },
    { 
        pergunta: "As palavras <span class='destaque-fundo'>saltar</span> e <span class='destaque-fundo'>pular</span> são sinónimas.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>falar</span> é <span class='destaque-texto'>sinónimo</span> de <span class='destaque-fundo'>calar</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },

    // ==========================================
    // VERDADEIRO OU FALSO - ANTÓNIMOS (39 a 46)
    // ==========================================
    { 
        pergunta: "A palavra <span class='destaque-fundo'>bem</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>mal</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>sair</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>fugir</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>vitória</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>derrota</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>rápido</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>veloz</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>silêncio</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>barulho</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>gostar</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>amar</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Falso" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>grosso</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>fino</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },
    { 
        pergunta: "A palavra <span class='destaque-fundo'>presente</span> é o <span class='destaque-texto'>antónimo</span> de <span class='destaque-fundo'>passado</span>.", 
        opcoes: ["Verdadeiro", "Falso"], 
        correta: "Verdadeiro" 
    },

    // ==========================================
    // FRASES DE CONTEXTO - SINÓNIMOS (47 a 54)
    // ==========================================
    { 
        pergunta: "«O meu cão é muito <span class='destaque-fundo'>manso</span>.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Dócil", "Bravo", "Zangado"], 
        correta: "Dócil" 
    },
    { 
        pergunta: "«A Rita vive numa casa <span class='destaque-fundo'>antiga</span>.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Nova", "Moderna", "Velha"], 
        correta: "Velha" 
    },
    { 
        pergunta: "«A sopa que a avó fez está <span class='destaque-fundo'>saborosa</span>.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Deliciosa", "Fria", "Salgada"], 
        correta: "Deliciosa" 
    },
    { 
        pergunta: "«O palhaço do circo é muito <span class='destaque-fundo'>engraçado</span>.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Sério", "Divertido", "Triste"], 
        correta: "Divertido" 
    },
    { 
        pergunta: "«Amanhã vou <span class='destaque-fundo'>arrumar</span> o meu quarto.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Organizar", "Sujar", "Esconder"], 
        correta: "Organizar" 
    },
    { 
        pergunta: "«Este casaco é feito de um tecido <span class='destaque-fundo'>macio</span>.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Fofinho", "Duro", "Áspero"], 
        correta: "Fofinho" 
    },
    { 
        pergunta: "«O vidro da janela está muito <span class='destaque-fundo'>limpo</span>.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Sujo", "Lavado", "Opaco"], 
        correta: "Lavado" 
    },
    { 
        pergunta: "«Fiquei muito <span class='destaque-fundo'>contente</span> com a tua vinda.»<br><br>Qual é o <span class='destaque-texto'>sinónimo</span> da palavra destacada?", 
        opcoes: ["Alegre", "Assustado", "Zangado"], 
        correta: "Alegre" 
    },

    // ==========================================
    // FRASES DE CONTEXTO - ANTÓNIMOS (55 a 62)
    // ==========================================
    { 
        pergunta: "«O leão é um animal muito <span class='destaque-fundo'>feroz</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Manso", "Forte", "Selvagem"], 
        correta: "Manso" 
    },
    { 
        pergunta: "«O caminho para o parque é muito <span class='destaque-fundo'>curto</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Largo", "Comprido", "Rápido"], 
        correta: "Comprido" 
    },
    { 
        pergunta: "«O mar hoje está muito <span class='destaque-fundo'>agitado</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Calmo", "Furioso", "Bravo"], 
        correta: "Calmo" 
    },
    { 
        pergunta: "«Esta caixa de cartão é muito <span class='destaque-fundo'>leve</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Pesada", "Macia", "Pequena"], 
        correta: "Pesada" 
    },
    { 
        pergunta: "«O gato subiu ao telhado <span class='destaque-fundo'>depressa</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Rápido", "Lentamente", "Alto"], 
        correta: "Lentamente" 
    },
    { 
        pergunta: "«A água do rio está muito <span class='destaque-fundo'>limpa</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Clara", "Suja", "Doce"], 
        correta: "Suja" 
    },
    { 
        pergunta: "«O inverno é uma estação muito <span class='destaque-fundo'>fria</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Quente", "Gelada", "Morna"], 
        correta: "Quente" 
    },
    { 
        pergunta: "«O copo caiu da mesa e ficou <span class='destaque-fundo'>inteiro</span>.»<br><br>Qual é o <span class='destaque-texto'>antónimo</span> da palavra destacada?", 
        opcoes: ["Novo", "Partido", "Limpo"], 
        correta: "Partido" 
    }
];