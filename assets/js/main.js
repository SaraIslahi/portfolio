/* ================================
   Portfolio Main JS
   Author: Sara Islahi
================================ */

// Run when page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  enableSmoothScroll();
  setupScrollAnimations();
});

/* -------------------------------
   Smooth scrolling for navigation
-------------------------------- */
function enableSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* -------------------------------
   Fade-in animation on scroll
-------------------------------- */
function setupScrollAnimations() {
  const elements = document.querySelectorAll(".card, .item, .project");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}
/* ================================
   Portfolio Main JS
   Author: Sara Islahi
================================ */

// Run when page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  enableSmoothScroll();
  setupScrollAnimations();
});

/* -------------------------------
   Smooth scrolling for navigation
-------------------------------- */
function enableSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* -------------------------------
   Fade-in animation on scroll
-------------------------------- */
function setupScrollAnimations() {
  const elements = document.querySelectorAll(".card, .item, .project");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}
