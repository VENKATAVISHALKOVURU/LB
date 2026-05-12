document.querySelectorAll('.messageCard').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const xPct = (x / rect.width) * 100;
        const yPct = (y / rect.height) * 100;

        card.style.setProperty('--flareX', `${xPct}%`);
        card.style.setProperty('--flareY', `${yPct}%`);
        
        // 3D Tilt Refinement
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / 25;
        const rotateY = (x - centerX) / 25;
        
        // Apply tilt to the gallery-card container for better perspective
        const galleryCard = card.closest('.gallery-card');
        if (galleryCard) {
            galleryCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        const galleryCard = card.closest('.gallery-card');
        if (galleryCard) {
            galleryCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
    });
});
