// Baralhar lista inteira de palavras quando o jogo inicia
let palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

let indice = 0;
let certas = 0;
let erros = 0;

// =========================================
// Carregar palavra atual
// =========================================
function carregarPalavra() {
    const p = palavrasBaralhadas[indice];

    // Imagem da palavra
    document.getElementById("imagemPalavra").src = p.imagem;

    // Baralhar sílabas
    const silabasMisturadas = [...p.silabas].sort(() => Math.random() - 0.5);

    const zona = document.getElementById("silabas");
    zona.innerHTML = "";

    silabasMisturadas.forEach(s => {
        const div = document.createElement("div");
        div.className = "silaba";
        div.textContent = s;
        zona.appendChild(div);
    });

    // Limpar campo e feedback
    document.getElementById("campoEscrita").value = "";
    const fb = document.getElementById("feedback");
    fb.innerHTML = "";
    fb.className = "";

    atualizarProgresso();
}

// =========================================
// Validar resposta escrita
// =========================================
function validar() {
    const resposta = document.getElementById("campoEscrita").value
        .toLowerCase()
        .trim();

    const p = palavrasBaralhadas[indice];

    if (resposta === p.palavra) {
        certas++;
        mostrarFeedback(true);
    } else {
        erros++;
        mostrarFeedback(false);
    }

    indice++;

    // Avançar para a próxima palavra depois de 0,9s
    setTimeout(() => {
        if (indice < palavrasBaralhadas.length) {
            carregarPalavra();
        } else {
            terminarJogo();
        }
    }, 900);
}

// =========================================
// Mostrar feedback visual (✔ ou ✘)
// =========================================
function mostrarFeedback(ok) {
    const fb = document.getElementById("feedback");

    if (ok) {
        fb.innerHTML = "✔";
        fb.className = "feedback-certo";
    } else {
        fb.innerHTML = "✘";
        fb.className = "feedback-errado";
    }

    // Atualizar contadores
    document.getElementById("certas").textContent = "Certas: " + certas;
    document.getElementById("erros").textContent = "Erradas: " + erros;
}

// =========================================
// Barra de progresso
// =========================================
function atualizarProgresso() {
    const percentagem = (indice / palavrasBaralhadas.length) * 100;
    document.getElementById("progressoInterno").style.width = percentagem + "%";
}

// =========================================
// Fim do jogo + botão Recomeçar
// =========================================
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

        // Baralhar novamente
        palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

        // Restaurar cartão e recarregar
        document.getElementById("areaJogo").innerHTML = `
            <img id="imagemPalavra" src="" alt="imagem da palavra" class="imagem">

            <div id="silabas" class="silabas"></div>

            <input id="campoEscrita"
                type="text"
                placeholder="Escreve aqui..."
                autocomplete="off">

            <button id="validar">Validar</button>

            <div id="feedback"></div>
        `;

        document.getElementById("validar").addEventListener("click", validar);

        atualizarProgresso();
        carregarPalavra();
    });
}

// =========================================
// Eventos
// =========================================
document.getElementById("validar").addEventListener("click", validar);

// Iniciar jogo ao carregar a página
window.onload = carregarPalavra;
