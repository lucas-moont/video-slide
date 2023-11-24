document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.customVideoCarousel');
  const carouselItems = carousel.querySelector('.customVideoCarouselInner');
  const prevBtn = carousel.querySelector('.customPrevSlide');
  const nextBtn = carousel.querySelector('.customNextSlide');
  let currentIndex = 0;

  function updateButtonsVisibility() {
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === carouselItems.children.length - 1 ? 'none' : 'block';
  }

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      const translateValue = currentIndex * carouselItems.children[0].clientWidth;
      carouselItems.style.transform = `translateX(-${translateValue}px)`;
      updateButtonsVisibility();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < carouselItems.children.length - 1) {
      currentIndex++;
      const translateValue = currentIndex * carouselItems.children[0].clientWidth;
      carouselItems.style.transform = `translateX(-${translateValue}px)`;
      updateButtonsVisibility();
    }
  });

  updateButtonsVisibility();
});
