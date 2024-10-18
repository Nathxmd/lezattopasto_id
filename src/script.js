document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const hamburgerButton = document.getElementById("hamburger-button");
  const navbarSticky = document.getElementById("navbar-sticky");

  if (!hamburgerButton || !navbarSticky) {
    console.error("Hamburger button or navbar sticky element not found.");
    return;
  }

  hamburgerButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = navbarSticky.contains(event.target);
    const isClickOnHamburger = hamburgerButton.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnHamburger &&
      !navbarSticky.classList.contains("hidden")
    ) {
      toggleMenu();
    }
  });

  function toggleMenu() {
    console.log("Toggling menu");
    navbarSticky.classList.toggle("hidden");
    const isExpanded = !navbarSticky.classList.contains("hidden");
    hamburgerButton.setAttribute("aria-expanded", isExpanded.toString());
  }

  // WhatsApp button functionality
  const sendWhatsAppButton = document.querySelector("#sendWhatsAppButton");
  if (sendWhatsAppButton) {
    sendWhatsAppButton.addEventListener("click", sendWhatsApp);
    console.log("WhatsApp button listener added");
  } else {
    console.error("Send WhatsApp button not found");
  }
});

function sendWhatsApp() {
  console.log("sendWhatsApp function called");
  const phonenumber = "+628973715969";

  const nameElement = document.querySelector(".name");
  const subjectElement = document.querySelector(".subject");
  const messageElement = document.querySelector(".message");

  if (!nameElement || !subjectElement || !messageElement) {
    console.error("One or more form elements not found");
    alert("Sorry, there was an error. Please try again later.");
    return;
  }

  const name = nameElement.value.trim();
  const subject = subjectElement.value.trim();
  const message = messageElement.value.trim();

  if (!name || !subject || !message) {
    console.error("One or more form fields are empty");
    alert("Please fill in all fields before sending.");
    return;
  }

  console.log("Name:", name);
  console.log("Subject:", subject);
  console.log("Message:", message);

  const url =
    `https://wa.me/${phonenumber}?text=` +
    encodeURIComponent(
      `*Name:* ${name}\n` +
        `*Subject:* ${subject}\n` +
        `*Message:* ${message}\n\n` +
        "Thanks for Your Order, please wait for your order"
    );

  console.log("WhatsApp URL:", url);

  window.open(url, "_blank");
}
