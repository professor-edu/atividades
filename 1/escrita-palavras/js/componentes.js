// Este script adiciona o botão de "Voltar ao Menu" automaticamente 
// Redireciona para o index.html na mesma aba
document.addEventListener("DOMContentLoaded", function() {
    // Cria o elemento do botão
    const btnVoltar = document.createElement("button");
    
    // Configura o estilo e o texto (🏠 Home/Menu)
    btnVoltar.innerHTML = "🏠 Menu";
    btnVoltar.style.position = "fixed";
    btnVoltar.style.top = "15px";
    btnVoltar.style.left = "15px";
    btnVoltar.style.padding = "10px 20px";
    btnVoltar.style.backgroundColor = "#ff9800"; // Laranja
    btnVoltar.style.color = "white";
    btnVoltar.style.border = "none";
    btnVoltar.style.borderRadius = "50px";
    btnVoltar.style.fontWeight = "bold";
    btnVoltar.style.fontSize = "16px";
    btnVoltar.style.cursor = "pointer";
    btnVoltar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    btnVoltar.style.zIndex = "1000";
    btnVoltar.style.transition = "transform 0.2s";

    // Efeito visual ao passar o rato
    btnVoltar.onmouseover = () => btnVoltar.style.transform = "scale(1.1)";
    btnVoltar.onmouseout = () => btnVoltar.style.transform = "scale(1)";

    // Função para navegar de volta para o index
    btnVoltar.onclick = function() {
        window.location.href = "1/index.html";
    };

    // Adiciona o botão ao início do body de cada jogo
    document.body.appendChild(btnVoltar);
});
