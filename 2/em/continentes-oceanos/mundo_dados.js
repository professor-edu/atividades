// Coordenadas das caixas de arrasto no mapa (top e left em percentagem %)
const continentesDados =[
    { id: "america", nome: "América", dropX: 35, dropY: 55, pinX: 16, pinY: 35, curiosidade: "a América é um continente super comprido? É como uma estrada gigante que vai desde o frio gelado lá de cima (perto do Polo Norte) até ao frio gelado cá de baixo (perto da Antártida)." },
    { id: "europa", nome: "Europa", dropX: 55, dropY: 30, pinX: 47, pinY: 25, curiosidade: "a Europa é um continente muito especial porque é o único que não tem desertos? Tem muitas florestas, rios e cidades que parecem saídas de contos de fadas." },
    { id: "africa", nome: "África", dropX: 60, dropY: 55, pinX: 53, pinY: 50, curiosidade: "África fica mesmo no meio do mapa? É o único lugar onde podes estar com um pé no Norte e outro no Sul ao mesmo tempo!" },
    { id: "asia", nome: "Ásia", dropX: 75, dropY: 35, pinX: 73, pinY: 25, curiosidade: "a Ásia tem a montanha mais alta de todas, o Monte Evereste? É tão alta que parece que dá para fazer cócegas nas nuvens!" },
    { id: "oceania", nome: "Oceânia", dropX: 88, dropY: 80, pinX: 87, pinY: 65, curiosidade: "a Austrália é o maior país da Oceânia? É tão larga, mas tão larga, que se a Austrália fosse uma ponte, ela conseguia atravessar a Lua de uma ponta à outra e ainda sobrava um bocadinho de estrada para os carros passarem!" },
    { id: "antartida", nome: "Antártida", dropX: 58, dropY: 95, pinX: 46, pinY: 97, curiosidade: "a Antártida é como se fosse o congelador do nosso planeta? É o lugar mais frio da Terra e lá vivem os pinguins mais simpáticos, mas quase não cai neve nova, é só gelo antigo!"  } 
];

const oceanosDados =[
    { id: "atlantico", nome: "Atlântico", dropX: 45, dropY: 45, pinX: 35, pinY: 40, curiosidade: "no fundo deste oceano há uma cordilheira de montanhas escondida? É a maior do mundo, mas está toda debaixo de água!" }, 
    { id: "indico", nome: "Índico", dropX: 75, dropY: 65, pinX: 67, pinY: 59, curiosidade: "este é o oceano mais quentinho? É como se fosse uma banheira gigante onde os peixes e os golfinhos adoram brincar." }, 
    { id: "artico", nome: "Ártico", dropX: 60, dropY: 12, pinX: 44, pinY: 10, curiosidade: "lá no topo do mundo vive o Narval? Ele é um animal marinho que tem um dente tão comprido que parece o corno de um unicórnio! Não acreditas? Pesquisa." }, 
    { id: "antartico", nome: "Antártico", dropX: 55, dropY: 89, pinX: 47, pinY: 88, curiosidade: "a água aqui anda sempre à volta da Antártida como se fosse um carrossel gigante, ajudando a espalhar o frio para o resto do mundo não aquecer demais?" }, 
    { id: "pacifico", nome: "Pacífico", dropX: 20, dropY: 55, pinX: 10, pinY: 57, curiosidade: "este oceano é tão gigante que se juntássemos toda a terra do mundo (todos os continentes), cabia tudo dentro dele e ainda sobrava espaço para nadar?" } 
];

// Base Combinada para os jogos de perguntas
const continentesEOceanos =[...continentesDados.map(c => ({...c, tipo: 'continente'})), ...oceanosDados.map(o => ({...o, tipo: 'oceano'}))];

const animaisMundo =[
    // ÁFRICA
    { id: "leao", nome: "Leão", continente: "africa", emoji: "🦁" },
    { id: "girafa", nome: "Girafa", continente: "africa", emoji: "🦒" },
    { id: "elefante_africano", nome: "Elefante Africano", continente: "africa", emoji: "🐘" },
	{ id: "rinoceronte_africano", nome: "Rinoceronte Africano (dois chifres)", continente: "africa", emoji: "🐘" },
    { id: "zebra", nome: "Zebra", continente: "africa", emoji: "🦓" },
	{ id: "dromedario", nome: "Dromedário (uma bossa)", continente: "africa", emoji: "🐫" },
    { id: "hipopotamo", nome: "Hipopótamo", continente: "africa", emoji: "🦛" },
    { id: "gorila", nome: "Gorila", continente: "africa", emoji: "🦍" },
    
    // OCEÂNIA
    { id: "canguru", nome: "Canguru", continente: "oceania", emoji: "🦘" },
    { id: "coala", nome: "Coala", continente: "oceania", emoji: "🐨" },
	{ id: "diabo_tasmania", nome: "Diabo da Tâsmania", continente: "oceania", emoji: "🐨" },
	{ id: "vombate", nome: "Vombate (Wombat)", continente: "oceania", emoji: "🐨" },
	{ id: "equidna", nome: "Equidna", continente: "oceania", emoji: "🐨" },
	{ id: "quiui", nome: "Quiuí", continente: "oceania", emoji: "🐨" },
    { id: "ornitorrinco", nome: "Ornitorrinco", continente: "oceania", emoji: "🦆" },
    
    // ANTÁRTIDA
    { id: "pinguim_imperador", nome: "Pinguim-Imperador", continente: "antartida", emoji: "🐧" },
    { id: "foca", nome: "Foca-de-Weddell", continente: "antartida", emoji: "🦭" },
    
    // ÁSIA
    { id: "panda", nome: "Panda", continente: "asia", emoji: "🐼" },
	{ id: "panda_vermelho", nome: "Panda Vermelho", continente: "asia", emoji: "🐼" },
	{ id: "rinoceronte_java", nome: "Rinoceronte-de-Java (um chifre)", continente: "asia", emoji: "🐼" },
	{ id: "leopardo_neves", nome: "Leopardo das Neves", continente: "asia", emoji: "🐼" },
    { id: "tigre", nome: "Tigre", continente: "asia", emoji: "🐅" },
    { id: "elefante_asiatico", nome: "Elefante Africano", continente: "asia", emoji: "🐅" },
	{ id: "dragao_komodo", nome: "Dragão de Komodo", continente: "asia", emoji: "🐫" },
	{ id: "camelo_bactriano", nome: "Camelo-Bactriano (duas bossas)", continente: "asia", emoji: "🐫" },
    { id: "orangotango", nome: "Orangotango", continente: "asia", emoji: "🦧" },
    
    // AMÉRICA
    { id: "tucano", nome: "Tucano", continente: "america", emoji: "🦜" },
    { id: "lama", nome: "Lama", continente: "america", emoji: "🦙" },
    { id: "jaguar", nome: "Jaguar", continente: "america", emoji: "🐆" },
	{ id: "axalote", nome: "Axalote (vive apenas no México)", continente: "america", emoji: "🐆" },
	{ id: "capivara", nome: "Capivara", continente: "america", emoji: "🦊" },
    { id: "preguica", nome: "Preguiça", continente: "america", emoji: "🦥" },
    { id: "bisonte", nome: "Bisonte", continente: "america", emoji: "🦬" },
    
    // EUROPA
    { id: "lobo", nome: "Lobo Ibérico", continente: "europa", emoji: "🐺" },
    { id: "urso_pardo", nome: "Urso Pardo", continente: "europa", emoji: "🐻" },
    { id: "raposa", nome: "Raposa", continente: "europa", emoji: "🦊" },
	{ id: "camurca", nome: "Camurça-dos-Pirinéus", continente: "europa", emoji: "🦊" },
	{ id: "javali", nome: "Javali", continente: "europa", emoji: "🐗" },
    { id: "lince", nome: "Lince Ibérico", continente: "europa", emoji: "🐈" }
];