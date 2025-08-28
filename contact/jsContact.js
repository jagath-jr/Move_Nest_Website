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


            

            quoteForm.reset(); // Reset form fields after submission

        });

    }
});

    /*--------------section 2------------------*/

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fade-in animation for elements on scroll.
     * Uses the Intersection Observer API for performance.
     */
    const animatedCards = document.querySelectorAll('.office-card');

    // Check if there are any cards to animate
    if (animatedCards.length > 0) {
        const observerOptions = {
            root: null, // observes intersections relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // Triggers when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the element is intersecting (visible)
                if (entry.isIntersecting) {
                    // Add the 'is-visible' class to trigger the CSS transition
                    entry.target.classList.add('is-visible');
                    // Stop observing the element after it has become visible
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Start observing each card
        animatedCards.forEach(card => {
            observer.observe(card);
        });
    }

});



/*------------------section 3------------------*/



document.addEventListener('DOMContentLoaded', () => {
    // Select all FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent .faq-item element
            const faqItem = button.closest('.faq-item');
            // Find the answer panel within this item
            const answerPanel = button.nextElementSibling;

            // Toggle the 'active' class on the parent item
            // This class is used by CSS to style the active state (e.g., rotate arrow)
            faqItem.classList.toggle('active');

            // Check if the panel is open or closed and toggle its height
            if (answerPanel.style.maxHeight) {
                // If it has a maxHeight, it's open -> close it
                answerPanel.style.maxHeight = null;
            } else {
                // If it's closed, open it by setting maxHeight to its scrollHeight
                // scrollHeight gives the actual height of the content
                answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
            }
        });
    });
});