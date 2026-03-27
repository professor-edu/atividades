// ======================================================================
// BATERIA GIGANTE DE PERGUNTAS - MATEMÁTICA 1º ANO (200 QUESTÕES)
// O sistema vai baralhar e sortear apenas 10 de cada nível por jogada.
// ======================================================================

const bancoPerguntas =[
    {
        // ==========================================
        // NÍVEL 0: A Planície (Até 10) - 50 Questões
        // ==========================================
        nome: "A Planície (Até 10)",
        icone: "⛺",
        classeCSS: "tema-0",
        perguntasPool:[
            // Contagem Visual
            { q: "Quantas maçãs estão aqui?", v: "🍎🍎🍎🍎🍎", opts: ["4", "5", "6"], ans: "5" },
            { q: "Conta as estrelas:", v: "⭐⭐⭐⭐⭐⭐<br>⭐⭐", opts: ["7", "8", "9"], ans: "8" },
            { q: "Quantos balões vês?", v: "🎈🎈🎈🎈", opts: ["3", "4", "5"], ans: "4" },
            { q: "Conta os cães:", v: "🐶🐶🐶🐶🐶🐶🐶", opts: ["6", "7", "8"], ans: "7" },
            { q: "Quantos peixes estão a nadar?", v: "🐟🐟🐟<br>🐟🐟🐟", opts:["5", "6", "7"], ans: "6" },
            { q: "Conta os morangos:", v: "🍓🍓🍓<br>🍓🍓🍓<br>🍓🍓🍓", opts: ["8", "9", "10"], ans: "9" },
            { q: "Quantos foguetões vês?", v: "🚀🚀", opts:["1", "2", "3"], ans: "2" },
            { q: "Conta as fatias de pizza:", v: "🍕🍕🍕🍕🍕🍕", opts: ["6", "5", "7"], ans: "6" },
            { q: "Quantas flores temos?", v: "🌻🌻🌻🌻<br>🌻🌻🌻🌻<br>🌻🌻", opts: ["9", "10", "11"], ans: "10" },
            { q: "Quantas bolas de futebol?", v: "⚽", opts:["1", "2", "0"], ans: "1" },
            // Somas Visuais
            { q: "Soma os carros:", v: "🚗🚗 + 🚗🚗 = ?", opts: ["3", "4", "5"], ans: "4" },
            { q: "Junta os ursos:", v: "🧸🧸🧸 + 🧸 = ?", opts:["4", "5", "3"], ans: "4" },
            { q: "Resolve a conta:", v: "🐶🐶 + 🐶🐶🐶 = ?", opts: ["4", "5", "6"], ans: "5" },
            { q: "Quantas maçãs no total?", v: "🍎🍎🍎🍎 + 🍎🍎 = ?", opts:["5", "6", "7"], ans: "6" },
            { q: "Junta as estrelas:", v: "⭐⭐⭐⭐ + ⭐⭐⭐⭐ = ?", opts: ["8", "9", "7"], ans: "8" },
            { q: "Soma as borboletas:", v: "🦋🦋 + 🦋 = ?", opts: ["2", "3", "4"], ans: "3" },
            { q: "Junta os balões:", v: "🎈🎈🎈🎈🎈 + 🎈🎈 = ?", opts: ["6", "7", "8"], ans: "7" },
            { q: "Soma as fatias:", v: "🍕 + 🍕 = ?", opts:["2", "3", "1"], ans: "2" },
            { q: "Quantas flores?", v: "🌻🌻🌻 + 🌻🌻 = ?", opts: ["4", "5", "6"], ans: "5" },
            { q: "Junta os peixes:", v: "🐟🐟🐟 + 🐟🐟🐟 = ?", opts:["5", "6", "7"], ans: "6" },
            // Subtrações Visuais
            { q: "Rebentou um balão! Quantos sobraram?", v: "🎈🎈🎈🎈<span class='riscado'>🎈</span>", opts: ["3", "4", "5"], ans: "4" },
            { q: "Comi uma maçã. Sobram:", v: "🍎🍎🍎<span class='riscado'>🍎</span>", opts: ["2", "3", "4"], ans: "3" },
            { q: "Tinha 5 doces, perdi 2. Fico com:", v: "🍬🍬🍬<span class='riscado'>🍬🍬</span>", opts: ["2", "3", "4"], ans: "3" },
            { q: "Havia 6 cães. Um cão fugiu. Quantos ficam?", v: "🐶🐶🐶🐶<span class='riscado'>🐶🐶</span>", opts: ["3", "4", "5"], ans: "4" },
            { q: "Tinha 8 bolas, perdi 3. Fico com...", v: "⚽⚽⚽⚽⚽<span class='riscado'>⚽⚽⚽</span>", opts: ["4", "5", "6"], ans: "5" },
            // Somas e Subtrações Numéricas
            { q: "Qual é o resultado?", v: "2 + 3 = ?", opts: ["4", "5", "6"], ans: "5" },
            { q: "Faz a conta:", v: "4 + 4 = ?", opts: ["7", "8", "9"], ans: "8" },
            { q: "Soma:", v: "5 + 5 = ?", opts:["9", "10", "11"], ans: "10" },
            { q: "Junta os números:", v: "6 + 3 = ?", opts: ["8", "9", "10"], ans: "9" },
            { q: "Faz a conta:", v: "7 + 1 = ?", opts: ["7", "8", "9"], ans: "8" },
            { q: "Soma:", v: "0 + 5 = ?", opts:["0", "5", "6"], ans: "5" },
            { q: "Qual é o resultado?", v: "9 + 1 = ?", opts: ["9", "10", "8"], ans: "10" },
            { q: "Faz a conta:", v: "3 + 3 = ?", opts: ["5", "6", "7"], ans: "6" },
            { q: "Resolve:", v: "10 - 2 = ?", opts:["7", "8", "9"], ans: "8" },
            { q: "Subtrai:", v: "6 - 3 = ?", opts: ["2", "3", "4"], ans: "3" },
            { q: "Faz a conta:", v: "8 - 4 = ?", opts: ["3", "4", "5"], ans: "4" },
            { q: "Resolve:", v: "5 - 5 = ?", opts: ["0", "1", "5"], ans: "0" },
            { q: "Subtrai:", v: "7 - 2 = ?", opts:["4", "5", "6"], ans: "5" },
            // Lógica, Sequências e Comparações
            { q: "O número 5 é MAIOR (>) que o número...", v: "", opts: ["6", "4", "8"], ans: "4" },
            { q: "O número 8 é [ ? ] que o 10.", v: "8 ___ 10", opts: ["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Menor (>)" },
            { q: "Onde há MAIS peixes?", v: "🐟🐟 ... 🐟🐟🐟", opts: ["Esquerda", "Direita", "Iguais"], ans: "Direita" },
            { q: "Qual é o número escondido?", v: "1, 2, 3, ❓, 5", opts:["4", "6", "0"], ans: "4" },
            { q: "O que vem a seguir?", v: "7, 8, 9, ❓", opts: ["6", "10", "11"], ans: "10" },
            { q: "Que número vem ANTES do 3?", v: "❓, 3, 4", opts: ["1", "2", "5"], ans: "2" },
            { q: "Que número é este: NOVE", v: "", opts: ["8", "9", "6"], ans: "9" },
            { q: "Que número é este: SETE", v: "", opts: ["6", "7", "8"], ans: "7" },
            { q: "Quantos dedos temos numa mão?", v: "", opts: ["4", "5", "10"], ans: "5" },
            { q: "Se eu tiver 2 doces e me derem 0, fico com:", v: "", opts:["0", "2", "4"], ans: "2" },
            { q: "O dobro de 3 é:", v: "3 + 3 = ?", opts: ["5", "6", "7"], ans: "6" },
            { q: "Quantos lápis faltam para ter 10?", v: "Eu tenho 9 lápis.", opts: ["1", "2", "3"], ans: "1" }
        ]
    },
    {
        // ==========================================
        // NÍVEL 1: A Floresta (Até 20) - 50 Questões
        // ==========================================
        nome: "A Floresta (Até 20)",
        icone: "🌲",
        classeCSS: "tema-1",
        perguntasPool:[
            // Base 10 e Leitura
            { q: "1 Dezena e 2 Unidades forma o número:", v: "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 <br> 🟨🟨", opts:["12", "21", "3"], ans: "12" },
            { q: "1 Dezena e 5 Unidades é o número:", v: "", opts:["15", "51", "6"], ans: "15" },
            { q: "1 Dezena e 8 Unidades é o número:", v: "", opts: ["81", "18", "8"], ans: "18" },
            { q: "1 Dezena e 0 Unidades forma o:", v: "", opts: ["1", "10", "0"], ans: "10" },
            { q: "Quantas dezenas tem o número 20?", v: "", opts: ["1", "2", "20"], ans: "2" },
            { q: "Que número é: QUINZE", v: "", opts:["15", "50", "5"], ans: "15" },
            { q: "Que número é: DOZE", v: "", opts:["2", "12", "21"], ans: "12" },
            { q: "Que número é: DEZANOVE", v: "", opts: ["19", "9", "29"], ans: "19" },
            // Somas fáceis (10 + X)
            { q: "Junta os números:", v: "10 + 4 = ?", opts: ["14", "41", "104"], ans: "14" },
            { q: "Faz a conta:", v: "10 + 7 = ?", opts:["17", "71", "8"], ans: "17" },
            { q: "Soma:", v: "10 + 9 = ?", opts:["19", "91", "109"], ans: "19" },
            { q: "Junta:", v: "10 + 1 = ?", opts: ["101", "11", "2"], ans: "11" },
            { q: "Resolve:", v: "10 + 10 = ?", opts:["1010", "20", "0"], ans: "20" },
            { q: "Resolve:", v: "10 + 0 = ?", opts:["1010", "20", "10"], ans: "20" },
            // Somas com transição/avançadas
            { q: "Faz a conta:", v: "8 + 4 = ?", opts:["11", "12", "13"], ans: "12" },
            { q: "Soma:", v: "9 + 3 = ?", opts: ["12", "13", "11"], ans: "12" },
            { q: "Soma:", v: "7 + 5 = ?", opts:["12", "11", "13"], ans: "12" },
            { q: "Soma:", v: "9 + 9 = ?", opts: ["17", "18", "19"], ans: "18" },
            { q: "Soma:", v: "6 + 5 = ?", opts:["10", "11", "12"], ans: "11" },
            { q: "Soma:", v: "8 + 6 = ?", opts:["13", "14", "15"], ans: "14" },
            { q: "Soma:", v: "8 + 2 + 1 = ?", opts:["13", "12", "15"], ans: "12" },
            { q: "Junta:", v: "11 + 3 = ?", opts:["13", "14", "15"], ans: "14" },
            { q: "Cálculo:", v: "12 + 4 = ?", opts: ["16", "15", "17"], ans: "16" },
            { q: "Faz a conta:", v: "15 + 5 = ?", opts:["19", "20", "10"], ans: "20" },
            { q: "Soma:", v: "14 + 2 = ?", opts:["16", "17", "15"], ans: "16" },
            { q: "Soma:", v: "5 + 5 + 5 = ?", opts:["16", "17", "15"], ans: "15" },
            // Subtrações
            { q: "Resolve a subtração:", v: "15 - 3 = ?", opts:["12", "13", "11"], ans: "12" },
            { q: "Subtrai:", v: "16 - 4 = ?", opts:["12", "10", "14"], ans: "12" },
            { q: "Faz a conta:", v: "18 - 2 = ?", opts:["15", "16", "17"], ans: "16" },
            { q: "Tira:", v: "14 - 4 = ?", opts:["10", "8", "11"], ans: "10" },
            { q: "Qual o resultado?", v: "20 - 10 = ?", opts: ["10", "5", "30"], ans: "10" },
            { q: "Subtrai:", v: "19 - 1 = ?", opts:["17", "18", "20"], ans: "18" },
            { q: "Tinha 12 doces, comi 2. Fiquei com...", v: "", opts:["14", "10", "8"], ans: "10" },
            { q: "Faz a conta:", v: "17 - 5 = ?", opts: ["11", "12", "13"], ans: "12" },
            { q: "Subtração:", v: "13 - 3 = ?", opts:["10", "11", "9"], ans: "10" },
            { q: "Resolve:", v: "20 - 5 = ?", opts: ["10", "15", "25"], ans: "15" },
            // Pares, Ímpares, Dobros e Metades
            { q: "Qual destes números é PAR?", v: "", opts: ["13", "14", "15"], ans: "14" },
            { q: "Qual destes números é ÍMPAR?", v: "", opts:["12", "15", "18"], ans: "15" },
            { q: "Qual é o dobro de 5?", v: "5 + 5 = ?", opts:["15", "10", "55"], ans: "10" },
            { q: "O dobro de 10 é:", v: "10 + 10 = ?", opts:["100", "20", "0"], ans: "20" },
            { q: "Qual é a metade de 10?", v: "10 a dividir por 2 = ?", opts: ["5", "20", "2"], ans: "5" },
            { q: "A metade de 20 é:", v: "", opts: ["5", "10", "15"], ans: "10" },
            // Sequências e Lógica
            { q: "Descobre a sequência:", v: "14, 15, ❓, 17", opts: ["16", "18", "13"], ans: "16" },
            { q: "O número escondido é:", v: "17, 18, ❓, 20", opts: ["16", "21", "19"], ans: "19" },
            { q: "Qual é o número que vem ANTES do 20?", v: "❓ ... 20", opts: ["18", "19", "21"], ans: "19" },
            { q: "O que vem DEPOIS do 11?", v: "10, 11, ❓", opts: ["12", "13", "9"], ans: "12" },
            { q: "Conta de 2 em 2:", v: "12, 14, 16, ❓", opts:["17", "18", "20"], ans: "18" },
            { q: "Conta de 2 em 2:", v: "2, 4, 6, ❓", opts:["7", "8", "9"], ans: "8" },
            { q: "Conta de 3 em 3:", v: "10, 13, 16, ❓", opts:["17", "18", "19"], ans: "19" },
            { q: "O número 18 é [ ? ] que o 14.", v: "18 ___ 14", opts:["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Maior (>)" },
            { q: "O número 11 é [ ? ] que o 15.", v: "11 ___ 15", opts:["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Menor (<)" },
            { q: "Compara", v: "10 + 4 [ ? ] 4 + 10", opts:["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Igual (=)" },
            { q: "O que é MAIOR (>)?", v: "13 ou 16?", opts: ["13", "16", "Iguais"], ans: "16" }
        ]
    },
    {
        // ==========================================
        // NÍVEL 2: As Nuvens (Até 50) - 50 Questões
        // ==========================================
        nome: "As Nuvens (Até 50)",
        icone: "☁️",
        classeCSS: "tema-2",
        perguntasPool:[
            // Dezenas e Unidades
            { q: "3 Dezenas e 5 Unidades é...", v: "", opts: ["53", "35", "8"], ans: "35" },
            { q: "4 Dezenas e 9 Unidades forma o:", v: "", opts:["94", "409", "49"], ans: "49" },
            { q: "2 Dezenas e 0 Unidades é...", v: "", opts:["2", "20", "200"], ans: "20" },
            { q: "Quantas dezenas tem o número 40?", v: "", opts: ["4", "0", "40"], ans: "4" },
            { q: "O número 50 tem quantas dezenas?", v: "", opts:["50", "0", "5"], ans: "5" },
            { q: "Que número é este: VINTE E NOVE", v: "", opts: ["29", "92", "39"], ans: "29" },
            { q: "Qual é o número 'quarenta e dois'?", v: "", opts:["24", "42", "402"], ans: "42" },
            { q: "Como se escreve trinta e um?", v: "", opts: ["13", "301", "31"], ans: "31" },
            // Somas de Dezenas e Mistas
            { q: "Soma as dezenas:", v: "20 + 10 = ?", opts:["30", "40", "21"], ans: "30" },
            { q: "Soma:", v: "30 + 10 = ?", opts: ["20", "40", "50"], ans: "40" },
            { q: "Soma de dezenas:", v: "10 + 10 + 10 = ?", opts:["20", "30", "40"], ans: "30" },
            { q: "Junta:", v: "20 + 20 = ?", opts: ["30", "40", "50"], ans: "40" },
            { q: "Faz a conta:", v: "40 + 5 = ?", opts:["45", "54", "405"], ans: "45" },
            { q: "Soma:", v: "30 + 8 = ?", opts:["38", "83", "11"], ans: "38" },
            { q: "Cálculo Rápido:", v: "25 + 5 = ?", opts: ["30", "35", "20"], ans: "30" },
            { q: "Faz a conta:", v: "35 + 5 = ?", opts:["40", "45", "50"], ans: "40" },
            { q: "Soma:", v: "21 + 2 + 3 = ?", opts: ["26", "24", "25"], ans: "25" },
            { q: "Cálculo:", v: "45 + 3 = ?", opts:["47", "48", "49"], ans: "48" },
            // Subtrações
            { q: "Tira 10:", v: "40 - 10 = ?", opts:["30", "50", "20"], ans: "30" },
            { q: "Subtrai:", v: "30 - 10 = ?", opts:["10", "20", "40"], ans: "20" },
            { q: "Faz a conta:", v: "50 - 20 = ?", opts: ["20", "30", "40"], ans: "30" },
            { q: "Subtração simples:", v: "25 - 5 = ?", opts: ["15", "20", "30"], ans: "20" },
            { q: "Subtrai:", v: "38 - 8 = ?", opts:["30", "8", "20"], ans: "30" },
            { q: "Cálculo:", v: "42 - 2 = ?", opts: ["40", "20", "30"], ans: "40" },
            { q: "O Rui tinha 20 cartas e perdeu 5. Ficou com:", v: "", opts: ["10", "15", "25"], ans: "15" },
            // Sequências e Contagens
            { q: "Continua a contar:", v: "40, 41, 42, ❓", opts: ["43", "44", "39"], ans: "43" },
            { q: "O que vem na sequência:", v: "47, 48, 49, ❓", opts: ["40", "50", "51"], ans: "50" },
            { q: "O número a seguir ao 39 é o...", v: "39 ... ❓", opts: ["38", "40", "41"], ans: "40" },
            { q: "Qual é o número antes do 30?", v: "❓ ... 30", opts: ["31", "29", "28"], ans: "29" },
            { q: "Que número vem antes do 50?", v: "❓ ... 50", opts:["48", "49", "51"], ans: "49" },
            { q: "Conta de 2 em 2:", v: "20, 22, 24, ❓", opts: ["25", "26", "28"], ans: "26" },
            { q: "Conta de 2 em 2:", v: "40, 42, 44, ❓", opts:["46", "48", "45"], ans: "46" },
            { q: "Conta de 5 em 5:", v: "10, 15, 20, ❓", opts: ["25", "30", "21"], ans: "25" },
            { q: "Conta de 5 em 5:", v: "30, 35, 40, ❓", opts: ["45", "50", "41"], ans: "45" },
            { q: "Conta de 10 em 10:", v: "10, 20, 30, ❓", opts: ["35", "40", "50"], ans: "40" },
            // Maior e Menor
            { q: "O número 45 é [ ? ] que o 32.", v: "45 ___ 32", opts:["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Maior (>)" },
            { q: "O número 28 é [ ? ] que o 41.", v: "28 ___ 41", opts:["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Menor (<)" },
            { q: "Qual é maior?", v: "38 ou 41?", opts:["38", "41", "Iguais (=)"], ans: "41" },
            { q: "Qual é menor?", v: "49 ou 29?", opts: ["49", "29", "Iguais (=)"], ans: "29" },
            { q: "O que é maior?", v: "23 ou 32?", opts:["23", "32", "Iguais (=)"], ans: "32" },
            // Lógica de Metades e Dobros
            { q: "O dobro de 20 é:", v: "", opts:["30", "40", "50"], ans: "40" },
            { q: "A metade de 40 é:", v: "", opts: ["20", "30", "10"], ans: "20" },
            { q: "A metade de 30 é:", v: "", opts: ["10", "15", "20"], ans: "15" }
        ]
    },
    {
        // ==========================================
        // NÍVEL 3: Topo da Montanha (Até 100) - 50 Questões
        // ==========================================
        nome: "O Topo da Montanha (Até 100)",
        icone: "🏔️",
        classeCSS: "tema-3",
        perguntasPool:[
            // Leitura e Decomposição
            { q: "8 Dezenas e 0 Unidades é o número:", v: "", opts:["8", "80", "800"], ans: "80" },
            { q: "Qual o algarismo das dezenas no número 75?", v: "", opts:["7", "5", "75"], ans: "7" },
            { q: "Qual o algarismo das unidades no número 92?", v: "", opts:["9", "2", "92"], ans: "2" },
            { q: "Que número é este: NOVENTA E NOVE", v: "", opts: ["66", "99", "109"], ans: "99" },
            { q: "Que número é: OITENTA E OITO", v: "", opts: ["80", "18", "88"], ans: "88" },
            { q: "Que número é: SESSENTA E TRÊS", v: "", opts:["63", "36", "603"], ans: "63" },
            { q: "Que número é o CEM?", v: "", opts: ["10", "100", "1000"], ans: "100" },
            { q: "Decomposição:", v: "60 + 5 + 2 = ?", opts: ["67", "72", "65"], ans: "67" },
            { q: "Decomposição:", v: "90 + 3 = ?", opts:["39", "93", "903"], ans: "93" },
            { q: "Forma o número:", v: "80 + 7 = ?", opts: ["87", "78", "807"], ans: "87" },
            { q: "Soma as partes:", v: "50 + 4 = ?", opts:["54", "45", "9"], ans: "54" },
            { q: "Junta tudo:", v: "70 + 10 + 5 = ?", opts:["85", "75", "95"], ans: "85" },
            // Somas de Dezenas
            { q: "Cálculo Mental:", v: "50 + 20 = ?", opts:["60", "70", "80"], ans: "70" },
            { q: "Soma rápida:", v: "40 + 40 = ?", opts: ["60", "70", "80"], ans: "80" },
            { q: "Soma rápida:", v: "50 + 50 = ?", opts:["50", "0", "100"], ans: "100" },
            { q: "Faz a conta:", v: "60 + 30 = ?", opts:["80", "90", "100"], ans: "90" },
            { q: "Junta:", v: "70 + 20 = ?", opts: ["80", "90", "100"], ans: "90" },
            { q: "Soma rápida:", v: "80 + 10 = ?", opts: ["70", "90", "100"], ans: "90" },
            // Subtrações de Dezenas
            { q: "Subtração rápida:", v: "100 - 10 = ?", opts: ["90", "80", "10"], ans: "90" },
            { q: "Subtrai:", v: "80 - 20 = ?", opts:["60", "50", "70"], ans: "60" },
            { q: "Tira 50:", v: "100 - 50 = ?", opts:["40", "50", "60"], ans: "50" },
            { q: "Cálculo mental:", v: "90 - 30 = ?", opts: ["50", "60", "70"], ans: "60" },
            { q: "Faz a conta:", v: "70 - 10 = ?", opts:["50", "60", "80"], ans: "60" },
            // Problemas Simples e Lógica de 100
            { q: "Faltam 20 para 100. Sou o número:", v: "100 - 20 = ?", opts: ["80", "70", "90"], ans: "80" },
            { q: "Faltam 5 páginas para acabar um livro de 100 páginas. Em que página estou?", v: "", opts: ["90", "95", "105"], ans: "95" },
            { q: "Se eu tenho 90 cêntimos, quanto falta para 100 (um euro)?", v: "", opts: ["5", "10", "20"], ans: "10" },
            { q: "Tinha 100 balões, voaram 10. Fico com:", v: "", opts:["90", "80", "110"], ans: "90" },
            // Sequências
            { q: "Conta de 10 em 10:", v: "50, 60, 70, ❓", opts: ["80", "75", "90"], ans: "80" },
            { q: "Conta de 10 em 10:", v: "70, 80, 90, ❓", opts:["100", "95", "99"], ans: "100" },
            { q: "O número 99 está quase a chegar ao...", v: "98, 99, ❓", opts: ["90", "100", "80"], ans: "100" },
            { q: "Conta de 5 em 5:", v: "85, 90, 95, ❓", opts: ["100", "96", "99"], ans: "100" },
            { q: "Conta de 5 em 5:", v: "60, 65, 70, ❓", opts: ["75", "80", "71"], ans: "75" },
            { q: "Qual vem depois do 89?", v: "88, 89, ❓", opts: ["80", "90", "91"], ans: "90" },
            { q: "O que vem antes do 100?", v: "❓ ... 100", opts:["90", "99", "101"], ans: "99" },
            { q: "Qual vem antes do 70?", v: "❓ ... 70", opts:["60", "69", "71"], ans: "69" },
            { q: "Continua:", v: "58, 59, ❓", opts: ["60", "50", "61"], ans: "60" },
            // Maior / Menor
            { q: "Atenção! Qual é o número MAIOR?", v: "79 ou 97?", opts: ["79", "97", "89"], ans: "97" },
            { q: "O que é MENOR?", v: "64 ou 46?", opts:["64", "46", "Iguais"], ans: "46" },
            { q: "Qual é MAIOR?", v: "85 ou 58?", opts: ["85", "58", "Iguais"], ans: "85" },
            { q: "O número 90 é [ ? ] que o 89.", v: "90 ___ 89", opts: ["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Maior (>)" },
            { q: "O número 55 é [ ? ] que o 60.", v: "55 ___ 60", opts: ["Maior (>)", "Menor (<)", "Igual (=)"], ans: "Menor (<)" },
            // Dobros e Metades Finais
            { q: "Qual é a metade de 100?", v: "", opts:["50", "40", "60"], ans: "50" },
            { q: "Qual é o dobro de 50?", v: "", opts:["25", "100", "75"], ans: "100" },
            { q: "O dobro de 40 é:", v: "40 + 40 = ?", opts: ["80", "60", "100"], ans: "80" },
            { q: "A metade de 80 é:", v: "", opts:["40", "30", "50"], ans: "40" },
            { q: "A metade de 60 é:", v: "", opts: ["30", "20", "40"], ans: "30" }
        ]
    }
];
