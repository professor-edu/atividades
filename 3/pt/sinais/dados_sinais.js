/* =========================================================================
   BASE DE DADOS - SINAIS GRÁFICOS E AUXILIARES DE ESCRITA (3.º ANO)
   ========================================================================= */

const dbQuizSinais = [
  // --- QUESTÕES DAS TUAS IMAGENS ---
  {
    id: 1,
    pergunta: "Das palavras que seguem, seleciona a única em que encontras um sinal gráfico.",
    tipo: "multipla",
    opcoes: ["desgraça", "aquecedor", "cinema", "infância"],
    correta: "infância",
    dica: "Procura o acento circunflexo ( ^ ) que está sobre a vogal 'â'. Os acentos são sinais gráficos! 🦉"
  },
  {
    id: 2,
    pergunta: "Das seguintes opções, seleciona a única que não descreve uma função do hífen.",
    tipo: "multipla",
    opcoes: [
      "Indicar o início de uma fala.",
      "Ligar elementos de algumas palavras.",
      "Ligar verbos aos pronomes pessoais.",
      "Separar sílabas de uma palavra no final da linha."
    ],
    correta: "Indicar o início de uma fala.",
    dica: "Pensa bem: qual é o sinal que usamos num diálogo para indicar que uma personagem vai falar? Não é o hífen... 🦉"
  },
  {
    id: 3,
    pergunta: "Seleciona a única opção que não apresenta um sinal gráfico.",
    tipo: "multipla",
    opcoes: ["acento grave", "cedilha", "til", "hífen"],
    correta: "hífen",
    dica: "A acentuação, o til e a cedilha modificam o som das letras, sendo sinais gráficos. O hífen é apenas um sinal auxiliar de ligação! 🦉"
  },
  {
    id: 4,
    pergunta: "O til é utilizado para determinar uma vogal ou ditongo nasal.",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Verdadeira",
    dica: "Lembra-te do som das palavras 'mãe' ou 'sabão'. O til faz com que o som saia pelo nariz, ou seja, som nasal! 🦉"
  },

  // --- NOVAS QUESTÕES ADICIONADAS (ACENTOS E DIACRÍTICOS) ---
  {
    id: 5,
    pergunta: "Qual é o acento gráfico que abre o som da vogal, como na palavra 'café'?",
    tipo: "multipla",
    opcoes: ["Acento circunflexo", "Acento grave", "Acento agudo", "Til"],
    correta: "Acento agudo",
    dica: "O acento agudo ( ´ ) serve para tornar o som das vogais aberto e forte! 🦉"
  },
  {
    id: 6,
    pergunta: "Qual o acento gráfico que fecha o som da vogal, como na palavra 'avô'?",
    tipo: "multipla",
    opcoes: ["Acento agudo", "Acento circunflexo", "Acento grave", "Til"],
    correta: "Acento circunflexo",
    dica: "O acento circunflexo ( ^ ), que parece um 'chapéuzinho', serve para fechar o som da vogal. 🦉"
  },
  {
    id: 7,
    pergunta: "O sinal gráfico 'cedilha' ( ç ) pode ser utilizado no início de uma palavra?",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Falsa",
    dica: "Atenção à regra de ouro da cedilha: nunca, em circunstância alguma, iniciamos uma palavra com 'ç'! 🦉"
  },
  {
    id: 8,
    pergunta: "Seleciona a palavra que apresenta um acento circunflexo.",
    tipo: "multipla",
    opcoes: ["lâmpada", "árvore", "mágico", "avó"],
    correta: "lâmpada",
    dica: "O acento circunflexo ( ^ ) dá um som fechado. Olha bem para a palavra 'lâmpada'! 🦉"
  },
  {
    id: 9,
    pergunta: "O acento grave ( ` ) é utilizado para marcar a contração da preposição 'a' com o artigo 'a' (à).",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Verdadeira",
    dica: "Usamos o acento grave virado para a esquerda ( ` ) para fazer a crase, como na frase: 'Vou à escola'. 🦉"
  },
  {
    id: 10,
    pergunta: "A cedilha coloca-se na letra C antes das vogais:",
    tipo: "multipla",
    opcoes: ["a, o, u", "e, i", "a, e, i, o, u", "apenas no início das palavras"],
    correta: "a, o, u",
    dica: "Antes de 'e' e 'i', a letra C já tem naturalmente o som de S (como em 'cinema'). Por isso, só usamos cedilha antes de 'a', 'o', 'u'. 🦉"
  },

  // --- QUESTÕES SOBRE HÍFEN E SINAIS AUXILIARES (ASPAS E PARÊNTESES) ---
  {
    id: 11,
    pergunta: "Qual é o sinal auxiliar de escrita utilizado para indicar uma citação ou destacar uma palavra?",
    tipo: "multipla",
    opcoes: ["Parênteses", "Aspas", "Hífen", "Dois-pontos"],
    correta: "Aspas",
    dica: "As aspas « » ou \" \" são usadas para 'agarrar' e destacar frases ditas por outras pessoas! 🦉"
  },
  {
    id: 12,
    pergunta: "Na frase 'O meu cão (que é muito brincalhão) adora correr', para que servem os parênteses?",
    tipo: "multipla",
    opcoes: [
      "Para ligar duas palavras compostas.",
      "Para isolar uma informação extra ou esclarecimento.",
      "Para indicar que uma personagem vai falar.",
      "Para fazer uma pergunta direta."
    ],
    correta: "Para isolar uma informação extra ou esclarecimento.",
    dica: "Os parênteses ( ) servem para guardar uma explicação rápida no meio da frase, que poderíamos retirar sem estragar o sentido. 🦉"
  },
  {
    id: 13,
    pergunta: "Na palavra 'guarda-chuva', o sinal utilizado entre as palavras é:",
    tipo: "multipla",
    opcoes: ["O travessão", "O hífen", "A cedilha", "A vírgula"],
    correta: "O hífen",
    dica: "Para unir duas palavras que formam um único objeto, usamos o sinal de ligação chamado hífen! 🦉"
  },
  {
    id: 14,
    pergunta: "As aspas são sinais de pontuação utilizados para terminar uma frase.",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Falsa",
    dica: "As aspas servem para destacar texto, nunca para terminar frases. Para terminar frases usamos o ponto final, interrogação ou exclamação! 🦉"
  },
  {
    id: 15,
    pergunta: "Os parênteses retos [ ] também são considerados sinais auxiliares de escrita.",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Verdadeira",
    dica: "Tanto os parênteses curvos ( ) como os retos [ ] são auxiliares de escrita e servem para inserir notas ou comentários. 🦉"
  },

  // --- QUESTÕES SOBRE SINAIS DE PONTUAÇÃO ---
  {
    id: 16,
    pergunta: "Qual é o sinal de pontuação utilizado para indicar o início de uma fala num diálogo?",
    tipo: "multipla",
    opcoes: ["Hífen", "Travessão", "Dois-pontos", "Vírgula"],
    correta: "Travessão",
    dica: "O travessão ( — ) é um traço mais longo do que o hífen e serve para dar a palavra a uma personagem. 🦉"
  },
  {
    id: 17,
    pergunta: "Qual o sinal de pontuação que indica que a frase ficou incompleta ou que houve uma hesitação?",
    tipo: "multipla",
    opcoes: ["Dois-pontos", "Reticências", "Ponto e vírgula", "Ponto de exclamação"],
    correta: "Reticências",
    dica: "As reticências ( ... ) são os famosos 'três pontos' que deixam o pensamento em aberto! 🦉"
  },
  {
    id: 18,
    pergunta: "Os dois-pontos ( : ) servem para anunciar uma fala ou iniciar uma enumeração/lista.",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Verdadeira",
    dica: "Usamos os dois-pontos antes de uma personagem falar ou quando vamos listar coisas, como: 'Fui à feira e comprei: maçãs, laranjas e bananas'. 🦉"
  },
  {
    id: 19,
    pergunta: "Qual o sinal de pontuação indicado para encerrar uma frase que expressa admiração, surpresa ou medo?",
    tipo: "multipla",
    opcoes: ["Ponto de interrogação", "Ponto de exclamação", "Ponto final", "Reticências"],
    correta: "Ponto de exclamação",
    dica: "O ponto de exclamação ( ! ) é o sinal da emoção! Usa-se para gritar, festejar ou apanhar um susto! 🦉"
  },
  {
    id: 20,
    pergunta: "O ponto e vírgula ( ; ) indica uma pausa maior do que a vírgula, mas menor do que o ponto final.",
    tipo: "verdadeiro_falso",
    opcoes: ["Falsa", "Verdadeira"],
    correta: "Verdadeira",
    dica: "O ponto e vírgula serve exatamente para separar partes de uma frase longa mantendo-as ligadas. É uma pausa intermédia! 🦉"
  },
  {  
	id: 21,
    pergunta: "Assinala a frase em que os parênteses () isolam uma expressão.",
    tipo: "multipla",
    opcoes: [
      "Portugal aderiu à UE União Europeia em (1985).",
      "Portugal aderiu à UE (União Europeia) em 1985.",
      "Portugal (aderiu) à UE União Europeia em 1985.",
      "Portugal aderiu à (UE) União Europeia em 1985."],
  	correta: "Portugal aderiu à UE (União Europeia) em 1985.",
    dica: "Os parênteses ( ) servem para introduzir uma informação rápida numa frase, que poderíamos retirar sem estragar o sentido. 🦉"
  }
];