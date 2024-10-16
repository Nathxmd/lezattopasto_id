document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const hamburgerButton = document.getElementById("hamburger-button");
  console.log("Hamburger button:", hamburgerButton);
  if (!hamburgerButton) {
    console.error(
      "Hamburger button not found. Make sure the ID 'hamburger-button' exists in your HTML."
    );
  }

  const navbarSticky = document.getElementById("navbar-sticky");
  console.log("Navbar sticky:", navbarSticky);
  if (!navbarSticky) {
    console.error(
      "Navbar sticky element not found. Make sure the ID 'navbar-sticky' exists in your HTML."
    );
  }

  if (hamburgerButton && navbarSticky) {
    hamburgerButton.addEventListener("click", function () {
      console.log("Hamburger button clicked");
      navbarSticky.classList.toggle("hidden");

      // Update aria-expanded attribute
      const isExpanded = navbarSticky.classList.contains("hidden")
        ? "false"
        : "true";
      hamburgerButton.setAttribute("aria-expanded", isExpanded);
    });
  } else {
    console.error(
      "Hamburger button or navbar sticky element not found. Check the console for more details."
    );
  }
});

// WhatsApp button functionality
const sendWhatsAppButton = document.querySelector("#sendWhatsAppButton");
if (sendWhatsAppButton) {
  sendWhatsAppButton.addEventListener("click", sendWhatsApp);
  console.log("WhatsApp button listener added");
} else {
  console.error("Send WhatsApp button not found");
}

function sendWhatsApp() {
  console.log("sendWhatsApp function called");
  const phonenumber = "+6281818494295";

  const emailElement = document.querySelector(".email");
  const subjectElement = document.querySelector(".subject");
  const messageElement = document.querySelector(".message");

  if (!emailElement || !subjectElement || !messageElement) {
    console.error("One or more form elements not found");
    alert("Sorry, there was an error. Please try again later.");
    return;
  }

  const email = emailElement.value.trim();
  const subject = subjectElement.value.trim();
  const message = messageElement.value.trim();

  if (!email || !subject || !message) {
    console.error("One or more form fields are empty");
    alert("Please fill in all fields before sending.");
    return;
  }

  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  const url =
    `https://wa.me/${phonenumber}?text=` +
    encodeURIComponent(
      `*Email:* ${email}\n` +
        `*Subject:* ${subject}\n` +
        `*Message:* ${message}\n\n` +
        "Thanks for Your Order, please wait for your order"
    );

  console.log("WhatsApp URL:", url);

  const whatsappWindow = window.open(url, "_blank");
  //   if (whatsappWindow) {
  //     whatsappWindow.focus();
  //   } else {
  //     alert("Please allow popups for this website to use the WhatsApp feature.");
  //   }
}
