// =========================================
// BASE DE DADOS - SOPA DE LETRAS (2º ANO)
// =========================================

const DADOS_ANIMAIS =[
    { imagem: "abelha.png", palavra: "ABELHA" },
    { imagem: "aranha.png", palavra: "ARANHA" },
    { imagem: "burro.png", palavra: "BURRO" },
    { imagem: "cavalo.png", palavra: "CAVALO" },
	{ imagem: "crocodilo.png", palavra: "CROCODILO" },
    { imagem: "dinossauro.png", palavra: "DINOSSAURO" },
    { imagem: "elefante.png", palavra: "ELEFANTE" },
	{ imagem: "formiga.png", palavra: "FORMIGA" },
	{ imagem: "flamingo.png", palavra: "FLAMINGO" },
    { imagem: "gato.png", palavra: "GATO" },
	{ imagem: "galinha.png", palavra: "GALINHA" },
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
	{ imagem: "caracol.png", palavra: "CARACOL" },
	{ imagem: "castor.png", palavra: "CASTOR" },
	{ imagem: "cisne.png", palavra: "CISNE" },
	{ imagem: "coelho.png", palavra: "COELHO" },
	{ imagem: "coruja.png", palavra: "CORUJA" },
    { imagem: "zebra.png", palavra: "ZEBRA" }
];

const DADOS_COMIDA =[
    { imagem: "abacaxi.png", palavra: "ABACAXI" },
	{ imagem: "alface.png", palavra: "ALFACE" },
	{ imagem: "arroz.png", palavra: "ARROZ" },
	{ imagem: "acucar.png", palavra: "AÇÚCAR" },
	{ imagem: "azeite.png", palavra: "AZEITE" },
    { imagem: "bolo.png", palavra: "BOLO" },
	{ imagem: "bolacha.png", palavra: "BOLACHA" },
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
    { imagem: "pizza.png", palavra: "PIzZA" },
    { imagem: "queijo.png", palavra: "QUEIJO" },
    { imagem: "sopa.png", palavra: "SOPA" },
    { imagem: "uvas.png", palavra: "UVAS" }
];

const DADOS_ESCOLA =[
    { imagem: "borracha.png", palavra: "BORRACHA" },
	{ imagem: "aguarelas.png", palavra: "AGUARELAS" },
	{ imagem: "aluno.png", palavra: "ALUNO" },
    { imagem: "caderno.png", palavra: "CADERNO" },
    { imagem: "caneta.png", palavra: "CANETA" },
	{ imagem: "computador.png", palavra: "COMPUTADOR" },
	{ imagem: "atum_lata.png", palavra: "ATUM" },
    { imagem: "clipe.png", palavra: "CLIPE" },
    { imagem: "estojo.png", palavra: "ESTOJO" },
    { imagem: "lapis.png", palavra: "LÁPIS" },
    { imagem: "livro.png", palavra: "LIVRO" },
    { imagem: "mochila.png", palavra: "MOCHILA" },
    { imagem: "papel.png", palavra: "PAPEL" },
    { imagem: "pincel.png", palavra: "PINCEL" },
	{ imagem: "professor.png", palavra: "PROFESSOR" },
	{ imagem: "sala.png", palavra: "SALA" },
    { imagem: "quadro.png", palavra: "QUADRO" },
    { imagem: "regua.png", palavra: "RÉGUA" },
    { imagem: "tesoura.png", palavra: "TESOURA" },
    { imagem: "tintas.png", palavra: "TINTA" },
    { imagem: "cola.png", palavra: "COLA" }
];

const DADOS_CASA =[
    { imagem: "armario.png", palavra: "ARMÁRIO" },
	{ imagem: "cadeira.png", palavra: "CADEIRA" },
    { imagem: "cama.png", palavra: "CAMA" },
	{ imagem: "candeeiro.png", palavra: "CANDEEIRO" },
    { imagem: "chave.png", palavra: "CHAVE" },
	{ imagem: "colher.png", palavra: "COLHER" },
	{ imagem: "cozinha_.png", palavra: "COZINHA" },
	{ imagem: "chamine.png", palavra: "CHAMINÉ" },
	{ imagem: "gaveta.png", palavra: "GAVETA" },
    { imagem: "copo.png", palavra: "COPO" },
	{ imagem: "lampada.png", palavra: "LÂMPADA" },
    { imagem: "espelho.png", palavra: "ESPELHO" },
    { imagem: "faca.png", palavra: "FACA" },
	{ imagem: "fogao.png", palavra: "FOGÃO" },
    { imagem: "garfo.png", palavra: "GARFO" },
    { imagem: "janela.png", palavra: "JANELA" },
	{ imagem: "vassoura.png", palavra: "VASSOURA" },
	{ imagem: "mala.png", palavra: "MALA" },
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
Animais Extra: hipopotamo, javali, macaco, mosca, panda, papagaio, polvo, pomba, porco, raposa, rinoceronte, tartaruga, tucano.
Comida Extra: bombom, caju, camarao, carne, cogumelo, ervilha, feijao, frango, hamburguer, leite, manga, mel, ovo, peru, pudim, rebucado, salada, salsichas.
Escola/Casa Extra: apara-lapis, bloco, concha, cortina, lenco, mala, martelo, panela, parafuso, prego, relogio, sabonete, talheres, telhado, toalha, varanda.
*/