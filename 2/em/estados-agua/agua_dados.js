// ==========================================
// DADOS DO CICLO E ESTADOS DA ÁGUA (Com Imagens)
// ==========================================

// JOGO 1: O LABORATÓRIO (Arrastar Sol ou Neve)
const laboratorioDados =[
    { id: 1, imgInicial: "img/cubo_gelo.png", ferramenta: "sol", fenomeno: "Fusão", imgFinal: "img/gelo_derretido.png", pergunta: "Como derretes o cubo de gelo?" },
    { id: 2, imgInicial: "img/copo_agua.png", ferramenta: "frio", fenomeno: "Solidificação", imgFinal: "img/cubo_gelo.png", pergunta: "Como transformas a água em gelo?" },
    { id: 3, imgInicial: "img/poca_agua.png", ferramenta: "sol", fenomeno: "Evaporação", imgFinal: "img/nuvem_vapor.png", pergunta: "Como secas a poça de água?" },
    { id: 4, imgInicial: "img/nuvem_vapor.png", ferramenta: "frio", fenomeno: "Condensação", imgFinal: "img/gota_agua.png", pergunta: "Como transformas o vapor em gotículas?" },
    { id: 5, imgInicial: "img/gelado_cone.png", ferramenta: "sol", fenomeno: "Fusão", imgFinal: "img/gelado_derretido.png", pergunta: "O que faz o gelado derreter?" },
    { id: 6, imgInicial: "img/panela_ferver.png", ferramenta: "sol", fenomeno: "Evaporação", imgFinal: "img/fumo_vapor.png", pergunta: "O que transforma a água da panela em fumo (vapor)?" },
    { id: 7, imgInicial: "img/nuvem_cheia.png", ferramenta: "frio", fenomeno: "Condensação", imgFinal: "img/chuva.png", pergunta: "O que faz a nuvem largar chuva?" },
    { id: 8, imgInicial: "img/copo_sumo.png", ferramenta: "frio", fenomeno: "Solidificação", imgFinal: "img/gelado_gelo.png", pergunta: "Como fazes um gelado de gelo com sumo?" },
    { id: 9, imgInicial: "img/boneco_neve.png", ferramenta: "sol", fenomeno: "Fusão", imgFinal: "img/boneco_neve_derretido.png", pergunta: "O que faz o boneco de neve desaparecer?" },
    { id: 10, imgInicial: "img/lago_natureza.png", ferramenta: "sol", fenomeno: "Evaporação", imgFinal: "img/nuvens_ceu.png", pergunta: "O que faz a água do lago subir para o céu?" }
];

// JOGO 2: O DETETIVE DO DIA A DIA (Múltipla Escolha + Curiosidade)
const detetiveDados =[
    { id: 1, situacao: "O espelho da casa de banho ficou embaciado após o banho quente.", resposta: "Condensação", imagem: "img/espelho_embaciado.png", curiosidade: "o vapor invisível do banho bateu no espelho frio e voltou a ser água líquida!" },
    { id: 2, situacao: "Esqueceste-te do teu gelado ao sol.", resposta: "Fusão", imagem: "img/gelado_derretido.png", curiosidade: "o calor do sol fez com que o gelado passasse do estado sólido para líquido." },
    { id: 3, situacao: "A roupa molhada secou no estendal durante a tarde.", resposta: "Evaporação", imagem: "img/roupa_estendal.png", curiosidade: "o vento e o calor transformaram a água da roupa em vapor invisível que voou pelo ar." },
    { id: 4, situacao: "A mãe pôs uma cuvete com água no congelador.", resposta: "Solidificação", imagem: "img/cuvete_gelo.png", curiosidade: "a temperaturas abaixo de zero (0ºC), a água líquida congela e fica dura!" },
    { id: 5, situacao: "Ao deitar água a ferver para o chá, saiu um fumo branco da chávena.", resposta: "Evaporação", imagem: "img/chavena.png", curiosidade: "quando a água atinge os 100ºC, ferve e vira gás (vapor) muito rapidamente!" },
    { id: 6, situacao: "O gelo do teu sumo desapareceu, mas a bebida ficou fria.", resposta: "Fusão", imagem: "img/sumo_fresco.png", curiosidade: "o gelo derreteu porque o sumo estava mais quente." },
    { id: 7, situacao: "Caíram gotas de água do lado de fora do copo de sumo fresco.", resposta: "Condensação", imagem: "img/copo_suado.png", curiosidade: "o ar quente à volta do copo arrefeceu ao tocar-lhe, formando gotinhas por fora." },
    { id: 8, situacao: "No inverno muito frio, o lago do parque ficou duro e escorregadio.", resposta: "Solidificação", imagem: "img/lago_gelado.png", curiosidade: "o frio intenso foi suficiente para congelar toda a superfície da água do lago." },
    { id: 9, situacao: "A manteiga ficou mole e derreteu na frigideira quente.", resposta: "Fusão", imagem: "img/manteiga_derretida.png", curiosidade: "tal como a água, outros materiais também derretem quando recebem calor!" },
    { id: 10, situacao: "A poça de água do recreio desapareceu sem ninguém limpar.", resposta: "Evaporação", imagem: "img/poca_seca.png", curiosidade: "o calor do Sol aqueceu o chão devagarinho e a água voou para o céu." }
];

// JOGO 3: A VIAGEM DA GOTINHA (História Interativa)
const gotinhaDados =[
    { id: 1, texto: "A Gotinha estava feliz no rio. O Sol brilhou muito forte e ela sentiu-se leve, voando para o céu. Isto foi a...", resposta: "Evaporação", imagem: "img/gotinha_evapora.png" },
    { id: 2, texto: "Lá no alto do céu estava muito frio. A Gotinha, que era vapor, abraçou outras amigas e viraram uma nuvem de água líquida. Isto foi a...", resposta: "Condensação", imagem: "img/gotinha_nuvem.png" },
    { id: 3, texto: "A nuvem ficou muito pesada e a Gotinha caiu na montanha num dia gelado, transformando-se num floco de neve. Isto foi a...", resposta: "Solidificação", imagem: "img/gotinha_neve_1.png" },
    { id: 4, texto: "Na primavera, o Sol voltou a aquecer a montanha. O floco de neve derreteu e a Gotinha voltou a ser água. Isto foi a...", resposta: "Fusão", imagem: "img/gotinha_derrete.png" },
    { id: 5, texto: "A Gotinha caiu numa poça na rua. Estava tanto calor que ela logo virou vapor invisível outra vez. Isto foi a...", resposta: "Evaporação", imagem: "img/gotinha_sol.png" },
    { id: 6, texto: "O vapor viajou até bater no vidro frio de um avião, formando um pingo de água a escorrer. Isto foi a...", resposta: "Condensação", imagem: "img/gotinha_janela.png" },
    { id: 7, texto: "A Gotinha escorreu e caiu num lago congelado onde a temperatura era negativa. Ficou presa no gelo! Isto foi a...", resposta: "Solidificação", imagem: "img/gotinha_gelada.png" },
    { id: 8, texto: "Um urso polar caminhou sobre o gelo e partiu-o. A luz do sol bateu no gelo solto e ele derreteu lentamente. Isto foi a...", resposta: "Fusão", imagem: "img/gotinha_urso.png" },
    { id: 9, texto: "A mamã ferveu a água do lago para fazer sopa. A Gotinha fugiu da panela na forma de fumo quente. Isto foi a...", resposta: "Evaporação", imagem: "img/gotinha_panela.png" },
    { id: 10, texto: "A tampa da panela estava muito mais fria. Quando a Gotinha tocou na tampa, escorreu em forma líquida. Isto foi a...", resposta: "Condensação", imagem: "img/gotinha_tampa.png" }
];

// JOGO 4: A MÁQUINA DAS PALAVRAS
const maquinaDados =[
    { id: 1, de: "Sólido", para: "Líquido", resposta: "Fusão" },
    { id: 2, de: "Líquido", para: "Sólido", resposta: "Solidificação" },
    { id: 3, de: "Líquido", para: "Gasoso", resposta: "Evaporação" },
    { id: 4, de: "Gasoso", para: "Líquido", resposta: "Condensação" },
    { id: 5, de: "Gelo", para: "Água", resposta: "Fusão" },
    { id: 6, de: "Água", para: "Gelo", resposta: "Solidificação" },
    { id: 7, de: "Água", para: "Vapor", resposta: "Evaporação" },
    { id: 8, de: "Vapor", para: "Água", resposta: "Condensação" },
    { id: 9, de: "Neve", para: "Água", resposta: "Fusão" },
    { id: 10, de: "Suor", para: "Vapor", resposta: "Evaporação" }
];

const fenomenosAgua =["Fusão", "Solidificação", "Condensação", "Evaporação"];