// script.js

/**
 * Main initialization function, called when DOM is loaded.
 * Sets up event listeners and form handling for different pages.
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
  
    // Initialize components based on the pages
    initHeroSection();
    initReservationForm();
    initClientInfoForm();
    initContactForm();
    initOptionalModal();
  });
  
  /* -----------------------------------------------
   * 1. HERO SECTION: Example of simple interactivity
   * --------------------------------------------- */
  function initHeroSection() {
    const heroBookButton = document.querySelector(".hero-content .btn-primary");
    if (heroBookButton) {
      heroBookButton.addEventListener("click", () => {
        console.log("User clicked 'Book a Session' from the Hero section.");
        // Example action: redirect or open a modal
        // window.location.href = "reservation.html";
      });
    }
  }
  
  /* --------------------------------------------------
   * 2. RESERVATION FORM: Dynamic cost & basic validation
   * ------------------------------------------------ */
  function initReservationForm() {
    const reservationForm = document.querySelector(".reservation-form");
    if (!reservationForm) return; // Only run on reservation page
  
    const serviceSelect = reservationForm.querySelector("#service-select");
    const dateInput = reservationForm.querySelector("#date");
    const timeInput = reservationForm.querySelector("#time");
    const participantsInput = reservationForm.querySelector("#participants");
  
    // Create a display element for approximate cost
    const costDisplay = document.createElement("p");
    costDisplay.classList.add("cost-display");
    costDisplay.style.fontWeight = "bold";
    reservationForm.appendChild(costDisplay);
  
    // Pricing data for each service
    const servicePrices = {
      raccoon: 20, // $20 per participant
      otter: 25,   // $25 per participant
      // add more animals here if needed
    };
  
    // Update cost display based on user selections
    function updateCost() {
      const serviceValue = serviceSelect.value;
      const participantsValue = parseInt(participantsInput.value, 10) || 1;
  
      if (serviceValue && servicePrices[serviceValue]) {
        const totalCost = servicePrices[serviceValue] * participantsValue;
        costDisplay.textContent = `Approximate Cost: $${totalCost}`;
      } else {
        costDisplay.textContent = "";
      }
    }
  
    // Listen to changes to update cost
    serviceSelect.addEventListener("change", updateCost);
    participantsInput.addEventListener("input", updateCost);
  
    // Basic form validation on submit
    reservationForm.addEventListener("submit", (e) => {
      const errors = [];
  
      if (!serviceSelect.value) {
        errors.push("Please select an animal/service.");
      }
      if (!dateInput.value) {
        errors.push("Please select a valid date.");
      }
      if (!timeInput.value) {
        errors.push("Please select a valid time.");
      }
      // Additional checks if needed...
  
      if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
      }
    });
  }
  
  /* -----------------------------------------------------
   * 3. CLIENT INFO FORM: Validations & optional checks
   * --------------------------------------------------- */
  function initClientInfoForm() {
    const clientInfoForm = document.querySelector(".client-info-form");
    if (!clientInfoForm) return;
  
    clientInfoForm.addEventListener("submit", (e) => {
      const firstName = clientInfoForm.querySelector("#firstName").value.trim();
      const lastName = clientInfoForm.querySelector("#lastName").value.trim();
      const email = clientInfoForm.querySelector("#email").value.trim();
      const phone = clientInfoForm.querySelector("#phone").value.trim();
  
      const errors = [];
  
      if (!firstName || !lastName) {
        errors.push("Please enter your first and last name.");
      }
      if (!validateEmail(email)) {
        errors.push("Please enter a valid email address.");
      }
      if (!validatePhone(phone)) {
        errors.push("Please enter a valid phone number.");
      }
  
      // If there are any errors, prevent submission and show alerts
      if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
      }
    });
  }
  
  /* ---------------------------------------------
   * 4. CONTACT FORM: Basic validations
   * ------------------------------------------- */
  function initContactForm() {
    const contactForm = document.querySelector(".contact-form");
    if (!contactForm) return;
  
    contactForm.addEventListener("submit", (e) => {
      const name = contactForm.querySelector("#name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const subject = contactForm.querySelector("#subject").value.trim();
      const message = contactForm.querySelector("#message").value.trim();
  
      const errors = [];
  
      if (!name) {
        errors.push("Name is required.");
      }
      if (!validateEmail(email)) {
        errors.push("Please enter a valid email address.");
      }
      if (!subject) {
        errors.push("Subject is required.");
      }
      if (!message) {
        errors.push("Message is required.");
      }
  
      if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
      }
    });
  }
  
  /* ------------------------------------------------
   * 5. OPTIONAL: Modal Popup Toggling (if you have a modal)
   * ---------------------------------------------- */
  function initOptionalModal() {
    const modalTrigger = document.querySelector(".open-modal-btn");
    const modalElement = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal-close");
  
    // Only proceed if modal elements exist
    if (!modalTrigger || !modalElement || !modalClose) return;
  
    modalTrigger.addEventListener("click", () => {
      showModal(modalElement);
    });
  
    modalClose.addEventListener("click", () => {
      hideModal(modalElement);
    });
  
    // Close modal if user clicks outside the modal content
   close(modalElement)
}