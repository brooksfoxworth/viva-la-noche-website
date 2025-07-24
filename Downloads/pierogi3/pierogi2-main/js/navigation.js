/**
 * Navigation Management Module
 * Handles page navigation, footer link states, and menu sub-navigation
 */
class NavigationManager {
    constructor(pageManager) {
        this.pageManager = pageManager;
        this.footerLinks = document.querySelectorAll('footer a[data-page-link]');
        this.currentPage = 'home';
        this.initializeEventListeners();
    }

    /**
     * Initialize navigation event listeners
     */
    initializeEventListeners() {
        this.footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.pageLink;
                this.navigateToPage(page);
            });
        });
    }

    /**
     * Navigate to a specific page
     */
    navigateToPage(page) {
        this.currentPage = page;
        this.pageManager.loadPage(page);
        this.updateFooterActiveStates(page);
        
        // Handle page-specific navigation setup
        if (page === 'menu') {
            this.setupMenuNavigation();
        }
    }

    /**
     * Update footer link active states
     */
    updateFooterActiveStates(activePage) {
        this.footerLinks.forEach(link => {
            const linkPage = link.dataset.pageLink;
            const isActive = linkPage === activePage;
            
            this.resetLinkStyles(link, linkPage);
            
            if (isActive) {
                this.setActiveLinkStyles(link, linkPage);
            }
        });
    }

    /**
     * Reset link styles to default state
     */
    resetLinkStyles(link, linkPage) {
        link.classList.remove('text-[var(--primary-color)]', 'font-semibold');
        link.classList.add('text-[var(--text-medium)]');
        
        const divInLinkH7 = link.querySelector('div.flex.h-7.items-center.justify-center');
        const divInLinkH8W8 = link.querySelector('div.flex.h-8.w-8.items-center.justify-center');

        if (linkPage === 'order') {
            if (divInLinkH7) {
                divInLinkH7.classList.remove('bg-[var(--text-light)]', 'rounded-lg', 'py-1');
            }
        } else if (linkPage === 'contact') {
            const activeBg = link.querySelector('.absolute.-inset-2');
            if (activeBg) activeBg.remove();
            if (divInLinkH8W8) {
                divInLinkH8W8.classList.remove('text-[var(--primary-color)]');
            }
        }
    }

    /**
     * Set active link styles
     */
    setActiveLinkStyles(link, linkPage) {
        const pTag = link.querySelector('p');
        if (pTag) {
            pTag.classList.add('text-[var(--primary-color)]', 'font-semibold');
            pTag.classList.remove('text-[var(--text-medium)]', 'font-medium');
        }

        const divInLinkH7 = link.querySelector('div.flex.h-7.items-center.justify-center');
        const divInLinkH8W8 = link.querySelector('div.flex.h-8.w-8.items-center.justify-center');

        if (linkPage === 'order') {
            if (divInLinkH7) {
                divInLinkH7.classList.add('bg-[var(--text-light)]', 'rounded-lg', 'py-1');
            }
        } else if (linkPage === 'contact') {
            if (divInLinkH8W8) {
                divInLinkH8W8.classList.add('text-[var(--primary-color)]');
                const activeBg = document.createElement('div');
                activeBg.className = 'absolute -inset-2 bg-[var(--text-light)] rounded-lg';
                divInLinkH8W8.style.position = 'relative';
                divInLinkH8W8.insertBefore(activeBg, divInLinkH8W8.firstChild);
            }
        }
    }

    /**
     * Setup menu page sub-navigation
     */
    setupMenuNavigation() {
        // Wait for menu content to be loaded
        setTimeout(() => {
            const menuSubNavLinks = document.querySelectorAll('nav a[href^="#"]');
            
            // Set 'Entrees' as active by default
            menuSubNavLinks.forEach(link => {
                if (link.textContent.trim() === 'Entrees') {
                    this.setActiveMenuLink(link);
                } else {
                    this.setInactiveMenuLink(link);
                }

                // Add click handler for smooth scrolling and active state
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleMenuLinkClick(link, menuSubNavLinks);
                });
            });
        }, 100);
    }

    /**
     * Handle menu sub-navigation link clicks
     */
    handleMenuLinkClick(clickedLink, allLinks) {
        const targetId = clickedLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            // Update active states
            allLinks.forEach(link => this.setInactiveMenuLink(link));
            this.setActiveMenuLink(clickedLink);
        }
    }

    /**
     * Set menu link as active
     */
    setActiveMenuLink(link) {
        link.classList.add('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
        link.classList.remove('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
    }

    /**
     * Set menu link as inactive
     */
    setInactiveMenuLink(link) {
        link.classList.remove('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
        link.classList.add('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
    }

    /**
     * Get current page
     */
    getCurrentPage() {
        return this.currentPage;
    }
}
