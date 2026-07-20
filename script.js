// Ad Loop Manager
class AdLoop {
    constructor() {
        this.loopCount = 0;
        this.loopDuration = 5000; // 5 seconds per loop
        this.init();
    }

    init() {
        this.startInfiniteLoop();
        this.setupEventListeners();
    }

    startInfiniteLoop() {
        setInterval(() => {
            this.loopCount++;
            this.updateLoopCounter();
            this.playLoopAnimation();
        }, this.loopDuration);
    }

    updateLoopCounter() {
        const loopElement = document.getElementById('loop-count');
        if (loopElement) {
            loopElement.textContent = `Loop: ${this.loopCount}`;
        }
    }

    playLoopAnimation() {
        const adContent = document.querySelector('.ad-content');
        
        // Reset animation
        adContent.style.animation = 'none';
        
        // Trigger reflow to restart animation
        void adContent.offsetWidth;
        
        // Apply animation again
        adContent.style.animation = 'slideIn 1s ease-out forwards';
    }

    setupEventListeners() {
        const button = document.querySelector('.cta-button');
        if (button) {
            button.addEventListener('click', () => {
                this.handleCTAClick();
            });
        }
    }

    handleCTAClick() {
        console.log(`CTA clicked on loop ${this.loopCount}`);
        
        // Open a URL (change this to your desired URL)
        window.open('https://example.com', '_blank');
        
        // Optional: Add visual feedback
        const button = document.querySelector('.cta-button');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AdLoop();
});
