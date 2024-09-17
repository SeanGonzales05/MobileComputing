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

    // Save data inserted in text boxes
    const saveFormData = () => {
        const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
        const formData = {};
        inputs.forEach(input => {
            formData[input.id] = input.value;
        });
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    // Add event listener to save data when inputs change
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', saveFormData);
    });

    // Load saved data on page load
    const loadFormData = () => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            Object.keys(formData).forEach(key => {
                const input = document.getElementById(key);
                if (input) {
                    input.value = formData[key];
                }
            });
        }
    };

    loadFormData();
});
