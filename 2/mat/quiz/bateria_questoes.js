/* ==========================================================================
   BASE DE DADOS: MEGA REVISÃO - MATEMÁTICA (2º ANO)
   ========================================================================== */

const perguntasRevisaoMAT = [
    // --- NÚMEROS E MATERIAL MULTIBÁSICO (MAB) ---
    { 
        categoria: "Números e MAB", 
        pergunta: "Que número está representado neste material multibásico (MAB)?", 
        opcoes: ["124", "214", "241"], 
        correta: "214", 
        dica: "Lembra-te: cada placa vale 100, cada barra vale 10 e cada cubinho vale 1.", 
        imagem: "mab_214.png" 
    },
	{ 
        categoria: "Números e MAB", 
        pergunta: "Que número está representado neste material multibásico (MAB)?", 
        opcoes: ["724", "620", "840"], 
        correta: "620", 
        dica: "Lembra-te: cada placa vale 100 e cada barra vale 10.", 
        imagem: "mab_620.png" 
    },
	{ 
        categoria: "Números e MAB", 
        pergunta: "Que número está representado neste material multibásico (MAB)?", 
        opcoes: ["700", "800", "900"], 
        correta: "900", 
        dica: "Lembra-te: cada placa vale 100.", 
        imagem: "mab_900.png" 
    },
	{ 
        categoria: "Números e MAB", 
        pergunta: "Que número está representado neste material multibásico (MAB)?", 
        opcoes: ["900", "800", "1000"], 
        correta: "1000", 
        dica: "Lembra-te: cada cubo vale 1000.", 
        imagem: "mab_1000.png" 
    },
	{ 
        categoria: "Números e MAB", 
        pergunta: "Que número está representado neste material multibásico (MAB)?", 
        opcoes: ["111", "101", "1001"], 
        correta: "111", 
        dica: "Lembra-te: cada placa vale 100, cada barra vale 10 e cada cubinho vale 1.", 
        imagem: "mab_111.png" 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Qual é a decomposição correta do número <span class='destaque-fundo'>358</span>?", 
        opcoes: ["300 + 5 + 8", "300 + 50 + 8", "30 + 50 + 8"], 
        correta: "300 + 50 + 8", 
        dica: "Pensa nas centenas, dezenas e unidades deste número!" 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "No número 472, qual é o algarismo das <span class='destaque-fundo'>dezenas</span>?", 
        opcoes: ["4", "7", "2"], 
        correta: "7", 
        dica: "O 2 são as unidades, o 7 são as dezenas e o 4 são as centenas." 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Qual destes números é o <span class='destaque-fundo'>maior</span>?", 
        opcoes: ["899", "901", "900"], 
        correta: "901", 
        dica: "Compara primeiro o algarismo das centenas." 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Quantas <span class='destaque-texto'>unidades</span> existem em 5 centenas?", 
        opcoes: ["5", "50", "500"], 
        correta: "500", 
        dica: "Uma centena tem 100 unidades. Pensa em 5 dessas centenas!" 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Que número está representado na imagem?", 
        opcoes: ["305", "350", "35"], 
        correta: "305", 
        dica: "Observa as argolas nas Centenas, Dezenas e Unidades. Se não houver argolas, é zero!", 
        imagem: "mab_305.png" 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Qual é o número que vem imediatamente <span class='destaque-fundo'>antes</span> de 800?", 
        opcoes: ["799", "801", "700"], 
        correta: "799", 
        dica: "Se tirares uma unidade a 800, com que número ficas?" 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Qual é o número correspondente a: <br><br><b>6 centenas, 4 dezenas e 9 unidades</b>?", 
        opcoes: ["649", "694", "469"], 
        correta: "649", 
        dica: "Junta os algarismos pela ordem correta das ordens." 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Quantas centenas completas tem o número <span class='destaque-texto'>1000</span>?", 
        opcoes: ["1 centena", "10 centenas", "100 centenas"], 
        correta: "10 centenas", 
        dica: "Pensa em quantas placas de 100 precisas para formar o número 1000." 
    },
    { 
        categoria: "Números e MAB", 
        pergunta: "Que número com 3 algarismos está entre o 699 e o 701?", 
        opcoes: ["700", "600", "710"], 
        correta: "700", 
        dica: "É o número redondo que marca o início das 7 centenas." 
    },

    // --- TABUADAS E MULTIPLICAÇÃO ---
    { 
        categoria: "Multiplicação", 
        pergunta: "Qual é o <span class='destaque-fundo'>dobro</span> do número 12?", 
        opcoes: ["6", "14", "24"], 
        correta: "24", 
        dica: "O dobro calcula-se fazendo o número duas vezes (12 + 12)." 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Qual é o <span class='destaque-texto'>triplo</span> do número 5?", 
        opcoes: ["10", "15", "20"], 
        correta: "15", 
        dica: "O triplo calcula-se fazendo o número três vezes (5 + 5 + 5)." 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Se uma cadeira tem 4 pernas, quantas pernas têm <span class='destaque-fundo'>3 cadeiras iguais</span>?", 
        opcoes: ["8 pernas", "12 pernas", "16 pernas"], 
        correta: "12 pernas", 
        dica: "Podes somar as pernas das 3 cadeiras: 4 + 4 + 4, ou fazer 3 x 4." 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Qual é o resultado de <span class='destaque-texto'>5 x 6</span>?", 
        opcoes: ["25", "30", "35"], 
        correta: "30", 
        dica: "Pensa na tabuada do 5, contando de 5 em 5 até ao sexto número." 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Qual é o resultado de <span class='destaque-fundo'>3 x 8</span>?", 
        opcoes: ["24", "18", "21"], 
        correta: "24", 
        dica: "É o mesmo que somar o número 8 três vezes: 8 + 8 + 8." 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Qual é o <span class='destaque-texto'>quádruplo</span> do número 10?", 
        opcoes: ["20", "30", "40"], 
        correta: "40", 
        dica: "O quádruplo calcula-se fazendo o número quatro vezes (4 x 10)." 
    },
	{ 
        categoria: "Multiplicação", 
        pergunta: "4 X 8 =", 
        opcoes: ["26", "32", "36"], 
        correta: "32", 
        dica: "O quádruplo calcula-se fazendo o número quatro vezes (8 + 8 + 8 + 8 =)." 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Completa a igualdade: <br><br><b>2 x ___ = 18</b>", 
        opcoes: ["7", "8", "9"], 
        correta: "9", 
        dica: "Qual é o número que, repetido duas vezes (o seu dobro), dá 18?" 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Que multiplicação representa os jarros com flores da imagem?", 
        opcoes: ["2 x 4 = 8", "3 x 4 = 12", "4 x 5 = 20"], 
        correta: "2 x 4 = 8", 
        dica: "Conta quantos jarros existem e quantas flores tem cada jarro.", 
        imagem: "flores_multiplicar.png" 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "Qual é o resultado de qualquer número multiplicado por <span class='destaque-fundo'>zero</span>?", 
        opcoes: ["O próprio número", "Zero", "Um"], 
        correta: "Zero", 
        dica: "Se não tens nenhuma vez esse grupo, com quanto ficas no final?" 
    },
    { 
        categoria: "Multiplicação", 
        pergunta: "O resultado de 10 x 7 é...", 
        opcoes: ["17", "70", "700"], 
        correta: "70", 
        dica: "Contar 7 dezenas é o mesmo que contar de 10 em 10, sete vezes." 
    },

    // --- CÁLCULO, ESTRATÉGIAS E EQUIVALÊNCIAS ---
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Para calcular 45 + 23 por <span class='destaque-fundo'>decomposição</span>, fazemos...", 
        opcoes: ["40 + 20 e 5 + 3", "40 + 3 e 20 + 5", "4 + 2 e 5 + 3"], 
        correta: "40 + 20 e 5 + 3", 
        dica: "Junta as dezenas de cada número e depois junta as unidades." 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Quanto é <span class='destaque-texto'>400 + 300</span>?", 
        opcoes: ["700", "600", "800"], 
        correta: "700", 
        dica: "Pensa em 4 centenas mais 3 centenas." 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "500 + 500 =", 
        opcoes: ["900", "1000", "800"], 
        correta: "1000", 
        dica: "Cada dedo vale uma centena. Conta as centenas." 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "700 - 400 =", 
        opcoes: ["500", "300", "200"], 
        correta: "300", 
        dica: "Cada dedo vale uma centena. Conta as centenas." 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "800 - 200 =", 
        opcoes: ["600", "1000", "500"], 
        correta: "600", 
        dica: "Cada dedo vale uma centena. Conta as centenas." 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "1000 - 900 =", 
        opcoes: ["200", "100", "900"], 
        correta: "100", 
        dica: "Cada dedo vale uma centena. Conta as centenas." 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "600 + 100 =", 
        opcoes: ["500", "700", "800"], 
        correta: "700", 
        dica: "Cada dedo vale uma centena. Conta as centenas." 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "350 + 150 =", 
        opcoes: ["500", "700", "600"], 
        correta: "500", 
        dica: "Somas as centenas e depois a dezenas. (300 + 100) + (50 + 50)." 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Qual é o resultado de <span class='destaque-fundo'>900 - 400</span>?", 
        opcoes: ["400", "500", "600"], 
        correta: "500", 
        dica: "Se a 9 centenas tirares 4 centenas, quantas sobram?" 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Descobre o número em falta para equilibrar a igualdade: <br><br><b>50 + 30 = 60 + ___</b>", 
        opcoes: ["10", "20", "30"], 
        correta: "20", 
        dica: "Primeiro calcula quanto dá 50 + 30. Esse é o valor que deves ter dos dois lados!" 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "(60 + 40) - 100 =", 
        opcoes: ["0", "10", "100"], 
        correta: "0", 
        dica: "Primeiro calcula quanto dá 60 + 40. Depois retira 100." 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "De 10 em 10, qual é o número a seguir nesta sequência? <br><br><b>430, 440, 450, 460, <span class='destaque-fundo'>___</span></b>", 
        opcoes: ["470", "500", "461"], 
        correta: "470", 
        dica: "Presta atenção apenas à casa das dezenas, que aumenta sempre de 1 em 1." 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Qual é o elemento seguinte nesta sequência de repetição?", 
        opcoes: ["Triângulo", "Círculo", "Quadrado"], 
        correta: "Círculo", 
        dica: "Observa a ordem das figuras geométricas na imagem para ver qual vem a seguir.", 
        imagem: "sequencia_figuras.png" 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Descobre o número em falta: <br><br><b>325 - ___ = 305</b>", 
        opcoes: ["5", "10", "20"], 
        correta: "20", 
        dica: "O número 325 perdeu algumas dezenas para ficar apenas com 305. Quantas perdeu?" 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Para calcular 18 + 19, posso pensar em <span class='destaque-texto'>20 + 20 - 3</span>.<br><br>Qual é o resultado?", 
        opcoes: ["37", "39", "40"], 
        correta: "37", 
        dica: "Calcula primeiro 20 + 20 e depois retira os 3 que adicionámos a mais." 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Quanto temos de adicionar ao número <span class='destaque-fundo'>750</span> para chegar a <span class='destaque-fundo'>800</span>?", 
        opcoes: ["5", "50", "100"], 
        correta: "50", 
        dica: "Pensa em saltar de 10 em 10 a partir de 750 até chegares ao 800." 
    },
    { 
        categoria: "Cálculo Mental", 
        pergunta: "Observa a balança em equilíbrio na imagem. Qual é o peso do saco misterioso?", 
        opcoes: ["25 kg", "20 kg", "15 kg"], 
        correta: "20 kg", 
        dica: "Os dois pratos da balança têm de ter exatamente o mesmo peso total.", 
        imagem: "balanca_equilibrio.png" 
    },
	{ 
        categoria: "Cálculo Mental", 
        pergunta: "Observa a balança em equilíbrio na imagem. Qual é o peso do saco misterioso?", 
        opcoes: ["10 kg", "20 kg", "5 kg"], 
        correta: "10 kg", 
        dica: "Os dois pratos da balança têm de ter exatamente o mesmo peso total.", 
        imagem: "balanca_equilibrio_1.png" 
    },

    // --- GEOMETRIA ---
    { 
        categoria: "Geometria", 
        pergunta: "Qual destes sólidos geométricos <span class='destaque-fundo'>não roda</span> se o empurrarmos?", 
        opcoes: ["O cilindro", "O cubo", "A esfera"], 
        correta: "O cubo", 
        dica: "O cubo é um poliedro, pois tem apenas faces planas." 
    },
    { 
        categoria: "Geometria", 
        pergunta: "Quantas faces tem um <span class='destaque-texto'>cubo</span>?", 
        opcoes: ["4 faces", "6 faces", "8 faces"], 
        correta: "6 faces", 
        dica: "Pensa num dado de jogar tradicional. Quantos números tem?" 
    },
    { 
        categoria: "Geometria", 
        pergunta: "Qual é o nome da figura geométrica plana que está representada na imagem?", 
        opcoes: ["Retângulo", "Quadrado", "Círculo"], 
        correta: "Retângulo", 
        dica: "Tem 4 lados, mas 2 são compridos e 2 são mais curtos.", 
        imagem: "figura_retangulo.png" 
    },
    { 
        categoria: "Geometria", 
        pergunta: "Como se chama um polígono que tem <span class='destaque-texto'>3 lados</span> e <span class='destaque-texto'>3 vértices</span>?", 
        opcoes: ["Quadrado", "Triângulo", "Pentágono"], 
        correta: "Triângulo", 
        dica: "A própria palavra começa com 'Tri', que significa três!" 
    },
    { 
        categoria: "Geometria", 
        pergunta: "Qual destes sólidos geométricos é um <span class='destaque-texto'>não-poliedro</span> (tem faces curvas)?", 
        opcoes: ["Prisma", "Cone", "Pirâmide"], 
        correta: "Cone", 
        dica: "Pensa num chapéu de festa de aniversário. Tem uma base redonda." 
    },
    { 
        categoria: "Geometria", 
        pergunta: "A linha representada na imagem é...", 
        opcoes: ["Uma linha aberta", "Uma linha fechada", "Uma linha reta"], 
        correta: "Uma linha aberta", 
        dica: "Repara se as pontas da linha se encontram ou se estão separadas.", 
        imagem: "linha_aberta.jpg" 
    },
    { 
        categoria: "Geometria", 
        pergunta: "Quantos <span class='destaque-fundo'>vértices</span> tem um triângulo?", 
        opcoes: ["3", "4", "5"], 
        correta: "3", 
        dica: "Os vértices são os bicos ou cantos onde os lados se encontram." 
    },
    { 
        categoria: "Geometria", 
        pergunta: "Que sólido geométrico tem faces em forma de triângulo e uma base quadrada?", 
        opcoes: ["Cubo", "Prisma", "Pirâmide"], 
        correta: "Pirâmide", 
        dica: "Lembra-te das construções famosas que existem no Egito.", 
        imagem: "solido_piramide.png" 
    },

    // --- MEDIDA, DINHEIRO E FRAÇÕES ---
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Quanto dinheiro em moedas está representado na imagem?", 
        opcoes: ["1 Euro e 20 cêntimos", "1 Euro e 50 cêntimos", "2 Euros"], 
        correta: "1 Euro e 50 cêntimos", 
        dica: "Soma o valor das moedas de cêntimo de forma correta.", 
        imagem: "moedas_150.png" 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "A Maria comprou um livro por <span class='destaque-texto'>8 Euros</span> e pagou com uma nota de <span class='destaque-fundo'>10 Euros</span>. <br><br>Quanto troco recebeu?", 
        opcoes: ["1 Euro", "2 Euros", "3 Euros"], 
        correta: "2 Euros", 
        dica: "Calcula a diferença entre o dinheiro que ela entregou e o preço do livro." 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Que horas marca o relógio analógico (de ponteiros) na imagem?", 
        opcoes: ["3 horas certas", "3 e meia", "6 horas certas"], 
        correta: "3 horas certas", 
        dica: "O ponteiro pequeno aponta para as horas e o ponteiro grande para os minutos.", 
        imagem: "relogio_3horas.jpg" 
    },
	{ 
        categoria: "Medida e Dinheiro", 
        pergunta: "Que horas marca o relógio analógico (de ponteiros) na imagem?", 
        opcoes: ["4 horas certas", "Meio dia e vinte", "3 horas certas"], 
        correta: "4 horas certas", 
        dica: "O ponteiro pequeno aponta para as horas e o ponteiro grande para os minutos.", 
        imagem: "relogio_4horas.png" 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Quantos meses inteiros são precisos para formar <span class='destaque-texto'>meio ano</span>?", 
        opcoes: ["4 meses", "6 meses", "12 meses"], 
        correta: "6 meses", 
        dica: "O ano tem 12 meses. Pensa em dividir esse valor em duas partes iguais (metade)." 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Que parte da maçã foi cortada e retirada na imagem?", 
        opcoes: ["A metade (meio)", "A quarta parte (um quarto)", "A maçã inteira"], 
        correta: "A metade (meio)", 
        dica: "A maçã foi dividida em duas partes exatamente iguais.", 
        imagem: "maca_metade.jpg" 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Se dividires uma pizza em <span class='destaque-fundo'>4 fatias iguais</span> e comeres uma, comeste...", 
        opcoes: ["A metade", "A quarta parte", "A terça parte"], 
        correta: "A quarta parte", 
        dica: "A quarta parte obtém-se dividindo o todo por 4 partes iguais." 
    },
	{ 
        categoria: "Medida e Dinheiro", 
        pergunta: "Se dividires uma pizza em <span class='destaque-fundo'>4 fatias iguais</span> e comeres uma, as partes que ficam são...", 
        opcoes: ["A metade", "Três quartos", "A terça parte"], 
        correta: "Três quartos", 
        dica: "Ficaram 3 fatias de 4 fatias iguais (3 de 4)." 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Quantos centímetros mede o lápis de acordo com a régua da imagem?", 
        opcoes: ["9 cm", "8 cm", "10 cm"], 
        correta: "9 cm", 
        dica: "Vê em que número da régua termina a ponta afiada do lápis.", 
        imagem: "regua_lapis.jpg" 
    },
    { 
        categoria: "Medida e Dinheiro", 
        pergunta: "Qual é a <span class='destaque-texto'>metade</span> do número 40?", 
        opcoes: ["10", "20", "30"], 
        correta: "20", 
        dica: "Que número, adicionado a si próprio, dá 40 de resultado?" 
    },

    // --- TRATAMENTO DE DADOS ---
    { 
        categoria: "Tratamento de Dados", 
        pergunta: "Observa o Diagrama de Carroll.<br>Quantas raparigas usam óculos?", 
        opcoes: ["4", "5", "1"], 
        correta: "4", 
        dica: "Cruza as linhas e colunas do diagrama para encontrar o número correto.", 
        imagem: "carroll_oculos.png" 
    },
	{ 
        categoria: "Tratamento de Dados", 
        pergunta: "Observa o Diagrama de Carroll.<br>Quantos rapazes usam boné?", 
        opcoes: ["4", "5", "2"], 
        correta: "2", 
        dica: "Cruza as linhas e colunas do diagrama para encontrar o número correto.", 
        imagem: "carroll_oculos.png" 
    },
	{ 
        categoria: "Tratamento de Dados", 
        pergunta: "Observa o Diagrama de Carroll.<br>Quantos rapazes existem?", 
        opcoes: ["4", "5", "7"], 
        correta: "7", 
        dica: "Conta os rapazes com óculos + rapazes com boné.", 
        imagem: "carroll_oculos.png" 
    },
    { 
        categoria: "Tratamento de Dados", 
        pergunta: "De acordo com o gráfico de barras, qual é a fruta favorita de mais alunos?", 
        opcoes: ["Morango", "Maçã", "Banana"], 
        correta: "Maçã", 
        dica: "Procura a barra que atinge a maior altura no gráfico.", 
        imagem: "grafico_frutas.png" 
    },
	{ 
        categoria: "Tratamento de Dados", 
        pergunta: "De acordo com o gráfico de barras, quantos alunos escolheram a <span class='destaque-texto'>maçã</span>?", 
        opcoes: ["8", "3", "5"], 
        correta: "8", 
        dica: "Procura a barra que atinge a maior altura no gráfico.", 
        imagem: "grafico_frutas.png" 
    },
    { 
        categoria: "Tratamento de Dados", 
        pergunta: "Observa bem a legenda neste pictograma.<br>Quantos livros leu o <span class='destaque-fundo'>João</span>?", 
        opcoes: ["9 livros", "16 livros", "18 livros"], 
        correta: "18 livros", 
        dica: "O João tem 9 desenhos de livros. Lembra-te que cada desenho (livro) vale por 2!", 
        imagem: "pictograma_livros.png" 
    },
	{ 
        categoria: "Tratamento de Dados", 
        pergunta: "Observa bem a legenda neste pictograma.<br>Quantos livros leu o <span class='destaque-fundo'>Diogo</span>?", 
        opcoes: ["3 livros", "6 livros", "9 livros"], 
        correta: "6 livros", 
        dica: "O Diogo tem 3 desenhos de livros. Lembra-te que cada desenho (livro) vale por 2!", 
        imagem: "pictograma_livros.png" 
    },
	{ 
        categoria: "Tratamento de Dados", 
        pergunta: "Observa bem a legenda neste pictograma.<br>Quantos livros leram os meninos no <span class='destaque-fundo'>total</span>?", 
        opcoes: ["30 livros", "36 livros", "18 livros"], 
        correta: "36 livros", 
        dica: "Conta todos os livros. Lembra-te que cada desenho (livro) vale por 2!", 
        imagem: "pictograma_livros.png" 
    }
];