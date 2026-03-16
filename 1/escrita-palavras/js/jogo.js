let palavrasBaralhadas = [...palavras].sort(() => Math.random() - 0.5);

let indice = 0;
let certas = 0;
let erros = 0;

// ------------------------------------------------------
// Carregar palavra
// ------------------------------------------------------
function carregarPalavra() {
    if (indice >= palavrasBaralhadas.length) {
        terminarJogo();
        return;
    }

    const p = palavrasBaralhadas[indice];
    const imgElement = document.getElementById("imagemPalavra");
    
    // Garantir que a imagem existe antes de mudar o src
    if (imgElement) {
        imgElement.src = p.imagem;
    }

    const campo = document.getElementById("campoEscrita");
    if (campo) {
        campo.value = "";
        campo.disabled = false;
        campo.classList.remove("shake");
        campo.focus(); // Foca automaticamente no campo para facilitar a escrita
    }

    const btnValidar = document.getElementById("validar");
    if (btnValidar) btnValidar.disabled = false;

    const fb = document.getElementById("feedback");
    if (fb) {
        fb.innerHTML = "";
        fb.className = "";
    }

    atualizarProgresso();
}

// ------------------------------------------------------
// Validar resposta
// ------------------------------------------------------
function validar() {
    const campo = document.getElementById("campoEscrita");
    if (!campo || campo.disabled) return; // Evita validações duplas se o campo estiver desativado

    const resposta = campo.value.toLowerCase().trim();
    const p = palavrasBaralhadas[indice];

    // Compara a resposta (podes adicionar lógica de acentos aqui se desejares)
    if (resposta === p.palavra.toLowerCase()) {
        certas++;
        mostrarFeedback(true);
        indice++;

        // Pequena pausa antes de carregar a próxima para o utilizador ver o "✔"
        setTimeout(() => {
            carregarPalavra();
        }, 900);

    } else {
        erros++;
        // Desativa controlos para forçar o uso do botão "Continuar"
        document.getElementById("validar").disabled = true;
        campo.classList.add("shake");
        campo.disabled = true;

        mostrarFeedback(false, p.palavra);
    }
}

// ------------------------------------------------------
// Feedback
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
            <button id="continuarBtn" class="btn-continuar">
                <img src="img/continuar.png" class="icone-continuar" style="width:20px;"> Continuar
            </button>
        `;

        // Evento para o botão de erro - limpa o estado e avança
        document.getElementById("continuarBtn").addEventListener("click", () => {
            indice++;
            carregarPalavra();
        });
    }

    // Atualiza contadores com os ícones originais
    document.getElementById("certas").innerHTML =
        `<img src="img/certo.png" class="icone-contador"> Certas: ${certas}`;

    document.getElementById("erros").innerHTML =
        `<img src="img/errado.png" class="icone-contador"> Erradas: ${erros}`;
}

// ------------------------------------------------------
// Barra de progresso
// ------------------------------------------------------
function atualizarProgresso() {
    const progressoInterno = document.getElementById("progressoInterno");
    if (progressoInterno) {
        const percentagem = (indice / palavrasBaralhadas.length) * 100;
        progressoInterno.style.width = percentagem + "%";
    }
}

// ------------------------------------------------------
// Fim + Recomeçar
// ------------------------------------------------------
function terminarJogo() {
    const area = document.getElementById("areaJogo");
    area.innerHTML = `
        <div class="fim-jogo">
            <h2>Fim do jogo!</h2>
            <p>Total de certas: <strong>${certas}</strong></p>
            <p>Total de erradas: <strong>${erros}</strong></p>
            <button id="recomecar" class="btn-recomecar" style="padding: 10px 20px; cursor: pointer;">Recomeçar</button>
        </div>
    `;

    document.getElementById("recomecar").addEventListener("click", () => {
        location.reload(); // Forma mais limpa de reiniciar sem perder listeners globais
    });
}

// ------------------------------------------------------
// Listeners Iniciais
// ------------------------------------------------------
document.getElementById("validar").addEventListener("click", validar);

document.addEventListener("keydown", (e) => { 
    if (e.key === "Enter") {
        // Se o botão continuar existir (erro), o Enter clica nele
        const btnCont = document.getElementById("continuarBtn");
        if (btnCont) {
            btnCont.click();
        } else {
            validar();
        }
    } 
});

window.onload = carregarPalavra;
