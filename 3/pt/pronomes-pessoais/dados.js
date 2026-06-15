/* =========================================================================
   DADOS DO JOGO - PRONOMES PESSOAIS (3.º ANO)
   ========================================================================= */

const DADOS_PRONOMES = {
    // NÍVEL 1: Singular (Eu, Tu, Ele, Ela)
    nivel1: [
        {
            fraseAntes: "Este é o senhor Antero.",
            fraseDepois: "é agricultor.",
            correto: "Ele",
            opcoes: ["Ele", "Ela", "Eu"],
            imagem: "img/antero.png", 
            dica: {
                texto: "O senhor Antero é um homem (masculino e singular). Que pronome usamos para falar dele?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A nossa mãe desenha casas.",
            fraseDepois: "é arquiteta.",
            correto: "Ela",
            opcoes: ["Ela", "Ele", "Tu"],
            imagem: "img/mae.png",
            dica: {
                texto: "A mãe é uma mulher (feminino e singular). Que pronome substitui 'A nossa mãe'?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O meu nome é Beatriz.",
            fraseDepois: "sou amiga da Joana.",
            correto: "Eu",
            opcoes: ["Eu", "Ela", "Tu"],
            imagem: "img/bia.png",
            dica: {
                texto: "A Bia fala na primeira pessoa ('sou amiga'). Que pronome usamos quando falamos de nós próprios?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Olha, Sandra, um livro!",
            fraseDepois: "queres ler comigo?",
            correto: "Tu",
            opcoes: ["Tu", "Ele", "Eu"],
            imagem: "img/sandra.png",
            dica: {
                texto: "Estás a dirigir-te diretamente à Sandra ('queres ler'). Que pronome usas para falar com ela?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O cão do Tiago correu muito.",
            fraseDepois: "está cansado.",
            correto: "Ele",
            opcoes: ["Ele", "Ela", "Eu"],
            imagem: "img/cao.png",
            dica: {
                texto: "'O cão' está no masculino singular. Qual é o pronome indicado?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A Rita lê um livro fantástico.",
            fraseDepois: "adora ler.",
            correto: "Ela",
            opcoes: ["Ela", "Ele", "Tu"],
            imagem: "img/rita_ler.png",
            dica: {
                texto: "'A Rita' é um nome feminino singular. Que pronome completa a frase?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Moro perto da escola.",
            fraseDepois: "vou sempre a pé.",
            correto: "Eu",
            opcoes: ["Eu", "Ele", "Tu"],
            imagem: "img/escola.png",
            dica: {
                texto: "O verbo 'vou' indica que sou eu que realizo a ação. Qual é o pronome correspondente?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tens um belo sorriso.",
            fraseDepois: "és muito simpático.",
            correto: "Tu",
            opcoes: ["Tu", "Ele", "Eu"],
            imagem: "img/sorriso.png",
            dica: {
                texto: "A forma verbal 'és' indica que estamos a falar diretamente com outra pessoa. Qual é o pronome?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O Sol brilha muito hoje.",
            fraseDepois: "está muito quente.",
            correto: "Ele",
            opcoes: ["Ele", "Ela", "Eu"],
            imagem: "img/sol.png",
            dica: {
                texto: "'O Sol' é um nome masculino singular. Substitui-o pelo pronome correto.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A professora explica a matéria.",
            fraseDepois: "ajuda todos os alunos.",
            correto: "Ela",
            opcoes: ["Ela", "Ele", "Tu"],
            imagem: "img/professora.png",
            dica: {
                texto: "'A professora' é feminino e singular. Escolhe o pronome correspondente.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O gato saltou para o muro.",
            fraseDepois: "gosta de apanhar sol.",
            correto: "Ele",
            opcoes: ["Ele", "Ela", "Tu"],
            imagem: "img/gato.png",
            dica: {
                texto: "'O gato' é um substantivo masculino singular. Substitui-o pelo pronome correto.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A Joana come uma maçã.",
            fraseDepois: "prefere fruta fresca.",
            correto: "Ela",
            opcoes: ["Ela", "Ele", "Eu"],
            imagem: "img/joana_maca.png",
            dica: {
                texto: "'A Joana' está no feminino singular. Que pronome deves escolher?",
                tipo: "50-50"
            }
        }
    ],

    // NÍVEL 2: Plural (Eles, Elas)
    nivel2: [
        {
            fraseAntes: "A Sandra e a Rita são primas.",
            fraseDepois: "brincam muito juntas.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/primas.png",
            dica: {
                texto: "Temos duas raparigas (feminino plural). Qual é o pronome adequado?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O João e o Pedro jogam futebol.",
            fraseDepois: "são grandes amigos.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Vós"],
            imagem: "img/futebol.png",
            dica: {
                texto: "Temos dois rapazes (masculino plural). Que pronome deves usar?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "As minhas tias fazem bolos.",
            fraseDepois: "adoram cozinhar.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/bolos.png",
            dica: {
                texto: "'As minhas tias' representa um grupo feminino. Qual é o pronome no plural?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Os pássaros voam alto.",
            fraseDepois: "procuram ramos para os ninhos.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Vós"],
            imagem: "img/passaros.png",
            dica: {
                texto: "'Os pássaros' é masculino plural. Que pronome usamos para os substituir?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "As flores do jardim abriram.",
            fraseDepois: "são muito perfumadas.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/flores.png",
            dica: {
                texto: "'As flores' são elementos femininos no plural. Qual é o pronome correspondente?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Os livros estão na estante.",
            fraseDepois: "pertencem à biblioteca.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Vós"],
            imagem: "img/livros.png",
            dica: {
                texto: "'Os livros' é masculino plural. Escolhe o pronome correspondente.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "As crianças correm no recreio.",
            fraseDepois: "estão muito contentes.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/recreio.png",
            dica: {
                texto: "'As crianças' é um nome feminino plural. Que pronome completa a frase?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Os carros passam na rua.",
            fraseDepois: "fazem muito barulho.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Vós"],
            imagem: "img/carros.png",
            dica: {
                texto: "'Os carros' está no masculino plural. Qual é o pronome correto?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "As borboletas voam no campo.",
            fraseDepois: "são muito coloridas.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/borboletas.png",
            dica: {
                texto: "'As borboletas' é feminino e plural. Escolhe a opção correta.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Os professores preparam a festa.",
            fraseDepois: "trabalham em equipa.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Vós"],
            imagem: "img/professores.png",
            dica: {
                texto: "'Os professores' está no masculino plural. Qual é o pronome correspondente?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "As estrelas brilham à noite.",
            fraseDepois: "iluminam o céu escuro.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/estrelas.png",
            dica: {
                texto: "'As estrelas' é feminino plural. Que pronome deves escolher?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Os cães ladram no quintal.",
            fraseDepois: "protegem a nossa casa.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Vós"],
            imagem: "img/caes.png",
            dica: {
                texto: "'Os cães' é masculino plural. Substitui-o pelo pronome correto.",
                tipo: "50-50"
            }
        }
    ],

    // NÍVEL 3: Inclusão Complexa (Nós, Vós)
    nivel3: [
        {
            fraseAntes: "Eu e os meus vizinhos somos do Alentejo, por isso",
            fraseDepois: "somos alentejanos.",
            correto: "nós",
            opcoes: ["nós", "eles", "vós"],
            imagem: "img/alentejo.png",
            dica: {
                texto: "Se falas de ti próprio ('Eu') e de outras pessoas, tu estás incluído no grupo. Que pronome deves usar?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e a Sofia fomos ao cinema.",
            fraseDepois: "comemos muitas pipocas.",
            correto: "Nós",
            opcoes: ["Nós", "Elas", "Vós"],
            imagem: "img/cinema.png",
            dica: {
                texto: "Quando falas de ti próprio ('Eu') juntamente com outra pessoa, qual é o pronome que usas?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e o teu irmão ides ao parque?",
            fraseDepois: "correis muito rápido.",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Eles"],
            imagem: "img/parque_correr.png",
            dica: {
                texto: "A frase dirige-se a 'Tu' e a outra pessoa, e o verbo termina em '-eis' ('correis'). Que pronome usas?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e a minha família vivemos aqui.",
            fraseDepois: "gostamos muito desta casa.",
            correto: "Nós",
            opcoes: ["Nós", "Eles", "Vós"],
            imagem: "img/casa.png",
            dica: {
                texto: "Se tu estás incluído na frase ('Eu e a minha família'), qual é o pronome do plural adequado?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e a tua irmã tendes fome.",
            fraseDepois: "quereis lanchar?",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Elas"],
            imagem: "img/fome.png",
            dica: {
                texto: "Para o sujeito 'Tu e a tua irmã' e formas verbais como 'tendes' ou 'quereis', qual é o pronome correspondente?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e o meu cão corremos juntos.",
            fraseDepois: "somos grandes amigos.",
            correto: "Nós",
            opcoes: ["Nós", "Eles", "Vós"],
            imagem: "img/cao_amigo.png",
            dica: {
                texto: "Toda a frase em que o sujeito inclui 'Eu' exige um pronome de primeira pessoa do plural. Qual é?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e o João cantais muito bem.",
            fraseDepois: "tendes vozes fantásticas.",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Eles"],
            imagem: "img/cantar.png",
            dica: {
                texto: "Estás a falar diretamente com duas pessoas ('Tu e o João'). Que pronome formal usas para as duas?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e os meus colegas fizemos um trabalho.",
            fraseDepois: "tivemos uma excelente nota.",
            correto: "Nós",
            opcoes: ["Nós", "Eles", "Vós"],
            imagem: "img/trabalho_grupo.png",
            dica: {
                texto: "'Eu e os meus colegas' significa que tu fazes parte da ação. Escolhe o pronome correto.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e a Sandra rides muito.",
            fraseDepois: "estais sempre felizes.",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Elas"],
            imagem: "img/rir.png",
            dica: {
                texto: "Para 'Tu e outra pessoa' com o verbo 'estais', que pronome deves escolher?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e o meu pai plantámos uma árvore.",
            fraseDepois: "vamos regá-la todos os dias.",
            correto: "Nós",
            opcoes: ["Nós", "Eles", "Vós"],
            imagem: "img/arvore.png",
            dica: {
                texto: "Se 'Eu' plantou e 'vamos' regar, quem realiza a ação no plural?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e os teus primos brincais na praia.",
            fraseDepois: "fazeis grandes castelos de areia.",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Eles"],
            imagem: "img/praia.png",
            dica: {
                texto: "Estás a falar com a segunda pessoa ('Tu e os teus primos'). Os verbos são 'brincais' e 'fazeis'. Qual é o pronome?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e a professora lemos um poema.",
            fraseDepois: "gostámos muito da leitura.",
            correto: "Nós",
            opcoes: ["Nós", "Elas", "Vós"],
            imagem: "img/poema.png",
            dica: {
                texto: "'Eu e a professora' indica que estás incluído na ação. Que pronome completa o espaço?",
                tipo: "50-50"
            }
        }
    ],

    // NÍVEL 4: O Grande Teste (Mistura Geral e Casos Especiais de Leitura)
    nivel4: [
        {
            fraseAntes: "Os avós do João moram longe, mas",
            fraseDepois: "gosta de os ir visitar.",
            correto: "ele", // Refere-se ao João (Singular)! Grande teste de leitura!
            opcoes: ["ele", "eles", "ela"],
            imagem: "img/visita_avos.png",
            dica: {
                texto: "Atenção à leitura! Quem é que gosta de ir visitar os avós? É apenas o João (singular)!",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A Rita e o Carlos querem gelados, mas",
            fraseDepois: "gostam mais dos de morango.",
            correto: "eles",
            opcoes: ["eles", "elas", "nós"],
            imagem: "img/gelados.png",
            dica: {
                texto: "Temos um rapaz e uma rapariga (plural misto). No plural de género misto, que pronome usamos?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Eu e o Tiago fomos nadar.",
            fraseDepois: "adoramos a piscina.",
            correto: "Nós",
            opcoes: ["Nós", "Eles", "Vós"],
            imagem: "img/piscina.png",
            dica: {
                texto: "'Eu e o Tiago' implica a tua participação. Qual é o pronome correto?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "As meninas estão divertidas.",
            fraseDepois: "gostam muito de fazer exercício.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/exercicio.png",
            dica: {
                texto: "'As meninas' é um sujeito totalmente feminino e no plural. Que pronome deves escolher?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e a Maria escreveis um texto.",
            fraseDepois: "usais um belo lápis azul.",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Eles"],
            imagem: "img/escrever.png",
            dica: {
                texto: "Com o sujeito 'Tu e a Maria' e os verbos 'escreveis' / 'usais', qual é o pronome correspondente?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O gato e a gata sobem ao telhado.",
            fraseDepois: "são animais muito ágeis.",
            correto: "Eles",
            opcoes: ["Eles", "Elas", "Nós"],
            imagem: "img/telhado.png",
            dica: {
                texto: "Temos um elemento masculino e outro feminino no plural (gato e gata). Qual o pronome adequado?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A Helena e a Mariana são amigas.",
            fraseDepois: "<span class='destaque-texto'>conversa</span> muito no recreio.",
            correto: "Ela", // Caso especial de contexto: foca numa só que está a realizar o verbo singular
            opcoes: ["Ela", "Elas", "Eles"],
            imagem: "img/recreio_amigas.png",
            dica: {
                texto: "Cuidado com o verbo 'conversa' (singular)! A frase diz 'A Helena e a Mariana são amigas. ___ conversa...'. Apenas uma realiza a ação neste momento.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A nossa mãe desenha casas.",
            fraseDepois: "é uma excelente arquiteta.",
            correto: "Ela",
            opcoes: ["Ela", "Ele", "Tu"],
            imagem: "img/mae.png",
            dica: {
                texto: "'A nossa mãe' é feminino e singular. Substitui-o pelo pronome correspondente.",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O meu nome é Bia.",
            fraseDepois: "sou uma menina muito curiosa.",
            correto: "Eu",
            opcoes: ["Eu", "Ela", "Tu"],
            imagem: "img/bia.png",
            dica: {
                texto: "A Bia fala na primeira pessoa singular ('sou'). Qual é o pronome de quem fala?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "Tu e a Leonor jogais xadrez.",
            fraseDepois: "sois jogadoras muito concentradas.",
            correto: "Vós",
            opcoes: ["Vós", "Nós", "Elas"],
            imagem: "img/xadrez.png",
            dica: {
                texto: "'Tu e a Leonor' (segunda pessoa do plural). O verbo é 'jogais' e 'sois'. Qual o pronome correspondente?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "O vento sopra forte hoje.",
            fraseDepois: "levanta as folhas do chão.",
            correto: "Ele",
            opcoes: ["Ele", "Ela", "Tu"],
            imagem: "img/vento.png",
            dica: {
                texto: "'O vento' é masculino singular. Qual o pronome que o substitui?",
                tipo: "50-50"
            }
        },
        {
            fraseAntes: "A Mariana e a prima foram ao circo.",
            fraseDepois: "adoraram a atuação dos palhaços.",
            correto: "Elas",
            opcoes: ["Elas", "Eles", "Nós"],
            imagem: "img/circo.png",
            dica: {
                texto: "'A Mariana e a prima' são do género feminino e no plural. Que pronome deves escolher?",
                tipo: "50-50"
            }
        }
    ]
};