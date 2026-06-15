/* =========================================================================
   BASE DE DADOS - DESAFIOS DE LÓGICA E EQUAÇÕES (1.º ANO - A QUINTA)
   ========================================================================= */

const dbLogica = {
  // NÍVEL 1: Somas e Subtrações Diretas (10 fáceis até 10 | 10 difíceis até 20)
  nivel1: [
    // --- FÁCEIS (Resultados até 10) ---
    {
      linhas: ["[porco] + [porco] = 4", "[porco] + [vaca] = 5", "[vaca] + [porco] = ?"],
      resposta: 5,
      dica: "Se dois porcos iguais dão 4, cada um vale 2. Pensa: 2 + 3 = 5!"
    },
    {
      linhas: ["[ovelha] + [ovelha] = 6", "[ovelha] - [cavalo] = 2", "[ovelha] + [cavalo] = ?"],
      resposta: 4,
      dica: "Dois cordeiros dão 6, logo um vale 3. Se 3 menos o cavalo dá 2, o cavalo vale 1."
    },
    {
      linhas: ["[galinha] + [galinha] = 8", "[galinha] + [pato] = 6", "[galinha] - [pato] = ?"],
      resposta: 2,
      dica: "Duas galinhas dão 8, logo cada uma vale 4. Se 4 mais o pato dá 6, o pato vale 2."
    },
    {
      linhas: ["[coelho] + [coelho] = 2", "[coelho] + [burro] = 6", "[burro] + [coelho] = ?"],
      resposta: 6,
      dica: "Dois coelhos dão 2, cada um vale 1. Se 1 mais o burro dá 6, o burro vale 5."
    },
    {
      linhas: ["[gato] + [gato] = 10", "[gato] - [pintainho] = 4", "[gato] + [pintainho] = ?"],
      resposta: 6,
      dica: "Dois gatos dão 10, logo um vale 5. Se 5 menos o pintainho dá 4, o pintainho vale 1."
    },
    {
      linhas: ["[porco] + [porco] = 6", "[porco] + [ovelha] = 7", "[ovelha] - [porco] = ?"],
      resposta: 1,
      dica: "Dois porcos dão 6, logo um vale 3. Se 3 mais a ovelha dá 7, a ovelha vale 4."
    },
    {
      linhas: ["[vaca] + [vaca] = 8", "[vaca] - [cavalo] = 1", "[vaca] + [cavalo] = ?"],
      resposta: 7,
      dica: "Duas vacas dão 8, logo uma vale 4. Se 4 menos o cavalo dá 1, o cavalo vale 3."
    },
    {
      linhas: ["[galinha] + [galinha] = 10", "[galinha] - [pato] = 3", "[galinha] + [pato] = ?"],
      resposta: 7,
      dica: "Duas galinhas dão 10, logo uma vale 5. Se 5 menos o pato dá 3, o pato vale 2."
    },
    {
      linhas: ["[coelho] + [coelho] = 4", "[coelho] + [gato] = 6", "[gato] - [coelho] = ?"],
      resposta: 2,
      dica: "Dois coelhos dão 4, por isso cada um vale 2. Se 2 mais o gato dá 6, o gato vale 4."
    },
    {
      linhas: ["[burro] + [burro] = 6", "[burro] + [pintainho] = 5", "[pintainho] + [burro] = ?"],
      resposta: 5,
      dica: "Dois burros dão 6, logo um vale 3. Se 3 mais o pintainho dá 5, o pintainho vale 2."
    },

    // --- DIFÍCEIS (Resultados até 20) ---
    {
      linhas: ["[porco] + [porco] = 12", "[porco] + [vaca] = 16", "[vaca] - [porco] = ?"],
      resposta: 4,
      dica: "Dois porcos dão 12, logo cada um vale 6. Se 6 mais a vaca dá 16, a vaca vale 10."
    },
    {
      linhas: ["[ovelha] + [ovelha] = 14", "[ovelha] - [cavalo] = 3", "[ovelha] + [cavalo] = ?"],
      resposta: 11,
      dica: "Duas ovelhas dão 14, logo uma vale 7. Se 7 menos o cavalo dá 3, o cavalo vale 4."
    },
    {
      linhas: ["[galinha] + [galinha] = 16", "[galinha] - [pato] = 2", "[galinha] + [pato] = ?"],
      resposta: 14,
      dica: "Duas galinhas dão 16, logo uma vale 8. Se 8 menos o pato dá 2, o pato vale 6."
    },
    {
      linhas: ["[coelho] + [coelho] = 10", "[coelho] + [burro] = 14", "[burro] + [burro] = ?"],
      resposta: 18,
      dica: "Dois coelhos dão 10, logo um vale 5. Se 5 mais o burro dá 14, o burro vale 9."
    },
    {
      linhas: ["[gato] + [gato] = 12", "[gato] - [pintainho] = 2", "[gato] + [pintainho] = ?"],
      resposta: 10,
      dica: "Dois gatos dão 12, logo um vale 6. Se 6 menos o pintainho dá 2, o pintainho vale 4."
    },
    {
      linhas: ["[porco] + [porco] = 18", "[porco] + [ovelha] = 14", "[ovelha] + [porco] = ?"],
      resposta: 14,
      dica: "Dois porcos dão 18, logo um vale 9. Se 9 mais a ovelha dá 14, a ovelha vale 5."
    },
    {
      linhas: ["[vaca] + [vaca] = 16", "[vaca] - [cavalo] = 5", "[vaca] + [cavalo] = ?"],
      resposta: 11,
      dica: "Duas vacas dão 16, logo uma vale 8. Se 8 menos o cavalo dá 5, o cavalo vale 3."
    },
    {
      linhas: ["[galinha] + [galinha] = 14", "[galinha] - [pato] = 1", "[galinha] + [pato] = ?"],
      resposta: 13,
      dica: "Duas galinhas dão 14, logo uma vale 7. Se 7 menos o pato dá 1, o pato vale 6."
    },
    {
      linhas: ["[coelho] + [coelho] = 12", "[coelho] + [gato] = 17", "[gato] - [coelho] = ?"],
      resposta: 5,
      dica: "Dois coelhos dão 12, logo um vale 6. Se 6 mais o gato dá 17, o gato vale 11."
    },
    {
      linhas: ["[burro] + [burro] = 16", "[burro] - [pintainho] = 1", "[burro] + [pintainho] = ?"],
      resposta: 15,
      dica: "Dois burros dão 16, logo um vale 8. Se 8 menos o pintainho dá 1, o pintainho vale 7."
    }
  ],

  // NÍVEL 2: Cadeias de Operações (Contas corridas com 3 elementos)
  nivel2: [
    // --- FÁCEIS (Resultados até 10) ---
    {
      linhas: ["[porco] + [porco] = 4", "[vaca] + [vaca] = 6", "[porco] + [porco] + [vaca] = ?"],
      resposta: 7,
      dica: "O porco vale 2 e a vaca vale 3. Faz a conta: 2 + 2 + 3."
    },
    {
      linhas: ["[ovelha] + [ovelha] = 6", "[cavalo] + [cavalo] = 2", "[ovelha] + [cavalo] - [cavalo] = ?"],
      resposta: 3,
      dica: "A ovelha vale 3 e o cavalo vale 1. Se somas 1 e logo a seguir tiras 1, ficas igual!"
    },
    {
      linhas: ["[galinha] + [galinha] = 8", "[pato] + [pato] = 4", "[galinha] + [pato] + [pato] = ?"],
      resposta: 8,
      dica: "A galinha vale 4 e cada pato vale 2. Junta os valores passo a passo."
    },
    {
      linhas: ["[coelho] + [coelho] = 2", "[burro] + [burro] = 8", "[burro] + [coelho] - [coelho] = ?"],
      resposta: 4,
      dica: "O burro vale 4 e o coelho vale 1. Se pões um coelho e depois o tiras, ficas só com o burro."
    },
    {
      linhas: ["[gato] + [gato] = 10", "[pintainho] + [pintainho] = 4", "[gato] - [pintainho] + [gato] = ?"],
      resposta: 8,
      dica: "O gato vale 5 e o pintainho vale 2. Primeiro faz 5 - 2, e depois soma mais 5."
    },
    {
      linhas: ["[porco] + [porco] = 6", "[ovelha] + [ovelha] = 4", "[porco] + [porco] + [ovelha] = ?"],
      resposta: 8,
      dica: "Cada porco vale 3 e a ovelha vale 2. Faz a soma corrida: 3 + 3 + 2."
    },
    {
      linhas: ["[vaca] + [vaca] = 4", "[cavalo] + [cavalo] = 8", "[vaca] + [cavalo] + [cavalo] = ?"],
      resposta: 10,
      dica: "A vaca vale 2 e o cavalo vale 4. Faz a conta: 2 + 4 + 4."
    },
    {
      linhas: ["[galinha] + [galinha] = 10", "[pato] + [pato] = 2", "[galinha] - [pato] + [galinha] = ?"],
      resposta: 9,
      dica: "A galinha vale 5 e o pato vale 1. Faz 5 menos 1, e ao resultado soma 5."
    },
    {
      linhas: ["[coelho] + [coelho] = 6", "[gato] + [gato] = 6", "[gato] + [coelho] - [coelho] = ?"],
      resposta: 3,
      dica: "Ambos valem 3. Se somas e subtrais o mesmo valor, o resultado não muda."
    },
    {
      linhas: ["[burro] + [burro] = 8", "[pintainho] + [pintainho] = 2", "[burro] - [pintainho] + [pintainho] = ?"],
      resposta: 4,
      dica: "O burro vale 4 e o pintainho vale 1. Faz a conta da esquerda para a direita."
    },

    // --- DIFÍCEIS (Resultados até 20) ---
    {
      linhas: ["[porco] + [porco] = 12", "[vaca] + [vaca] = 8", "[porco] + [vaca] + [vaca] = ?"],
      resposta: 14,
      dica: "O porco vale 6 e cada vaca vale 4. Faz a conta: 6 + 4 + 4."
    },
    {
      linhas: ["[ovelha] + [ovelha] = 14", "[cavalo] + [cavalo] = 10", "[ovelha] + [ovelha] + [cavalo] = ?"],
      resposta: 19,
      dica: "Cada ovelha vale 7 e o cavalo vale 5. Junta tudo: 7 + 7 + 5."
    },
    {
      linhas: ["[galinha] + [galinha] = 10", "[pato] + [pato] = 12", "[galinha] + [galinha] + [pato] = ?"],
      resposta: 16,
      dica: "A galinha vale 5 e o pato vale 6. Faz a soma: 5 + 5 + 6."
    },
    {
      linhas: ["[coelho] + [coelho] = 16", "[burro] + [burro] = 6", "[coelho] + [burro] + [burro] = ?"],
      resposta: 14,
      dica: "O coelho vale 8 e cada burro vale 3. Faz a soma dos três animais."
    },
    {
      linhas: ["[gato] + [gato] = 12", "[pintainho] + [pintainho] = 14", "[gato] + [gato] + [pintainho] = ?"],
      resposta: 19,
      dica: "O gato vale 6 e o pintainho vale 7. Faz a soma corrida: 6 + 6 + 7."
    },
    {
      linhas: ["[porco] + [porco] = 10", "[ovelha] + [ovelha] = 16", "[porco] + [porco] + [ovelha] = ?"],
      resposta: 18,
      dica: "Cada porco vale 5 e a ovelha vale 8. Faz a conta: 5 + 5 + 8."
    },
    {
      linhas: ["[vaca] + [vaca] = 14", "[cavalo] + [cavalo] = 12", "[vaca] + [vaca] + [cavalo] = ?"],
      resposta: 20,
      dica: "A vaca vale 7 e o cavalo vale 6. Faz a soma: 7 + 7 + 6."
    },
    {
      linhas: ["[galinha] + [galinha] = 18", "[pato] + [pato] = 4", "[galinha] - [pato] + [galinha] = ?"],
      resposta: 16,
      dica: "A galinha vale 9 e o pato vale 2. Faz 9 - 2 e depois soma mais 9."
    },
    {
      linhas: ["[coelho] + [coelho] = 10", "[gato] + [gato] = 14", "[gato] + [coelho] + [coelho] = ?"],
      resposta: 17,
      dica: "O gato vale 7 e o coelho vale 5. Faz a soma: 7 + 5 + 5."
    },
    {
      linhas: ["[burro] + [burro] = 12", "[pintainho] + [pintainho] = 8", "[burro] + [burro] + [pintainho] = ?"],
      resposta: 16,
      dica: "O burro vale 6 e o pintainho vale 4. Faz a conta: 6 + 6 + 4."
    }
  ],

  // NÍVEL 3: Pormenores Visuais (Atenção aos animais duplicados!)
  nivel3: [
    // --- FÁCEIS (Resultados até 10) ---
    {
      linhas: ["[porco] [porco] + [porco] [porco] = 4", "[porco] + [vaca] = 4", "[vaca] + [porco] [porco] = ?"],
      resposta: 5,
      dica: "Quatro porcos valem 4, logo 1 porco vale 1. Se 1 + vaca = 4, a vaca vale 3. Na última linha estão 2 porcos!"
    },
    {
      linhas: ["[ovelha] + [ovelha] = 4", "[ovelha] - [cavalo] [cavalo] = 0", "[ovelha] + [cavalo] = ?"],
      resposta: 3,
      dica: "Uma ovelha vale 2. Se 2 menos dois cavalos dá 0, cada cavalo vale 1. Faz a conta final."
    },
    {
      linhas: ["[galinha] [galinha] + [galinha] [galinha] = 8", "[galinha] + [pato] = 5", "[pato] + [galinha] [galinha] = ?"],
      resposta: 7,
      dica: "Cada galinha vale 2. Se 2 mais o pato dá 5, o pato vale 3. Junta o pato a duas galinhas (4)."
    },
    {
      linhas: ["[coelho] + [coelho] [coelho] = 6", "[coelho] [coelho] + [burro] = 7", "[burro] + [coelho] = ?"],
      resposta: 5,
      dica: "Três coelhos valem 6, logo um vale 2. Dois coelhos valem 4. Descobre o burro e soma."
    },
    {
      linhas: ["[gato] [gato] + [gato] [gato] = 8", "[gato] - [pintainho] = 1", "[pintainho] + [gato] [gato] = ?"],
      resposta: 5,
      dica: "Cada gato vale 2. Se 2 menos o pintainho dá 1, o pintainho vale 1. Cuidado com os dois gatos no fim!"
    },
    {
      linhas: ["[porco] [porco] + [porco] [porco] = 4", "[porco] + [ovelha] = 6", "[ovelha] + [porco] [porco] = ?"],
      resposta: 7,
      dica: "Um porco vale 1. A ovelha vale 5. No fim faz a conta da ovelha mais dois porcos."
    },
    {
      linhas: ["[vaca] + [vaca] = 6", "[vaca] - [cavalo] [cavalo] = 1", "[vaca] + [cavalo] = ?"],
      resposta: 4,
      dica: "A vaca vale 3. Dois cavalos valem 2, logo um vale 1. Faz 3 + 1."
    },
    {
      linhas: ["[galinha] [galinha] + [galinha] [galinha] = 4", "[galinha] + [pato] = 6", "[pato] + [galinha] [galinha] = ?"],
      resposta: 7,
      dica: "Uma galinha vale 1. O pato vale 5. No fim tens o pato mais duas galinhas."
    },
    {
      linhas: ["[coelho] + [coelho] [coelho] = 3", "[coelho] [coelho] - [gato] = 1", "[gato] + [coelho] = ?"],
      resposta: 2,
      dica: "O coelho vale 1 e os dois coelhos valem 2. O gato vale 1. Faz a soma."
    },
    {
      linhas: ["[burro] [burro] + [burro] = 6", "[burro] - [pintainho] = 1", "[pintainho] + [burro] [burro] = ?"],
      resposta: 5,
      dica: "Três burros valem 6, logo um vale 2. O pintainho vale 1. No fim tens 1 + 4."
    },

    // --- DIFÍCEIS (Resultados até 20) ---
    {
      linhas: ["[porco] [porco] + [porco] [porco] = 16", "[porco] + [vaca] = 10", "[vaca] + [porco] [porco] = ?"],
      resposta: 14,
      dica: "Cada porco vale 4. A vaca vale 6. No fim somas a vaca com dois porcos (8)."
    },
    {
      linhas: ["[ovelha] + [ovelha] = 16", "[ovelha] - [cavalo] [cavalo] = 2", "[ovelha] + [cavalo] [cavalo] = ?"],
      resposta: 14,
      dica: "A ovelha vale 8. Dois cavalos valem 6. A última linha pede a ovelha mais dois cavalos."
    },
    {
      linhas: ["[galinha] [galinha] + [galinha] [galinha] = 12", "[galinha] + [pato] = 11", "[pato] + [galinha] [galinha] = ?"],
      resposta: 14,
      dica: "Uma galinha vale 3. O pato vale 8. Junta o pato com duas galinhas (6)."
    },
    {
      linhas: ["[coelho] + [coelho] [coelho] = 15", "[coelho] [coelho] - [burro] = 6", "[burro] + [coelho] [coelho] = ?"],
      resposta: 14,
      dica: "Um coelho vale 5 e dois valem 10. O burro vale 4. Faz a soma final."
    },
    {
      linhas: ["[gato] [gato] + [gato] [gato] = 16", "[gato] + [pintainho] = 12", "[pintainho] + [gato] [gato] = ?"],
      resposta: 16,
      dica: "Um gato vale 4 (dois valem 8). O pintainho vale 8. Faz 8 + 8."
    },
    {
      linhas: ["[porco] [porco] + [porco] [porco] = 12", "[porco] + [ovelha] = 13", "[ovelha] + [porco] [porco] = ?"],
      resposta: 16,
      dica: "O porco vale 3 e a ovelha vale 10. No fim somas 10 com dois porcos (6)."
    },
    {
      linhas: ["[vaca] + [vaca] = 14", "[vaca] - [cavalo] [cavalo] = 3", "[vaca] + [cavalo] [cavalo] = ?"],
      resposta: 11,
      dica: "A vaca vale 7. Dois cavalos valem 4. Faz a soma: 7 + 4."
    },
    {
      linhas: ["[galinha] [galinha] + [galinha] [galinha] = 8", "[galinha] + [pato] = 12", "[pato] + [galinha] [galinha] = ?"],
      resposta: 14,
      dica: "A galinha vale 2 e o pato vale 10. Junta o pato com duas galinhas (4)."
    },
    {
      linhas: ["[coelho] + [coelho] [coelho] = 18", "[coelho] [coelho] - [gato] = 5", "[gato] + [coelho] = ?"],
      resposta: 13,
      dica: "O coelho vale 6 e dois valem 12. O gato vale 7. Faz 7 + 6."
    },
    {
      linhas: ["[burro] [burro] + [burro] = 12", "[burro] - [pintainho] = 1", "[pintainho] + [burro] [burro] = ?"],
      resposta: 11,
      dica: "O burro vale 4 e dois valem 8. O pintainho vale 3. Faz 3 + 8."
    }
  ],

  // NÍVEL 4: O Celeiro do Saber (Escolha múltipla visual - Pouca leitura)
  nivel4: [
    // --- FÁCEIS (Até 10) ---
    {
      pergunta: "[porco] = 4<br>[porco] + [porco] = ?",
      opcoes: ["6", "8", "10", "4"],
      correta: "8",
      dica: "Soma o número a ele próprio: 4 + 4."
    },
    {
      pergunta: "[vaca] + 3 = 8<br>[vaca] = ?",
      opcoes: ["4", "5", "6", "3"],
      correta: "5",
      dica: "Pensa: que número mais 3 dá 8?"
    },
    {
      pergunta: "10 - [ovelha] = 7<br>[ovelha] = ?",
      opcoes: ["2", "3", "4", "5"],
      correta: "3",
      dica: "Se tens 10, quantos tiras para ficar com 7?"
    },
    {
      pergunta: "[cavalo] = 3<br>[cavalo] + [cavalo] + [cavalo] = ?",
      opcoes: ["6", "7", "8", "9"],
      correta: "9",
      dica: "Conta de 3 em 3: 3 + 3 + 3."
    },
    {
      pergunta: "[galinha] + 5 = 10<br>[galinha] = ?",
      opcoes: ["4", "5", "6", "3"],
      correta: "5",
      dica: "A galinha é a metade de 10."
    },
    {
      pergunta: "[pato] = 5<br>[pato] + [pato] = ?",
      opcoes: ["8", "9", "10", "7"],
      correta: "10",
      dica: "Faz a conta nos teus dedos: 5 + 5."
    },
    {
      pergunta: "7 - [coelho] = 4<br>[coelho] = ?",
      opcoes: ["2", "3", "4", "1"],
      correta: "3",
      dica: "A 7 tiras quanto para dar 4?"
    },
    {
      pergunta: "[burro] = 2<br>[burro] + [burro] + [burro] = ?",
      opcoes: ["4", "5", "6", "7"],
      correta: "6",
      dica: "Conta de 2 em 2: 2 + 2 + 2."
    },
    {
      pergunta: "[gato] + 4 = 9<br>[gato] = ?",
      opcoes: ["3", "4", "5", "6"],
      correta: "5",
      dica: "Podes fazer a subtração: 9 - 4."
    },
    {
      pergunta: "8 - [pintainho] = 6<br>[pintainho] = ?",
      opcoes: ["1", "2", "3", "4"],
      correta: "2",
      dica: "De 8 tiras quantos para ficar com 6?"
    },

    // --- DIFÍCEIS (De 10 a 20) ---
    {
      pergunta: "[porco] = 7<br>[porco] + [porco] = ?",
      opcoes: ["12", "14", "16", "11"],
      correta: "14",
      dica: "Faz a conta na cabeça: 7 + 7."
    },
    {
      pergunta: "[vaca] + 5 = 15<br>[vaca] 0 ?",
      opcoes: ["8", "9", "10", "11"],
      correta: "10",
      dica: "Tira 5 ao número 15."
    },
    {
      pergunta: "20 - [ovelha] = 8<br>[ovelha] = ?",
      opcoes: ["10", "11", "12", "13"],
      correta: "12",
      dica: "Faz a conta de menos: 20 - 8."
    },
    {
      pergunta: "[cavalo] = 5<br>[cavalo] + [cavalo] + [cavalo] = ?",
      opcoes: ["12", "15", "18", "20"],
      correta: "15",
      dica: "Conta de 5 em 5: 5 + 5 + 5."
    },
    {
      pergunta: "[galinha] + 6 = 18<br>[galinha] = ?",
      opcoes: ["11", "12", "13", "14"],
      correta: "12",
      dica: "Faz a subtração: 18 - 6."
    },
    {
      pergunta: "[pato] = 8<br>[pato] + [pato] = ?",
      opcoes: ["14", "15", "16", "17"],
      correta: "16",
      dica: "Faz a conta de somar: 8 + 8."
    },
    {
      pergunta: "15 - [coelho] = 4<br>[coelho] = ?",
      opcoes: ["10", "11", "12", "13"],
      correta: "11",
      dica: "Tira 4 ao número 15."
    },
    {
      pergunta: "[burro] = 6<br>[burro] + [burro] + [burro] = ?",
      opcoes: ["16", "17", "18", "19"],
      correta: "18",
      dica: "Soma três parcelas: 6 + 6 + 6."
    },
    {
      pergunta: "[gato] + 7 = 19<br>[gato] = ?",
      opcoes: ["11", "12", "13", "14"],
      correta: "12",
      dica: "Faz a conta de menos: 19 - 7."
    },
    {
      pergunta: "17 - [pintainho] = 7<br>[pintainho] = ?",
      opcoes: ["8", "9", "10", "11"],
      correta: "10",
      dica: "Se a 17 tiras o 7, ficas com a dezena inteira."
    }
  ]
};