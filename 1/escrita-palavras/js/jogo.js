let palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

let indice = 0;
let certas = 0;
let erros = 0;

// -------------------------
// Carregar palavra
// -------------------------
function carregarPalavra() {
    const p = palavrasBaralhadas[indice];

    document.getElementById("imagemPalavra").src = p.imagem;

    document.getElementById("campoEscrita").value = "";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("feedback").className = "";

    atualizarProgresso();
}

// -------------------------
// Validar
// -------------------------
function validar() {
    const resposta = document.getElementById("campoEscrita").value
        .toLowerCase()
        .trim();

    const p = palavrasBaralhadas[indice];

    if (resposta === p.palavra) {
        certas++;
        mostrarFeedback(true);
        indice++;

        // avanço automático quando acerta
        setTimeout(() => {
            if (indice < palavrasBaralhadas.length) {
                carregarPalavra();
            } else {
                terminarJogo();
            }
        }, 900);

    } else {
        erros++;
        mostrarFeedback(false, p.palavra);
        // NÃO avança automaticamente → espera pelo botão "Continuar"
    }
}

// -------------------------
// Feedback ✔ / ✘ + palavra correta no erro
// -------------------------
function mostrarFeedback(ok, correta = "") {
    const fb = document.getElementById("feedback");

    if (ok) {
        fb.innerHTML = "✔";
        fb.className = "feedback-certo";
    } else {
        // feedback no erro
        fb.className = "feedback-errado";
        fb.innerHTML = `
            ✘<br>
            A palavra correta é: <strong>${correta.toUpperCase()}</strong><br><br>
            <button id="continuarBtn" class="btn-recomecar">Continuar</button>
        `;

        // botão "Continuar"
        document.getElementById("continuarBtn").addEventListener("click", () => {
            indice++;
            if (indice < palavrasBaralhadas.length) {
                carregarPalavra();
            } else {
                terminarJogo();
            }
        });
    }

    // Atualizar contadores mantendo ícones
    document.getElementById("certas").innerHTML =
        `img/certo.png Certas: ${certas}`;
    document.getElementById("erros").innerHTML =
        `img/errado.png Erradas: ${erros}`;
}

// -------------------------
// Progresso
// -------------------------
function atualizarProgresso() {
    const percentagem = (indice / palavrasBaralhadas.length) * 100;
    document.getElementById("progressoInterno").style.width =
        percentagem + "%";
}

// -------------------------
// Fim + Recomeçar
// -------------------------
function terminarJogo() {
    document.getElementById("areaJogo").innerHTML = `
        <h2>Fim do jogo!</h2>
        <p>Total de certas: ${certas}</p>
        <p>Total de erradas: ${erros}</p>
        <button id="recomecar" class="btn-recomecar">Recomeçar</button>
    `;

    document.getElementById("recomecar").addEventListener("click", () => {

        indice = 0;
        certas = 0;
        erros = 0;
        palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

        document.getElementById("areaJogo").innerHTML = `
            <img id="imagemPalavra" src="" class="imagem">

            <div class="entrada">
                <input id="campoEscrita"
                    type="text"
                    placeholder="Escreve aqui..."
                    autocomplete="off">

                <button id="validar">
                    img/lupa.png Verificar
                </button>
            </div>

            <div id="feedback"></div>
        `;

        document.getElementById("validar").addEventListener("click", validar);

        atualizarProgresso();
        carregarPalavra();
    });
}

// -------------------------
// Eventos
// -------------------------
document.getElementById("validar").addEventListener("click", validar);

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") validar();
});

window.onload = carregarPalavra;
