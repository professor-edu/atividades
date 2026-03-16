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

    const campo = document.getElementById("campoEscrita");
    campo.value = "";
    campo.disabled = false;     // desbloqueia depois de erro
    campo.classList.remove("shake");

    const fb = document.getElementById("feedback");
    fb.innerHTML = "";
    fb.className = "";

    atualizarProgresso();
}

// -------------------------
// Validar
// -------------------------
function validar() {
    const campo = document.getElementById("campoEscrita");

    const resposta = campo.value
        .toLowerCase()
        .trim();

    const p = palavrasBaralhadas[indice];

    if (resposta === p.palavra) {
        certas++;
        mostrarFeedback(true);
        indice++;

        // ACERTO → avança automaticamente
        setTimeout(() => {
            if (indice < palavrasBaralhadas.length) {
                carregarPalavra();
            } else {
                terminarJogo();
            }
        }, 900);

    } else {
        // ERRO
        erros++;

        // (1) tremer o input
        campo.classList.add("shake");

        // (2) bloquear input
        campo.disabled = true;

        // (3) feedback especial
        mostrarFeedback(false, p.palavra);
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
        fb.className = "feedback-errado";

        fb.innerHTML = `
            ✘<br>
            <span class="palavra-correta">A palavra correta é: ${correta.toUpperCase()}</span>
            <button id="continuarBtn">
                img/continuar.png Continuar
            </button>
        `;

        // (4) botão Continuar estilizado
        document.getElementById("continuarBtn").addEventListener("click", () => {
            indice++;
            if (indice < palavrasBaralhadas.length) {
                carregarPalavra();
            } else {
                terminarJogo();
            }
        });
    }

    // atualizar contadores mantendo ícones
    document.getElementById("certas").innerHTML =
        `<img src="img/certo.png" class="icone-contador"> Certas: ${certas}`;

    document.getElementById("erros").innerHTML =
        `<img src="img/errado.png" class="icone-contador"> Erradas: ${erros}`;
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

document.addEventListener("keydown", e => {
    if (e.key === "Enter") validar();
});

window.onload = carregarPalavra;
