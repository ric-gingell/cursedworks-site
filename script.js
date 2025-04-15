document.addEventListener('DOMContentLoaded', () => {
    const redLogo = document.querySelector('.logo-text.red');
    const cyanLogo = document.querySelector('.logo-text.cyan');
    const redText = document.querySelector('.coming-soon-text.red');
    const cyanText = document.querySelector('.coming-soon-text.cyan');
    
    // Random glitch effect
    function randomGlitch() {
        // Random values for transform distances
        const redX = -4 + Math.random() * 2;
        const redY = -2 + Math.random() * 1;
        const cyanX = 4 + Math.random() * 2;
        const cyanY = 2 + Math.random() * 1;
        
        // Apply to logo
        redLogo.style.transform = `translate(${redX}px, ${redY}px)`;
        cyanLogo.style.transform = `translate(${cyanX}px, ${cyanY}px)`;
        
        // Apply to text
        redText.style.transform = `translate(${redX * 0.75}px, ${redY * 0.75}px)`;
        cyanText.style.transform = `translate(${cyanX * 0.75}px, ${cyanY * 0.75}px)`;
        
        // Schedule next glitch
        setTimeout(randomGlitch, 1000 + Math.random() * 3000);
    }
    
    // Start the effect
    randomGlitch();
    
    // Add subtle hover effect to logo
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 5;
        
        redLogo.style.transform = `translate(${-4 - x}px, ${-2 - y}px)`;
        cyanLogo.style.transform = `translate(${4 + x}px, ${2 + y}px)`;
    });
    
    logoContainer.addEventListener('mouseleave', () => {
        // Reset to default positions
        redLogo.style.transform = 'translate(-4px, -2px)';
        cyanLogo.style.transform = 'translate(4px, 2px)';
    });
});