/* ==========================================================================
   BASE DE DADOS: GRAUS DOS NOMES E ADJETIVOS (3º ANO - 45 QUESTÕES)
   ========================================================================== */

const questoesGraus = [
    // ==========================================================================
    // MINIJOGO 1: O Estica e Encolhe (Questões 1 a 15)
    // Objetivo: Classificar diretamente a palavra em destaque nos 3 graus.
    // ==========================================================================
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>casinha</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Diminutivo",
        dica: "Refere-se a uma casa de tamanho muito pequenino."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>gatão</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "Termina em '-ão' e representa um gato muito grande."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>livro</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Normal",
        dica: "Representa o objeto no seu tamanho comum, sem aumentar nem diminuir."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>rapazito</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Diminutivo",
        dica: "A terminação '-ito' serve para reduzir o tamanho do nome."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>paredão</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "Representa uma parede de grande dimensão."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>janela</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Normal",
        dica: "É o nome da abertura na parede no seu estado natural."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>cãozinho</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Diminutivo",
        dica: "A terminação '-inho' indica que o cão é muito pequeno ou fofo."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>garrafão</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "É um recipiente para líquidos com grande capacidade."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>cadeira</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Normal",
        dica: "É o nome do móvel onde nos sentamos no seu tamanho normal."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>homenzarrão</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "Esta terminação invulgar indica um homem muito grande e forte."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>folhinha</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Diminutivo",
        dica: "Refere-se a uma folha de uma planta muito pequena."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>mesa</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Normal",
        dica: "Representa a mobília na sua forma e tamanho comum."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>barcaça</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Aumentativo",
        dica: "A terminação '-aço/-aça' indica um barco muito grande ou pesado."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>chuvisco</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Diminutivo",
        dica: "Refere-se a uma chuva muito fraca, miudinha e suave."
    },
    {
        minijogo: 1,
        pergunta: "A palavra <span class='destaque-fundo'>saco</span> está em que grau?",
        opcoes: ["Diminutivo", "Normal", "Aumentativo"],
        correta: "Normal",
        dica: "É o recipiente de transporte na sua forma padrão."
    },

    // ==========================================================================
    // MINIJOGO 2: Alimentar os Monstros (Questões 16 a 30)
    // Objetivo: Lançar a palavra para o monstro faminto do grau correto.
    // ==========================================================================
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>garrafinha</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Nini (Diminutivo)",
        dica: "A palavra está reduzida no seu tamanho. Quem come os pequenos?"
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>caneta</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Tuto (Normal)",
        dica: "Esta palavra está no seu estado natural. É para o monstro do meio!"
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>casarão</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Gigante (Aumentativo)",
        dica: "É uma casa muito grande! Alimenta o monstro maior."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>bichinho</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Nini (Diminutivo)",
        dica: "A palavra refere-se a um animal muito pequenino."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>pé</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Tuto (Normal)",
        dica: "Não é grande nem pequeno. É o nome do membro no estado normal."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>bocarra</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Gigante (Aumentativo)",
        dica: "Esta terminação indica uma boca muito grande e aberta!"
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>chavezinha</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Nini (Diminutivo)",
        dica: "Indica um objeto pequeno usado para trancar fechaduras."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>pão</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Tuto (Normal)",
        dica: "O alimento matinal na sua designação e tamanho normais."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>portinha</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Nini (Diminutivo)",
        dica: "Indica uma abertura pequena em escala miniatura."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>janelão</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Gigante (Aumentativo)",
        dica: "Refere-se a uma janela de grandes dimensões."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>flor</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Tuto (Normal)",
        dica: "A designação comum da parte colorida da planta."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>florzinha</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Nini (Diminutivo)",
        dica: "Uma flor muito delicada e pequena."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>animal</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Tuto (Normal)",
        dica: "A palavra está na sua forma e significado de base."
    },
    {
        minijogo: 2,
        pergunta: "Clica no monstro correto:<br><br>«<span class='destaque-fundo'>animalaço</span>»",
        opcoes: ["Nini (Diminutivo)", "Tuto (Normal)", "Gigante (Aumentativo)"],
        correta: "Gigante (Aumentativo)",
        dica: "Indica um ser vivo de dimensões gigantescas."
    },

    // ==========================================================================
    // MINIJOGO 3: O Laboratório de Poções Mágicas (Questões 31 a 45)
    // Objetivo: Aplicar a poção de encolher ou aumentar e descobrir a palavra resultante.
    // ==========================================================================
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> no <span class='destaque-fundo'>cão</span>.<br><br> Como ficou a palavra?",
        opcoes: ["cãozinho", "cão", "cãozarrão"],
        correta: "cãozarrão",
        dica: "Ficou muito grande! Termina numa variação especial de '-ão'."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> na <span class='destaque-fundo'>casa</span>.<br><br> Como ficou a palavra?",
        opcoes: ["casarão", "casa", "casinha"],
        correta: "casinha",
        dica: "Ficou pequenina. Termina com a sílaba '-inha'."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> no <span class='destaque-fundo'>rapaz</span>.<br><br> Como ficou a palavra?",
        opcoes: ["rapazito", "rapaz", "rapagão"],
        correta: "rapagão",
        dica: "Ficou muito grande! É um aumentativo especial que termina em '-gão'."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> no <span class='destaque-fundo'>gato</span>.<br><br> Como ficou a palavra?",
        opcoes: ["gatão", "gato", "gatinho"],
        correta: "gatinho",
        dica: "Ficou reduzido ao tamanho de um filhote."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> no <span class='destaque-fundo'>homem</span>.<br><br> Como ficou a palavra?",
        opcoes: ["homenzinho", "homem", "homenzarrão"],
        correta: "homenzarrão",
        dica: "Ficou gigante! É uma transformação de aumentativo muito invulgar."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> no <span class='destaque-fundo'>livro</span>.<br><br> Como ficou a palavra?",
        opcoes: ["livrão", "livro", "livrinho"],
        correta: "livrinho",
        dica: "Ficou com o tamanho de um livro de bolso muito pequeno."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> na <span class='destaque-fundo'>garrafa</span>.<br><br> Como ficou a palavra?",
        opcoes: ["garrafinha", "garrafa", "garrafão"],
        correta: "garrafão",
        dica: "Ficou muito grande! Tem grande capacidade para líquidos."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> na <span class='destaque-fundo'>mão</span>.<br><br> Como ficou a palavra?",
        opcoes: ["mãozão", "mão", "mãozinha"],
        correta: "mãozinha",
        dica: "Ficou pequenina, ideal para o tamanho de um bebé."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> na <span class='destaque-fundo'>voz</span>.<br><br> Como ficou a palavra?",
        opcoes: ["vozinha", "voz", "vozeirão"],
        correta: "vozeirão",
        dica: "Ficou um som muito forte, grave e ensurdecedor!"
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> no <span class='destaque-fundo'>rio</span>.<br><br> Como ficou a palavra?",
        opcoes: ["ribeirão", "rio", "riacho"],
        correta: "riacho",
        dica: "Refere-se a um curso de água pequeno e estreito."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> na <span class='destaque-fundo'>porta</span>.<br><br> Como ficou a palavra?",
        opcoes: ["portinha", "porta", "portão"],
        correta: "portão",
        dica: "Ficou gigantesca! Geralmente serve de entrada em muros ou quintas."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> na <span class='destaque-fundo'>chuva</span>.<br><br> Como ficou a palavra?",
        opcoes: ["chuvada", "chuva", "chuvisco"],
        correta: "chuvisco",
        dica: "Tornou-se uma precipitação muito miudinha e fraca."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> no <span class='destaque-fundo'>fogo</span>.<br><br> Como ficou a palavra?",
        opcoes: ["foguinho", "fogo", "fogaréu"],
        correta: "fogaréu",
        dica: "Ficou uma grande fogueira ou chamas muito fortes."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>ENCOLHER</span> na <span class='destaque-fundo'>boca</span>.<br><br> Como ficou a palavra?",
        opcoes: ["bocarra", "boca", "boquinha"],
        correta: "boquinha",
        dica: "Uma boca em formato de escala muito reduzida."
    },
    {
        minijogo: 3,
        pergunta: "O feiticeiro usou uma poção de <span class='destaque-texto'>AUMENTAR</span> no <span class='destaque-fundo'>amigo</span>.<br><br> Como ficou a palavra?",
        opcoes: ["amiguinho", "amigo", "amigão"],
        correta: "amigão",
        dica: "Indica um companheiro que gostamos imenso e consideramos um grande amigo."
    }
];