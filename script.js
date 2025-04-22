document.addEventListener('DOMContentLoaded', () => {

    const isElementInViewport = (el, threshold = 0.1) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) * (1 - threshold)
        );
    }

    const handleScrollAnimation = () => {
        const sections = document.querySelectorAll('.fade-in-section .section-content-box');

        sections.forEach(box => {
            if (!box.classList.contains('is-visible') && isElementInViewport(box)) {
                box.classList.add('is-visible');
            }
        });
    }

    handleScrollAnimation();

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);


});
