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