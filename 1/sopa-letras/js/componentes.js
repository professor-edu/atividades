// Este script adiciona o botão de "Voltar ao Menu" automaticamente
document.addEventListener("DOMContentLoaded", function() {
    // Cria o elemento do botão
    const btnVoltar = document.createElement("button");
    
    // Configura o estilo e o texto
    btnVoltar.innerHTML = "🏠 Sair";
    btnVoltar.style.position = "fixed";
    btnVoltar.style.top = "15px";
    btnVoltar.style.left = "15px";
    btnVoltar.style.padding = "10px 20px";
    btnVoltar.style.backgroundColor = "#ff9800"; // Cor Laranja apelativa
    btnVoltar.style.color = "white";
    btnVoltar.style.border = "none";
    btnVoltar.style.borderRadius = "50px";
    btnVoltar.style.fontWeight = "bold";
    btnVoltar.style.cursor = "pointer";
    btnVoltar.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    btnVoltar.style.zIndex = "1000"; // Garante que fica por cima de tudo

    // Função para fechar o separador (já que o menu abriu um novo)
    btnVoltar.onclick = function() {
        if (confirm("Queres sair do jogo e voltar ao menu?")) {
            window.close();
        }
    };

    // Adiciona o botão ao início do body
    document.body.appendChild(btnVoltar);
});
