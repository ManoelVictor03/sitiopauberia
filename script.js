// Executa todo o código apenas uma vez, quando o conteúdo da página estiver totalmente carregado.
document.addEventListener("DOMContentLoaded", function () {
  // ======================================================
  // SEÇÃO 1: Animação de entrada para os botões
  // ======================================================
  const linkButtons = document.querySelectorAll(".link-button");
  linkButtons.forEach((button, index) => {
    // Cria um efeito de cascata, com cada botão aparecendo um pouco depois do anterior.
    button.style.animationDelay = `${index * 0.15}s`;
  });

  // ======================================================
  // SEÇÃO 2: Atualização automática do ano no rodapé
  // ======================================================
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ======================================================
  // SEÇÃO 3: Efeito Máquina de Escrever
  // ======================================================
  const tituloElemento = document.getElementById("titulo-principal");
  const descricaoElemento = document.getElementById("descricao-principal");

  if (tituloElemento && descricaoElemento) {
    const textoTitulo = "SÍTIO PAUBÉRIA";
    const textoDescricao =
      "Bem-vindo ao nosso cantinho! Acesse nossos grupos e redes sociais abaixo.";

    function typeWriter(elemento, texto, velocidade, callback) {
      let i = 0;
      elemento.innerHTML = '<span class="typing-cursor"></span>';
      const cursor = elemento.querySelector(".typing-cursor");

      function digitar() {
        if (i < texto.length) {
          cursor.insertAdjacentText("beforebegin", texto.charAt(i));
          i++;
          setTimeout(digitar, velocidade);
        } else {
          cursor.remove();
          if (callback) {
            callback();
          }
        }
      }
      digitar();
    }

    typeWriter(tituloElemento, textoTitulo, 120, function () {
      typeWriter(descricaoElemento, textoDescricao, 60, null);
    });
  }

  // ======================================================
  // SEÇÃO 4: EFEITO DE PARTÍCULAS FLUTUANTES
  // ======================================================
  function criarParticulas() {
    const containerDeEfeitos = document.querySelector(".background-effects");
    if (!containerDeEfeitos) return; // Se não encontrar o container, não faz nada.

    const numeroDeParticulas = 25; // Você pode aumentar ou diminuir este número

    for (let i = 0; i < numeroDeParticulas; i++) {
      const particula = document.createElement("span");
      particula.classList.add("particle");

      // Aleatoriza o tamanho da partícula
      const tamanho = Math.random() * 14 + 8; // Tamanho entre 2px e 10px
      particula.style.width = `${tamanho}px`;
      particula.style.height = `${tamanho}px`;

      // Aleatoriza a posição horizontal de onde ela vai surgir
      particula.style.left = `${Math.random() * 100}%`;

      // Aleatoriza a duração da animação (velocidade com que sobe)
      const duracao = Math.random() * 15 + 10; // Duração entre 15s e 35s
      particula.style.animationDuration = `${duracao}s`;

      // Aleatoriza o atraso para começar a subir
      const atraso = Math.random() * 1; // Atraso de até 15s
      particula.style.animationDelay = `${atraso}s`;

      containerDeEfeitos.appendChild(particula);
    }
  }

  // Chama a função para que as partículas sejam criadas
  criarParticulas();
});
