// baralha a lista inteira de palavras quando o jogo inicia
let palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

let indice = 0;
let certas = 0;
let erros = 0;

// -------------------------
// Carregar palavra atual
// -------------------------
function carregarPalavra() {
    const p = palavrasBaralhadas[indice];

    // imagem
    document.getElementById("imagemPalavra").src = p.imagem;

    // sílabas baralhadas
    const silabasMisturadas = [...p.silabas].sort(() => Math.random() - 0.5);

    const zona = document.getElementById("silabas");
    zona.innerHTML = "";

    silabasMisturadas.forEach(s => {
        const div = document.createElement("div");
        div.className = "silaba";
        div.textContent = s;
        zona.appendChild(div);
    });

    // limpar campo de escrita e feedback
    document.getElementById("campoEscrita").value = "";
    document.getElementById("feedback").innerHTML = "";

    // atualizar barra de progresso
    atualizarProgresso();
}

// -------------------------
// Validar resposta
// -------------------------
function validar() {
    const resposta = document.getElementById("campoEscrita").value.toLowerCase().trim();
    const p = palavrasBaralhadas[indice];

    if (resposta === p.palavra) {
        certas++;
        mostrarFeedback(true);
    } else {
        erros++;
        mostrarFeedback(false);
    }

    indice++;

    // avançar automaticamente
    setTimeout(() => {
        if (indice < palavrasBaralhadas.length) {
            carregarPalavra();
        } else {
            terminarJogo();
        }
    }, 900);
}

// -------------------------
// Feedback visual
// -------------------------
function mostrarFeedback(ok) {
    const fb = document.getElementById("feedback");

    if (ok) {
        fb.innerHTML = "✔";
        fb.className = "feedback-certo";
    } else {
        fb.innerHTML = "✘";
        fb.className = "feedback-errado";
    }

    document.getElementById("certas").textContent = "Certas: " + certas;
    document.getElementById("erros").content = "Erradas: " + erros;
}

    // atualizar contadores
    document.getElementById("certas").textContent = "Certas: " + certas;
    document.getElementById("erros").textContent = "Erradas: " + erros;
}

// -------------------------
// Barra de progresso
// -------------------------
function atualizarProgresso() {
    const percentagem = (indice / palavrasBaralhadas.length) * 100;
    document.getElementById("progressoInterno").style.width = percentagem + "%";
}

// -------------------------
// Fim do jogo
// -------------------------

function terminarJogo() {
    document.getElementById("areaJogo").innerHTML = `
        <h2>Fim do jogo!</h2>
        <p>Total de certas: ${certas}</p>
        <p>Total de erros: ${erros}</p>

        <button id="recomecar">Recomeçar</button>
    `;

    document.getElementById("recomecar").addEventListener("click", () => {
        indice = 0;
        certas = 0;
        erros = 0;

        palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

        carregarPalavra();
    });
}


// -------------------------
// Eventos
// -------------------------
document.getElementById("validar").addEventListener("click", validar);

// carregar primeira palavra
window.onload = carregarPalavra;
