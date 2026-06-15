/* ==========================================================================
   BASE DE DADOS: QUIZ INTEGRADO DE ARTIGOS (2º ANO - 20 QUESTÕES)
   ========================================================================== */

const questoesArtigos = [
    // -------------------------------------------------------------
    // DINÂMICA 1: O Par Correto (6 Questões - 1 a 6)
    // Associação rápida: artigo + nome (com suporte para plurais)
    // -------------------------------------------------------------
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> abacaxi»",
        palavraRef: "abacaxi",
        quantidade: 1, // Exibe 1 imagem
        opcoes: ["O", "A", "Os"],
        correta: "O",
        dica: "Abacaxi é um nome masculino e está no singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> borboleta»",
        palavraRef: "borboleta",
        quantidade: 1,
        opcoes: ["O", "A", "As"],
        correta: "A",
        dica: "Borboleta é um nome feminino e está no singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> gatos»",
        palavraRef: "gato",
        quantidade: 3, // Multiplica e desenha 3 gatos no ecrã!
        opcoes: ["O", "Os", "As"],
        correta: "Os",
        dica: "Gatos é um nome masculino no plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo definido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> joaninhas»",
        palavraRef: "joaninha",
        quantidade: 3, // Desenha 3 joaninhas
        opcoes: ["A", "Os", "As"],
        correta: "As",
        dica: "Joaninhas é um nome feminino no plural."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> carro»",
        palavraRef: "carro",
        quantidade: 1,
        opcoes: ["um", "uma", "uns"],
        correta: "um",
        dica: "Carro é um nome masculino singular."
    },
    {
        pergunta: "Completa com o <span class='destaque-texto'>artigo indefinido</span> correto:<br><br>«<span class='destaque-fundo'>___</span> maçãs»",
        palavraRef: "maca",
        quantidade: 3, // Desenha 3 maçãs
        opcoes: ["uma", "uns", "umas"],
        correta: "umas",
        dica: "Maçãs é um nome feminino no plural."
    },

    // -------------------------------------------------------------
    // DINÂMICA 2: Definido ou Indefinido (8 Questões - 7 a 14)
    // Classificação direta e rápida dos 8 artigos (Sem Imagem)
    // -------------------------------------------------------------
    {
        pergunta: "«<span class='destaque-fundo'>o</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Definido",
        dica: "Os artigos definidos servem para coisas específicas (o, a, os, as)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>uma</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Indefinido",
        dica: "Os artigos indefinidos referem-se a coisas de forma geral (um, uma, uns, umas)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>os</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Definido",
        dica: "Os artigos definidos servem para coisas específicas (o, a, os, as)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>um</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Indefinido",
        dica: "Os artigos indefinidos referem-se a coisas de forma geral (um, uma, uns, umas)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>as</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Definido",
        dica: "Os artigos definidos servem para coisas específicas (o, a, os, as)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>uns</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Indefinido",
        dica: "Os artigos indefinidos referem-se a coisas de forma geral (um, uma, uns, umas)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>a</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Definido",
        dica: "Os artigos definidos servem para coisas específicas (o, a, os, as)."
    },
    {
        pergunta: "«<span class='destaque-fundo'>umas</span>»<br><br>O artigo em destaque é um:",
        opcoes: ["Determinante Artigo Definido", "Determinante Artigo Indefinido"],
        correta: "Determinante Artigo Indefinido",
        dica: "Os artigos indefinidos referem-se a coisas de forma geral (um, uma, uns, umas)."
    },

    // -------------------------------------------------------------
    // DINÂMICA 3: Género e Número (6 Questões - 15 a 20)
    // Classificação gramatical dos artigos (Sem Imagem)
    // -------------------------------------------------------------
    {
        pergunta: "«<span class='destaque-fundo'>os</span>»<br><br>Este artigo está no:",
        opcoes: ["Masculino Plural", "Feminino Plural", "Masculino Singular"],
        correta: "Masculino Plural",
        dica: "Refere-se a nomes masculinos e a mais do que um objeto."
    },
    {
        pergunta: "«<span class='destaque-fundo'>a</span>»<br><br>Este artigo está no:",
        opcoes: ["Feminino Singular", "Feminino Plural", "Masculino Singular"],
        correta: "Feminino Singular",
        dica: "Refere-se a um único objeto de género feminino."
    },
    {
        pergunta: "«<span class='destaque-fundo'>umas</span>»<br><br>Este artigo está no:",
        opcoes: ["Feminino Plural", "Masculino Plural", "Feminino Singular"],
        correta: "Feminino Plural",
        dica: "Refere-se a nomes femininos no plural."
    },
    {
        pergunta: "«<span class='destaque-fundo'>um</span>»<br><br>Este artigo está no:",
        opcoes: ["Masculino Singular", "Masculino Plural", "Feminino Singular"],
        correta: "Masculino Singular",
        dica: "Refere-se a um único objeto de género masculino."
    },
    {
        pergunta: "«<span class='destaque-fundo'>as</span>»<br><br>Este artigo está no:",
        opcoes: ["Feminino Plural", "Feminino Singular", "Masculino Plural"],
        correta: "Feminino Plural",
        dica: "Refere-se a nomes femininos e a mais do que um objeto."
    },
    {
        pergunta: "«<span class='destaque-fundo'>uns</span>»<br><br>Este artigo está no:",
        opcoes: ["Masculino Plural", "Masculino Singular", "Feminino Plural"],
        correta: "Masculino Plural",
        dica: "Refere-se a nomes masculinos no plural."
    }
];