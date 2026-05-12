document.addEventListener('mousemove', (e) => {
    const shards = document.querySelectorAll('.shard');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    shards.forEach((shard, index) => {
        // Different intensity for each shard for organic feel
        const intensity = (index + 1) * 15; 
        
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (mouseX - centerX) / intensity;
        const moveY = (mouseY - centerY) / intensity;

        // Apply transform while preserving the 45deg rotation from CSS
        // Note: CSS already has animations, so we add an offset via custom property
        // Or we can just set the transform directly if we want to override
        // But better to use CSS variables to avoid clashing with keyframes
        shard.style.setProperty('--mouseX', `${moveX}px`);
        shard.style.setProperty('--mouseY', `${moveY}px`);
    });
});
