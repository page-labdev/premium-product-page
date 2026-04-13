// BEFORE AFTER SLIDER
const range = document.querySelector("input");
const after = document.querySelector(".after");
const handle = document.querySelector(".handle");

range.addEventListener("input", () => {
  const value = range.value;
  after.style.width = value + "%";
  handle.style.left = value + "%";
});

// SCROLL ANIMATIONS
const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));
