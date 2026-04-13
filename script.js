
// =====================
// BEFORE / AFTER SLIDER
// =====================
const range = document.querySelector("input[type='range']");
const after = document.querySelector(".after");
const handle = document.querySelector(".handle");

if (range && after && handle) {
  range.addEventListener("input", () => {
    const value = range.value;
    after.style.width = value + "%";
    handle.style.left = value + "%";
  });
}

// =====================
// SCROLL ANIMATIONS
// =====================
const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


// =====================
// REMOVE FETCH (IMPORTANT)
// =====================
// ❌ Deleted product-description.html & reviews.html loading
// because everything is inside index.html now
