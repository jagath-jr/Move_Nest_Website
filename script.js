
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


    // --- Add other interactive features below ---

   

});


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


// 3 section -----------------------------------


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


// 4 section -----------------------------------

document.addEventListener("DOMContentLoaded", () => {
    /**
     * Animated Counter for Desktop
     * This function animates numbers from 0 to a target value when they become visible.
     */
    const counters = document.querySelectorAll('.stat-number-gh56');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const targetValue = parseInt(counter.getAttribute('data-target'), 10);
                    let currentValue = 0;
                    const increment = targetValue / 100;

                    const updateCounter = () => {
                        currentValue += increment;
                        if (currentValue < targetValue) {
                            counter.innerText = Math.ceil(currentValue);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = targetValue;
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, {
            threshold: 0.5
        });
        counters.forEach(counter => observer.observe(counter));
    }
});


// 5 section -----------------------------------


document.addEventListener("DOMContentLoaded", function() {

    // Select all the elements we want to animate
    const introText = document.querySelector('.testimonial-intro-text');
    const mainHeading = document.querySelector('.testimonial-main-heading');
    const subtitle = document.querySelector('.testimonial-subtitle');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Run callback when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When an element enters the viewport
            if (entry.isIntersecting) {
                const target = entry.target;

                // --- Animate the Header Text ---
                if (target.classList.contains('testimonial-intro-text')) {
                    target.style.animation = 'slideInTop 0.8s ease-out forwards';
                } else if (target.classList.contains('testimonial-main-heading')) {
                    target.style.animation = 'fadeInScale 0.9s ease-out forwards 0.2s';
                } else if (target.classList.contains('testimonial-subtitle')) {
                    target.style.animation = 'fadeInBottom 0.7s ease-out forwards 0.4s';
                }
                
                // --- Animate the Testimonial Cards ("down box") ---
                // This was the part that needed fixing.
                else if (target.classList.contains('testimonial-card')) {
                    const cardsArray = Array.from(testimonialCards);
                    const index = cardsArray.indexOf(target);
                    
                    // Delay card animation to start after the header text is done.
                    // Each card is staggered for a nice effect.
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'translateY(0)';
                    }, 500 + (index * 150)); // Start after 500ms
                }

                // Stop observing the element once its animation is triggered
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // Start observing all the target elements
    if (introText) observer.observe(introText);
    if (mainHeading) observer.observe(mainHeading);
    if (subtitle) observer.observe(subtitle);
    testimonialCards.forEach(card => observer.observe(card));
});


// 6 section -----------------------------------


 document.addEventListener('DOMContentLoaded', function() {
            const contactCards = document.querySelectorAll('.contact-info-card');
            
            // Initially set all cards to visible for demo purposes
            // In a real implementation, you would use Intersection Observer to detect when they enter the viewport
            contactCards.forEach(card => {
                card.classList.add('is-visible');
            });
            
            // For a real implementation, you would use something like this:
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });
            
            contactCards.forEach(card => {
                observer.observe(card);
            });
        
        });