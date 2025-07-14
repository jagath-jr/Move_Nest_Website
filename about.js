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



// 2 section -----------------------------------


document.addEventListener('DOMContentLoaded', () => {

    // Select the element containing the number
    const countElement = document.getElementById('data-count-01');
    // Select the card to observe for visibility
    const experienceCard = document.getElementById('experience-card-01');

    /**
     * Function to animate the number counting up.
     * @param {HTMLElement} el The element containing the number.
     * @param {number} duration The animation duration in milliseconds.
     */
    const animateCount = (el, duration = 2000) => {
        const endValue = parseInt(el.textContent, 10);
        // Set the initial text to 0
        el.textContent = '0'; 

        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Calculate the current number value
            const currentValue = Math.floor(progress * endValue);
            el.textContent = currentValue;

            // Continue the animation until it's done
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                el.textContent = endValue; // Ensure it ends on the exact number
            }
        };
        
        // Start the animation
        window.requestAnimationFrame(step);
    };


    /**
     * Intersection Observer to trigger the animation when the element is in view.
     */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the card is visible on screen
            if (entry.isIntersecting) {
                // Start the number animation
                animateCount(countElement);
                // Stop observing the card to prevent re-triggering the animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Start observing the experience card
    if(experienceCard) {
        observer.observe(experienceCard);
    }
});


// 3 section -----------------------------------

// second 2 section -------------------------------------


document.addEventListener("DOMContentLoaded", function() {


    // Select all the flip boxes to be observed

    const animatedElements = document.querySelectorAll('.flip-box');


    // Configuration for the observer

    const observerOptions = {

        root: null,

        rootMargin: '0px',

        threshold: 0.1 // Triggers when 10% of the element is visible

    };


    // Create the Intersection Observer

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, observerOptions);


    // Start observing each flip box

    animatedElements.forEach(card => {

        observer.observe(card);

    });


});


// 4 section -----------------------------------


// In your script.js file, add this block inside the DOMContentLoaded event listener

document.addEventListener("DOMContentLoaded", () => {

    // --- Keep your existing code for serviceCards here ---
    const serviceCards = document.querySelectorAll('.service-card');
    // ... (rest of the serviceCards observer logic) ...


    // Add this new code for the why-us-card 👇
    const whyUsCard = document.querySelector('.why-us-card');

    if (whyUsCard) {
        const whyUsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    whyUsObserver.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1 // Triggers when 10% of the card is visible
        });
        
        whyUsObserver.observe(whyUsCard);
    }
});