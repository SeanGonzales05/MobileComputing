document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const container = carousel.querySelector('.carousel-container');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance every 5 seconds
    setInterval(nextSlide, 5000);
});
