const imagenes = document.querySelectorAll('.galeria img');
const overlay = document.querySelector('.overlay-gallery');
const imgGrande = document.querySelector('.imagen-grande');
const nombreImg = document.querySelector('.nombre-imagen');
const btnCerrar = document.querySelector('.cerrar');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let indexActual = 0;

function mostrarImagen(index) {
    const img = imagenes[index];
    imgGrande.style.opacity = 0;

    setTimeout(() => {
        imgGrande.src = img.src;
        nombreImg.textContent = img.dataset.nombre || '';
        imgGrande.style.opacity = 1;
    }, 200);

    overlay.classList.add('activo');
    indexActual = index;
}

imagenes.forEach((img, i) => {
    img.addEventListener('click', () => mostrarImagen(i));
});

btnCerrar.addEventListener('click', () => overlay.classList.remove('activo'));

btnNext.addEventListener('click', () => {
    indexActual = (indexActual + 1) % imagenes.length;
    mostrarImagen(indexActual);
});

btnPrev.addEventListener('click', () => {
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indexActual);
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('activo');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('activo');
});
