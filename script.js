document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.customVideoCarousel');
    const carouselItems = carousel.querySelectorAll('.customVideoCarouselItem');
    const prevBtn = carousel.querySelector('.customPrevSlide');
    const nextBtn = carousel.querySelector('.customNextSlide');
    let currentIndex = 0;
  
    function showVideo(index) {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.style.display = 'block'; // Exibe o vídeo atual
        } else {
          item.style.display = 'none'; // Esconde os demais vídeos
        }
      });
    }
  
    // Exibir o primeiro vídeo ao carregar a página
    showVideo(currentIndex);
  
    prevBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        showVideo(currentIndex);
      }
    });
  
    nextBtn.addEventListener('click', function () {
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        showVideo(currentIndex);
      }
    });
  
    // Ocultar botões de navegação ao atingir o início ou fim do carrossel
    function toggleButtonsVisibility() {
      prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
      nextBtn.style.visibility = currentIndex === carouselItems.length - 1 ? 'hidden' : 'visible';
    }
  
    // Atualizar visibilidade dos botões ao carregar a página
    toggleButtonsVisibility();
  
    // Atualizar visibilidade dos botões ao mudar de vídeo
    prevBtn.addEventListener('click', toggleButtonsVisibility);
    nextBtn.addEventListener('click', toggleButtonsVisibility);
  });
  