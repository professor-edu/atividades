/* =========================================================================
   BASE DE DADOS REFEITA - QUANTIFICADORES NUMERAIS (3.º ANO)
   ========================================================================= */

const dbQuantificadores = {
  // NÍVEL 1: 10 rondas de classificação rápida (EGA) de palavras isoladas [1.1.5]
  nivel1: [
    { palavra: "um", tipo: "cardinal", dica: "Indica uma quantidade exata." },
    { palavra: "dois", tipo: "cardinal", dica: "Indica uma quantidade exata." },
    { palavra: "dez", tipo: "cardinal", dica: "Indica uma quantidade exata." },
    { palavra: "cinquenta", tipo: "cardinal", dica: "Indica uma quantidade exata." },
    { palavra: "mil", tipo: "cardinal", dica: "Indica uma quantidade exata." },
    { palavra: "dobro", tipo: "multiplicativo", dica: "Significa multiplicar por 2 (duas vezes mais)." },
    { palavra: "triplo", tipo: "multiplicativo", dica: "Significa multiplicar por 3 (três vezes mais)." },
    { palavra: "quádruplo", tipo: "multiplicativo", dica: "Significa multiplicar por 4 (quatro vezes mais)." },
    { palavra: "metade", tipo: "fracionario", dica: "Significa dividir em 2 partes iguais." },
    { palavra: "um terço", tipo: "fracionario", dica: "Significa dividir em 3 partes iguais." },
    { palavra: "um quarto", tipo: "fracionario", dica: "Significa dividir em 4 partes iguais." },
    { palavra: "um quinto", tipo: "fracionario", dica: "Significa dividir em 5 partes iguais. " }
  ],

  // NÍVEL 2: Pool de 5 textos originais. Sorteia 1 texto e corre 5 rondas sobre ele [1.1.5]
  nivel2: [
    {
      id: "textoA",
      texto: `O esquilo reuniu <span class="palavra-clicavel" data-alvo="três">três</span> amigos para colher bolotas no pinhal. Eles conseguiram colher o <span class="palavra-clicavel" data-alvo="dobro">dobro</span> do ano passado. No caminho de volta, comeram <span class="palavra-clicavel" data-alvo="metade">metade</span> das amoras que encontraram. No final, dividiram as bolotas e cada um comeu <span class="palavra-clicavel" data-alvo="um terço">um terço</span> delas. No dia seguinte, encontraram mais <span class="palavra-clicavel" data-alvo="dez">dez</span> nozes caídas.`,
      perguntas: [
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> que diz quantos amigos o esquilo reuniu!", resposta: "três", dica: "Diz o número exato de amigos convidados. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador multiplicativo</span> correspondente à colheita de bolotas!", resposta: "dobro", dica: "Qual é a palavra que significa duas vezes mais? " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> correspondente às amoras comidas!", resposta: "metade", dica: "Procura a palavra que representa uma parte dividida em 2! " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> que indica a parte de bolotas de cada um!", resposta: "um terço", dica: "Qual é a palavra que significa dividir em 3 partes iguais? " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> correspondente à quantidade de nozes!", resposta: "dez", dica: "Procura o número exato de nozes encontradas no final. " }
      ]
    },
    {
      id: "textoB",
      texto: `O Simão comprou <span class="palavra-clicavel" data-alvo="duas">duas</span> malas grandes para a sua viagem. O seu irmão mais velho levou o <span class="palavra-clicavel" data-alvo="triplo">triplo</span> de camisolas na bagagem. No aeroporto, os rapazes esperaram <span class="palavra-clicavel" data-alvo="quatro">quatro</span> horas pelo avião. Durante o voo, o Simão dormiu <span class="palavra-clicavel" data-alvo="metade">metade</span> do tempo. Na chegada, comprou <span class="palavra-clicavel" data-alvo="um quarto">um quarto</span> de quilo de doces tradicionais.`,
      perguntas: [
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> de malas que o Simão comprou!", resposta: "duas", dica: "Diz o número exato de malas compradas. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador multiplicativo</span> sobre as camisolas do irmão!", resposta: "triplo", dica: "Qual é a palavra que significa três vezes mais? " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> das horas que esperaram no aeroporto!", resposta: "quatro", dica: "Procura o número exato de horas de espera. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> do tempo de sono do Simão!", resposta: "metade", dica: "Procura a palavra que representa a metade de um período. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> correspondente à quantidade de doces!", resposta: "um quarto", dica: "Significa dividir um quilo por 4 partes iguais. " }
      ]
    },
    {
      id: "textoC",
      texto: `A Ritinha plantou <span class="palavra-clicavel" data-alvo="cinco">cinco</span> laranjeiras no pomar do avô. Este ano, ela colheu o <span class="palavra-clicavel" data-alvo="quádruplo">quádruplo</span> de laranjas. Muito generosa, deu <span class="palavra-clicavel" data-alvo="metade">metade</span> da colheita à sua avó. Com o resto das laranjas, fez doce e usou <span class="palavra-clicavel" data-alvo="un quinto">um quinto</span> do pacote de açúcar. No fim, convidou <span class="palavra-clicavel" data-alvo="oito">oito</span> amigos para lanchar.`,
      perguntas: [
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> das laranjeiras plantadas!", resposta: "cinco", dica: "Qual é o número exato de laranjeiras? " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador multiplicativo</span> correspondente à colheita deste ano!", resposta: "quádruplo", dica: "Significa colher quatro vezes mais laranjas. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> da colheita que foi dada à avó!", resposta: "metade", dica: "A avó recebeu uma parte da colheita dividida ao meio. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> correspondente ao açúcar gasto!", resposta: "um quinto", dica: "Significa dividir o pacote de açúcar em 5 partes iguais. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> que indica a quantidade de amigos!", resposta: "oito", dica: "Qual é o número exato de amigos convidados? " }
      ]
    },
    {
      id: "textoD",
      texto: `O João correu <span class="palavra-clicavel" data-alvo="cinquenta">cinquenta</span> metros na pista de atletismo. O seu treinador queria que ele corresse o <span class="palavra-clicavel" data-alvo="triplo">triplo</span>. O João descansou <span class="palavra-clicavel" data-alvo="dez">dez</span> minutos após o esforço físico. Bebeu apenas <span class="palavra-clicavel" data-alvo="metade">metade</span> da sua garrafa de água fresca. No final, fez apenas <span class="palavra-clicavel" data-alvo="um terço">um terço</span> de todos os alongamentos recomendados.`,
      perguntas: [
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> de metros que o João correu!", resposta: "cinquenta", dica: "Diz o número exato de metros percorridos. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador multiplicativo</span> da distância pretendida pelo treinador!", resposta: "triplo", dica: "Qual é a palavra que indica três vezes mais distância? " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> dos minutos de descanso do João!", resposta: "dez", dica: "Procura o número exato de minutos de repouso. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> da água que ele bebeu!", resposta: "metade", dica: "O João dividiu a água da garrafa em 2 partes iguais e bebeu uma. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> correspondente aos alongamentos realizados!", resposta: "um terço", dica: "Significa realizar apenas uma de 3 partes de alongamentos. " }
      ]
    },
    {
      id: "textoE",
      texto: `Para o bolo, a mãe comprou <span class="palavra-clicavel" data-alvo="duas">duas</span> tabletes de chocolate negro. Para o recheio, usou o <span class="palavra-clicavel" data-alvo="dobro">dobro</span> do cacau habitual. O bolo demorou <span class="palavra-clicavel" data-alvo="uma">uma</span> hora a cozer no forno quente. As crianças comeram <span class="palavra-clicavel" data-alvo="metade">metade</span> do bolo num instante. O pai comeu apenas <span class="palavra-clicavel" data-alvo="um quarto">um quarto</span> do bolo ao lanche.`,
      perguntas: [
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> das tabletes compradas pela mãe!", resposta: "duas", dica: "Diz o número exato de tabletes de chocolate. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador multiplicativo</span> do cacau do recheio!", resposta: "dobro", dica: "A mãe usou duas vezes mais cacau do que o normal. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador cardinal</span> de horas que o bolo demorou a cozer!", resposta: "uma", dica: "Diz o número exato de horas de forno. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> do bolo que foi comido pelas crianças!", resposta: "metade", dica: "As crianças dividiram o bolo ao meio e comeram uma parte. " },
        { instrucao: "Clica no <span class='destaque-fundo'>quantificador fracionário</span> do bolo que sobrou para o pai!", resposta: "um quarto", dica: "O pai comeu uma parte do bolo dividido em 4 fatias iguais. " }
      ]
    }
  ],

  // NÍVEL 3: Pool de 5 textos originais. O aluno clica em TODOS os quantificadores do texto [1.1.5]
  nivel3: [
    {
      id: "textoA",
      texto: `Na biblioteca da escola existem <span class="palavra-alvo-l3" data-palavra="mil">mil</span> livros de aventuras fantásticas. O João leu <span class="palavra-alvo-l3" data-palavra="três">três</span> livros esta semana, o que é o <span class="palavra-alvo-l3" data-palavra="dobro">dobro</span> do que leu no mês passado. Ele já terminou <span class="palavra-alvo-l3" data-palavra="metade">metade</span> da sua coleção de ficção e emprestou <span class="palavra-alvo-l3" data-palavra="um terço">um terço</span> dos seus livros aos colegas.`,
      alvos: ["mil", "três", "dobro", "metade", "um terço"],
      dica: "Existem 5 quantificadores neste texto: dois cardinais, um multiplicativo e dois fracionários! Encontra-os! "
    },
    {
      id: "textoB",
      texto: `No torneio de basquetebol, a nossa equipa marcou <span class="palavra-alvo-l3" data-palavra="cinquenta">cinquenta</span> pontos. O adversário fez apenas <span class="palavra-alvo-l3" data-palavra="metade">metade</span> dos nossos pontos. No entanto, o treinador deles diz que no próximo jogo vão conseguir o <span class="palavra-alvo-l3" data-palavra="triplo">triplo</span> do resultado. O Simão treinou <span class="palavra-alvo-l3" data-palavra="duas">duas</span> horas ontem e correu <span class="palavra-alvo-l3" data-palavra="um quarto">um quarto</span> de hora hoje.`,
      alvos: ["cinquenta", "metade", "triplo", "duas", "um quarto"],
      dica: "Este texto esconde 5 quantificadores: procura números exatos (cardinais), frações e multiplicativos! "
    },
    {
      id: "textoC",
      texto: `Para fazer pastéis de bacalhau, a avó usou <span class="palavra-alvo-l3" data-palavra="dez">dez</span> batatas médias. Ela comprou o <span class="palavra-alvo-l3" data-palavra="triplo">triplo</span> do peixe habitual para ter a certeza de que chegava. Durante a preparação, gastou <span class="palavra-alvo-l3" data-palavra="metade">metade</span> de um pacote de farinha. Convidou <span class="palavra-alvo-l3" data-palavra="cinco">cinco</span> vizinhos e ofereceu <span class="palavra-alvo-l3" data-palavra="um terço">um terço</span> dos pastéis aos primos.`,
      alvos: ["dez", "triplo", "metade", "cinco", "um terço"],
      dica: "Descobre os 5 quantificadores: temos dois de contagem exata, um de multiplicação e dois de divisão! "
    },
    {
      id: "textoD",
      texto: `A Leonor pintou <span class="palavra-alvo-l3" data-palavra="quatro">quatro</span> quadros coloridos. O seu irmão mais velho desenhou o <span class="palavra-alvo-l3" data-palavra="dobro">dobro</span> de esboços no seu caderno. A Leonor gastou <span class="palavra-alvo-l3" data-palavra="metade">metade</span> dos seus lápis azuis no céu. Ela usou <span class="palavra-alvo-l3" data-palavra="um quinto">um quinto</span> de todo o guache que comprou. No final, arrumou os seus <span class="palavra-alvo-l3" data-palavra="mil">mil</span> pincéis na caixa.`,
      alvos: ["quatro", "dobro", "metade", "um quinto", "mil"],
      dica: "Estão escondidos 5 quantificadores: dois cardinais, um multiplicativo e dois fracionários! "
    },
    {
      id: "textoE",
      texto: `O meu tio colheu <span class="palavra-alvo-l3" data-palavra="vinte">vinte</span> melões doces na horta. Ele esperava colher o <span class="palavra-alvo-l3" data-palavra="quádruplo">quádruplo</span> este ano. Ele vendeu <span class="palavra-alvo-l3" data-palavra="metade">metade</span> de toda a colheita no mercado local. Ofereceu <span class="palavra-alvo-l3" data-palavra="um quarto">um quarto</span> aos seus vizinhos simpáticos. No fim do dia, ainda lhe sobraram <span class="palavra-alvo-l3" data-palavra="cinco">cinco</span> melões deliciosos.`,
      alvos: ["vinte", "quádruplo", "metade", "um quarto", "cinco"],
      dica: "Consegues ver os 5 quantificadores? Procura por quantidades exatas, multiplicações e divisões da colheita! "
    }
  ],

  // NÍVEL 4: Pool de 5 textos originais com 4 lacunas cada para preenchimento tátil [1.1.5]
  nivel4: [
    {
      template: "O Tomás entrou na loja e comprou {blank0} aviões de madeira. O seu amigo comprou o {blank1} de carrinhos para a coleção.<br>No fim do passeio, o Tomás gastou {blank2} do dinheiro que tinha guardado na carteira.<br>Para a sua irmã mais nova, ainda comprou {blank3} boneca bonita.",
      blanks: [
        { id: "blank0", correto: "dois", opcoes: ["dois", "dobro", "metade"] },
        { id: "blank1", correto: "triplo", opcoes: ["triplo", "cinco", "um quarto"] },
        { id: "blank2", correto: "metade", opcoes: ["metade", "dois", "dobro"] },
        { id: "blank3", correto: "uma", opcoes: ["dobro", "uma", "metade"] }
      ]
    },
    {
      template: "Para o piquenique no parque, a Ana levou {blank0} sanduíches deliciosas.<br>O seu irmão, que come muito, levou o {blank1} de lanches na mochila.<br>Durante a tarde, comeram {blank2} das frutas que estavam na cesta.<br>O cãozinho da família ainda comeu {blank3} bolacha que caiu na relva.",
      blanks: [
        { id: "blank0", correto: "dez", opcoes: ["dez", "dobro", "metade"] },
        { id: "blank1", correto: "triplo", opcoes: ["triplo", "dois", "um terço"] },
        { id: "blank2", correto: "metade", opcoes: ["metade", "três", "dobro"] },
        { id: "blank3", correto: "uma", opcoes: ["dobro", "uma", "metade"] }
      ]
    },
    {
      template: "Na sala de aula, o professor formou grupos de {blank0} alunos para o trabalho.<br>O grupo da Maria pesquisou o {blank1} de páginas do que era necessário.<br>No final da tarde, já tinham escrito {blank2} do relatório final.<br>Apenas {blank3} elemento do grupo ficou responsável por apresentar o trabalho à turma.",
      blanks: [
        { id: "blank0", correto: "quatro", opcoes: ["quatro", "dobro", "metade"] },
        { id: "blank1", correto: "dobro", opcoes: ["dobro", "três", "terço"] },
        { id: "blank2", correto: "metade", opcoes: ["metade", "dois", "triplo"] },
        { id: "blank3", correto: "um", opcoes: ["dobro", "um", "metade"] }
      ]
    },
    {
      template: "No jardim botânico, a Rita viu {blank0} espécies raras de plantas exóticas.<br>O guia explicou que na estufa ao lado existia o {blank1} de variedades florais.<br>O passeio demorou {blank2} hora a terminar sob o sol agradável.<br>No fim, a Rita comprou {blank3} pequeno vaso de flores como recordação.",
      blanks: [
        { id: "blank0", correto: "cinco", opcoes: ["cinco", "dobro", "metade"] },
        { id: "blank1", correto: "triplo", opcoes: ["triplo", "quatro", "um quinto"] },
        { id: "blank2", correto: "metade", opcoes: ["metade", "três", "dobro"] },
        { id: "blank3", correto: "um", opcoes: ["dobro", "um", "metade"] }
      ]
    },
    {
      template: "O Simão correu {blank0} quilómetros na grande prova solidária anual.<br>O seu padrinho doou o {blank1} de euros por cada quilómetro percorrido.<br>Ao longo do percurso desafiante, o Simão bebeu {blank2} dos litros de água fresca.<br>No final da tarde, recebeu {blank3} medalha dourada de participação.",
      blanks: [
        { id: "blank0", correto: "três", opcoes: ["três", "dobro", "metade"] },
        { id: "blank1", correto: "dobro", opcoes: ["dobro", "quatro", "terço"] },
        { id: "blank2", correto: "metade", opcoes: ["metade", "dois", "triplo"] },
        { id: "blank3", correto: "uma", opcoes: ["dobro", "uma", "metade"] }
      ]
    }
  ]
};