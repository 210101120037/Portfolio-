const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle the 'open' class when the hamburger is clicked
hamburger.addEventListener('click', (event) => {
  navbar.classList.toggle('open');
  event.stopPropagation(); // Prevent the click from bubbling up to the document
});

// Close the navbar when clicking anywhere outside of it
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove('open');
  }
});

// Close the navbar when clicking on a nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});

// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("6t_5y2BOqZ9iElPxX"); // Replace with your EmailJS Public Key
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Send form data via EmailJS
  emailjs.send("service_06tq4or", "template_168l63f", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  })
  .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset(); // Reset form after submission
  }, function(error) {
      alert("Error sending message. Please try again.");
  });
});


