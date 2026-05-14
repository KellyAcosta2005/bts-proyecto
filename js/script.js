const btnEnviar = document.getElementById('btnEnviar');
const inputNombre = document.getElementById('userName');

const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');
const carouselWindow = document.querySelector('.carousel-window');

const menu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-list');

let index = 0;
const totalSlides = dots.length;
let touchStartX = 0;
let touchEndX = 0;

function mostrarBienvenida() {
    const nombre = inputNombre.value.trim();

    if (nombre !== '') {
        alert(`¡Bienvenid@ Estimad@, ${nombre}!\n\nBTS TE ESTÁ ESPERANDO!!!`);
        inputNombre.value = '';
        return;
    }

    alert('Por favor, ingresa tu nombre.');
}

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));

    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(position) {
    index = position;
    updateCarousel();
}

function handleGesture() {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
        nextSlide();
    } else if (swipeDistance < -50) {
        prevSlide();
    }
}

function toggleMenu() {
    navLinks.classList.toggle('active');
    menu.classList.toggle('is-active');
}

function closeMenu() {
    navLinks.classList.remove('active');
    menu.classList.remove('is-active');
}

btnEnviar.addEventListener('click', mostrarBienvenida);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
});

carouselWindow.addEventListener(
    'touchstart',
    e => {
        touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
);

carouselWindow.addEventListener(
    'touchend',
    e => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    },
    { passive: true }
);

menu.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});