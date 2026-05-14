document.getElementById('btnEnviar').addEventListener('click', function() {
    const nombre = document.getElementById('userName').value;

    if (nombre.trim() !== "") {
        alert(`¡Bienvenid@ Estimad@, ${nombre}!\n\nBTS TE ESTÁ ESPERANDO!!!`);
        
        document.getElementById('userName').value = "";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});

const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % 5;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + 5) % 5;
    updateCarousel();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
    });
});