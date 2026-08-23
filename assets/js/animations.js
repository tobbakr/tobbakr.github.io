// Scroll-animaties voor .fade-in-up
//
// De secties starten in CSS op opacity 0 en worden zichtbaar zodra ze in beeld
// komen. Drie randgevallen lieten content permanent onzichtbaar:
//
//   1. De bezoeker springt voorbij de sectie (ankerlink, End-toets, hersteld
//      scrollpunt bij terugnavigeren). De observer vuurt dan eenmalig met
//      isIntersecting=false en daarna nooit meer.
//   2. Een sectie hoger dan het scherm haalt de drempel van 10% nooit.
//   3. prefers-reduced-motion werd genegeerd.
document.addEventListener("DOMContentLoaded", function () {
  var pending = Array.prototype.slice.call(document.querySelectorAll(".fade-in-up"));
  if (!pending.length) return;

  function show(el) {
    el.classList.add("visible");
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    pending.forEach(show);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
        drop(entry.target);
      });
    },
    // Drempel 0 in plaats van 0.1, anders vuurt een sectie die hoger is dan het
    // scherm nooit. rootMargin start de animatie net voordat ze in beeld komt.
    { threshold: 0, rootMargin: "0px 0px -10% 0px" }
  );

  function drop(el) {
    var i = pending.indexOf(el);
    if (i !== -1) pending.splice(i, 1);
    if (!pending.length) {
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("load", sweep);
    }
  }

  // Vangnet voor secties waar de bezoeker overheen springt: alles wat volledig
  // boven het scherm ligt en nog niet getoond is, meteen tonen.
  function sweep() {
    pending.slice().forEach(function (el) {
      if (el.getBoundingClientRect().bottom <= 0) {
        show(el);
        observer.unobserve(el);
        drop(el);
      }
    });
  }

  pending.forEach(function (el) {
    observer.observe(el);
  });

  window.addEventListener("scroll", sweep, { passive: true });
  window.addEventListener("load", sweep);
  sweep();
});
