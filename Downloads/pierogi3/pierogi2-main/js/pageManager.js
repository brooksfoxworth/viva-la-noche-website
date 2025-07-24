/**
 * Page Management Module
 * Handles page loading, content rendering, and page-specific functionality
 */
class PageManager {
    constructor(cartManager) {
        this.cartManager = cartManager;
        this.mainContent = document.getElementById('main-content');
        this.dynamicHeaderContent = document.getElementById('dynamic-header-content');
    }

    /**
     * Load and render a specific page
     */
    loadPage(page) {
        // Clear previous content
        this.mainContent.innerHTML = '';
        this.dynamicHeaderContent.innerHTML = '';

        // Get page content
        const content = this.getPageContent(page);
        
        // Render content
        this.mainContent.innerHTML = content;

        // Setup page-specific functionality
        this.setupPageFunctionality(page);
    }

    /**
     * Get content for a specific page
     */
    getPageContent(page) {
        if (page === 'menu') {
            return this.renderMenuPage();
        }
        
        return PageContent[page] || PageContent.home;
    }

    /**
     * Render the menu page with dynamic content
     */
    renderMenuPage() {
        const menuSections = ['entrees', 'bakery', 'jars', 'seasoning', 'frozenPierogi', 'candy', 'drinks'];
        
        let menuHTML = `
            <div id="menu-content">
                <div class="text-center mb-6">
                    <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">Our Menu</h1>
                    <p class="text-[var(--text-medium)]">Authentic Polish pierogis and more</p>
                </div>
                
                <nav class="mb-8">
                    <div class="overflow-x-auto">
                        <div class="flex space-x-4 border-b border-[var(--border-color)] min-w-max px-4">
                            <a href="#entrees" class="px-3 py-2 border-b-2 border-b-[var(--primary-color)] text-[var(--text-dark)] font-bold whitespace-nowrap">Entrees</a>
                            <a href="#bakery" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Bakery</a>
                            <a href="#jars" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Jars</a>
                            <a href="#seasoning" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Seasoning</a>
                            <a href="#frozenPierogi" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Frozen Pierogi</a>
                            <a href="#candy" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Candy</a>
                            <a href="#drinks" class="px-3 py-2 border-b-2 border-b-transparent text-[var(--text-medium)] font-medium hover:text-[var(--text-dark)] whitespace-nowrap">Drinks</a>
                        </div>
                    </div>
                </nav>
        `;

        // Add each menu section
        menuSections.forEach(section => {
            const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);
            menuHTML += `
                <div id="${section}" class="mb-12">
                    <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-6">${sectionTitle}</h2>
                    <div class="space-y-4">
                        ${MenuData[section].map(item => this.createMenuItemHTML(item)).join('')}
                    </div>
                </div>
            `;
        });

        menuHTML += '</div>';
        return menuHTML;
    }

    /**
     * Create HTML for a menu item
     */
    createMenuItemHTML(item) {
        return `
            <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span class="text-gray-400">🍽️</span>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-bold text-[var(--text-dark)] mb-1">${item.name}</h3>
                    <p class="text-[var(--text-medium)] text-sm mb-2">${item.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-[var(--primary-color)]">$${item.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                                data-item-id="${item.id}" 
                                data-item-name="${item.name}" 
                                data-item-price="${item.price}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    setupPageFunctionality(page) {
        switch (page) {
            case 'menu':
                this.setupMenuPageFunctionality();
                break;
            case 'order':
                this.setupOrderPageFunctionality();
                break;
            default:
                // No specific setup needed for other pages
                break;
        }
    }

    /**
     * Setup menu page functionality
     */
    setupMenuPageFunctionality() {
        // Attach add-to-cart event listeners
        setTimeout(() => {
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.dataset.itemId;
                    const itemName = e.currentTarget.dataset.itemName;
                    const itemPrice = parseFloat(e.currentTarget.dataset.itemPrice);
                    this.cartManager.addItem(itemId, itemName, itemPrice);
                });
            });
        }, 100);
    }

    /**
     * Setup order page functionality
     */
    setupOrderPageFunctionality() {
        // Render cart items when order page loads
        setTimeout(() => {
            this.cartManager.renderCart();
        }, 100);
    }
}
