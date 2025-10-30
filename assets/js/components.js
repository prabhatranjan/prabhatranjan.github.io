// Function to load HTML components using XMLHttpRequest for better file:/// support
function loadComponent(componentName, targetSelector) {
    return new Promise((resolve) => {
        const target = document.querySelector(targetSelector);
        if (!target) {
            console.error(`Target element not found: ${targetSelector}`);
            resolve(false);
            return;
        }

        // Try direct path first (for GitHub Pages)
        const paths = [
            `./includes/${componentName}.html`,  // Relative path for direct file access
            `/${componentName}.html`,            // Root path
            `./${componentName}.html`            // Current directory
        ];

        function tryLoad(index) {
            if (index >= paths.length) {
                console.error(`Failed to load component: ${componentName}`);
                resolve(false);
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open('GET', paths[index], true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        target.outerHTML = xhr.responseText;
                        resolve(true);
                    } else {
                        // Try next path
                        tryLoad(index + 1);
                    }
                }
            };
            xhr.onerror = function() {
                // Try next path on error
                tryLoad(index + 1);
            };
            xhr.send();
        }

        // Start trying to load from the first path
        tryLoad(0);
    });
}

// Function to set active link based on current page
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if ((currentPage === 'index.html' && linkPage === 'home') || 
            currentPage.includes(linkPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to initialize components
function initComponents() {
    // Create header and footer containers if they don't exist
    if (!document.querySelector('header')) {
        document.body.insertAdjacentHTML('afterbegin', '<header></header>');
    }
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', '<footer></footer>');
    }

    // Load components
    Promise.all([
        loadComponent('header', 'header'),
        loadComponent('footer', 'footer')
    ]).then(() => {
        // Set active link after components are loaded
        setActiveLink();

        // Initialize mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
    }).catch(error => {
        console.error('Error initializing components:', error);
    });
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    // DOMContentLoaded has already fired
    initComponents();
}
