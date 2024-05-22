document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Pop-out effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.05)';
        });
        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
        });
    });

    // Implement lazy loading for images
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyElement = entry.target;
                if (lazyElement.dataset.src) {
                    lazyElement.src = lazyElement.dataset.src;
                }
                lazyElement.classList.add('lazy-loaded');
                observer.unobserve(lazyElement);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.01
    });

    const lazyElements = document.querySelectorAll('.lazy');
    lazyElements.forEach(element => {
        observer.observe(element);
    });

    // Keyboard navigation enhancements
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                el.click();
            }
        });
    });
});
