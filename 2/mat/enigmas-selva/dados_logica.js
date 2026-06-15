/* =========================================================================
   BASE DE DADOS - DESAFIOS DE LÓGICA E EQUAÇÕES (2.º ANO - A SELVA) [3]
   ========================================================================= */

const dbLogica = {
  // NÍVEL 1: Somas e Subtrações Diretas (10 fáceis até 20 | 10 difíceis até 100) [3]
  nivel1: [
    // --- FÁCEIS (0 a 9) ---
    {
      linhas: ["[leao] + [leao] = 10", "[leao] + [tigre] = 12", "[tigre] + [leao] = ?"],
      resposta: 12,
      dica: "Se dois leões iguais dão 10, cada um vale 5. Substitui o valor na segunda linha!"
    },
    {
      linhas: ["[macaco] + [macaco] = 16", "[macaco] - [papagaio] = 5", "[macaco] + [papagaio] = ?"],
      resposta: 11,
      dica: "Dois macacos dão 16, logo um macaco vale 8. Se 8 menos o papagaio dá 5, quanto vale o papagaio?"
    },
    {
      linhas: ["[elefante] + [elefante] = 20", "[elefante] + [girafa] = 15", "[elefante] - [girafa] = ?"],
      resposta: 5,
      dica: "Dois elefantes valem 20, logo cada um vale 10. Se dez mais a girafa dá 15, a girafa vale..."
    },
    {
      linhas: ["[zebra] + [zebra] = 12", "[zebra] - [hipopotamo] = 2", "[zebra] + [hipopotamo] = ?"],
      resposta: 10,
      dica: "Se duas zebras dão 12, cada uma vale 6. Se 6 menos o hipopótamo dá 2, quanto vale o hipopótamo?"
    },
    {
      linhas: ["[crocodilo] + [crocodilo] = 14", "[crocodilo] + [cobra] = 17", "[cobra] + [crocodilo] = ?"],
      resposta: 17,
      dica: "Dois crocodilos dão 14, por isso cada um vale 7. Descobre a cobra e faz a soma final."
    },
    {
      linhas: ["[cobra] + [cobra] = 8", "[cobra] + [papagaio] = 9", "[papagaio] + [cobra] = ?"],
      resposta: 9,
      dica: "Duas cobras dão 8, logo cada uma vale 4. Se 4 mais o papagaio dá 9, quanto vale o papagaio?"
    },
    {
      linhas: ["[girafa] + [girafa] = 18", "[girafa] - [hipopotamo] = 6", "[girafa] + [hipopotamo] = ?"],
      resposta: 12,
      dica: "Duas girafas dão 18, logo uma vale 9. Se 9 menos o hipopótamo dá 6, quanto vale o hipopótamo?"
    },
    {
      linhas: ["[leao] + [leao] = 14", "[leao] - [tigre] = 3", "[leao] + [tigre] = ?"],
      resposta: 11,
      dica: "Dois leões dão 14, logo um vale 7. Se 7 menos o tigre dá 3, quanto vale o tigre?"
    },
    {
      linhas: ["[macaco] + [macaco] = 10", "[macaco] + [elefante] = 18", "[elefante] - [macaco] = ?"],
      resposta: 8,
      dica: "Dois macacos dão 10, logo um vale 5. Se 5 mais o elefante dá 18, quanto vale o elefante?"
    },
    {
      linhas: ["[zebra] + [zebra] = 16", "[zebra] + [cobra] = 19", "[cobra] - [zebra] = ?"],
      resposta: 3,
      dica: "Duas zebras dão 16, logo uma vale 8. Se 8 mais a cobra dá 19, quanto vale a cobra?"
    },

    // --- DIFÍCEIS (10 a 19) ---
    {
      linhas: ["[leao] + [leao] = 60", "[leao] + [tigre] = 80", "[tigre] - [leao] = ?"],
      resposta: 20,
      dica: "Dois leões dão 60, logo cada um vale 30. Se 30 mais o tigre dá 80, quanto vale o tigre?"
    },
    {
      linhas: ["[macaco] + [macaco] = 80", "[macaco] - [papagaio] = 15", "[macaco] + [papagaio] = ?"],
      resposta: 65,
      dica: "Metade de 80 é 40, que é o valor do macaco. Se 40 menos o papagaio dá 15, quanto vale o papagaio?"
    },
    {
      linhas: ["[elefante] + [elefante] = 100", "[elefante] - [girafa] = 20", "[elefante] + [girafa] = ?"],
      resposta: 80,
      dica: "Dois elefantes somam 100, logo cada um vale 50. Se 50 menos a girafa dá 20, quanto vale a girafa?"
    },
    {
      linhas: ["[zebra] + [zebra] = 40", "[zebra] + [hipopotamo] = 55", "[hipopotamo] + [hipopotamo] = ?"],
      resposta: 70,
      dica: "Se duas zebras dão 40, cada uma vale 20. Descobre o hipopótamo e junta dois iguais."
    },
    {
      linhas: ["[crocodilo] + [crocodilo] = 90", "[crocodilo] - [cobra] = 15", "[cobra] + [crocodilo] = ?"],
      resposta: 75,
      dica: "Dois crocodilos dão 90, logo cada um vale 45. Tira 15 de 45 para achar a cobra."
    },
    {
      linhas: ["[cobra] + [cobra] = 50", "[cobra] + [papagaio] = 65", "[papagaio] - [cobra] = ?"],
      resposta: 15,
      dica: "Duas cobras dão 50, logo uma vale 25. Se 25 mais o papagaio dá 65, quanto vale o papagaio?"
    },
    {
      linhas: ["[girafa] + [girafa] = 90", "[girafa] - [hipopotamo] = 25", "[girafa] + [hipopotamo] = ?"],
      resposta: 65,
      dica: "Duas girafas dão 90, logo uma vale 45. Se 45 menos o hipopótamo dá 25, quanto vale o hipopótamo?"
    },
    {
      linhas: ["[leao] + [leao] = 70", "[leao] - [tigre] = 15", "[leao] + [tigre] = ?"],
      resposta: 55,
      dica: "Dois leões dão 70, logo um vale 35. Se 35 menos o tigre dá 15, quanto vale o tigre?"
    },
    {
      linhas: ["[macaco] + [macaco] = 50", "[macaco] + [elefante] = 95", "[elefante] - [macaco] = ?"],
      resposta: 45,
      dica: "Dois macacos dão 50, logo um vale 25. Se 25 mais o elefante dá 95, quanto vale o elefante?"
    },
    {
      linhas: ["[zebra] + [zebra] = 90", "[zebra] + [cobra] = 100", "[cobra] - [zebra] = ?"],
      resposta: 10,
      dica: "Duas zebras dão 90, logo uma vale 45. Se 45 mais a cobra dá 100, quanto vale a cobra?"
    }
  ],

  // NÍVEL 2: Cadeias de Operações (10 fáceis até 20 | 10 difíceis até 100) [3]
  nivel2: [
    // --- FÁCEIS (0 a 9) ---
    {
      linhas: ["[leao] + [leao] = 10", "[tigre] + [tigre] = 6", "[leao] + [leao] + [tigre] = ?"],
      resposta: 13,
      dica: "Sabes quanto vale cada leão (5) e cada tigre (3). Agora faz a conta corrida da última linha!"
    },
    {
      linhas: ["[macaco] + [macaco] = 14", "[papagaio] + [papagaio] = 10", "[macaco] + [papagaio] - [papagaio] = ?"],
      resposta: 7,
      dica: "O macaco vale 7 e o papagaio vale 5. Se somas um papagaio e logo a seguir o retiras, ficas com o mesmo valor!"
    },
    {
      linhas: ["[elefante] + [elefante] = 18", "[girafa] + [girafa] = 4", "[elefante] + [girafa] + [girafa] = ?"],
      resposta: 13,
      dica: "O elefante vale 9 e cada girafa vale 2. Faz a soma dos três animais."
    },
    {
      linhas: ["[zebra] + [zebra] = 8", "[hipopotamo] + [hipopotamo] = 10", "[hipopotamo] + [zebra] - [zebra] = ?"],
      resposta: 5,
      dica: "O hipopótamo vale 5 e a zebra vale 4. Faz a conta passo a passo, da esquerda para a direita."
    },
    {
      linhas: ["[crocodilo] + [crocodilo] = 16", "[cobra] + [cobra] = 6", "[crocodilo] - [cobra] + [crocodilo] = ?"],
      resposta: 13,
      dica: "O crocodilo vale 8 e a cobra vale 3. Primeiro faz 8 menos 3, e ao resultado somas mais 8."
    },
    {
      linhas: ["[cobra] + [cobra] = 6", "[papagaio] + [papagaio] = 8", "[cobra] + [cobra] + [papagaio] = ?"],
      resposta: 10,
      dica: "A cobra vale 3 e o papagaio vale 4. Faz a conta corrida de somar as parcelas."
    },
    {
      linhas: ["[girafa] + [girafa] = 12", "[hipopotamo] + [hipopotamo] = 10", "[girafa] + [hipopotamo] + [hipopotamo] = ?"],
      resposta: 16,
      dica: "A girafa vale 6 e o hipopótamo vale 5. Faz a soma dos três animais."
    },
    {
      linhas: ["[leao] + [leao] = 16", "[tigre] + [tigre] = 12", "[leao] - [tigre] + [leao] = ?"],
      resposta: 10,
      dica: "O leão vale 8 e o tigre vale 6. Primeiro faz 8 menos 6, e ao resultado soma 8."
    },
    {
      linhas: ["[macaco] + [macaco] = 10", "[elefante] + [elefante] = 14", "[elefante] + [macaco] - [macaco] = ?"],
      resposta: 7,
      dica: "O elefante vale 7 e o macaco vale 5. Se somas 5 e depois tiras 5, ficas com o valor do elefante."
    },
    {
      linhas: ["[zebra] + [zebra] = 18", "[cobra] + [cobra] = 4", "[zebra] - [cobra] + [cobra] = ?"],
      resposta: 9,
      dica: "A zebra vale 9 e a cobra vale 2. Faz a conta passo a passo."
    },

    // --- DIFÍCEIS (10 a 19) ---
    {
      linhas: ["[leao] + [leao] = 50", "[tigre] + [tigre] = 30", "[leao] + [tigre] + [tigre] = ?"],
      resposta: 55,
      dica: "Cada leão vale 25 e cada tigre vale 15. Junta os três valores com muita atenção!"
    },
    {
      linhas: ["[macaco] + [macaco] = 60", "[papagaio] + [papagaio] = 40", "[macaco] + [macaco] - [papagaio] = ?"],
      resposta: 40,
      dica: "Os dois macacos juntos valem 60. Só precisas de subtrair o valor de um papagaio (20)."
    },
    {
      linhas: ["[elefante] + [elefante] = 80", "[girafa] + [girafa] = 20", "[elefante] + [girafa] - [elefante] = ?"],
      resposta: 10,
      dica: "Se tens um elefante, somas uma girafa e depois tiras o elefante, ficas apenas com a girafa!"
    },
    {
      linhas: ["[zebra] + [zebra] = 70", "[hipopotamo] + [hipopotamo] = 30", "[zebra] + [hipopotamo] + [hipopotamo] = ?"],
      resposta: 65,
      dica: "A zebra vale 35 e o hipopótamo vale 15. Soma a zebra com dois hipopótamos."
    },
    {
      linhas: ["[crocodilo] + [crocodilo] = 100", "[cobra] + [cobra] = 40", "[crocodilo] - [cobra] + [cobra] = ?"],
      resposta: 50,
      dica: "Se tiras a cobra e logo a seguir voltas a somar a cobra, o resultado é igual ao valor do crocodilo."
    },
    {
      linhas: ["[cobra] + [cobra] = 30", "[papagaio] + [papagaio] = 50", "[cobra] + [cobra] + [papagaio] = ?"],
      resposta: 55,
      dica: "Cada cobra vale 15 e cada papagaio vale 25. Faz a soma corrida das parcelas."
    },
    {
      linhas: ["[girafa] + [girafa] = 70", "[hipopotamo] + [hipopotamo] = 50", "[girafa] + [hipopotamo] + [hipopotamo] = ?"],
      resposta: 85,
      dica: "A girafa vale 35 e o hipopótamo vale 25. Faz a soma da girafa com dois hipopótamos."
    },
    {
      linhas: ["[leao] + [leao] = 90", "[tigre] + [tigre] = 50", "[leao] - [tigre] + [leao] = ?"],
      resposta: 65,
      dica: "O leão vale 45 e o tigre vale 25. Primeiro faz 45 menos 25, e ao resultado soma 45."
    },
    {
      linhas: ["[macaco] + [macaco] = 50", "[elefante] + [elefante] = 70", "[elefante] + [macaco] - [macaco] = ?"],
      resposta: 35,
      dica: "O elefante vale 35 e o macaco vale 25. Se somas 25 e depois tiras 25, ficas com o elefante."
    },
    {
      linhas: ["[zebra] + [zebra] = 90", "[cobra] + [cobra] = 10", "[zebra] - [cobra] + [cobra] = ?"],
      resposta: 45,
      dica: "A zebra vale 45 e a cobra vale 5. Se tiras 5 e depois somas 5, o resultado é a própria zebra."
    }
  ],

  // NÍVEL 3: Pormenores Visuais (10 fáceis até 20 | 10 difíceis até 100) [3]
  nivel3: [
    // --- FÁCEIS (0 a 9) ---
    {
      linhas: ["[leao] [leao] + [leao] [leao] = 20", "[leao] + [tigre] = 10", "[tigre] + [leao] [leao] = ?"],
      resposta: 15,
      dica: "Olha bem: quatro leões valem 20, logo cada um vale 5. Na última linha tens dois leões juntos (10)!"
    },
    {
      linhas: ["[macaco] + [macaco] = 12", "[macaco] - [papagaio] [papagaio] = 2", "[macaco] + [papagaio] = ?"],
      resposta: 8,
      dica: "Um macaco vale 6. Se 6 menos dois papagaios dá 2, os dois papagaios juntos valem 4. Quanto vale um?"
    },
    {
      linhas: ["[elefante] [elefante] + [elefante] [elefante] = 16", "[elefante] + [girafa] = 9", "[girafa] + [elefante] [elefante] = ?"],
      resposta: 13,
      dica: "Quatro elefantes valem 16, logo um elefante vale 4. Dois elefantes juntos valem 8. Faz a conta final!"
    },
    {
      linhas: ["[zebra] + [zebra] [zebra] = 15", "[zebra] [zebra] + [hipopotamo] = 14", "[hipopotamo] + [zebra] = ?"],
      resposta: 9,
      dica: "Três zebras ao todo valem 15, por isso cada uma vale 5. Substitui os valores com cuidado."
    },
    {
      linhas: ["[crocodilo] [crocodilo] + [crocodilo] = 18", "[crocodilo] - [cobra] = 2", "[cobra] + [crocodilo] [crocodilo] = ?"],
      resposta: 16,
      dica: "Três crocodilos valem 18, logo cada um vale 6. Na última linha estão dois crocodilos colados!"
    },
    {
      linhas: ["[cobra] [cobra] + [cobra] [cobra] = 16", "[cobra] + [papagaio] = 8", "[papagaio] + [cobra] [cobra] = ?"],
      resposta: 12,
      dica: "Quatro cobras valem 16, logo uma vale 4. Duas cobras juntas valem 8. Faz a soma final."
    },
    {
      linhas: ["[girafa] + [girafa] = 14", "[girafa] - [hipopotamo] [hipopotamo] = 3", "[girafa] + [hipopotamo] = ?"],
      resposta: 9,
      dica: "Uma girafa vale 7. Se 7 menos dois hipopótamos dá 3, os dois valem 4. Logo, um vale 2."
    },
    {
      linhas: ["[leao] [leao] + [leao] [leao] = 12", "[leao] + [tigre] = 7", "[tigre] + [leao] [leao] = ?"],
      resposta: 10,
      dica: "Quatro leões valem 12, logo um vale 3. Dois leões juntos valem 6. Faz a soma com o tigre."
    },
    {
      linhas: ["[macaco] + [macaco] [macaco] = 18", "[macaco] [macaco] - [elefante] = 8", "[elefante] + [macaco] = ?"],
      resposta: 10,
      dica: "Três macacos valem 18, logo um vale 6. Dois macacos juntos valem 12. Descobre o elefante."
    },
    {
      linhas: ["[zebra] [zebra] + [zebra] = 9", "[zebra] - [cobra] = 1", "[cobra] + [zebra] [zebra] = ?"],
      resposta: 8,
      dica: "Três zebras valem 9, logo uma vale 3. Duas zebras juntas valem 6. Faz a soma com a cobra."
    },

    // --- DIFÍCEIS (10 a 19) ---
    {
      linhas: ["[leao] [leao] + [leao] [leao] = 80", "[leao] + [tigre] = 30", "[tigre] + [leao] [leao] = ?"],
      resposta: 50,
      dica: "Se quatro leões valem 80, cada um vale 20. Dois leões juntos valem 40. Soma o tigre!"
    },
    {
      linhas: ["[macaco] + [macaco] = 60", "[macaco] - [papagaio] [papagaio] = 20", "[macaco] + [papagaio] = ?"],
      resposta: 35,
      dica: "O macaco vale 30. Se 30 menos dois papagaios dá 20, os dois papagaios valem 10. Logo, um vale 5!"
    },
    {
      linhas: ["[elefante] [elefante] + [elefante] [elefante] = 100", "[elefante] + [girafa] = 35", "[girafa] + [elefante] [elefante] = ?"],
      resposta: 60,
      dica: "Quatro elefantes valem 100, logo cada um vale 25. Dois elefantes valem 50. Faz a soma com a girafa."
    },
    {
      linhas: ["[zebra] + [zebra] [zebra] = 90", "[zebra] [zebra] - [hipopotamo] = 40", "[hipopotamo] + [zebra] = ?"],
      resposta: 50,
      dica: "Três zebras valem 90, por isso uma vale 30. Dois zebras valem 60. Descobre o hipopótamo e soma."
    },
    {
      linhas: ["[crocodilo] [crocodilo] + [crocodilo] = 60", "[crocodilo] - [cobra] = 5", "[cobra] + [crocodilo] [crocodilo] = ?"],
      resposta: 55,
      dica: "Três crocodilos valem 60, logo cada um vale 20. Descobre a cobra e junta aos dois crocodilos."
    },
    {
      linhas: ["[cobra] [cobra] + [cobra] [cobra] = 40", "[cobra] + [papagaio] = 20", "[papagaio] + [cobra] [cobra] = ?"],
      resposta: 30,
      dica: "Quatro cobras valem 40, logo uma vale 10. Duas cobras juntas valem 20. Faz a soma com o papagaio."
    },
    {
      linhas: ["[girafa] + [girafa] = 80", "[girafa] - [hipopotamo] [hipopotamo] = 30", "[girafa] + [hipopotamo] = ?"],
      resposta: 45,
      dica: "Uma girafa vale 40. Se 40 menos dois hipopótamos dá 30, os dois valem 10. Logo, um vale 5."
    },
    {
      linhas: ["[leao] [leao] + [leao] [leao] = 60", "[leao] + [tigre] = 35", "[tigre] + [leao] [leao] = ?"],
      resposta: 50,
      dica: "Quatro leões valem 60, logo um vale 15. Dois leões juntos valem 30. Faz a soma com o tigre."
    },
    {
      linhas: ["[macaco] + [macaco] [macaco] = 75", "[macaco] [macaco] - [elefante] = 30", "[elefante] + [macaco] = ?"],
      resposta: 45,
      dica: "Três macacos valem 75, logo um vale 25. Dois macacos juntos valem 50. Descobre o elefante."
    },
    {
      linhas: ["[zebra] [zebra] + [zebra] = 45", "[zebra] - [cobra] = 5", "[cobra] + [zebra] [zebra] = ?"],
      resposta: 40,
      dica: "Três zebras valem 45, logo uma vale 15. Duas zebras juntas valem 30. Faz a soma com a cobra."
    }
  ],

  // NÍVEL 4: Árvore da sabedoria (Perguntas de escolha múltipla adaptadas à selva) [3]
  nivel4: [
    // --- FÁCEIS (0 a 9) ---
    {
      pergunta: "[macaco] + 10 = 25.<br> Quanto vale o [macaco]?",
      opcoes: ["10", "15", "20", "5"],
      correta: "15",
      dica: "Pensa assim: 25 menos 10 dá quanto?"
    },
    {
      pergunta: "Se a [girafa] vale 6, quanto vale o <span class='destaque-fundo'>DOBRO</span> da [girafa]?",
      opcoes: ["12", "10", "8", "14"],
      correta: "12",
      dica: "O dobro significa somar o número a ele próprio: 6 + 6."
    },
    {
      pergunta: "12 - [tigre] = 8.<br> Quanto vale o [tigre]?",
      opcoes: ["2", "3", "4", "5"],
      correta: "4",
      dica: "Se tens 12 e queres ficar só com 8, quantos tens de tirar?"
    },
    {
      pergunta: "[papagaio] + [papagaio] = 14.<br> Quanto vale um [papagaio]?",
      opcoes: ["6", "7", "8", "9"],
      correta: "7",
      dica: "Qual é o número que somado com ele mesmo dá 14? É a metade de 14."
    },
    {
      pergunta: "Se o [elefante] vale 10, quanto vale a <span class='destaque-fundo'>METADE</span> do [elefante]?",
      opcoes: ["2", "5", "4", "3"],
      correta: "5",
      dica: "Partir 10 ao meio dá quanto para cada lado?"
    },
    {
      pergunta: "[cobra] + 5 = 12.<br> Quanto vale a [cobra]?",
      opcoes: ["5", "6", "7", "8"],
      correta: "7",
      dica: "Se tens 12 e retiras 5, ficas com quanto?"
    },
    {
      pergunta: "Se o [leao] vale 8, quanto vale o <span class='destaque-fundo'>DOBRO</span> do [leao]?",
      opcoes: ["14", "16", "18", "20"],
      correta: "16",
      dica: "O dobro é somar parcelas iguais ou multiplicar por 2: 8 x 2."
    },
    {
      pergunta: "10 - [crocodilo] = 3.<br> Quanto vale o [crocodilo]?",
      opcoes: ["5", "6", "7", "8"],
      correta: "7",
      dica: "Se tens 10 e ficas apenas com 3, quantos retiraste?"
    },
    {
      pergunta: "[zebra] + [zebra] = 10.<br> Quanto vale uma [zebra]?",
      opcoes: ["4", "5", "6", "7"],
      correta: "5",
      dica: "Qual é a metade do número 10?"
    },
    {
      pergunta: "Se o [macaco] vale 16, quanto vale a <span class='destaque-fundo'>METADE</span> do [macaco]?",
      opcoes: ["6", "7", "8", "9"],
      correta: "8",
      dica: "Dividir 16 ao meio dá quanto para cada lado?"
    },

    // --- DIFÍCEIS (10 a 19) ---
    {
      pergunta: "[zebra] + 40 = 90.<br> Quanto vale a [zebra]?",
      opcoes: ["40", "50", "60", "30"],
      correta: "50",
      dica: "Podes fazer a subtração: 90 menos 40."
    },
    {
      pergunta: "Se o [crocodilo] vale 35, quanto vale o <span class='destaque-fundo'>DOBRO</span> do [crocodilo]?",
      opcoes: ["60", "70", "80", "65"],
      correta: "70",
      dica: "Faz a conta de somar: 35 + 35."
    },
    {
      pergunta: "80 - [hipopotamo] = 45.<br> Quanto vale o [hipopotamo]?",
      opcoes: ["35", "40", "45", "55"],
      correta: "35",
      dica: "Tira 45 de 80 para descobrir o valor que falta."
    },
    {
      pergunta: "[cobra] + [cobra] = 100.<br> Quanto vale uma [cobra]?",
      opcoes: ["40", "50", "60", "45"],
      correta: "50",
      dica: "Qual é a metade exata de 100?"
    },
    {
      pergunta: "Se o [leao] vale 60, quanto vale a <span class='destaque-fundo'>METADE</span> do [leao]?",
      opcoes: ["20", "25", "30", "40"],
      correta: "30",
      dica: "Dividir 60 de forma igual para dois amigos dá quanto a cada um?"
    },
    {
      pergunta: "[papagaio] + 30 = 75.<br> Quanto vale o [papagaio]?",
      opcoes: ["35", "45", "55", "40"],
      correta: "45",
      dica: "Podes fazer a subtração: 75 menos 30."
    },
    {
      pergunta: "Se a [girafa] vale 45, quanto vale o <span class='destaque-fundo'>DOBRO</span> da [girafa]?",
      opcoes: ["80", "90", "100", "85"],
      correta: "90",
      dica: "Soma duas parcelas iguais: 45 + 45."
    },
    {
      pergunta: "90 - [elefante] = 55.<br> Quanto vale o [elefante]?",
      opcoes: ["25", "30", "35", "45"],
      correta: "35",
      dica: "Subtrai 55 de 90 para achar o que falta."
    },
    {
      pergunta: "[crocodilo] + [crocodilo] = 80.<br> Quanto vale um [crocodilo]?",
      opcoes: ["30", "40", "50", "45"],
      correta: "40",
      dica: "A metade de 80 é..."
    },
    {
      pergunta: "Se o [hipopotamo] vale 80, quanto vale a <span class='destaque-fundo'>METADE</span> do [hipopotamo]?",
      opcoes: ["30", "35", "40", "50"],
      correta: "40",
      dica: "Dividir 80 ao meio dá quanto para cada um?"
    }
  ]
};