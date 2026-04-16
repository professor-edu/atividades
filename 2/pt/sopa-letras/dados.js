// =========================================
// BASE DE DADOS - SOPA DE LETRAS (2º ANO)
// =========================================

const DADOS_ANIMAIS =[
    { imagem: "abelha.png", palavra: "ABELHA" },
    { imagem: "aranha.png", palavra: "ARANHA" },
    { imagem: "burro.png", palavra: "BURRO" },
    { imagem: "cavalo.png", palavra: "CAVALO" },
    { imagem: "dinossauro.png", palavra: "DINOSSAURO" },
    { imagem: "elefante.png", palavra: "ELEFANTE" },
    { imagem: "gato.png", palavra: "GATO" },
    { imagem: "girafa.png", palavra: "GIRAFA" },
    { imagem: "leao.png", palavra: "LEÃO" },
    { imagem: "ovelha.png", palavra: "OVELHA" },
    { imagem: "passaro.png", palavra: "PÁSSARO" },
    { imagem: "pato.png", palavra: "PATO" },
    { imagem: "peixe.png", palavra: "PEIXE" },
    { imagem: "rato.png", palavra: "RATO" },
    { imagem: "sapo.png", palavra: "SAPO" },
    { imagem: "tigre.png", palavra: "TIGRE" },
    { imagem: "tubarao.png", palavra: "TUBARÃO" },
    { imagem: "urso.png", palavra: "URSO" },
    { imagem: "vaca.png", palavra: "VACA" },
    { imagem: "zebra.png", palavra: "ZEBRA" }
];

const DADOS_COMIDA =[
    { imagem: "abacaxi.png", palavra: "ABACAXI" },
    { imagem: "bolo.png", palavra: "BOLO" },
    { imagem: "cafe.png", palavra: "CAFÉ" },
    { imagem: "cenoura.png", palavra: "CENOURA" },
    { imagem: "cereja.png", palavra: "CEREJA" },
    { imagem: "chocolate.png", palavra: "CHOCOLATE" },
    { imagem: "doce.png", palavra: "DOCE" },
    { imagem: "gelado.png", palavra: "GELADO" },
    { imagem: "limao.png", palavra: "LIMÃO" },
    { imagem: "maca.png", palavra: "MAÇÃ" },
    { imagem: "melancia.png", palavra: "MELANCIA" },
    { imagem: "morango.png", palavra: "MORANGO" },
    { imagem: "pao.png", palavra: "PÃO" },
    { imagem: "pera.png", palavra: "PERA" },
    { imagem: "pizza.png", palavra: "PIZZA" },
    { imagem: "queijo.png", palavra: "QUEIJO" },
    { imagem: "sopa.png", palavra: "SOPA" },
    { imagem: "uvas.png", palavra: "UVAS" }
];

const DADOS_ESCOLA =[
    { imagem: "borracha.png", palavra: "BORRACHA" },
    { imagem: "caderno.png", palavra: "CADERNO" },
    { imagem: "caneta.png", palavra: "CANETA" },
    { imagem: "clipe.png", palavra: "CLIPE" },
    { imagem: "estojo.png", palavra: "ESTOJO" },
    { imagem: "lapis.png", palavra: "LÁPIS" },
    { imagem: "livro.png", palavra: "LIVRO" },
    { imagem: "mochila.png", palavra: "MOCHILA" },
    { imagem: "papel.png", palavra: "PAPEL" },
    { imagem: "pincel.png", palavra: "PINCEL" },
    { imagem: "quadro.png", palavra: "QUADRO" },
    { imagem: "regua.png", palavra: "RÉGUA" },
    { imagem: "tesoura.png", palavra: "TESOURA" },
    { imagem: "tinta.png", palavra: "TINTA" },
    { imagem: "cola.png", palavra: "COLA" }
];

const DADOS_CASA =[
    { imagem: "armario.png", palavra: "ARMÁRIO" },
    { imagem: "cadeira.png", palavra: "CADEIRA" },
    { imagem: "cama.png", palavra: "CAMA" },
    { imagem: "chave.png", palavra: "CHAVE" },
    { imagem: "copo.png", palavra: "COPO" },
    { imagem: "espelho.png", palavra: "ESPELHO" },
    { imagem: "faca.png", palavra: "FACA" },
    { imagem: "garfo.png", palavra: "GARFO" },
    { imagem: "janela.png", palavra: "JANELA" },
    { imagem: "mesa.png", palavra: "MESA" },
    { imagem: "porta.png", palavra: "PORTA" },
    { imagem: "prato.png", palavra: "PRATO" },
    { imagem: "radio.png", palavra: "RÁDIO" },
    { imagem: "sofa.png", palavra: "SOFÁ" },
    { imagem: "tapete.png", palavra: "TAPETE" },
    { imagem: "televisao.png", palavra: "TELEVISÃO" }
];

/* 
==================================================================
LISTA DE PALAVRAS EXTRA (PARA ADICIONAR MAIS TARDE, SE QUISERES):
==================================================================
Animais Extra: caracol, castor, cisne, coelho, coruja, crocodilo, flamingo, formiga, galinha, hipopotamo, javali, macaco, mosca, panda, papagaio, polvo, pomba, porco, raposa, rinoceronte, tartaruga, tucano.
Comida Extra: acucar, alface, amora, ananas, arroz, atum, azeite, bolacha, bombom, caju, camarao, carne, cogumelo, ervilha, feijao, frango, hamburguer, leite, manga, mel, ovo, peru, pudim, rebucado, salada, salsichas.
Escola/Casa Extra: aguarela, apara-lapis, bloco, candeeiro, chaminé, chave, colher, concha, cortina, gaveta, lampada, lenco, mala, martelo, panela, parafuso, prego, relogio, sabonete, talheres, telhado, toalha, varanda, vassoura.
*/