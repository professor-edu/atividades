let palavrasBaralhadas2 = [...palavras2].sort(() => Math.random() - 0.5);

let indice2 = 0;
let certas2 = 0;
let erros2 = 0;

// Carregar palavra
function carregarPalavra2() {
    const p = palavrasBaralhadas2[indice2];

    document.getElementById("imagemPalavra2").src = p.imagem;

    document.getElementById("campoEscrita2").value = "";

    const fb = document.getElementById("feedback2");
    fb.innerHTML = "";
    fb.className = "";

    atualizarProgresso2();
}

// Validar
function validar2() {
    const resposta = document.getElementById("campoEscrita2").value.toLowerCase().trim();
    const p = palavrasBaralhadas2[indice2];

    if (resposta === p.palavra) {
        certas2++;
        mostrarFeedback2(true);
    } else {
        erros2++;
        mostrarFeedback2(false);
    }

    indice2++;

    setTimeout(() => {
        if (indice2 < palavrasBaralhadas2.length) {
            carregarPalavra2();
        } else {
            terminarJogo2();
        }
    }, 900);
}

// Feedback
function mostrarFeedback2(ok) {
    const fb = document.getElementById("feedback2");

    if (ok) {
        fb.innerHTML = "✔";
        fb.className = "feedback-certo";
    } else {
        fb.innerHTML = "✘";
        fb.className = "feedback-errado";
    }

    document.getElementById("certas2").innerHTML =
        `<img src="img/certo.png" class="icone-contador"> Certas: ${certas2}`;

    document.getElementById("erros2").innerHTML =
        `<img src="img/errado.png" class="icone-contador"> Erradas: ${erros2}`;
}

// Progresso
function atualizarProgresso2() {
    const percentagem = (indice2 / palavrasBaralhadas2.length) * 100;
    document.getElementById("progressoInterno2").style.width = percentagem + "%";
}

// Fim + Recomeçar
function terminarJogo2() {
    document.getElementById("areaJogo2").innerHTML = `
        <h2>Fim do jogo!</h2>
        <p>Total de certas: ${certas2}</p>
        <p>Total de erradas: ${erros2}</p>
        <button id="recomecar2" class="btn-recomecar">Recomeçar</button>
    `;

    document.getElementById("recomecar2").addEventListener("click", () => {

        indice2 = 0;
        certas2 = 0;
        erros2 = 0;

        palavrasBaralhadas2 = [...palavras2].sort(() => Math.random() - 0.5);

        document.getElementById("areaJogo2").innerHTML = `
            <img id="imagemPalavra2" src="" class="imagem">

            <input id="campoEscrita2"
                   type="text"
                   placeholder="Escreve aqui..."
                   autocomplete="off">

            <button id="validar2">
                <img src="img/lupa.png" class="icone-lupa"> Verificar
            </button>

            <div id="feedback2"></div>
        `;

        document.getElementById("validar2").addEventListener("click", validar2);

        atualizarProgresso2();
        carregarPalavra2();
    });
}

// Eventos
document.getElementById("validar2").addEventListener("click", validar2);

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        validar2();
    }
});

window.onload = carregarPalavra2;
