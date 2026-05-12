let activeCard = null;
let cardRect = null;
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

document.querySelectorAll('.messageCard').forEach(card => {
    card.addEventListener('mouseenter', () => {
        activeCard = card;
        cardRect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', e => {
        if (!cardRect) return;
        targetX = e.clientX - cardRect.left;
        targetY = e.clientY - cardRect.top;
    });

    card.addEventListener('mouseleave', () => {
        const galleryCard = card.closest('.gallery-card');
        if (galleryCard) {
            galleryCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
        activeCard = null;
    });
});

function updateCardInteraction() {
    if (activeCard && cardRect) {
        // Smooth lerp for interaction
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;

        const xPct = (currentX / cardRect.width) * 100;
        const yPct = (currentY / cardRect.height) * 100;

        activeCard.style.setProperty('--flareX', `${xPct}%`);
        activeCard.style.setProperty('--flareY', `${yPct}%`);
        
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        const rotateX = (centerY - currentY) / 25;
        const rotateY = (currentX - centerX) / 25;
        
        const galleryCard = activeCard.closest('.gallery-card');
        if (galleryCard) {
            galleryCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    }
    requestAnimationFrame(updateCardInteraction);
}

requestAnimationFrame(updateCardInteraction);
