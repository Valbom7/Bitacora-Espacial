document.addEventListener('DOMContentLoaded', function() {
    const animatedContainers = document.querySelectorAll('.animated-container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Cambia este valor para ajustar cuándo se activa la animación
    });

    animatedContainers.forEach(container => {
        observer.observe(container);
    });

    // Ejemplo de funcionalidad adicional (puedes expandir esto)
    const exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            alert('¡Explorando la bitácora!');
            // Aquí podrías agregar una acción de scroll suave o redirigir a otra sección
        });
    }
});

const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);

