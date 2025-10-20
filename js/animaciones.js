// Detectar elementos animables
const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-up, .fade, .bounce, .fade-left, .fade-right,.slide-down"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Opcional: solo animar una vez
            }
        });
    },
    {
        threshold: 0.2 // 20% visible para activar
    }
);

animatedElements.forEach(el => observer.observe(el));
