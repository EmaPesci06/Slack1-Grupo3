document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].style.display = "none";
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Inicializa el primer slide
    showSlide(currentSlide);

    // Configura el intervalo para cambiar de slide automáticamente cada 10 segundos
    setInterval(nextSlide, 10000); // 10000 milisegundos (10 segundos)
});