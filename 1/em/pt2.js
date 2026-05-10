const fs = require('fs');
const path = require('path');

// CONFIGURAÇÃO:
const substituicoes = {
    "🍎": '<img src="../img-titulos/alimentos.svg" class="icon-svg-titulo" alt="">',
    "🐱": '<img src="../img-titulos/animais.svg" class="icon-svg-titulo" alt="">',
    "🧠": '<img src="../img-titulos/corpo.svg" class="icon-svg-titulo" alt="">',
	"👨‍🚒": '<img src="../img-titulos/profissoes.svg" class="icon-svg-titulo" alt="">',
	"♻️": '<img src="../img-titulos/reciclagem.svg" class="icon-svg-titulo" alt="">',
	"⛅": '<img src="../img-titulos/roupas-estacoes.svg" class="icon-svg-titulo" alt="">',
	"☀️": '<img src="../img-titulos/tempo.svg" class="icon-svg-titulo" alt="">',
	"👔": '<img src="../img-titulos/vestuario.svg" class="icon-svg-titulo" alt="">',
	"💪": '<img src="../img-titulos/vida-saudavel.svg" class="icon-svg-titulo" alt="">'
};

const diretorioRaiz = './'; 

function processarPastas(diretorio) {
    const itens = fs.readdirSync(diretorio);

    itens.forEach(item => {
        const caminhoCompleto = path.join(diretorio, item);
        const stats = fs.statSync(caminhoCompleto);

        if (stats.isDirectory()) {
            processarPastas(caminhoCompleto);
        } else if (item.endsWith('.html')) {
            let conteudo = fs.readFileSync(caminhoCompleto, 'utf8');
            let original = conteudo;

            conteudo = conteudo.replace(/<h1>(.*?)<\/h1>/gis, (match, innerContent) => {
                let novoInner = innerContent;
                Object.entries(substituicoes).forEach(([emoji, tagSvg]) => {
                    novoInner = novoInner.split(emoji).join(tagSvg);
                });
                return `<h1>${novoInner}</h1>`;
            });

            if (conteudo !== original) {
                fs.writeFileSync(caminhoCompleto, conteudo, 'utf8');
                console.log(`✅ ALTERADO: ${path.resolve(caminhoCompleto)}`);
            } else {
                // ISTO VAI MOSTRAR OS QUE O SCRIPT IGNOROU
                console.log(`❌ NÃO ALTERADO (Emoji não encontrado no H1): ${path.resolve(caminhoCompleto)}`);
            }
        }
    });
}

console.log("🚀 Iniciando varrimento...");
processarPastas(diretorioRaiz);
console.log("✨ Processo terminado.");