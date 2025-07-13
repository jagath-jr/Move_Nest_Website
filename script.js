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


// first section---------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    
    // Get the form element
    const quoteForm = document.getElementById('get-quote-form');

    // Check if the form exists on the page
    if (quoteForm) {
        
        // Add an event listener for the form submission
        quoteForm.addEventListener('submit', function(event) {
            
            // Prevent the default form submission behavior
            event.preventDefault();

            // --- Basic Form Validation ---
            const name = document.getElementById('name').value.trim();
            const mobile = document.getElementById('mobile').value.trim();
            const movingFrom = document.getElementById('moving-from').value.trim();
            const movingTo = document.getElementById('moving-to').value.trim();

            if (!name || !mobile || !movingFrom || !movingTo) {
                alert('Please fill out all required fields.');
                return; // Stop the function if validation fails
            }

            // --- Form Data Simulation ---
            // Create a FormData object to easily access form data
            const formData = new FormData(quoteForm);
            
            // Log the form data to the console to simulate submission
            console.log("Form Submitted!");
            console.log("--- Form Data ---");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            
            // You can replace the console logs with an actual AJAX/Fetch call
            // to send the data to a server.
            // Example:
            // fetch('/submit-quote', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     alert('Thank you for your quote request!');
            //     quoteForm.reset(); // Optionally reset the form
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     alert('Sorry, there was an error submitting your request.');
            // });

            alert('Thank you for your request! We will get back to you shortly.');
            quoteForm.reset(); // Reset form fields after submission
        });
    }

    // --- Add other interactive features below ---
    
});