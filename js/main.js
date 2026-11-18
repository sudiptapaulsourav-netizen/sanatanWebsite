const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const popup = document.querySelector('.festival-popup');
const popupClose = document.querySelector('.close-popup');

const setTheme = (mode) => {
    body.classList.toggle('theme-dark', mode === 'dark');
    body.classList.toggle('theme-light', mode === 'light');
    themeToggle.setAttribute('aria-pressed', mode === 'dark');
    themeToggle.innerHTML = mode === 'dark'
        ? '<i class="fa-solid fa-sun"></i><span>Light Mode</span>'
        : '<i class="fa-solid fa-moon"></i><span>Dark Mode</span>';
    localStorage.setItem('theme', mode);
};

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('theme-dark');
    setTheme(isDark ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('open');
    }
});

popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
});
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('[data-carousel-prev]');
    const nextBtn = document.querySelector('[data-carousel-next]');
    const carouselTrack = document.querySelector('.carousel-track');
    const totalCards = document.querySelectorAll('.carousel-card').length;
    const cardWidth = 340;  // Adjust this value based on the card width and margin
    let currentIndex = 0;

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;  // Move the carousel track
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 3;  // Jump to the last set of cards (looping)
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalCards - 3) {  // Prevent overshooting
            currentIndex++;
        } else {
            currentIndex = 0;  // Jump to the first set of cards (looping)
        }
        updateCarousel();
    });
});
