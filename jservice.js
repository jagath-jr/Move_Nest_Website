
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








/*-----------------section2 animation*---------------*/

document.addEventListener("DOMContentLoaded", function() {

    // --- Intersection Observer for Fade/Slide Animations ---
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });


    // --- Number Counter Animation ---
    const counterElement = document.getElementById('experience-counter');
    const badgeElement = document.getElementById('experience-badge');

    const animateCounter = (element, endValue, duration) => {
        let startTime = null;
        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentValue = Math.floor(progress * endValue);
            element.innerText = currentValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(counterElement, 29, 1500); // Counts to 29 over 1.5 seconds
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Start when 50% of the badge is visible
    });
    
    if (badgeElement) {
        counterObserver.observe(badgeElement);
    }

});