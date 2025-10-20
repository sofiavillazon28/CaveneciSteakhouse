// Toggle header

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Modal

const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-modal');
        document.getElementById(target).style.display = 'flex';
    });
});

closeButtons.forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// simple slider

document.querySelectorAll('.simple-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let current = 0;

    function changeSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }

    setInterval(changeSlide, 4000); // cambia cada 4 segundos
});
// scroll

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});