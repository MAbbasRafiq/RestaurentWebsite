// JavaScript to handle slideshow functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically transition slides every 5 seconds (adjust as needed)
setInterval(nextSlide, 5000); // 5000 milliseconds = 5 seconds
