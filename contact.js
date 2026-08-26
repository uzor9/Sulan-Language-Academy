// Contact form validation

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent =
      "Thank you! Your message has been sent successfully.";
    formMessage.style.color = "green";

    form.reset();
  }
});