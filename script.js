let current = 0;

const menuItems = document.querySelectorAll('.menu-item');

function goToSlide(index) {
    const total = document.querySelectorAll('.carousel-slide').length;
    current = (index + total) % total;
    document.getElementById('slides').style.transform = `translateX(-${current * 100}%)`;
    updateActiveMenu();
}

function changeSlide(dir) {
    const total = document.querySelectorAll('.carousel-slide').length;
    goToSlide(current + dir);
}

function updateActiveMenu() {
    menuItems.forEach((item, i) => {
        item.classList.toggle('active', i === current);
    });
}

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const index = parseInt(item.dataset.slide);
        goToSlide(index);
    });
});

const fotos = document.querySelectorAll('.card-foto');
let fotoAtual = 0;

setInterval(() => {
    fotos[fotoAtual].classList.remove('active');
    fotoAtual = (fotoAtual + 1) % fotos.length;
    fotos[fotoAtual].classList.add('active');
}, 3000);

const fotos2 = document.querySelectorAll('.card-foto-2');
let fotoAtual2 = 0;

setInterval(() => {
    fotos2[fotoAtual2].classList.remove('active');
    fotoAtual2 = (fotoAtual2 + 1) % fotos2.length;
    fotos2[fotoAtual2].classList.add('active');
}, 2500); // tempo diferente do outro para não trocarem juntos