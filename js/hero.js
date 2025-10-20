const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;
const total = slides.length;

// Crear los dots según el número de slides
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    current = (current + 1) % total;
    showSlide(current);
});

prevBtn.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    showSlide(current);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        current = index;
        showSlide(current);
    });
});

setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
}, 6000);

