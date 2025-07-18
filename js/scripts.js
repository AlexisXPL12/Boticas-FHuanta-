// Puedes agregar aquí cualquier lógica adicional de JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de animación para los service-box
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        box.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

