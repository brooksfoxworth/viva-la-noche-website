/**
 * Main Application Module
 * Initializes and coordinates all application modules
 */
class PierogiApp {
    constructor() {
        this.cartManager = null;
        this.pageManager = null;
        this.navigationManager = null;
    }

    /**
     * Initialize the application
     */
    init() {
        // Initialize managers in correct order
        this.cartManager = new CartManager();
        this.pageManager = new PageManager(this.cartManager);
        this.navigationManager = new NavigationManager(this.pageManager);

        // Load initial page
        this.navigationManager.navigateToPage('home');
        
        // Initialize cart count display
        this.cartManager.updateCartCount();

        console.log('Pierogi App initialized successfully!');
    }

    /**
     * Get cart manager instance
     */
    getCartManager() {
        return this.cartManager;
    }

    /**
     * Get page manager instance
     */
    getPageManager() {
        return this.pageManager;
    }

    /**
     * Get navigation manager instance
     */
    getNavigationManager() {
        return this.navigationManager;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new PierogiApp();
    app.init();
    
    // Make app globally accessible for debugging
    window.PierogiApp = app;
});
