
let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-items');
const totalSlider = sliders.length;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

btnPrev.addEventListener('click', function() {
    prevSlide();
});

btnNext.addEventListener('click', function() {
    nextSlide();
});

function updatePosition() {
    sliders.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    sliders[slidePosition].classList.add('active');
}

function prevSlide() {
    slidePosition = (slidePosition === 0) ? totalSlider - 1 : slidePosition - 1;
    updatePosition();
}

function nextSlide() {
    slidePosition = (slidePosition === totalSlider - 1) ? 0 : slidePosition + 1;
    updatePosition();
}

function autoSlide() {
    nextSlide();
}

setInterval(autoSlide, 4000);






document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = items.length;
    const intervalTime = 3000; // 3 seconds
    const itemHeight = document.querySelector('.carousel-item').offsetHeight;

    function updateCarousel() {
        const translateY = -currentIndex * itemHeight;
        carousel.style.transform = `translateY(${translateY}px)`;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Initial update
    updateCarousel();

    // Auto-scroll
    setInterval(nextItem, intervalTime);
});
