document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Enhanced Hide/Show Header on Scroll
    const header = document.getElementById('page-header');
    let lastScrollY = window.scrollY;
    const scrollThreshold = 50;
    let ticking = false;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleHeaderVisibility(currentScrollY, lastScrollY);
                lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
                ticking = false;
            });
            ticking = true;
        }

        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    function handleHeaderVisibility(currentScrollY, lastScrollY) {
        if (currentScrollY > scrollThreshold) {
            if (currentScrollY > lastScrollY) {
                // Scrolling DOWN - hide header
                header.classList.add('hidden');
            } else {
                // Scrolling UP - show header
                header.classList.remove('hidden');
            }
        } else {
            // Near top of page - show header
            header.classList.remove('hidden');
        }
        
        // Update shadow based on scroll position
        if (currentScrollY > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
});

/*-----------------footer animation------------*/



document.addEventListener('DOMContentLoaded', () => {

    // Find the banner and its animated wrapper
    const marqueeBanner = document.querySelector('.unik-marquee-banner');
    const marqueeWrapper = document.querySelector('.unik-marquee-wrapper');

    // Check if the elements exist on the page
    if (marqueeBanner && marqueeWrapper) {

        // The line that set the initial state to paused has been removed.
        // The animation will now run automatically on page load.

        // Add a click event listener to the banner
        marqueeBanner.addEventListener('click', () => {
            // Check the current animation state
            const isPaused = marqueeWrapper.style.animationPlayState === 'paused';

            // Toggle between 'running' and 'paused'
            if (isPaused) {
                marqueeWrapper.style.animationPlayState = 'running';
            } else {
                marqueeWrapper.style.animationPlayState = 'paused';
            }
        });
    }

    console.log("Auto-start marquee with click-to-toggle loaded.");
});