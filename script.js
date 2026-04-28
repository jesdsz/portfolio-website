const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Thank you! Your message has been received.";
  contactForm.reset();
});
