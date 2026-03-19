// Baralhar lista inteira de palavras quando o jogo inicia
let palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

let indice = 0;
let certas = 0;
let erros = 0;

// =========================================
// Carregar palavra atual
// =========================================
function carregarPalavra() {
    if (indice >= palavrasBaralhadas.length) {
        terminarJogo();
        return;
    }

    const p = palavrasBaralhadas[indice];

    // Imagem da palavra
    document.getElementById("imagemPalavra").src = p.imagem;

    // Baralhar sílabas - suporta tanto 'p.silabas' (array) como 'p.divisao' (string com hífen)
    const listaSilabas = p.silabas || p.divisao.split('-');
    const silabasMisturadas = [...listaSilabas].sort(() => Math.random() - 0.5);

    const zona = document.getElementById("silabas");
    zona.innerHTML = "";

    silabasMisturadas.forEach(s => {
        const div = document.createElement("div");
        div.className = "silaba-caixa"; // Classe atualizada para o novo CSS estilo "Janela"
        div.textContent = s;
        zona.appendChild(div);
    });

    // Limpar campo e dar foco automático para facilitar a escrita
    const campo = document.getElementById("campoEscrita");
    campo.value = "";
    campo.focus(); 
    
    const fb = document.getElementById("feedback");
    fb.innerHTML = "";

    atualizarProgresso();
}

// =========================================
// Validar resposta escrita
// =========================================
function validar() {
    const campo = document.getElementById("campoEscrita");
    const resposta = campo.value.toLowerCase().trim();
    
    // Evita validar se o campo estiver vazio
    if (resposta === "") return;

    const p = palavrasBaralhadas[indice];
    const palavraCorreta = p.palavra.toLowerCase().trim();

    if (resposta === palavraCorreta) {
        certas++;
        mostrarFeedback(true);
    } else {
        erros++;
        mostrarFeedback(false);
    }

    indice++;

    // Aguarda 1 segundo para mostrar o feedback antes de carregar a próxima
    setTimeout(() => {
        if (indice < palavrasBaralhadas.length) {
            carregarPalavra();
        } else {
            terminarJogo();
        }
    }, 1200);
}

// =========================================
// Mostrar feedback visual
// =========================================
function mostrarFeedback(ok) {
    const fb = document.getElementById("feedback");

    if (ok) {
        fb.innerHTML = "<span style='color: var(--verde)'>Excelente! ✨</span>";
    } else {
        const correcao = palavrasBaralhadas[indice].palavra.toUpperCase();
        fb.innerHTML = `<span style='color: var(--vermelho)'>A palavra era: ${correcao}</span>`;
    }

    // Atualizar contadores no topo (mantendo os ícones certo/errado)
    document.getElementById("certas").innerHTML = `<img src="img/certo.png" class="icone-contador"> ${certas}`;
    document.getElementById("erros").innerHTML = `<img src="img/errado.png" class="icone-contador"> ${erros}`;
}

// =========================================
// Barra de progresso
// =========================================
function atualizarProgresso() {
    const total = palavrasBaralhadas.length;
    const percentagem = (indice / total) * 100;
    document.getElementById("progressoInterno").style.width = percentagem + "%";
}

// =========================================
// Fim do jogo
// =========================================
function terminarJogo() {
    // Garante que a barra chega ao fim
    document.getElementById("progressoInterno").style.width = "100%";
    
    const area = document.getElementById("areaJogo");
    area.innerHTML = `
        <h2 style="color: var(--azul-escuro); margin-bottom: 10px;">🏆 Jogo Terminado!</h2>
        <div style="font-size: 1.3rem; margin: 20px 0; line-height: 1.6;">
            <p>Acertos: <strong style="color: var(--verde)">${certas}</strong></p>
            <p>Erros: <strong style="color: var(--vermelho)">${erros}</strong></p>
        </div>
        <button onclick="location.reload()" class="btn-menu" style="margin: 0 auto; padding: 15px 30px;">
            Recomeçar Desafio
        </button>
    `;
}

// =========================================
// Eventos e Atalhos
// =========================================

// Clique no botão Verificar (usa delegação para funcionar após o reset do HTML)
document.addEventListener("click", function(e) {
    const btn = e.target.closest("#validar");
    if (btn) {
        validar();
    }
});

// Permitir validar ao carregar na tecla Enter
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        validar();
    }
});

// Iniciar o jogo
window.onload = carregarPalavra;

