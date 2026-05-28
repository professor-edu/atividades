/* ==========================================================================
   BASE DE DADOS: MEGA REVISÃO - ESTUDO DO MEIO (2º ANO)
   ========================================================================== */

const perguntasRevisaoEM = [
    // --- O MEU CORPO E A SAÚDE ---
    { categoria: "O Meu Corpo", pergunta: "Que sentido usamos para sentir o <span class='destaque-fundo'>cheiro</span> de uma flor?", opcoes: ["Tato", "Olfato", "Paladar", "Visão"], correta: "Olfato", dica: "Usa o nariz para descobrir!" },
    { categoria: "O Meu Corpo", pergunta: "Qual é o órgão responsável pelo sentido da <span class='destaque-fundo'>audição</span>?", opcoes: ["Orelhas / Ouvidos", "Olhos", "Língua"], correta: "Orelhas / Ouvidos", dica: "É por onde entram os sons e as músicas." },
    { categoria: "O Meu Corpo", pergunta: "Que parte do nosso esqueleto protege o nosso cérebro?", opcoes: ["Costelas", "Crânio", "Coluna"], correta: "Crânio", dica: "É o osso muito duro que temos na cabeça." },
    { categoria: "O Meu Corpo", pergunta: "Quantos dentes de leite tem uma criança?", opcoes: ["20", "32", "10"], correta: "20", dica: "São duas dezenas de dentinhos que acabam por cair!" },
    { categoria: "O Meu Corpo", pergunta: "Qual é o órgão que bate sem parar para empurrar o <span class='destaque-fundo'>sangue</span> por todo o corpo?", opcoes: ["O coração", "O estômago", "Os pulmões"], correta: "O coração", dica: "Fica no lado esquerdo do peito e faz 'pum-pum'." },
    { categoria: "O Meu Corpo", pergunta: "Que órgãos usamos para <span class='destaque-texto'>respirar</span> o ar que nos rodeia?", opcoes: ["Os pulmões", "O estômago", "Os ossos"], correta: "Os pulmões", dica: "Enchem-se de ar como balões quando inspiramos!" },
    { categoria: "O Meu Corpo", pergunta: "Qual é o órgão responsável por <span class='destaque-fundo'>digerir</span> os alimentos que comemos?", opcoes: ["O cérebro", "O coração", "O estômago"], correta: "O estômago", dica: "É para onde vai o almoço ou jantar!" },
    { categoria: "O Meu Corpo", pergunta: "Para que servem os nossos <span class='destaque-fundo'>músculos</span>?", opcoes: ["Para nos ajudar a fazer movimentos e força", "Para digerir a comida", "Para segurar os dentes"], correta: "Para nos ajudar a fazer movimentos e força", dica: "Eles esticam e encolhem para mexermos os braços e pernas." },
    { categoria: "A Saúde", pergunta: "O que deves fazer sempre antes de comer?", opcoes: ["Lavar os dentes", "Lavar as mãos", "Dormir uma sesta"], correta: "Lavar as mãos", dica: "Ajuda a afastar os micróbios da nossa comida." },
    { categoria: "A Saúde", pergunta: "Qual destes alimentos faz melhor à saúde para lanchar?", opcoes: ["Gomas e rebuçados", "Maçã e pão", "Batatas fritas de pacote"], correta: "Maçã e pão", dica: "Dá-te muita energia e faz a barriga ficar feliz e saudável." },
    { categoria: "A Saúde", pergunta: "Para manteres o corpo limpo e sem cheiros deves...", opcoes: ["Tomar banho regularmente", "Lavar só as pontas dos dedos", "Dormir muito"], correta: "Tomar banho regularmente", dica: "A água e o sabonete são os melhores amigos da tua pele." },

    // --- A NATUREZA: ANIMAIS E PLANTAS ---
    { categoria: "Os Animais", pergunta: "Como se chamam os animais que nascem da <span class='destaque-texto'>barriga</span> da mãe?", opcoes: ["Ovíparos", "Vivíparos", "Carnívoros"], correta: "Vivíparos", dica: "Ovíparo vem de 'ovo'. Então a barriga é..." },
    { categoria: "Os Animais", pergunta: "Uma galinha nasce de um ovo.<br>Por isso, a galinha é um animal...", opcoes: ["Ovíparo", "Vivíparo", "Herbívoro"], correta: "Ovíparo", dica: "Pensa na palavra 'ovo' para encontrares a resposta." },
    { categoria: "Os Animais", pergunta: "A vaca só come erva e plantas.<br>Ela é um animal...", opcoes: ["Carnívoro", "Herbívoro", "Omnívoro"], correta: "Herbívoro", dica: "A palavra começa com as mesmas letras de 'Herva'." },
    { categoria: "Os Animais", pergunta: "O porco e o urso comem tanto plantas como outros animais. Eles são animais...", opcoes: ["Herbívoros", "Carnívoros", "Omnívoros"], correta: "Omnívoros", dica: "Significa que comem de tudo um pouco!" },
    { categoria: "Os Animais", pergunta: "Qual destes animais tem o corpo coberto de escamas?", opcoes: ["Gato", "Peixe", "Pato"], correta: "Peixe", dica: "Vive debaixo de água e tem barbatanas." },
    { categoria: "Os Animais", pergunta: "Como é o revestimento do corpo de uma <span class='destaque-texto'>rã</span> ou de um sapo?", opcoes: ["Pele nua (húmida)", "Penas", "Pelos"], correta: "Pele nua (húmida)", dica: "Não têm escamas nem pelos, e a sua pele é fresca e escorregadia." },
    { categoria: "Os Animais", pergunta: "Qual destes animais se desloca através da <span class='destaque-texto'>marcha</span> (andar e correr)?", opcoes: ["Cavalo", "Serpente", "Sardinha"], correta: "Cavalo", dica: "Usa as suas quatro patas duras para andar pela terra." },
    { categoria: "Os Animais", pergunta: "Como se desloca a serpente (cobra), uma vez que não tem pernas?", opcoes: ["Voa", "Rasteja", "Nada"], correta: "Rasteja", dica: "Desliza com o corpo encostado e apoiado no chão." },
    { categoria: "Os Animais", pergunta: "Qual destes animais é um <span class='destaque-fundo'>animal selvagem</span>?", opcoes: ["Cão", "Galinha", "Leão"], correta: "Leão", dica: "Não vive numa quinta nem numa casa. Vive livre na floresta ou savana!" },
    { categoria: "Os Animais", pergunta: "Qual é a ave de rapina noturna famosa por rodar muito a cabeça?", opcoes: ["A águia", "A coruja", "O pombo"], correta: "A coruja", dica: "Tem olhos muito grandes e faz 'uuuh uuuh'." },
    { categoria: "As Plantas", pergunta: "Que parte da planta costuma ficar escondida debaixo da terra?", opcoes: ["A flor", "O caule", "A raiz"], correta: "A raiz", dica: "É por aí que a planta bebe água como se fosse uma palhinha." },
    { categoria: "As Plantas", pergunta: "Qual é a função principal das <span class='destaque-fundo'>folhas</span> nas plantas?", opcoes: ["Ajudar a planta a respirar e produzir alimento", "Dar cor ao fruto", "Proteger a raiz do vento"], correta: "Ajudar a planta a respirar e produzir alimento", dica: "É por onde a planta respira e capta a luz solar." },
    { categoria: "As Plantas", pergunta: "Como se chamam as plantas que nascem sozinhas na natureza, sem a ajuda do ser humano?", opcoes: ["Plantas cultivadas", "Plantas espontâneas", "Plantas artificiais"], correta: "Plantas espontâneas", dica: "Nascem livres por vontade da própria natureza." },
    { categoria: "As Plantas", pergunta: "O que é que as plantas precisam para conseguir crescer?", opcoes: ["Água, luz do sol e terra", "Leite e biscoitos", "Escuro e muito frio"], correta: "Água, luz do sol e terra", dica: "Sem sol e sem água, as folhinhas murcham." },

    // --- CONTINENTES E OCEANOS ---
    { categoria: "O Planeta", pergunta: "Qual é o oceano que banha toda a costa de <span class='destaque-fundo'>Portugal</span>?", opcoes: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico"], correta: "Oceano Atlântico", dica: "É o oceano das praias onde tomamos banho no verão." },
    { categoria: "O Planeta", pergunta: "Em que continente fica localizado o nosso país, Portugal?", opcoes: ["Europa", "África", "Ásia"], correta: "Europa", dica: "Faz parte do continente europeu!" },
    { categoria: "O Planeta", pergunta: "Como chamamos às grandes extensões de terra do nosso planeta onde vivem as pessoas?", opcoes: ["Continentes", "Oceanos", "Ilhas pequenas"], correta: "Continentes", dica: "A Europa, a África e a América são exemplos dessas grandes porções de terra." },

    // --- A ÁGUA E OS MATERIAIS ---
    { categoria: "A Água", pergunta: "O gelo é água em que estado?", opcoes: ["Estado Sólido", "Estado Líquido", "Estado Gasoso"], correta: "Estado Sólido", dica: "É duro e frio. Podes pegar nele com as mãos." },
    { categoria: "A Água", pergunta: "O vapor que sai de uma panela a ferver é água no estado...", opcoes: ["Sólido", "Gasoso", "Líquido"], correta: "Gasoso", dica: "Sobe pelo ar como um gás ou fumo." },
    { categoria: "A Água", pergunta: "A água <span class='destaque-fundo'>potável</span> (boa para beber) não tem cor, não tem cheiro e não tem...", opcoes: ["Frio", "Sabor", "Peixes"], correta: "Sabor", dica: "Quando bebes um copo de água pura, ela não sabe a nada." },
    { categoria: "A Água", pergunta: "Onde encontramos água salgada?", opcoes: ["Nos rios", "Nas torneiras", "Nos mares e oceanos"], correta: "Nos mares e oceanos", dica: "É a água onde tomas banho quando vais à praia." },
    { categoria: "Os Materiais", pergunta: "Qual destes objetos flutua (não afunda) na água?", opcoes: ["Uma rolha de cortiça", "Uma pedra", "Uma chave de metal"], correta: "Uma rolha de cortiça", dica: "É feita da casca do sobreiro, sendo muito levezinha." },
    { categoria: "Os Materiais", pergunta: "Dizemos que o vidro da janela é <span class='destaque-fundo'>transparente</span> porque...", opcoes: ["É muito duro.", "Deixa passar a luz e vemos através dele.", "Não se parte."], correta: "Deixa passar a luz e vemos através dele.", dica: "Podes olhar para a rua por lá." },
    { categoria: "Os Materiais", pergunta: "Um íman atrai objetos feitos de...", opcoes: ["Madeira", "Plástico", "Ferro (Metal)"], correta: "Ferro (Metal)", dica: "Se aproximares de um clipe ou uma chave, eles colam-se." },

    // --- TEMPO, CALENDÁRIO E ESTAÇÕES ---
    { categoria: "O Tempo", pergunta: "Quantos meses tem um ano inteiro?", opcoes: ["10 meses", "12 meses", "24 meses"], correta: "12 meses", dica: "O último mês é dezembro." },
    { categoria: "O Tempo", pergunta: "Qual é o mês mais curto do ano?", opcoes: ["janeiro", "fevereiro", "agosto"], correta: "fevereiro", dica: "Costuma ter apenas 28 dias." },
    { categoria: "O Tempo", pergunta: "Quantas estações do ano existem?", opcoes: ["4", "2", "6"], correta: "4", dica: "Primavera, verão, outono e..." },
    { categoria: "O Tempo", pergunta: "Em que estação do ano costuma fazer muito frio e, às vezes, nevar?", opcoes: ["verão", "primavera", "inverno"], correta: "inverno", dica: "É a época em que usamos gorros e cachecóis grossos." },
    { categoria: "O Tempo", pergunta: "Se hoje é <span class='destaque-texto'>Quinta-feira</span>, amanhã será...", opcoes: ["Sexta-feira", "Quarta-feira", "Sábado"], correta: "Sexta-feira", dica: "É o último dia de aulas antes do fim de semana!" },
    { categoria: "O Tempo", pergunta: "Qual destes meses pertence ao <span class='destaque-fundo'>verão</span>?", opcoes: ["janeiro", "agosto", "novembro"], correta: "agosto", dica: "É o mês em que as escolas estão fechadas e vamos à praia." },
    { categoria: "O Tempo", pergunta: "O Sol nasce de que lado?", opcoes: ["Nascente (Este)", "Poente (Oeste)", "Sul"], correta: "Nascente (Este)", dica: "A própria palavra diz: 'Nasce' no 'Nascente'." },

    // --- COMUNIDADE, PROFISSÕES E INSTITUIÇÕES ---
    { categoria: "A Comunidade", pergunta: "Quem trata dos animais quando eles estão doentes?", opcoes: ["O médico veterinário", "O pedreiro", "O bombeiro"], correta: "O médico veterinário", dica: "É o médico dos cães, gatos e outros bichos." },
    { categoria: "A Comunidade", pergunta: "Qual destes profissionais trabalha a fazer pão e bolos?", opcoes: ["O carteiro", "O padeiro", "O polícia"], correta: "O padeiro", dica: "Trabalha numa padaria ou pastelaria." },
    { categoria: "A Comunidade", pergunta: "Onde vamos quando precisamos de enviar uma carta ou uma encomenda?", opcoes: ["Ao hospital", "Às Finanças", "Aos Correios (CTT)"], correta: "Aos Correios (CTT)", dica: "Têm o símbolo vermelho com um cavalo e um cavaleiro." },
    { categoria: "A Comunidade", pergunta: "Qual é o <span class='destaque-fundo'>Número Nacional de Emergência</span> que ligamos se houver um acidente?", opcoes: ["112", "118", "911"], correta: "112", dica: "Chama polícias, bombeiros e ambulâncias em todo o país." },

    // --- TRANSPORTES E COMUNICAÇÃO ---
    { categoria: "Transportes", pergunta: "Qual destes é um meio de transporte aéreo?", opcoes: ["Barco", "Comboio", "Avião"], correta: "Avião", dica: "Viaja pelo céu, no ar." },
    { categoria: "Transportes", pergunta: "Um navio ou um submarino são transportes...", opcoes: ["Terrestres", "Aquáticos", "Aéreos"], correta: "Aquáticos", dica: "Andam sobre a água ou debaixo dela." },
    { categoria: "Comunicação", pergunta: "Qual destes objetos usamos para falar com uma pessoa que está longe?", opcoes: ["Uma bicicleta", "Um telemóvel", "Um livro"], correta: "Um telemóvel", dica: "Serve para fazer chamadas ou mandar mensagens." },

    // --- PREVENÇÃO E SEGURANÇA (TRÂNSITO) ---
    { categoria: "Segurança", pergunta: "Se o semáforo dos peões está <span class='destaque-texto'>VERMELHO</span>, o que deves fazer?", opcoes: ["Correr muito rápido", "Parar e esperar", "Atravessar devagarinho"], correta: "Parar e esperar", dica: "A cor vermelha significa sempre 'Perigo' e 'Stop'." },
    { categoria: "Segurança", pergunta: "Onde deves atravessar a estrada sempre que possível?", opcoes: ["No meio dos carros", "Na passadeira (marcas brancas)", "Numa curva"], correta: "Na passadeira (marcas brancas)", dica: "As zebras também têm estas riscas." },
    { categoria: "Segurança", pergunta: "Quando andas de carro, o que tens de colocar <span class='destaque-fundo'>SEMPRE</span> por segurança?", opcoes: ["O cinto de segurança", "Um capacete", "Os óculos de sol"], correta: "O cinto de segurança", dica: "Prende-te ao banco para não te magoares se houver uma travagem brusca." }
];