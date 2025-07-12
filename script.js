document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Toggles the 'active' class to show/hide the mobile menu
            navLinks.classList.toggle('active');
        });
    }

    // --- 2. Hide Header on Scroll ---
    const header = document.getElementById('page-header');
    let lastScrollY = window.scrollY; // Variable to store the last scroll position

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 150) {
            // If scrolling DOWN and past the top 150px of the page
            header.classList.add('hidden');
        } else {
            // If scrolling UP
            header.classList.remove('hidden');
        }
        // Update the last scroll position for the next scroll event
        lastScrollY = window.scrollY;
    });
});