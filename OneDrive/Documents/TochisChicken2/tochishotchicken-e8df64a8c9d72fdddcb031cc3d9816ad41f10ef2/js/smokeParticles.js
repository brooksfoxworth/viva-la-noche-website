/**
 * Smoke Particle Effect
 * Creates a smoky particle effect behind an element
 */
class SmokeParticles {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.options = {
            particleCount: 50, // Even more particles
            colors: [
                'rgba(255, 100, 0, 0.8)',   // Dark orange
                'rgba(255, 140, 0, 0.7)',   // Orange
                'rgba(255, 180, 0, 0.6)',   // Light orange
                'rgba(255, 220, 0, 0.5)',   // Yellow-orange
                'rgba(255, 255, 255, 0.6)'  // White for contrast
            ],
            minSize: 80,    // Larger minimum size
            maxSize: 200,   // Larger maximum size
            minSpeed: 0.6,  // Faster
            maxSpeed: 1.5,  // Increased max speed
            ...options
        };
        
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        // Create canvas with higher z-index and visible border for debugging
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Make container a positioning context
        this.container.style.position = 'relative';
        
        // Style canvas to fill container
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1'; // Ensure it's above the container but below the image
        
        // Add a red border for debugging (temporary)
        this.canvas.style.border = '1px solid red';
        
        // Add canvas to container
        this.container.prepend(this.canvas);
        
        // Debug output
        console.log('Canvas dimensions:', this.canvas.width, 'x', this.canvas.height);
        console.log('Container dimensions:', this.container.offsetWidth, 'x', this.container.offsetHeight);
        
        // Create particles
        this.createParticles();
        
        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
        
        // Start animation
        this.animate();
    }
    
    createParticles() {
        const { particleCount, colors, minSize, maxSize, minSpeed, maxSpeed } = this.options;
        const rect = this.container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * (maxSize - minSize) + minSize;
            const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            const opacity = Math.random() * 0.3 + 0.1;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            this.particles.push({
                x: centerX + (Math.random() - 0.5) * 100,
                y: centerY + (Math.random() - 0.5) * 100,
                size: size,
                speed: speed,
                angle: Math.random() * Math.PI * 2,
                color: color,
                opacity: opacity,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02
            });
        }
    }
    
    handleResize() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    updateParticles() {
        const rect = this.container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        this.particles.forEach(particle => {
            // Move particle
            particle.x += Math.cos(particle.angle) * particle.speed;
            particle.y += Math.sin(particle.angle) * particle.speed;
            particle.rotation += particle.rotationSpeed;
            
            // Add some randomness to movement
            particle.angle += (Math.random() - 0.5) * 0.2;
            
            // Reset particles that go too far
            const distanceFromCenter = Math.hypot(
                particle.x - centerX,
                particle.y - centerY
            );
            
            if (distanceFromCenter > Math.max(rect.width, rect.height) * 0.7) {
                particle.x = centerX + (Math.random() - 0.5) * 50;
                particle.y = centerY + (Math.random() - 0.5) * 50;
                particle.angle = Math.random() * Math.PI * 2;
            }
        });
    }
    
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate(particle.rotation);
            
            // Draw particle
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.ellipse(
                0, 0,
                particle.size * 0.8, particle.size * 0.5,
                0, 0, Math.PI * 2
            );
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }
    
    animate() {
        this.updateParticles();
        this.drawParticles();
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Initialize when window loads to ensure all elements are ready
window.addEventListener('load', function() {
    // Small delay to ensure everything is rendered
    setTimeout(() => {
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer) {
            // Remove any existing instance
            if (window.smokeEffect) {
                window.smokeEffect.destroy();
            }
            // Create new instance
            window.smokeEffect = new SmokeParticles('hero-container');
            console.log('Smoke effect initialized');
        } else {
            console.warn('Hero container not found for smoke effect');
        }
    }, 100);
});
