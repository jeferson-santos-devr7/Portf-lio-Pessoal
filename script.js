document.addEventListener('DOMContentLoaded', function() {
    // Inicializar ScrollSpy
    new bootstrap.ScrollSpy(document.body, {
        target: '#nav-portfolio',
        offset: 100
    });

    // Fechar menu mobile ao clicar
    const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menu, {toggle: false});

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });
});