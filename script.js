document.addEventListener('DOMContentLoaded', () => {
    // Reveal Hero Content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 300);
    }

    console.log("Ozzy's site loaded successfully. Perfection impending.");
});
