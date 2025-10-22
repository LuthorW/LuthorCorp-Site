// Função para revelar elementos ao rolar a página
const revealOnScroll = () => {
  // Seleciona todos os elementos que devem ser animados
  const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');

  // Opções para o Intersection Observer
  // rootMargin: "tira" 100px da parte de baixo da tela para disparar a animação um pouco antes
  const observerOptions = {
    root: null, // null significa a viewport (tela)
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1 // O elemento precisa estar 10% visível para a animação começar
  };

  // Cria um "observador" que vai vigiar os elementos
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Se o elemento estiver na tela (isIntersecting)
      if (entry.isIntersecting) {
        // Adiciona a classe 'visible' para ativar a animação do CSS
        entry.target.classList.add('visible');
        // Para de observar o elemento para não animar de novo
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Manda o observador vigiar cada um dos elementos
  elementsToReveal.forEach(element => {
    observer.observe(element);
  });
};

// Inicia a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', revealOnScroll);
