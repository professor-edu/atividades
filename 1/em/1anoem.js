const fs = require('fs');
const path = require('path');

/** * 1. CONFIGURAÇÃO LOCAL:
 * Ajusta estes valores antes de correres o comando na pasta específica.
 */
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

// Pega na pasta onde o script está a ser executado
const diretorioAtual = './'; 

function processarPastaLocal(diretorio) {
    const itens = fs.readdirSync(diretorio);

    itens.forEach(item => {
        const caminhoCompleto = path.join(diretorio, item);
        const stats = fs.statSync(caminhoCompleto);

        // Continua a entrar em subpastas (para chegar à pasta do jogo)
        if (stats.isDirectory()) {
            processarPastaLocal(caminhoCompleto);
        } 
        // Só mexe em ficheiros HTML
        else if (item.endsWith('.html')) {
            let conteudo = fs.readFileSync(caminhoCompleto, 'utf8');
            let original = conteudo;

            // Altera apenas o H1
            conteudo = conteudo.replace(/<h1>(.*?)<\/h1>/gis, (match, innerContent) => {
                let novoInner = innerContent;
                
                Object.entries(substituicoes).forEach(([emoji, tagSvg]) => {
                    novoInner = novoInner.split(emoji).join(tagSvg);
                });

                return `<h1>${novoInner}</h1>`;
            });

            if (conteudo !== original) {
                fs.writeFileSync(caminhoCompleto, conteudo, 'utf8');
                console.log(`✅ Sucesso em: ${item}`);
            }
        }
    });
}

console.log(`🚀 A processar ficheiros em: ${path.resolve(diretorioAtual)}`);
processarPastaLocal(diretorioAtual);
console.log("✨ Concluído para esta pasta.");