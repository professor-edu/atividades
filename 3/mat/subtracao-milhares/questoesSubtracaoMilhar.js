/* ==========================================================================
   BASE DE DADOS: SUBTRAÇÃO COM COMPENSAÇÃO - MILHARES (3º ANO - 20 QUESTÕES)
   ========================================================================== */

const questoesSubtracaoMilhar = [
    // --- 1. Contas sem empréstimos (Cálculo Direto) ---
    {
        minuendo: "4345",
        subtraendo: "1123",
        corretos: { 
            "u-emp": "0", "u-res": "2", 
            "d-emp": "0", "d-res": "2", 
            "c-emp": "0", "c-res": "2", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "0", "c-dev": "0", "m-dev": "0" 
        },
        dica: "Uma conta calma e sem empréstimos. Resolve coluna a coluna!"
    },
    {
        minuendo: "6789",
        subtraendo: "2354",
        corretos: { 
            "u-emp": "0", "u-res": "5", 
            "d-emp": "0", "d-res": "3", 
            "c-emp": "0", "c-res": "4", 
            "m-emp": "0", "m-res": "4", 
            "d-dev": "0", "c-dev": "0", "m-dev": "0" 
        },
        dica: "Todos os números de cima são maiores que os de baixo. Não precisas de pedir emprestado."
    },

    // --- 2. Empréstimo simples apenas nas Unidades ---
    {
        minuendo: "5452",
        subtraendo: "2128",
        corretos: { 
            "u-emp": "1", "u-res": "4", 
            "d-emp": "0", "d-res": "2", 
            "c-emp": "0", "c-res": "3", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "1", "c-dev": "0", "m-dev": "0" 
        },
        dica: "O 2 é menor que o 8 nas unidades. Pede emprestado em cima e devolve nas dezenas em baixo!"
    },
    {
        minuendo: "3891",
        subtraendo: "1456",
        corretos: { 
            "u-emp": "1", "u-res": "5", 
            "d-emp": "0", "d-res": "3", 
            "c-emp": "0", "c-res": "4", 
            "m-emp": "0", "m-res": "2", 
            "d-dev": "1", "c-dev": "0", "m-dev": "0" 
        },
        dica: "Lembra-te: o '1' colocado nas unidades é devolvido somando ao 5 das dezenas em baixo."
    },
    {
        minuendo: "7250",
        subtraendo: "4137",
        corretos: { 
            "u-emp": "1", "u-res": "3", 
            "d-emp": "0", "d-res": "1", 
            "c-emp": "0", "c-res": "1", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "1", "c-dev": "0", "m-dev": "0" 
        },
        dica: "Com 0 unidades não tiras 7. Coloca o 1 em cima para virar 10 e devolve nas dezenas em baixo!"
    },

    // --- 3. Empréstimo simples apenas nas Dezenas ---
    {
        minuendo: "6354",
        subtraendo: "2181",
        corretos: { 
            "u-emp": "0", "u-res": "3", 
            "d-emp": "1", "d-res": "7", 
            "c-emp": "0", "c-res": "1", 
            "m-emp": "0", "m-res": "4", 
            "d-dev": "0", "c-dev": "1", "m-dev": "0" 
        },
        dica: "Cinco dezenas não chegam para tirar oito. Coloca o 1 em cima das dezenas e devolve nas centenas!"
    },
    {
        minuendo: "4538",
        subtraendo: "1912",
        corretos: { 
            "u-emp": "0", "u-res": "6", 
            "d-emp": "1", "d-res": "2", 
            "c-emp": "0", "c-res": "2", 
            "m-emp": "0", "m-res": "2", 
            "d-dev": "0", "c-dev": "1", "m-dev": "0" 
        },
        dica: "Três dezenas são poucas para tirar nove. Pede emprestado em cima e devolve nas centenas em baixo."
    },

    // --- 4. Empréstimo simples apenas nas Centenas ---
    {
        minuendo: "7418",
        subtraendo: "3512",
        corretos: { 
            "u-emp": "0", "u-res": "6", 
            "d-emp": "0", "d-res": "0", 
            "c-emp": "1", "c-res": "9", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "0", "c-dev": "0", "m-dev": "1" 
        },
        dica: "Quatro centenas não tiram cinco. Pede emprestado na centena e devolve nos milhares em baixo!"
    },
    {
        minuendo: "9287",
        subtraendo: "4631",
        corretos: { 
            "u-emp": "0", "u-res": "6", 
            "d-emp": "0", "d-res": "5", 
            "c-emp": "1", "c-res": "6", 
            "m-emp": "0", "m-res": "4", 
            "d-dev": "0", "c-dev": "0", "m-dev": "1" 
        },
        dica: "Pede ajuda na coluna das centenas para virar 12, e devolve 1 nos milhares em baixo."
    },

    // --- 5. Duplo Empréstimo (Unidades e Dezenas) ---
    {
        minuendo: "8421",
        subtraendo: "3287",
        corretos: { 
            "u-emp": "1", "u-res": "4", 
            "d-emp": "1", "d-res": "3", 
            "c-emp": "0", "c-res": "1", 
            "m-emp": "0", "m-res": "5", 
            "d-dev": "1", "c-dev": "1", "m-dev": "0" 
        },
        dica: "Duplo feitiço! Precisas de pedir emprestado nas unidades e também nas dezenas."
    },
    {
        minuendo: "5630",
        subtraendo: "1284",
        corretos: { 
            "u-emp": "1", "u-res": "6", 
            "d-emp": "1", "d-res": "4", 
            "c-emp": "0", "c-res": "3", 
            "m-emp": "0", "m-res": "4", 
            "d-dev": "1", "c-dev": "1", "m-dev": "0" 
        },
        dica: "Não te esqueças de somar a devolução ao número de baixo antes de calcular a coluna!"
    },
    {
        minuendo: "9513",
        subtraendo: "4176",
        corretos: { 
            "u-emp": "1", "u-res": "7", 
            "d-emp": "1", "d-res": "3", 
            "c-emp": "0", "c-res": "3", 
            "m-emp": "0", "m-res": "5", 
            "d-dev": "1", "c-dev": "1", "m-dev": "0" 
        },
        dica: "Adiciona 10 ao número de cima e devolve somando 1 ao número de baixo da coluna seguinte."
    },

    // --- 6. Duplo Empréstimo (Dezenas e Centenas) ---
    {
        minuendo: "6219",
        subtraendo: "2954",
        corretos: { 
            "u-emp": "0", "u-res": "5", 
            "d-emp": "1", "d-res": "6", 
            "c-emp": "1", "c-res": "2", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "0", "c-dev": "1", "m-dev": "1" 
        },
        dica: "As unidades resolvem-se bem, mas as dezenas e as centenas vão precisar de magia dupla."
    },
    {
        minuendo: "4125",
        subtraendo: "1863",
        corretos: { 
            "u-emp": "0", "u-res": "2", 
            "d-emp": "1", "d-res": "6", 
            "c-emp": "1", "c-res": "2", 
            "m-emp": "0", "m-res": "2", 
            "d-dev": "0", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Lembra-te das devoluções em baixo nas colunas das centenas e dos milhares."
    },

    // --- 7. Triplo Empréstimo (Unidades, Dezenas e Centenas) ---
    {
        minuendo: "8124",
        subtraendo: "4358",
        corretos: { 
            "u-emp": "1", "u-res": "6", 
            "d-emp": "1", "d-res": "6", 
            "c-emp": "1", "c-res": "7", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "1", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Atenção máxima: vais precisar de colocar o 1 em cima e devolver em baixo três vezes!"
    },
    {
        minuendo: "7213",
        subtraendo: "3856",
        corretos: { 
            "u-emp": "1", "u-res": "7", 
            "d-emp": "1", "d-res": "5", 
            "c-emp": "1", "c-res": "3", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "1", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Três feitiços de empréstimo e devolução! Resolve devagar, coluna a coluna."
    },
    {
        minuendo: "5341",
        subtraendo: "1785",
        corretos: { 
            "u-emp": "1", "u-res": "6", 
            "d-emp": "1", "d-res": "5", 
            "c-emp": "1", "c-res": "5", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "1", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Todos os números de cima, exceto o milhar, precisam de pedir ajuda ao vizinho."
    },
    {
        minuendo: "9421",
        subtraendo: "5657",
        corretos: { 
            "u-emp": "1", "u-res": "4", 
            "d-emp": "1", "d-res": "6", 
            "c-emp": "1", "c-res": "7", 
            "m-emp": "0", "m-res": "3", 
            "d-dev": "1", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Trabalho triplo para o feiticeiro! Não te esqueças de somar as devoluções aos algarismos de baixo."
    },
    {
        minuendo: "6230",
        subtraendo: "1952",
        corretos: { 
            "u-emp": "1", "u-res": "8", 
            "d-emp": "1", "d-res": "7", 
            "c-emp": "1", "c-res": "2", 
            "m-emp": "0", "m-res": "4", 
            "d-dev": "1", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Ativa a magia do empréstimo em todas as colunas da direita até chegares aos milhares."
    },
    {
        minuendo: "4111",
        subtraendo: "2889",
        corretos: { 
            "u-emp": "1", "u-res": "2", 
            "d-emp": "1", "d-res": "2", 
            "c-emp": "1", "c-res": "2", 
            "m-emp": "0", "m-res": "1", 
            "d-dev": "1", "c-dev": "1", "m-dev": "1" 
        },
        dica: "Uma conta muito simétrica! Tens de pedir emprestado em quase todas as casas."
    }
];