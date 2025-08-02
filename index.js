document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Add fixed header scroll effect
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroSection.offsetHeight - 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Animation for features
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    features.forEach(feature => {
        observer.observe(feature);
    });
});
 document.addEventListener('DOMContentLoaded', function() {
            // Animate steps when they come into view
            const steps = document.querySelectorAll('.step');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            // Set initial state for animation
            steps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(20px)';
                step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(step);
            });
        });