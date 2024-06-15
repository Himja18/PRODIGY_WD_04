// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
  
      // Toggle the navigation menu on mobile when a link is clicked
      if (window.innerWidth <= 750) {
        document.getElementById('check').checked = false;
      }
  
      // Check if the target is the contact section and show contact info
      if (this.getAttribute('href') === '#contact') {
        toggleContactInfo(true); // true indicates force show contact info
      }
    });
  });
  
  // Handle showing and hiding contact info section
  document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#contact"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const contactSection = document.getElementById("contact");
    const contactInfo = document.querySelector('.contact-info');
  
    // Function to show contact info
    function showContactInfo() {
      contactInfo.style.display = "flex";
    }
  
    // Initially show contact info
    showContactInfo();
  
    // Add event listener to contact link
    contactLink.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Scroll to contact section smoothly
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
  
      // Show contact info if not already shown
      if (contactInfo.style.display === "none") {
        showContactInfo();
      }
    });
  
    // Add event listener to about link
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Scroll to about section smoothly
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  
    // Check scroll events to keep contact info visible
    window.addEventListener('scroll', function() {
      // Always ensure contact info is visible
      contactInfo.style.display = "flex";
    });
  });
  