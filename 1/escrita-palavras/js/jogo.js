let palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

let indice = 0;
let certas = 0;
let erros = 0;

// ------------------------------------------------------
// Carregar palavra
// ------------------------------------------------------
function carregarPalavra() {
    const p = palavrasBaralhadas[indice];

    document.getElementById("imagemPalavra").src = p.imagem;

    const campo = document.getElementById("campoEscrita");
    campo.value = "";
    campo.disabled = false;
    campo.classList.remove("shake");

    const fb = document.getElementById("feedback");
    fb.innerHTML = "";
    fb.className = "";

    // reativar botão verificar
    document.getElementById("validar").disabled = false;

    atualizarProgresso();
}

// ------------------------------------------------------
// Validar resposta
// ------------------------------------------------------
function validar() {
    const campo = document.getElementById("campoEscrita");
    const resposta = campo.value.toLowerCase().trim();
    const p = palavrasBaralhadas[indice];

    if (resposta === p.palavra) {

        certas++;
        mostrarFeedback(true);
        indice++;

        // avanço automático
        setTimeout(() => {
            if (indice < palavrasBaralhadas.length) {
                carregarPalavra();
            } else {
                terminarJogo();
            }
        }, 900);

    } else {

        erros++;

        // impedir Verificar repetido
        document.getElementById("validar").disabled = true;

        // tremer input
        campo.classList.add("shake");

        // bloquear input
        campo.disabled = true;

        // feedback especial
        mostrarFeedback(false, p.palavra);
    }
}

// ------------------------------------------------------
// Feedback ✔ / ✘  + Palavra correta + Botão Continuar
// ------------------------------------------------------
function mostrarFeedback(ok, correta = "") {
    const fb = document.getElementById("feedback");

    if (ok) {
        fb.innerHTML = "✔";
        fb.className = "feedback-certo";

    } else {
        fb.className = "feedback-errado";

        fb.innerHTML = `
            ✘<br>
            <span class="palavra-correta">Palavra correta: ${correta.toUpperCase()}</span>
            <button id="continuarBtn">
                <img src="img/continuar.png" class="icone-continuar"> Continuar
            </button>
        `;

        // comportamento do botão Continuar
        document.getElementById("continuarBtn").addEventListener("click", () => {

            // reativar botão validar
            document.getElementById("validar").disabled = false;

            indice++;

            if (indice < palavrasBaralhadas.length) {
                carregarPalavra();
            } else {
                terminarJogo();
            }
        });
    }

    // atualizar contadores SEM perder ícones
    document.getElementById("certas").innerHTML =
        `img/certo.png Certas: ${certas}`;

    document.getElementById("erros").innerHTML =
        `img/ ------------------------------------------------------
// Barra de progresso
// ------------------------------------------------------
function atualizarProgresso() {
    const percentagem = (indice / palavrasBaralhadas.length) * 100;
    document.getElementById("progressoInterno").style.width =
        percentagem + "%";
}

// ------------------------------------------------------
// Ecrã Final + Recomeçar
// ------------------------------------------------------
function terminarJogo() {

    document.getElementById("areaJogo").innerHTML = `
        <h2>Fim do jogo!</h2>
        <p>Total de certas: ${certas}</p>
        <p>Total de erradas: ${erros}</p>
        <button id="recomecar" class="btn-recomecar">
            Recomeçar
        </button>
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

// ------------------------------------------------------
// Eventos
// ------------------------------------------------------
document.getElementById("validar").addEventListener("click", validar);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") validar();
});

window.onload = carregarPalavra;
