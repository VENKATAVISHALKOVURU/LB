let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;

document.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
});

function updateShards() {
    // Smooth interpolation (lerp)
    mouseX += (targetMouseX - mouseX) * 0.1;
    mouseY += (targetMouseY - mouseY) * 0.1;

    const shards = document.querySelectorAll('.shard');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    shards.forEach((shard, index) => {
        const intensity = (index + 1) * 15; 
        const moveX = (mouseX - centerX) / intensity;
        const moveY = (mouseY - centerY) / intensity;

        shard.style.setProperty('--mouseX', `${moveX}px`);
        shard.style.setProperty('--mouseY', `${moveY}px`);
    });

    requestAnimationFrame(updateShards);
}

// Start the loop
requestAnimationFrame(updateShards);
