// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".fade-in-up");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    elements.forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
