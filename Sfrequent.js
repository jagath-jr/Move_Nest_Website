
/*-----------header animation----*/

document.addEventListener('DOMContentLoaded', function() {

   

    // --- 1. Mobile Menu Toggle ---

    const menuToggle = document.getElementById('menu-toggle');

    const navLinks = document.getElementById('nav-links');


    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', function() {

            navLinks.classList.toggle('active');

        });

    }


    // --- 2. Hide Header on Scroll ---

    const header = document.getElementById('page-header');

    let lastScrollY = window.scrollY;


    window.addEventListener('scroll', () => {

        // --- NEW: Automatically close open menu on scroll ---

        if (navLinks.classList.contains('active')) {

            navLinks.classList.remove('active');

        }

        // --- End of new code ---


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