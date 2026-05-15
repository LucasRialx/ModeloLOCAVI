document.addEventListener('DOMContentLoaded', function() {
    // Lógica do Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Animações de Scroll (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // A animação dispara quando 15% do elemento estiver na tela
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para animar apenas na primeira vez
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
