// popper js
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// Select navbar and elements
const navbar = document.querySelector(".navbar");
const toggler = document.querySelector(".navbar-toggler");
const bars = document.querySelector(".navbar-toggler-icon");
const closeBtn = document.createElement("span");
const navCollapse = document.querySelector("#navbarTogglerDemo02");
const navList = document.querySelector(".navbar-nav");

// Create and style the close button
closeBtn.className =
  "bx bx-x position-absolute top-50 start-50 font-3 translate-center text-danger opacity-0";
toggler.append(closeBtn);

// Toggle navbar elements on button click
toggler.onclick = function () {
  const isExpanded = navCollapse.classList.contains("show");
  bars.classList.toggle("opacity-0", isExpanded);
  closeBtn.classList.toggle("opacity-0", !isExpanded);
  navbar.classList.toggle("bg-body-tertiary", !isExpanded);
};

// Set up link click events for navigation
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.onclick = () => {
    document
      .querySelectorAll(".navbar-nav .nav-link")
      .forEach((a) => a.classList.remove("active"));
    link.classList.add("active");
    // Close navbar when a link is clicked
    closeNavbar();
  };
});

// Close the navbar when clicking outside of it
document.addEventListener("click", function (event) {
  if (
    !navbar.contains(event.target) &&
    !toggler.contains(event.target) &&
    navCollapse.classList.contains("show")
  ) {
    closeNavbar();
    navbar.classList.toggle("bg-body-tertiary", window.scrollY > 60);
  }
});

// Function to close the navbar
function closeNavbar() {
  navCollapse.classList.remove("show");
  bars.classList.remove("opacity-0");
  closeBtn.classList.add("opacity-0");
  navbar.classList.remove("bg-body-tertiary");
}

// Update navbar background on scroll
window.onscroll = () => {
  if (navCollapse.classList.contains("show")) {
    navbar.classList.add("bg-body-tertiary");
  } else {
    navbar.classList.toggle("bg-body-tertiary", window.scrollY > 60);
  }
};
// when reload the page
navbar.classList.toggle("bg-body-tertiary", window.scrollY > 60);

// Set copyright year
function copyrightsYear() {
  const copyrightSpan = document.getElementById("copyright-year");
  copyrightSpan.innerHTML = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  copyrightsYear();
});
