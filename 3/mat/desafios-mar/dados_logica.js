/* =========================================================================
   BASE DE DADOS - DESAFIOS DE LÓGICA E EQUAÇÕES (3.º ANO) [3]
   ========================================================================= */

const dbLogica = {
  // NÍVEL 1: Somas e Subtrações Simples
  nivel1: [
    // --- FÁCEIS (1 a 10) ---
    {
      linhas: [
        "[ancora] + [ancora] + [ancora] = 30",
        "[ancora] + [barco] = 18",
        "[barco] + [ancora] = ?"
      ],
      resposta: 18,
      dica: "Se três âncoras juntas dão 30, quanto vale cada uma? Substitui esse valor na segunda linha."
    },
    {
      linhas: [
        "[peixe] + [peixe] = 40",
        "[peixe] - [estrela] = 15",
        "[peixe] + [estrela] = ?"
      ],
      resposta: 25,
      dica: "Dois peixes iguais dão 40. Descobre o valor de um peixe e subtrai para encontrar a estrela."
    },
    {
      linhas: [
        "[barco] + [barco] + [barco] = 90",
        "[barco] - [ancora] = 20",
        "[barco] - [ancora] = ?"
      ],
      resposta: 20,
      dica: "Descobre o valor de um barco dividindo 90 por 3. Depois subtrai para encontrar a âncora."
    },
    {
      linhas: [
        "[estrela] + [estrela] + [estrela] = 15",
        "[estrela] + [peixe] = 35",
        "[peixe] - [estrela] = ?"
      ],
      resposta: 25,
      dica: "Três estrelas somam 15, logo cada uma vale 5. Substitui esse valor para descobrir o peixe."
    },
    {
      linhas: [
        "[ancora] + [ancora] = 16",
        "[ancora] - [peixe] = 2",
        "[peixe] + [ancora] = ?"
      ],
      resposta: 14,
      dica: "Duas âncoras dão 16, logo cada uma vale 8. Se 8 menos um peixe dá 2, quanto vale o peixe?"
    },
    // NOVAS FÁCEIS NÍVEL 1
    {
      linhas: [
        "[polvo] + [polvo] = 20",
        "[polvo] + [foca] = 16",
        "[polvo] - [foca] = ?"
      ],
      resposta: 4,
      dica: "Dois polvos valem 20, logo cada um vale 10. Se juntares uma foca dá 16. Quanto vale a foca?"
    },
    {
      linhas: [
        "[pinguim] + [pinguim] + [pinguim] = 30",
        "[pinguim] + [cavalo] = 15",
        "[cavalo] + [cavalo] = ?"
      ],
      resposta: 10,
      dica: "Três pinguins dão 30, então cada um vale 10. Descobre o valor do cavalo-marinho e soma dois!"
    },
    {
      linhas: [
        "[golfinho] + [golfinho] = 50",
        "[golfinho] - [peixe1] = 10",
        "[peixe1] + [golfinho] = ?"
      ],
      resposta: 40,
      dica: "Dois golfinhos dão 50, portanto cada um vale 25. Subtrai o peixe azul para dar 10 e descobre o seu valor."
    },
    {
      linhas: [
        "[foca] + [foca] = 24",
        "[foca] + [polvo] = 30",
        "[polvo] - [foca] = ?"
      ],
      resposta: 6,
      dica: "Se duas focas dão 24, a metade é o valor de uma foca. Substitui na linha de baixo para achar o polvo."
    },
    {
      linhas: [
        "[cavalo] + [pinguim] = 20",
        "[cavalo] + [cavalo] = 14",
        "[pinguim] - [cavalo] = ?"
      ],
      resposta: 6,
      dica: "Dois cavalos-marinhos somam 14, logo cada um vale 7. Substitui na primeira linha para achar o pinguim."
    },

    // --- DIFÍCEIS (11 a 20) ---
    {
      linhas: [
        "[ancora] + [ancora] + [ancora] = 600",
        "[ancora] + [barco] = 800",
        "[barco] - [ancora] = ?"
      ],
      resposta: 400,
      dica: "Se três âncoras dão 600, cada uma vale 200. Substitui esse valor na segunda linha para achar o barco."
    },
    {
      linhas: [
        "[peixe] + [peixe] = 800",
        "[peixe] - [estrela] = 350",
        "[peixe] + [estrela] = ?"
      ],
      resposta: 450,
      dica: "Dois peixes somam 800, logo cada um vale 400. Subtrai 350 para descobrir a estrela."
    },
    {
      linhas: [
        "[barco] + [barco] + [barco] = 900",
        "[barco] - [ancora] = 100",
        "[barco] + [ancora] = ?"
      ],
      resposta: 500,
      dica: "Três barcos somam 900, logo cada um vale 300. Se 300 menos a âncora dá 100, quanto vale a âncora?"
    },
    {
      linhas: [
        "[estrela] + [estrela] + [estrela] = 450",
        "[estrela] + [peixe] = 550",
        "[peixe] - [estrela] = ?"
      ],
      resposta: 250,
      dica: "Três estrelas somam 450, logo cada uma vale 150. Substitui esse valor para descobrir o peixe."
    },
    {
      linhas: [
        "[ancora] + [ancora] = 700",
        "[ancora] - [peixe] = 250",
        "[peixe] + [ancora] = ?"
      ],
      resposta: 450,
      dica: "Duas âncoras somam 700, logo cada uma vale 350. Se 350 menos o peixe dá 250, quanto vale o peixe?"
    },
    // NOVAS DIFÍCEIS NÍVEL 1
    {
      linhas: [
        "[polvo] + [polvo] = 400",
        "[polvo] + [foca] = 550",
        "[foca] - [polvo] = ?"
      ],
      resposta: 150,
      dica: "Dois polvos dão 400, logo cada um vale 200. Se polvo mais foca dá 550, quanto vale a foca?"
    },
    {
      linhas: [
        "[pinguim] + [pinguim] + [pinguim] = 600",
        "[pinguim] + [cavalo] = 350",
        "[cavalo] + [cavalo] = ?"
      ],
      resposta: 300,
      dica: "Três pinguins dão 600, cada um vale 200. Substitui e descobre o cavalo-marinho para somar dois iguais no fim."
    },
    {
      linhas: [
        "[golfinho] + [golfinho] = 500",
        "[golfinho] - [peixe1] = 100",
        "[peixe1] + [golfinho] = ?"
      ],
      resposta: 400,
      dica: "Dois golfinhos dão 500, cada um vale 250. 250 menos o peixe azul dá 100. Descobre o peixe!"
    },
    {
      linhas: [
        "[foca] + [foca] = 600",
        "[foca] + [polvo] = 750",
        "[polvo] - [foca] = ?"
      ],
      resposta: 150,
      dica: "Se duas focas dão 600, a metade é o valor de uma foca. Substitui na linha de baixo para achar o polvo."
    },
    {
      linhas: [
        "[cavalo] + [cavalo] = 500",
        "[cavalo] + [pinguim] = 650",
        "[pinguim] - [cavalo] = ?"
      ],
      resposta: 150,
      dica: "Dois cavalos-marinhos somam 500, logo cada um vale 250. Descobre o pinguim e faz a conta final."
    }
  ],

  // NÍVEL 2: Multiplicação, Parênteses e Prioridade
  nivel2: [
    // --- FÁCEIS (1 a 10) ---
    {
      linhas: [
        "[ancora] + [ancora] = 12",
        "[barco] + [barco] = 10",
        "[barco] + [ancora] x [ancora] = ?"
      ],
      resposta: 41,
      dica: "Atenção à regra da prioridade operacional: faz a multiplicação de âncoras antes de somar o barco!"
    },
    {
      linhas: [
        "[peixe] + [peixe] = 16",
        "[estrela] + [estrela] = 6",
        "([peixe] + [estrela]) x 2 = ?"
      ],
      resposta: 22,
      dica: "Regra dos parênteses: primeiro soma o peixe e a estrela dentro dos parênteses, e depois multiplica por 2!"
    },
    {
      linhas: [
        "[barco] + [barco] = 20",
        "[ancora] + [ancora] = 8",
        "[ancora] x [barco] - 5 = ?"
      ],
      resposta: 35,
      dica: "Regra de prioridade: primeiro faz a conta de multiplicar do barco pela âncora, e depois subtrai 5!"
    },
    {
      linhas: [
        "[estrela] + [estrela] = 14",
        "[peixe] + [peixe] = 10",
        "([estrela] - [peixe]) x 10 = ?"
      ],
      resposta: 20,
      dica: "Resolve primeiro a conta de menos dentro dos parênteses, e depois multiplica o resultado por 10."
    },
    {
      linhas: [
        "[ancora] + [ancora] = 18",
        "[peixe] + [peixe] = 4",
        "[peixe] + [ancora] x 5 = ?"
      ],
      resposta: 47,
      dica: "Não faças a conta corrida! Multiplica primeiro a âncora por 5, e só no fim soma o peixe."
    },
    // NOVAS FÁCEIS NÍVEL 2
    {
      linhas: [
        "[polvo] + [polvo] = 10",
        "[foca] + [foca] = 8",
        "[foca] + [polvo] x 3 = ?"
      ],
      resposta: 19,
      dica: "Atenção: Primeiro fazes a multiplicação do polvo por 3, e só depois somas o valor da foca!"
    },
    {
      linhas: [
        "[pinguim] + [pinguim] = 12",
        "[cavalo] + [cavalo] = 6",
        "([pinguim] - [cavalo]) x 4 = ?"
      ],
      resposta: 12,
      dica: "Os parênteses mandam sempre! Faz primeiro a subtração entre o pinguim e o cavalo-marinho."
    },
    {
      linhas: [
        "[golfinho] + [golfinho] = 20",
        "[peixe1] + [peixe1] = 4",
        "[peixe1] x [golfinho] + 5 = ?"
      ],
      resposta: 25,
      dica: "Prioridade: a multiplicação vem primeiro. Multiplica o peixe azul pelo golfinho antes de somares 5."
    },
    {
      linhas: [
        "[foca] + [foca] = 14",
        "[polvo] + [polvo] = 6",
        "[polvo] + [foca] x [foca] = ?"
      ],
      resposta: 52,
      dica: "Regras de mestre: A conta de multiplicar das focas faz-se antes da conta de somar."
    },
    {
      linhas: [
        "[cavalo] + [cavalo] = 16",
        "[pinguim] + [pinguim] = 10",
        "([cavalo] + [pinguim]) x 2 = ?"
      ],
      resposta: 26,
      dica: "Parênteses primeiro! Soma o cavalo-marinho com o pinguim, e só depois multiplica tudo por 2."
    },

    // --- DIFÍCEIS (11 a 20) ---
    {
      linhas: [
        "[ancora] + [ancora] = 200",
        "[barco] + [barco] = 800",
        "[barco] + [ancora] x 2 = ?"
      ],
      resposta: 600,
      dica: "Regra de prioridade: primeiro multiplica a âncora por 2, e só depois soma o valor do barco!"
    },
    {
      linhas: [
        "[peixe] + [peixe] = 600",
        "[estrela] + [estrela] = 400",
        "([peixe] - [estrela]) x 3 = ?"
      ],
      resposta: 300,
      dica: "Resolve primeiro a subtração dentro dos parênteses, e depois multiplica o resultado por 3."
    },
    {
      linhas: [
        "[barco] + [barco] = 500",
        "[ancora] + [ancora] = 100",
        "[ancora] x 10 + [barco] = ?"
      ],
      resposta: 750,
      dica: "Regra de prioridade: primeiro multiplica a âncora por 10, e só no fim soma o valor do barco."
    },
    {
      linhas: [
        "[estrela] + [estrela] = 300",
        "[peixe] + [peixe] = 100",
        "([estrela] - [peixe]) x 5 = ?"
      ],
      resposta: 500,
      dica: "Primeiro resolve o que está dentro dos parênteses, e depois multiplica o resultado por 5."
    },
    {
      linhas: [
        "[ancora] + [ancora] = 900",
        "[peixe] + [peixe] = 100",
        "[peixe] + [ancora] x 2 = ?"
      ],
      resposta: 950,
      dica: "Atenção à regra: primeiro faz a conta de multiplicar da âncora por 2, e depois soma o peixe!"
    },
    // NOVAS DIFÍCEIS NÍVEL 2
    {
      linhas: [
        "[polvo] + [polvo] = 200",
        "[foca] + [foca] = 100",
        "[foca] + [polvo] x 4 = ?"
      ],
      resposta: 450,
      dica: "Regra de ouro: primeiro multiplicas o valor do polvo por 4, e só depois somas a foca."
    },
    {
      linhas: [
        "[pinguim] + [pinguim] = 400",
        "[cavalo] + [cavalo] = 200",
        "([pinguim] - [cavalo]) x 3 = ?"
      ],
      resposta: 300,
      dica: "Começa pelos parênteses! Calcula a diferença entre o pinguim e o cavalo, depois multiplica por 3."
    },
    {
      linhas: [
        "[golfinho] + [golfinho] = 100",
        "[peixe1] + [peixe1] = 10",
        "[peixe1] x [golfinho] + 50 = ?"
      ],
      resposta: 300,
      dica: "Tem cuidado para não somar antes de multiplicar. Multiplica o peixe azul pelo golfinho primeiro!"
    },
    {
      linhas: [
        "[foca] + [foca] = 500",
        "[polvo] + [polvo] = 40",
        "[foca] + [polvo] x 10 = ?"
      ],
      resposta: 450,
      dica: "O polvo vale 20. Multiplica o polvo por 10 primeiro e soma o valor de uma foca no fim."
    },
    {
      linhas: [
        "[cavalo] + [cavalo] = 300",
        "[pinguim] + [pinguim] = 100",
        "([cavalo] + [pinguim]) x 2 = ?"
      ],
      resposta: 400,
      dica: "Parênteses mandam na conta! Soma o cavalo com o pinguim e dobra o resultado final."
    }
  ],

  // NÍVEL 3: Pormenores Proporcionais de Quantidades
  nivel3: [
    // --- FÁCEIS (1 a 10) ---
    {
      linhas: [
        "[ancora] [ancora] [ancora] + [ancora] [ancora] [ancora] = 30",
        "[ancora] + [barco] = 15",
        "[barco] + [ancora] [ancora] = ?"
      ],
      resposta: 20,
      dica: "Atenção: Três âncoras juntas valem 15, logo cada 1 vale 5! Na última linha, repara que tens duas âncoras juntas."
    },
    {
      linhas: [
        "[peixe] + [peixe] = 40",
        "[peixe] - [estrela] [estrela] = 10",
        "[peixe] + [estrela] = ?"
      ],
      resposta: 25,
      dica: "Atenção: Duas estrelas juntas valem 10, logo cada 1 estrela sozinha vale 5! Repara na última linha."
    },
    {
      linhas: [
        "[barco] + [barco] [barco] = 30",
        "[barco] [barco] + [ancora] = 26",
        "[barco] - [ancora] = ?"
      ],
      resposta: 4,
      dica: "Três barcos somam 30, logo cada um vale 10. Substitui os valores e faz a subtração final."
    },
    {
      linhas: [
        "[estrela] [estrela] + [estrela] [estrela] = 16",
        "[estrela] + [peixe] = 14",
        "[peixe] + [estrela] [estrela] = ?"
      ],
      resposta: 18,
      dica: "Duas estrelas juntas dão 8, logo cada estrela vale 4. O peixe vale 10. Soma o peixe com duas estrelas."
    },
    {
      linhas: [
        "[ancora] + [ancora] [ancora] = 27",
        "[ancora] [ancora] - [peixe] = 10",
        "[peixe] + [ancora] = ?"
      ],
      resposta: 17,
      dica: "Três âncoras juntas somam 27, logo cada âncora vale 9. Descobre o valor do peixe e faz a soma."
    },
    // NOVAS FÁCEIS NÍVEL 3
    {
      linhas: [
        "[polvo] [polvo] + [polvo] [polvo] = 40",
        "[polvo] + [foca] = 15",
        "[foca] + [polvo] [polvo] = ?"
      ],
      resposta: 25,
      dica: "Atenção visual! Se 4 polvos no total dão 40, um polvo vale 10. Na última linha tens dois polvos juntos!"
    },
    {
      linhas: [
        "[pinguim] [pinguim] [pinguim] + [pinguim] = 20",
        "[pinguim] [pinguim] - [cavalo] = 7",
        "[cavalo] + [pinguim] = ?"
      ],
      resposta: 8,
      dica: "Na primeira conta tens quatro pinguins no total! Descobre o valor de um e avança para as outras contas."
    },
    {
      linhas: [
        "[golfinho] + [golfinho] = 40",
        "[golfinho] - [peixe1] [peixe1] = 10",
        "[peixe1] + [golfinho] = ?"
      ],
      resposta: 25,
      dica: "Repara que na segunda linha subtrais 2 peixinhos azuis! Descobre quanto vale cada peixe sozinho."
    },
    {
      linhas: [
        "[foca] [foca] + [foca] [foca] = 24",
        "[foca] + [polvo] = 16",
        "[polvo] + [foca] [foca] = ?"
      ],
      resposta: 22,
      dica: "Se quatro focas dão 24, quanto vale uma? E atenção à pergunta final, tens duas focas coladas!"
    },
    {
      linhas: [
        "[cavalo] [cavalo] [cavalo] = 21",
        "[cavalo] [cavalo] + [pinguim] = 20",
        "[pinguim] + [cavalo] = ?"
      ],
      resposta: 13,
      dica: "Três cavalos-marinhos dão 21. Descobre o valor de um, e na segunda linha não te esqueças que tens dois juntos!"
    },

    // --- DIFÍCEIS (11 a 20) ---
    {
      linhas: [
        "[ancora] [ancora] [ancora] + [ancora] [ancora] [ancora] = 900",
        "[ancora] [ancora] + [barco] = 800",
        "[barco] - [ancora] = ?"
      ],
      resposta: 350,
      dica: "Três âncoras juntas valem 450, logo cada âncora vale 150! Duas âncoras valem 300. Faz a conta final."
    },
    {
      linhas: [
        "[peixe] + [peixe] [peixe] = 900",
        "[peixe] [peixe] - [estrela] [estrela] = 200",
        "[peixe] + [estrela] = ?"
      ],
      resposta: 500,
      dica: "Três peixes juntos dão 900, logo cada um vale 300. Duas estrelas valem 400, logo uma vale 200. Soma final."
    },
    {
      linhas: [
        "[barco] + [barco] [barco] = 600",
        "[barco] [barco] - [ancora] = 300",
        "[barco] + [ancora] [ancora] = ?"
      ],
      resposta: 400,
      dica: "Três barcos valem 600, logo cada um vale 200. Duas barcos dão 400. Descobre a âncora e faz a soma final."
    },
    {
      linhas: [
        "[estrela] [estrela] + [estrela] [estrela] = 600",
        "[estrela] + [peixe] = 550",
        "[peixe] - [estrela] [estrela] = ?"
      ],
      resposta: 100,
      dica: "Duas estrelas valem 300, logo cada uma vale 150. Duas estrelas dão 300. Descobre o peixe e faz a subtração."
    },
    {
      linhas: [
        "[ancora] [ancora] + [ancora] = 900",
        "[ancora] [ancora] - [peixe] = 500",
        "[peixe] + [ancora] = ?"
      ],
      resposta: 400,
      dica: "Três âncoras valem 900, logo cada uma vale 300. Duas âncoras dão 600. Descobre o peixe e faz a soma."
    },
    // NOVAS DIFÍCEIS NÍVEL 3
    {
      linhas: [
        "[polvo] [polvo] + [polvo] [polvo] = 400",
        "[polvo] + [foca] = 250",
        "[foca] + [polvo] [polvo] = ?"
      ],
      resposta: 350,
      dica: "Quatro polvos dão 400. Então cada polvo vale 100. Na última pergunta estão dois polvos juntos, não te esqueças!"
    },
    {
      linhas: [
        "[pinguim] [pinguim] [pinguim] + [pinguim] = 600",
        "[pinguim] [pinguim] - [cavalo] = 100",
        "[cavalo] + [pinguim] = ?"
      ],
      resposta: 350,
      dica: "Conta bem os pinguins da primeira linha: são quatro! E na segunda linha estão dois juntos."
    },
    {
      linhas: [
        "[golfinho] + [golfinho] = 500",
        "[golfinho] - [peixe1] [peixe1] = 100",
        "[peixe1] + [golfinho] = ?"
      ],
      resposta: 325,
      dica: "Atenção: Na segunda linha tens dois peixinhos azuis. Se dois valem 150, cada um vale metade."
    },
    {
      linhas: [
        "[foca] [foca] + [foca] [foca] = 800",
        "[foca] + [polvo] = 500",
        "[polvo] + [foca] [foca] = ?"
      ],
      resposta: 700,
      dica: "Ao todo tens 4 focas na primeira linha. Descobre o polvo e tem em conta as duas focas na linha final."
    },
    {
      linhas: [
        "[cavalo] [cavalo] [cavalo] = 600",
        "[cavalo] [cavalo] + [pinguim] = 550",
        "[cavalo] - [pinguim] = ?"
      ],
      resposta: 50,
      dica: "Três cavalos dão 600. Na segunda conta há dois cavalos. Encontra o pinguim e subtrai do valor do cavalo."
    }
  ],

  // NÍVEL 4: O Farol do Saber (Bateria de 40 Perguntas)
  nivel4: [
    // --- FÁCEIS (1 a 20) ---
    {
      pergunta: "[peixe] + 20 = 50.<br> Quanto vale o [peixe]?",
      opcoes: ["20", "30", "40", "10"],
      correta: "30",
      dica: "Qual é o número que, se somares a 20, dá exatamente 50?"
    },
    {
      pergunta: "[ancora] x 2 = 16.<br> Quanto vale a [ancora]?",
      opcoes: ["6", "7", "8", "9"],
      correta: "8",
      dica: "Qual é o número da tabuada do 2 que, multiplicado por 2, dá 16?"
    },
    {
      pergunta: "15 - [barco] = 9.<br> Quanto vale o [barco]?",
      opcoes: ["5", "6", "7", "4"],
      correta: "6",
      dica: "Se retirares uma quantidade a 15 e ficares com 9, quanto retiraste?"
    },
    {
      pergunta: "[estrela] + [estrela] = 18.<br> Quanto vale a [estrela]?",
      opcoes: ["8", "9", "10", "6"],
      correta: "9",
      dica: "Qual é a metade do número 18?"
    },
    {
      pergunta: "Numa expressão sem parênteses, qual destas operações fazes sempre <span class='destaque-texto'>primeiro</span>?",
      opcoes: ["A soma (+)", "A subtração (-)", "A multiplicação (x)", "A que estiver à esquerda"],
      correta: "A multiplicação (x)",
      dica: "A multiplicação tem prioridade sobre a soma e a subtração na matemática."
    },
    {
      pergunta: "Para que servem os <span class='destaque-fundo'>parênteses ( )</span> numa conta de matemática?",
      opcoes: ["Para indicar que essa parte se resolve primeiro", "Para enfeitar a conta", "Para indicar que é uma subtração", "Para multiplicar por zero"],
      correta: "Para indicar que essa parte se resolve primeiro",
      dica: "Os parênteses servem para definir a prioridade máxima numa operação matemática."
    },
    {
      pergunta: "Se [peixe] = 5 e [barco] = 10, quanto vale [peixe] X [barco]?",
      opcoes: ["15", "50", "25", "30"],
      correta: "50",
      dica: "Calcula a multiplicação simples de 5 por 10."
    },
    {
      pergunta: "Se [ancora] = 8 e [estrela] = 4, quanto vale [ancora] : [estrela]?",
      opcoes: ["2", "4", "12", "32"],
      correta: "2",
      dica: "Divide a âncora em 4 partes iguais para achar o resultado."
    },
    {
      pergunta: "[barco] + 30 = 45.<br> Quanto vale o [barco]?",
      opcoes: ["10", "15", "20", "25"],
      correta: "15",
      dica: "Qual é a diferença entre 45 e 30?"
    },
    {
      pergunta: "[peixe] - 12 = 8.<br> Quanto vale o [peixe]?",
      opcoes: ["16", "18", "20", "24"],
      correta: "20",
      dica: "Se juntares 12 a 8, qual o valor original do peixe?"
    },
    {
      pergunta: "Se [estrela] = 6, quanto vale o <span class='destaque-fundo'>triplo</span> da [estrela]?",
      opcoes: ["12", "18", "24", "30"],
      correta: "18",
      dica: "Multiplica a estrela por 3 para obter o triplo."
    },
    {
      pergunta: "Se [ancora] = 10, quanto vale a <span class='destaque-fundo'>metade</span> da [ancora]?",
      opcoes: ["2", "3", "4", "5"],
      correta: "5",
      dica: "Divide o valor de 10 ao meio."
    },
    {
      pergunta: "Se [peixe] = 8, quanto vale o <span class='destaque-fundo'>dobro</span> do [peixe]?",
      opcoes: ["12", "14", "16", "20"],
      correta: "16",
      dica: "Multiplica o valor de 8 por 2 para obter o dobro."
    },
    {
      pergunta: "[estrela] x 5 = 35.<br> Quanto vale a [estrela]?",
      opcoes: ["5", "6", "7", "8"],
      correta: "7",
      dica: "Na tabuada do 5, qual o número que multiplicado por 5 dá 35?"
    },
    {
      pergunta: "20 : [barco] = 4.<br> Quanto vale o [barco]?",
      opcoes: ["4", "5", "6", "10"],
      correta: "5",
      dica: "Em quantas partes deves dividir o 20 para obteres 4 em cada uma?"
    },
    // NOVAS FÁCEIS NÍVEL 4
    {
      pergunta: "[pinguim] + 15 = 45.<br> Quanto vale o [pinguim]?",
      opcoes: ["20", "30", "40", "15"],
      correta: "30",
      dica: "Qual é o número que precisas para chegar a 45, se já tens 15?"
    },
    {
      pergunta: "[foca] x 3 = 27.<br> Quanto vale a [foca]?",
      opcoes: ["7", "8", "9", "10"],
      correta: "9",
      dica: "Vai à tabuada do 3. Que número vezes 3 dá 27?"
    },
    {
      pergunta: "50 - [polvo] = 25.<br> Quanto vale o [polvo]?",
      opcoes: ["15", "20", "25", "30"],
      correta: "25",
      dica: "Tinhas 50. Ficaste com 25. Quanto tiraste?"
    },
    {
      pergunta: "[golfinho] + [golfinho] = 24.<br> Quanto vale o [golfinho]?",
      opcoes: ["10", "12", "14", "16"],
      correta: "12",
      dica: "Se dois golfinhos dão 24, tens de dividir 24 ao meio."
    },
    {
      pergunta: "Se [cavalo] = 7 e [peixe1] = 3, quanto vale [cavalo] X [peixe1]?",
      opcoes: ["10", "14", "21", "24"],
      correta: "21",
      dica: "Só tens de multiplicar 7 por 3!"
    },

    // --- DIFÍCEIS (21 a 40) ---
    {
      pergunta: "[peixe] + 200 = 300.<br> Quanto vale o [peixe]?",
      opcoes: ["100", "200", "50", "150"],
      correta: "100",
      dica: "Se de 300 retirares as 200 centenas, quanto sobra para o peixe?"
    },
    {
      pergunta: "[ancora] x 3 = 600.<br> Quanto vale a [ancora]?",
      opcoes: ["100", "150", "200", "300"],
      correta: "200",
      dica: "Divide 600 por 3 para encontrar o valor de uma âncora."
    },
    {
      pergunta: "750 - [barco] = 400.<br> Quanto vale o [barco]?",
      opcoes: ["300", "350", "400", "450"],
      correta: "350",
      dica: "Qual é a diferença exata entre 750 e 400?"
    },
    {
      pergunta: "[estrela] + [estrela] = 900.<br> Quanto vale a [estrela]?",
      opcoes: ["400", "450", "500", "350"],
      correta: "450",
      dica: "Qual é a metade exata do número 900?"
    },
    {
      pergunta: "Se [peixe] = 50 e [barco] = 10, quanto vale [peixe] X [barco]?",
      opcoes: ["400", "450", "500", "600"],
      correta: "500",
      dica: "Multiplica 50 por 10 (acrescenta um zero ao 50)."
    },
    {
      pergunta: "Se [ancora] = 800 e [estrela] = 4, quanto vale [ancora] : [estrela]?",
      opcoes: ["100", "200", "300", "400"],
      correta: "200",
      dica: "Divide 800 por 4 partes iguais."
    },
    {
      pergunta: "[barco] + 300 = 850.<br> Quanto vale o [barco]?",
      opcoes: ["450", "500", "550", "600"],
      correta: "550",
      dica: "Subtrai 300 ao valor total de 850."
    },
    {
      pergunta: "[peixe] - 120 = 180.<br> Quanto vale o [peixe]?",
      opcoes: ["200", "250", "300", "350"],
      correta: "300",
      dica: "Se juntares 120 e 180, qual o valor original do peixe?"
    },
    {
      pergunta: "Se [estrela] = 250, quanto vale o <span class='destaque-fundo'>triplo</span> da [estrela]?",
      opcoes: ["500", "650", "750", "800"],
      correta: "750",
      dica: "Multiplica 250 por 3 para obter o triplo."
    },
    {
      pergunta: "Se [ancora] = 500, quanto vale a <span class='destaque-fundo'>metade</span> da [ancora]?",
      opcoes: ["200", "220", "240", "250"],
      correta: "250",
      dica: "Divide o valor de 500 ao meio."
    },
    {
      pergunta: "Se [peixe] = 450, quanto vale o <span class='destaque-fundo'>dobro</span> do [peixe]?",
      opcoes: ["800", "850", "900", "1000"],
      correta: "900",
      dica: "Soma 450 com 450 ou multiplica por 2."
    },
    {
      pergunta: "[estrela] x 5 = 1000.<br> Quanto vale a [estrela]?",
      opcoes: ["150", "180", "200", "250"],
      correta: "200",
      dica: "Divide 1000 por 5 partes iguais."
    },
    {
      pergunta: "800 : [barco] = 4.<br> Quanto vale o [barco]?",
      opcoes: ["100", "150", "200", "250"],
      correta: "200",
      dica: "Divide 800 em 4 partes para achar o resultado."
    },
    {
      pergunta: "[ancora] + 650 = 1000.<br> Quanto vale a [ancora]?",
      opcoes: ["250", "300", "350", "400"],
      correta: "350",
      dica: "Subtrai 650 ao valor total de 1000."
    },
    {
      pergunta: "[peixe] - 400 = 450.<br> Quanto vale o [peixe]?",
      opcoes: ["750", "800", "850", "900"],
      correta: "850",
      dica: "Soma 400 ao valor de 450."
    },
    // NOVAS DIFÍCEIS NÍVEL 4
    {
      pergunta: "[pinguim] + 250 = 600.<br> Quanto vale o [pinguim]?",
      opcoes: ["250", "300", "350", "400"],
      correta: "350",
      dica: "Se tirares 250 de 600, chegas lá!"
    },
    {
      pergunta: "[foca] x 4 = 800.<br> Quanto vale a [foca]?",
      opcoes: ["150", "200", "250", "400"],
      correta: "200",
      dica: "Divide 800 em 4 partes iguais para achar a foca."
    },
    {
      pergunta: "900 - [polvo] = 350.<br> Quanto vale o [polvo]?",
      opcoes: ["450", "500", "550", "600"],
      correta: "550",
      dica: "Qual a diferença que falta de 350 até chegar aos 900?"
    },
    {
      pergunta: "[golfinho] + [golfinho] = 750.<br> Quanto vale o [golfinho]?",
      opcoes: ["325", "350", "375", "400"],
      correta: "375",
      dica: "Qual é a metade do número 750?"
    },
    {
      pergunta: "Se [cavalo] = 120 e [peixe1] = 4, quanto vale [cavalo] x [peixe1]?",
      opcoes: ["360", "400", "480", "520"],
      correta: "480",
      dica: "Multiplica o 12 por 4 e acrescenta um zero!"
    }
  ]
};