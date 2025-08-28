// main.js

// Initialize EmailJS with your Public Key
emailjs.init({
  publicKey: "JZQAeXLDE1FIXxjBl",
});

// Get the form and button elements from the DOM
const quoteForm = document.getElementById('get-quote-form');
const submitBtn = document.getElementById('submit-quote-btn');

// Add a submit event listener to the form
quoteForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Change button text to provide user feedback
  submitBtn.textContent = 'Sending...';

  // Your EmailJS Service ID and Template ID
  const serviceID = 'service_vrp8gd1';
  const templateID = 'template_tszt5rf';

  // Send the form data using EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // On success
      submitBtn.textContent = 'Sent Successfully!';
      alert('Your quote request has been sent!');
      quoteForm.reset(); // Reset the form fields
      setTimeout(() => {
        submitBtn.textContent = 'Submit and Get a Quote →'; // Reset button text after a delay
      }, 3000);
    }, (err) => {
      // On error
      submitBtn.textContent = 'Submit and Get a Quote →';
      alert('Failed to send the request. Please try again. Error: ' + JSON.stringify(err));
    });
});