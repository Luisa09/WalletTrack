// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('signup-form').addEventListener('submit', function(e) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!emailPattern.test(emailValue)) {
        e.preventDefault(); // Prevent form submission
        emailError.textContent = 'Por favor, introduce un correo válido.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
        alert('¡Registro exitoso! Revisa tu correo para más información.');
    }
});
// Slider de imágenes
let currentSlide = 0; // Índice de la primera imagen
const slides = document.querySelectorAll('.slide'); // Seleccionamos todas las imágenes del slider
const totalSlides = slides.length; // Total de imágenes en el slider

// Función para mostrar la imagen correspondiente
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active')); // Elimina la clase 'active' de todas las imágenes
    slides[index].classList.add('active'); // Añade la clase 'active' a la imagen actual
}

// Mostrar la primera imagen
showSlide(currentSlide);

// Cambiar automáticamente las imágenes cada 3 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Incrementa el índice y reinicia cuando llega al final
    showSlide(currentSlide); // Muestra la siguiente imagen
}, 3000); // Cambia cada 3 segundos


/*Registro*/
document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir comportamiento de enlace
    var registerForm = document.getElementById('register-form');
    
    // Alternar visibilidad
    if (registerForm.classList.contains('hidden')) {
        registerForm.classList.remove('hidden');
    } else {
        registerForm.classList.add('hidden');
    }
});

