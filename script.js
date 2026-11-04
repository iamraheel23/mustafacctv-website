/*
  BUSINESS SETTINGS
  Change these sample details before publishing your website.
  Use an email address and phone number that belong to your business.
*/
const BUSINESS = {
  name: "Northstar CCTV",
  email: "hello@example.com",
  phone: "+44 0000 000000",
  whatsapp: "" // Optional: international number without +, spaces or brackets, e.g. 447700900123
};

// Add business contact details to the page.
document.querySelectorAll("[data-business-email]").forEach(el => {
  el.textContent = BUSINESS.email;
});
document.querySelectorAll("[data-business-phone]").forEach(el => {
  el.textContent = BUSINESS.phone;
});
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "×" : "☰";
});
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

// This starter form opens the visitor's email application.
// It does not save submissions to a database or send them automatically.
document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry for ${BUSINESS.name}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nProperty: ${data.get("property")}\n\nMessage:\n${data.get("message")}`
  );
  document.getElementById("form-status").textContent =
    "Your email app should open with the enquiry prepared. Please send the email to complete the enquiry.";
  window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
});
