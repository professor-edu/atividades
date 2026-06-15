/* =========================================================================
   BASE DE DADOS - ADIÇÃO COM REAGRUPAMENTO (3.º ANO) [3]
   ========================================================================= */

const dbLogica = {
  // NÍVEL 1: Centenas CDU (15 fáceis | 15 difíceis) [3]
  nivel1: [
    // --- FÁCEIS (0 a 14) ---
    { parcela1: "142", parcela2: "135", corretos: { "u-res": "7", "d-trans": "0", "d-res": "7", "c-trans": "0", "c-res": "2" }, dica: "Soma as colunas da direita para a esquerda. Não há transporte nesta conta, lembra-te de colocar 0!" },
    { parcela1: "138", parcela2: "124", corretos: { "u-res": "2", "d-trans": "1", "d-res": "6", "c-trans": "0", "c-res": "2" }, dica: "Soma as Unidades: 8 + 4 = 12. Fica o 2 e vai 1 de transporte para as Dezenas." },
    { parcela1: "154", parcela2: "172", corretos: { "u-res": "6", "d-trans": "0", "d-res": "2", "c-trans": "1", "c-res": "3" }, dica: "Soma as Dezenas: 5 + 7 = 12. Fica o 2 e vai 1 de transporte para as Centenas." },
    { parcela1: "245", parcela2: "187", corretos: { "u-res": "2", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "4" }, dica: "Esta conta tem transporte nas Unidades e também nas Dezenas!" },
    { parcela1: "113", parcela2: "124", corretos: { "u-res": "7", "d-trans": "0", "d-res": "3", "c-trans": "0", "c-res": "2" }, dica: "Soma com atenção coluna por coluna. Como não há transporte, preenche com 0 no topo." },
    { parcela1: "219", parcela2: "132", corretos: { "u-res": "1", "d-trans": "1", "d-res": "5", "c-trans": "0", "c-res": "3" }, dica: "Soma as Unidades: 9 + 2 = 11. Deixa o 1 em baixo e leva 1 de transporte para cima." },
    { parcela1: "162", parcela2: "154", corretos: { "u-res": "6", "d-trans": "0", "d-res": "1", "c-trans": "1", "c-res": "3" }, dica: "Soma as Dezenas: 6 + 5 = 11. Deixa o 1 em baixo e leva 1 de transporte para cima." },
    { parcela1: "328", parcela2: "145", corretos: { "u-res": "3", "d-trans": "1", "d-res": "7", "c-trans": "0", "c-res": "4" }, dica: "Soma as Unidades: 8 + 5 = 13. Leva 1 de transporte para as Dezenas." },
    { parcela1: "153", parcela2: "162", corretos: { "u-res": "5", "d-trans": "0", "d-res": "1", "c-trans": "1", "c-res": "3" }, dica: "Soma as Dezenas: 5 + 6 = 11. Leva 1 de transporte para as Centenas." },
    { parcela1: "256", parcela2: "175", corretos: { "u-res": "1", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "4" }, dica: "Atenção: esta conta tem transporte em duas colunas sucessivas!" },
    { parcela1: "121", parcela2: "134", corretos: { "u-res": "5", "d-trans": "0", "d-res": "5", "c-trans": "0", "c-res": "2" }, dica: "Soma as colunas sem pressa. Não há transporte, lembra-te de colocar 0." },
    { parcela1: "234", parcela2: "128", corretos: { "u-res": "2", "d-trans": "1", "d-res": "6", "c-trans": "0", "c-res": "3" }, dica: "Soma as Unidades: 4 + 8 = 12. Deixa o 2 em baixo e leva 1 de transporte." },
    { parcela1: "181", parcela2: "143", corretos: { "u-res": "4", "d-trans": "0", "d-res": "2", "c-trans": "1", "c-res": "3" }, dica: "Soma as Dezenas: 8 + 4 = 12. Deixa o 2 em baixo e leva 1 de transporte." },
    { parcela1: "248", parcela2: "185", corretos: { "u-res": "3", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "4" }, dica: "Temos transporte nas Unidades e também na coluna das Dezenas." },
    { parcela1: "111", parcela2: "122", corretos: { "u-res": "3", "d-trans": "0", "d-res": "3", "c-trans": "0", "c-res": "2" }, dica: "Esta é uma conta muito simples. Não tem qualquer transporte." },

    // --- DIFÍCEIS (15 a 29) ---
    { parcela1: "482", parcela2: "339", corretos: { "u-res": "1", "d-trans": "1", "d-res": "2", "c-trans": "1", "c-res": "8" }, dica: "Soma as Unidades: 2 + 9 = 11 (vai 1). Soma as Dezenas: 8 + 3 + 1 = 12 (vai 1)." },
    { parcela1: "489", parcela2: "343", corretos: { "u-res": "2", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "8" }, dica: "Soma as Unidades: 9 + 3 = 12 (vai 1). Soma as Dezenas: 8 + 4 + 1 = 13 (vai 1)." },
    { parcela1: "567", parcela2: "285", corretos: { "u-res": "2", "d-trans": "1", "d-res": "5", "c-trans": "1", "c-res": "8" }, dica: "Esta conta exige transporte nas Unidades e também na coluna das Dezenas." },
    { parcela1: "345", parcela2: "291", corretos: { "u-res": "6", "d-trans": "0", "d-res": "3", "c-trans": "1", "c-res": "6" }, dica: "Nas unidades não há transporte (vai 0). Nas dezenas: 4 + 9 = 13 (vai 1)." },
    { parcela1: "456", parcela2: "128", corretos: { "u-res": "4", "d-trans": "1", "d-res": "8", "c-trans": "0", "c-res": "5" }, dica: "Soma as Unidades: 6 + 8 = 14 (vai 1). Nas Dezenas não há transporte (vai 0)." },
    { parcela1: "312", parcela2: "425", corretos: { "u-res": "7", "d-trans": "0", "d-res": "3", "c-trans": "0", "c-res": "7" }, dica: "Uma conta com números grandes mas sem qualquer transporte. Coloca 0 no topo." },
    { parcela1: "678", parcela2: "145", corretos: { "u-res": "3", "d-trans": "1", "d-res": "2", "c-trans": "1", "c-res": "8" }, dica: "Soma as Unidades: 8 + 5 = 13 (vai 1). Soma as Dezenas: 7 + 4 + 1 = 12 (vai 1)." },
    { parcela1: "543", parcela2: "282", corretos: { "u-res": "5", "d-trans": "0", "d-res": "2", "c-trans": "1", "c-res": "8" }, dica: "Não há transporte nas unidades. Nas dezenas: 4 + 8 = 12 (vai 1)." },
    { parcela1: "329", parcela2: "453", corretos: { "u-res": "2", "d-trans": "1", "d-res": "8", "c-trans": "0", "c-res": "7" }, dica: "Soma as Unidades: 9 + 3 = 12 (vai 1). Nas dezenas não há transporte (vai 0)." },
    { parcela1: "222", parcela2: "444", corretos: { "u-res": "6", "d-trans": "0", "d-res": "6", "c-trans": "0", "c-res": "6" }, dica: "Uma conta muito simples, sem transporte. Lembra-te de colocar 0 nas caixas do topo." },
    { parcela1: "789", parcela2: "123", corretos: { "u-res": "2", "d-trans": "1", "d-res": "1", "c-trans": "1", "c-res": "9" }, dica: "Soma as Unidades: 9 + 3 = 12 (vai 1). Soma as Dezenas: 8 + 2 + 1 = 11 (vai 1)." },
    { parcela1: "456", parcela2: "382", corretos: { "u-res": "8", "d-trans": "0", "d-res": "3", "c-trans": "1", "c-res": "8" }, dica: "Não há transporte nas unidades. Nas dezenas: 5 + 8 = 13 (vai 1)." },
    { parcela1: "564", parcela2: "128", corretos: { "u-res": "2", "d-trans": "1", "d-res": "9", "c-trans": "0", "c-res": "6" }, dica: "Soma as Unidades: 4 + 8 = 12 (vai 1). Nas dezenas não há transporte." },
    { parcela1: "355", parcela2: "422", corretos: { "u-res": "7", "d-trans": "0", "d-res": "7", "c-trans": "0", "c-res": "7" }, dica: "Esta adição com números grandes não tem qualquer transporte." },
    { parcela1: "654", parcela2: "289", corretos: { "u-res": "3", "d-trans": "1", "d-res": "4", "c-trans": "1", "c-res": "9" }, dica: "Soma as Unidades: 4 + 9 = 13 (vai 1). Soma as Dezenas: 5 + 8 + 1 = 14 (vai 1)." }
  ],

  // NÍVEL 2: Milhares UM CDU (15 fáceis | 15 difíceis) [3]
  nivel2: [
    // --- FÁCEIS (0 a 14) ---
    { parcela1: "1142", parcela2: "1135", corretos: { "u-res": "7", "d-trans": "0", "d-res": "7", "c-trans": "0", "c-res": "2", "m-trans": "0", "m-res": "2" }, dica: "Soma coluna por coluna. Esta conta não tem qualquer transporte, coloca 0!" },
    { parcela1: "1138", parcela2: "1124", corretos: { "u-res": "2", "d-trans": "1", "d-res": "6", "c-trans": "0", "c-res": "2", "m-trans": "0", "m-res": "2" }, dica: "Soma as Unidades: 8 + 4 = 12. Deixa o 2 em baixo e leva 1 de transporte." },
    { parcela1: "1154", parcela2: "1172", corretos: { "u-res": "6", "d-trans": "0", "d-res": "2", "c-trans": "1", "c-res": "3", "m-trans": "0", "m-res": "2" }, dica: "Soma as Dezenas: 5 + 7 = 12. Deixa o 2 em baixo e leva 1 de transporte." },
    { parcela1: "1245", parcela2: "1187", corretos: { "u-res": "2", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "4", "m-trans": "0", "m-res": "2" }, dica: "Temos transporte nas Unidades e também na coluna das Dezenas." },
    { parcela1: "2113", parcela2: "1124", corretos: { "u-res": "7", "d-trans": "0", "d-res": "3", "c-trans": "0", "c-res": "2", "m-trans": "0", "m-res": "3" }, dica: "Calcula com atenção. Esta conta de milhares não tem transporte." },
    { parcela1: "1219", parcela2: "1132", corretos: { "u-res": "1", "d-trans": "1", "d-res": "5", "c-trans": "0", "c-res": "3", "m-trans": "0", "m-res": "2" }, dica: "Soma as Unidades: 9 + 2 = 11. Deixa o 1 em baixo e leva 1 de transporte." },
    { parcela1: "1162", parcela2: "1154", corretos: { "u-res": "6", "d-trans": "0", "d-res": "1", "c-trans": "1", "c-res": "3", "m-trans": "0", "m-res": "2" }, dica: "Soma as Dezenas: 6 + 5 = 11. Deixa o 1 em baixo e leva 1 de transporte." },
    { parcela1: "2328", parcela2: "1145", corretos: { "u-res": "3", "d-trans": "1", "d-res": "7", "c-trans": "0", "c-res": "4", "m-trans": "0", "m-res": "3" }, dica: "Soma as Unidades: 8 + 5 = 13. Leva 1 de transporte para as Dezenas." },
    { parcela1: "1153", parcela2: "1162", corretos: { "u-res": "5", "d-trans": "0", "d-res": "1", "c-trans": "1", "c-res": "3", "m-trans": "0", "m-res": "2" }, dica: "Soma as Dezenas: 5 + 6 = 11. Leva 1 de transporte para as Centenas." },
    { parcela1: "1256", parcela2: "1175", corretos: { "u-res": "1", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "4", "m-trans": "0", "m-res": "2" }, dica: "Esta conta de milhares tem transporte em duas colunas consecutivas." },
    { parcela1: "2121", parcela2: "1134", corretos: { "u-res": "5", "d-trans": "0", "d-res": "5", "c-trans": "0", "c-res": "2", "m-trans": "0", "m-res": "3" }, dica: "Soma as colunas sem pressa. Não há transporte nesta operação." },
    { parcela1: "1234", parcela2: "1128", corretos: { "u-res": "2", "d-trans": "1", "d-res": "6", "c-trans": "0", "c-res": "3", "m-trans": "0", "m-res": "2" }, dica: "Soma as Unidades: 4 + 8 = 12. Deixa o 2 em baixo e leva 1 de transporte." },
    { parcela1: "2181", parcela2: "1143", corretos: { "u-res": "4", "d-trans": "0", "d-res": "2", "c-trans": "1", "c-res": "3", "m-trans": "0", "m-res": "3" }, dica: "Soma as Dezenas: 8 + 4 = 12. Deixa o 2 em baixo e leva 1 de transporte." },
    { parcela1: "1248", parcela2: "1185", corretos: { "u-res": "3", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "4", "m-trans": "0", "m-res": "2" }, dica: "Temos transporte na coluna das Unidades e também na das Dezenas." },
    { parcela1: "2111", parcela2: "1122", corretos: { "u-res": "3", "d-trans": "0", "d-res": "3", "c-trans": "0", "c-res": "2", "m-trans": "0", "m-res": "3" }, dica: "Esta conta é muito simples. Não tem qualquer transporte." },

    // --- DIFÍCEIS (15 a 29) ---
    { parcela1: "4567", parcela2: "2854", corretos: { "u-res": "1", "d-trans": "1", "d-res": "2", "c-trans": "1", "c-res": "4", "m-trans": "1", "m-res": "7" }, dica: "Soma as Unidades: 7 + 4 = 11 (vai 1). Soma as Dezenas: 6 + 5 + 1 = 12 (vai 1). Soma as Centenas: 5 + 8 + 1 = 14 (vai 1)." },
    { parcela1: "3489", parcela2: "2343", corretos: { "u-res": "2", "d-trans": "1", "d-res": "3", "c-trans": "1", "c-res": "8", "m-trans": "0", "m-res": "5" }, dica: "Soma as Unidades: 9 + 3 = 12 (vai 1). Soma as Dezenas: 8 + 4 + 1 = 13 (vai 1)." },
    { parcela1: "2567", parcela2: "1285", corretos: { "u-res": "2", "d-trans": "1", "d-res": "5", "c-trans": "1", "c-res": "8", "m-trans": "0", "m-res": "3" }, dica: "Temos transporte na coluna das Unidades e também na das Dezenas." },
    { parcela1: "4345", parcela2: "1291", corretos: { "u-res": "6", "d-trans": "0", "d-res": "3", "c-trans": "1", "c-res": "6", "m-trans": "0", "m-res": "5" }, dica: "Não há transporte nas unidades. Nas dezenas: 4 + 9 = 13 (vai 1)." },
    { parcela1: "5456", parcela2: "2128", corretos: { "u-res": "4", "d-trans": "1", "d-res": "8", "c-trans": "0", "c-res": "5", "m-trans": "0", "m-res": "7" }, dica: "Soma as Unidades: 6 + 8 = 14 (vai 1). Nas dezenas não há transporte." },
    { parcela1: "3312", parcela2: "4425", corretos: { "u-res": "7", "d-trans": "0", "d-res": "3", "c-trans": "0", "c-res": "7", "m-trans": "0", "m-res": "7" }, dica: "Uma conta com números grandes mas sem qualquer transporte. Preenche com 0 no topo." },
    { parcela1: "2678", parcela2: "1145", corretos: { "u-res": "3", "d-trans": "1", "d-res": "2", "c-trans": "1", "c-res": "8", "m-trans": "0", "m-res": "3" }, dica: "Soma as Unidades: 8 + 5 = 13 (vai 1). Soma as Dezenas: 7 + 4 + 1 = 12 (vai 1)." },
    { parcela1: "5543", parcela2: "2282", corretos: { "u-res": "5", "d-trans": "0", "d-res": "2", "c-trans": "1", "c-res": "8", "m-trans": "0", "m-res": "7" }, dica: "Não há transporte nas unidades. Nas dezenas: 4 + 8 = 12 (vai 1)." },
    { parcela1: "3329", parcela2: "4453", corretos: { "u-res": "2", "d-trans": "1", "d-res": "8", "c-trans": "0", "c-res": "7", "m-trans": "0", "m-res": "7" }, dica: "Soma as Unidades: 9 + 3 = 12 (vai 1). Nas dezenas não há transporte." },
    { parcela1: "2222", parcela2: "4444", corretos: { "u-res": "6", "d-trans": "0", "d-res": "6", "c-trans": "0", "c-res": "6", "m-trans": "0", "m-res": "6" }, dica: "Uma conta muito simples, sem transporte. Lembra-te de colocar 0 nas caixas do topo." },
    { parcela1: "3789", parcela2: "1123", corretos: { "u-res": "2", "d-trans": "1", "d-res": "1", "c-trans": "1", "c-res": "9", "m-trans": "0", "m-res": "4" }, dica: "Soma as Unidades: 9 + 3 = 12 (vai 1). Soma as Dezenas: 8 + 2 + 1 = 11 (vai 1)." },
    { parcela1: "4456", parcela2: "3382", corretos: { "u-res": "8", "d-trans": "0", "d-res": "3", "c-trans": "1", "c-res": "8", "m-trans": "0", "m-res": "7" }, dica: "Não há transporte nas unidades. Nas dezenas: 5 + 8 = 13 (vai 1)." },
    { parcela1: "5564", parcela2: "1128", corretos: { "u-res": "2", "d-trans": "1", "d-res": "9", "c-trans": "0", "c-res": "6", "m-trans": "0", "m-res": "6" }, dica: "Soma as Unidades: 4 + 8 = 12 (vai 1). Nas dezenas não há transporte." },
    { parcela1: "3355", parcela2: "4422", corretos: { "u-res": "7", "d-trans": "0", "d-res": "7", "c-trans": "0", "c-res": "7", "m-trans": "0", "m-res": "7" }, dica: "Esta adição com números grandes não tem qualquer transporte." },
    { parcela1: "4654", parcela2: "2289", corretos: { "u-res": "3", "d-trans": "1", "d-res": "4", "c-trans": "1", "c-res": "9", "m-trans": "0", "m-res": "6" }, dica: "Soma as Unidades: 4 + 9 = 13 (vai 1). Soma as Dezenas: 5 + 8 + 1 = 14 (vai 1)." }
  ],

  // NÍVEL 3 (GÉNIO): Enigma de Lacunas Verticais (15 fáceis [2 lacunas] | 15 difíceis [3 ou 4 lacunas]) [3]
  nivel3: [
    // --- FÁCEIS (0 a 14) ---
    {
      parcela1: "4{blank0}3",
      parcela2: "17{blank1}",
      soma: "622",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "9", opcoes: ["8", "9", "0"] }
      ],
      dica: "Resolve de trás para a frente. Nas Unidades, 3 + ? tem de terminar em 2 (12), por isso a lacuna das Unidades é 9 e vai 1 de transporte."
    },
    {
      parcela1: "1{blank0}5",
      parcela2: "23{blank1}",
      soma: "382",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "7", opcoes: ["6", "7", "8"] }
      ],
      dica: "Nas Unidades, 5 + ? termina em 2 (12). Logo, a lacuna das Unidades é 7 (vai 1). Nas Dezenas, ? + 3 + 1 de transporte dá 8."
    },
    {
      parcela1: "3{blank0}2",
      parcela2: "14{blank1}",
      soma: "508",
      blanks: [
        { id: "blank0", correto: "6", opcoes: ["5", "6", "7"] },
        { id: "blank1", correto: "6", opcoes: ["5", "6", "7"] }
      ],
      dica: "Nas Unidades, 2 + ? dá 8. Nas Dezenas, ? + 4 termina em 0 (10). Logo, a lacuna das Dezenas é 6."
    },
    {
      parcela1: "25{blank0}",
      parcela2: "1{blank1}4",
      soma: "432",
      blanks: [
        { id: "blank0", correto: "8", opcoes: ["7", "8", "9"] },
        { id: "blank1", correto: "7", opcoes: ["6", "7", "8"] }
      ],
      dica: "Nas Unidades, ? + 4 termina em 2 (12), por isso a lacuna é 8 (vai 1). Nas Dezenas, 5 + ? + 1 de transporte termina em 3 (13)."
    },
    {
      parcela1: "3{blank0}6",
      parcela2: "24{blank1}",
      soma: "612",
      blanks: [
        { id: "blank0", correto: "6", opcoes: ["5", "6", "7"] },
        { id: "blank1", correto: "6", opcoes: ["5", "6", "7"] }
      ],
      dica: "Nas Unidades, 6 + ? termina em 2 (12). Logo, a lacuna é 6 (vai 1). Nas Dezenas, ? + 4 + 1 de transporte termina em 1 (11)."
    },
    {
      parcela1: "4{blank0}8",
      parcela2: "12{blank1}",
      soma: "582",
      blanks: [
        { id: "blank0", correto: "5", opcoes: ["4", "5", "6"] },
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] }
      ],
      dica: "Nas Unidades, 8 + ? termina em 2 (12), por isso a lacuna é 4 (vai 1). Nas Dezenas, ? + 2 + 1 de transporte dá 8."
    },
    {
      parcela1: "2{blank0}9",
      parcela2: "13{blank1}",
      soma: "411",
      blanks: [
        { id: "blank0", correto: "7", opcoes: ["6", "7", "8"] },
        { id: "blank1", correto: "2", opcoes: ["1", "2", "3"] }
      ],
      dica: "Nas Unidades, 9 + ? termina em 1 (11), por isso a lacuna é 2 (vai 1). Nas Dezenas, ? + 3 + 1 de transporte termina em 1 (11)."
    },
    {
      parcela1: "35{blank0}",
      parcela2: "2{blank1}4",
      soma: "622",
      blanks: [
        { id: "blank0", correto: "8", opcoes: ["7", "8", "9"] },
        { id: "blank1", correto: "6", opcoes: ["5", "6", "7"] }
      ],
      dica: "Nas Unidades, ? + 4 termina em 2 (12), por isso a lacuna é 8 (vai 1). Nas Dezenas, 5 + ? + 1 de transporte termina em 2 (12)."
    },
    {
      parcela1: "1{blank0}4",
      parcela2: "25{blank1}",
      soma: "392",
      blanks: [
        { id: "blank0", correto: "3", opcoes: ["2", "3", "4"] },
        { id: "blank1", correto: "8", opcoes: ["7", "8", "9"] }
      ],
      dica: "Nas Unidades, 4 + ? termina em 2 (12), por isso a lacuna é 8 (vai 1). Nas Dezenas, ? + 5 + 1 de transporte dá 9."
    },
    {
      parcela1: "2{blank0}7",
      parcela2: "18{blank1}",
      soma: "432",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "5", opcoes: ["4", "5", "6"] }
      ],
      dica: "Nas Unidades, 7 + ? termina em 2 (12), por isso a lacuna é 5 (vai 1). Nas Dezenas, ? + 8 + 1 de transporte termina em 3 (13)."
    },
    {
      parcela1: "3{blank0}5",
      parcela2: "12{blank1}",
      soma: "472",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "7", opcoes: ["6", "7", "8"] }
      ],
      dica: "Nas Unidades, 5 + ? termina em 2 (12), por isso a lacuna é 7 (vai 1). Nas Dezenas, ? + 2 + 1 de transporte dá 7."
    },
    {
      parcela1: "2{blank0}1",
      parcela2: "13{blank1}",
      soma: "355",
      blanks: [
        { id: "blank0", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] }
      ],
      dica: "Nas Unidades, 1 + ? dá 5, logo a lacuna é 4 (vai 0). Nas Dezenas, ? + 3 dá 5, logo a lacuna é 2."
    },
    {
      parcela1: "1{blank0}8", 
      parcela2: "22{blank1}", 
      soma: "372",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] }, 
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] }  
      ],
      dica: "Nas Unidades, 8 + ? termina em 2 (12), por isso a lacuna das Unidades é 4 (vai 1 de transporte). Nas Dezenas, ? + 2 + 1 de transporte dá 7."
    },
    {
      parcela1: "3{blank0}8",
      parcela2: "14{blank1}",
      soma: "522",
      blanks: [
        { id: "blank0", correto: "7", opcoes: ["6", "7", "8"] },
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] }
      ],
      dica: "Nas Unidades, 8 + ? termina em 2 (12), por isso a lacuna é 4 (vai 1). Nas Dezenas, ? + 4 + 1 de transporte termina em 2 (12)."
    },
    {
      parcela1: "2{blank0}2",
      parcela2: "15{blank1}",
      soma: "411",
      blanks: [
        { id: "blank0", correto: "5", opcoes: ["4", "5", "6"] },
        { id: "blank1", correto: "9", opcoes: ["8", "9", "0"] }
      ],
      dica: "Nas Unidades, 2 + ? termina em 1 (11), por isso a lacuna é 9 (vai 1). Nas Dezenas, ? + 5 + 1 de transporte termina em 1 (11)."
    },

    // --- DIFÍCEIS (15 a 29) ---
    {
      parcela1: "{blank0}89",
      parcela2: "3{blank1}3",
      soma: "83{blank2}",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank2", correto: "2", opcoes: ["1", "2", "3"] }
      ],
      dica: "Nas Unidades, 9 + 3 = 12 (deixa 2 de resultado e vai 1). Nas Dezenas, 8 + ? + 1 de transporte termina em 3 (13)."
    },
    {
      parcela1: "{blank0}67",
      parcela2: "2{blank1}5",
      soma: "85{blank2}",
      blanks: [
        { id: "blank0", correto: "5", opcoes: ["4", "5", "6"] },
        { id: "blank1", correto: "8", opcoes: ["7", "8", "9"] },
        { id: "blank2", correto: "2", opcoes: ["1", "2", "3"] }
      ],
      dica: "Nas Unidades, 7 + 5 = 12 (deixa 2 e vai 1). Nas Dezenas, 6 + ? + 1 de transporte termina em 5 (15)."
    },
    {
      parcela1: "3{blank0}5",
      parcela2: "29{blank1}",
      soma: "{blank2}36",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "1", opcoes: ["0", "1", "2"] },
        { id: "blank2", correto: "6", opcoes: ["5", "6", "7"] }
      ],
      dica: "Nas Unidades, 5 + ? dá 6, logo a lacuna é 1. Nas Dezenas, ? + 9 termina em 3 (13), por isso a lacuna é 4."
    },
    {
      parcela1: "4{blank0}6",
      parcela2: "12{blank1}",
      soma: "{blank2}84",
      blanks: [
        { id: "blank0", correto: "5", opcoes: ["4", "5", "6"] },
        { id: "blank1", correto: "8", opcoes: ["7", "8", "9"] },
        { id: "blank2", correto: "5", opcoes: ["4", "5", "6"] }
      ],
      dica: "Nas Unidades, 6 + ? termina em 4 (14), por isso a lacuna é 8. Nas Dezenas, ? + 2 + 1 de transporte dá 8."
    },
    {
      parcela1: "3{blank0}2",
      parcela2: "42{blank1}",
      soma: "{blank2}37",
      blanks: [
        { id: "blank0", correto: "1", opcoes: ["0", "1", "2"] },
        { id: "blank1", correto: "5", opcoes: ["4", "5", "6"] },
        { id: "blank2", correto: "7", opcoes: ["6", "7", "8"] }
      ],
      dica: "Nas Unidades, 2 + ? dá 7, logo a lacuna é 5. Nas Dezenas, ? + 2 dá 3, logo a lacuna é 1."
    },
    {
      parcela1: "{blank0}78",
      parcela2: "1{blank1}5",
      soma: "82{blank2}",
      blanks: [
        { id: "blank0", correto: "6", opcoes: ["5", "6", "7"] },
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank2", correto: "3", opcoes: ["2", "3", "4"] }
      ],
      dica: "Nas Unidades, 8 + 5 = 13 (deixa 3 e vai 1). Nas Dezenas, 7 + ? + 1 de transporte termina em 2 (12)."
    },
    {
      parcela1: "5{blank0}3",
      parcela2: "28{blank1}",
      soma: "{blank2}25",
      blanks: [
        { id: "blank0", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank1", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank2", correto: "8", opcoes: ["7", "8", "9"] }
      ],
      dica: "Nas Unidades, 3 + ? dá 5, logo a lacuna é 2. Nas Dezenas, ? + 8 termina em 2 (12), por isso a lacuna é 4."
    },
    {
      parcela1: "3{blank0}9",
      parcela2: "45{blank1}",
      soma: "{blank2}82",
      blanks: [
        { id: "blank0", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank1", correto: "3", opcoes: ["2", "3", "4"] },
        { id: "blank2", correto: "7", opcoes: ["6", "7", "8"] }
      ],
      dica: "Nas Unidades, 9 + ? termina em 2 (12), por isso a lacuna é 3 (vai 1). Nas Dezenas, ? + 5 + 1 de transporte dá 8."
    },
    {
      parcela1: "{blank0}22",
      parcela2: "4{blank1}4",
      soma: "66{blank2}",
      blanks: [
        { id: "blank0", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank1", correto: "4", opcoes: ["3", "4", "5"] },
        { id: "blank2", correto: "6", opcoes: ["5", "6", "7"] }
      ],
      dica: "Uma conta sem transporte. Nas Unidades, 2 + 4 dá 6. Nas Dezenas, 2 + ? dá 6, logo a lacuna é 4."
    },
    {
      parcela1: "{blank0}89",
      parcela2: "1{blank1}3",
      soma: "91{blank2}",
      blanks: [
        { id: "blank0", correto: "7", opcoes: ["6", "7", "8"] },
        { id: "blank1", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank2", correto: "2", opcoes: ["1", "2", "3"] }
      ],
      dica: "Nas Unidades, 9 + 3 = 12 (deixa 2 e vai 1). Nas Dezenas, 8 + ? + 1 de transporte termina em 1 (11)."
    },
    {
      parcela1: "4{blank0}6",
      parcela2: "38{blank1}",
      soma: "{blank2}38",
      blanks: [
        { id: "blank0", correto: "5", opcoes: ["4", "5", "6"] },
        { id: "blank1", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank2", correto: "8", opcoes: ["7", "8", "9"] }
      ],
      dica: "Nas Unidades, 6 + ? dá 8, logo a lacuna é 2 (vai 0). Nas Dezenas, ? + 8 termina em 3 (13), por isso a lacuna é 5."
    },
    {
      parcela1: "5{blank0}4",
      parcela2: "12{blank1}",
      soma: "{blank2}92",
      blanks: [
        { id: "blank0", correto: "6", opcoes: ["5", "6", "7"] },
        { id: "blank1", correto: "8", opcoes: ["7", "8", "9"] },
        { id: "blank2", correto: "6", opcoes: ["5", "6", "7"] }
      ],
      dica: "Nas Unidades, 4 + ? termina em 2 (12), por isso a lacuna é 8 (vai 1). Nas Dezenas, ? + 2 + 1 de transporte dá 9."
    },
    {
      parcela1: "{blank0}55",
      parcela2: "4{blank1}2",
      soma: "77{blank2}",
      blanks: [
        { id: "blank0", correto: "3", opcoes: ["2", "3", "4"] },
        { id: "blank1", correto: "2", opcoes: ["1", "2", "3"] },
        { id: "blank2", correto: "7", opcoes: ["6", "7", "8"] }
      ],
      dica: "Uma conta sem transporte. Nas Unidades, 5 + 2 dá 7. Nas Dezenas, 5 + ? dá 7, logo a lacuna é 2."
    },
    {
      parcela1: "{blank0}54",
      parcela2: "2{blank1}9",
      soma: "94{blank2}",
      blanks: [
        { id: "blank0", correto: "6", opcoes: ["5", "6", "7"] },
        { id: "blank1", correto: "8", opcoes: ["7", "8", "9"] },
        { id: "blank2", correto: "3", opcoes: ["2", "3", "4"] }
      ],
      dica: "Nas Unidades, 4 + 9 = 13 (deixa 3 e vai 1). Nas Dezenas, 5 + ? + 1 de transporte termina em 4 (14)."
    },
    {
      parcela1: "4{blank0}2", // Centena: 4 | Dezena: lacuna | Unidade: 2
      parcela2: "339",        // Centena: 3 | Dezena: 3 | Unidade: 9
      soma: "{blank1}21",     // Centena: lacuna | Dezena: 2 | Unidade: 1
      blanks: [
        { id: "blank0", correto: "8", opcoes: ["7", "8", "9"] }, // Único valor correto: 8 + 3 + 1 = 12 [3]
        { id: "blank1", correto: "8", opcoes: ["7", "8", "9"] }  // Único valor correto: 4 + 3 + 1 = 8 [3]
      ],
      dica: "Nas Unidades, 2 + 9 = 11 (deixa 1 e vai 1). Nas Dezenas, ? + 3 + 1 de transporte termina em 2 (12)."
    }
  ]
};